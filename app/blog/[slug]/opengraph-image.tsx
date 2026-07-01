import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/supabase'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type Props = { params: Promise<{ slug: string }> }

export default async function OGImage({ params }: Props) {
  const { slug } = await params
  const post = process.env.NEXT_PUBLIC_SUPABASE_URL ? await getPostBySlug(slug) : null

  const title = post?.title ?? 'Blog'
  const excerpt = post?.excerpt ?? 'Writing by Raj Gupta'

  return new ImageResponse(
    (
      <div
        style={{
          background: '#111113',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'flex-end',
          padding: '80px',
          fontFamily: 'serif',
        }}
      >
        {/* Accent bar */}
        <div style={{ width: 48, height: 4, background: '#E8B84B', marginBottom: 32 }} />

        <div
          style={{
            fontSize: title.length > 50 ? 44 : 56,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: 20,
            maxWidth: 900,
          }}
        >
          {title}
        </div>

        <div
          style={{
            fontSize: 22,
            color: 'rgba(255,255,255,0.45)',
            marginBottom: 40,
            maxWidth: 820,
            lineHeight: 1.4,
            overflow: 'hidden',
            display: '-webkit-box',
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
          }}
        >
          Raj Gupta · rajg.dev/blog
        </div>
      </div>
    ),
    { ...size },
  )
}
