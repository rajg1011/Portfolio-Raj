import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajg.dev'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Guard: if no Supabase URL, return static routes only
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    return [
      { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
      { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ]
  }

  const { getPosts } = await import('@/lib/supabase')
  const posts = await getPosts()

  const postUrls: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.published_at),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    ...postUrls,
  ]
}
