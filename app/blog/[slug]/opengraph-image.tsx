import { ImageResponse } from 'next/og'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { getPostBySlug } from '@/lib/supabase'

export const alt = 'Blog post by Raj Gupta'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type Props = { params: Promise<{ slug: string }> }

export default async function OGImage({ params }: Props) {
  const { slug } = await params
  const post = process.env.NEXT_PUBLIC_SUPABASE_URL ? await getPostBySlug(slug) : null

  const title = post?.title ?? 'Blog'
  const excerpt = post?.excerpt ?? 'Writing by Raj Gupta'

  const heroImage = await readFile(join(process.cwd(), 'public', 'ghibli-hero-section.png'))
  const heroImageSrc = `data:image/png;base64,${heroImage.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          display: 'flex',
          background: '#111113',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={heroImageSrc}
          width={1200}
          height={630}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'saturate(0.5) brightness(0.75)',
          }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)', display: 'flex' }} />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background:
              'radial-gradient(ellipse 900px 500px at center, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.8) 65%, rgba(0,0,0,0.95) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 25%, rgba(0,0,0,0.15) 75%, rgba(0,0,0,0.6) 100%)',
          }}
        />

        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '60px 110px',
            fontFamily: 'serif',
          }}
        >
          <div
            style={{
              fontSize: 15,
              letterSpacing: '0.35em',
              textTransform: 'uppercase',
              color: '#d4d4d8',
              marginBottom: 24,
              textShadow: '0 2px 12px rgba(0,0,0,0.9)',
            }}
          >
            Raj Gupta · Blog
          </div>

          <div
            style={{
              fontSize: title.length > 50 ? 44 : 56,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.1,
              marginBottom: 20,
              maxWidth: 900,
              display: 'flex',
              textShadow: '0 4px 24px rgba(0,0,0,0.95), 0 2px 8px rgba(0,0,0,0.95)',
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: 22,
              color: 'rgba(255,255,255,0.85)',
              marginBottom: 32,
              maxWidth: 820,
              lineHeight: 1.4,
              display: 'flex',
              textShadow: '0 2px 16px rgba(0,0,0,0.95)',
            }}
          >
            {excerpt.length > 120 ? excerpt.slice(0, 120) + '…' : excerpt}
          </div>

          <div
            style={{
              fontSize: 16,
              color: '#E8B84B',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              textShadow: '0 2px 12px rgba(0,0,0,0.9)',
            }}
          >
            Raj Gupta · rajg.dev/blog
          </div>
        </div>
      </div>
    ),
    { ...size, headers: { 'cache-control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=604800' } },
  )
}
