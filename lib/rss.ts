import { XMLParser } from 'fast-xml-parser'

export type RssItem = {
  title: string
  link: string
  guid: string | { '#text': string;[key: string]: string }
  pubDate: string
  description: string
  'content:encoded': string
  'media:thumbnail'?: { '@_url': string }
}

export type PostInsert = {
  guid: string
  slug: string
  title: string
  excerpt: string
  content_html: string
  cover_image_url: string | null
  source_url: string
  published_at: string
  synced_at: string
}

const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
})

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/[\s-]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 80)
}

export function parseRssFeed(xml: string): RssItem[] {
  const result = parser.parse(xml)
  const items = result?.rss?.channel?.item
  if (!items) return []
  return Array.isArray(items) ? items : [items]
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()
}

function fixLazyImages(html: string): string {
  return html.replace(/data-src=/g, 'src=')
}

// Content images render below the post title/date, so they're never the LCP
// element — lazy-loading them defers work the browser would otherwise spend
// on off-screen images.
function lazyLoadImages(html: string): string {
  return html.replace(/<img\s(?![^>]*\bloading=)([^>]*)>/gi, '<img loading="lazy" decoding="async" $1>')
}

// ~155 chars is the practical limit before Google truncates a meta
// description — cut at the last whole word instead of mid-word, and only
// append an ellipsis when the text was actually truncated.
function makeExcerpt(html: string, maxLength = 155): string {
  const text = stripHtml(html)
  if (text.length <= maxLength) return text
  const truncated = text.slice(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  return `${truncated.slice(0, lastSpace > 0 ? lastSpace : maxLength)}…`
}

// The page already renders the post title as the single <h1>. Shift any
// heading levels Medium exports (h1-h5) down one so imported content can't
// introduce a second h1 or skip straight to a top-level heading.
function shiftHeadingLevels(html: string): string {
  return html.replace(/<(\/?)h([1-5])(\s[^>]*)?>/gi, (_match, slash, level, attrs = '') => {
    const newLevel = Number(level) + 1
    return `<${slash}h${newLevel}${attrs}>`
  })
}

export async function fetchMediumPosts(): Promise<PostInsert[]> {
  const rssUrl = process.env.MEDIUM_RSS_URL
  if (!rssUrl) throw new Error('MEDIUM_RSS_URL env var is not set')
  const res = await fetch(rssUrl, { cache: 'no-store' })
  if (!res.ok) throw new Error(`RSS fetch failed: ${res.status}`)
  const xml = await res.text()
  const items = parseRssFeed(xml)
  const now = new Date().toISOString()
  return items.map(item => ({
    guid: typeof item.guid === 'object' ? item.guid['#text'] : String(item.guid),
    slug: slugify(String(item.title)),
    title: String(item.title),
    excerpt: makeExcerpt(String(item.description || item['content:encoded'] || '')),
    content_html: lazyLoadImages(shiftHeadingLevels(fixLazyImages(String(item['content:encoded'] || item.description || '')))),
    cover_image_url: item['media:thumbnail']?.['@_url'] ?? null,
    source_url: String(item.link),
    published_at: new Date(item.pubDate).toISOString(),
    synced_at: now,
  }))
}
