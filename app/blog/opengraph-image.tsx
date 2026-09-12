import { ImageResponse } from 'next/og'

export const alt = 'Blog | Raj Gupta'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
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
        <div style={{ width: 48, height: 4, background: '#E8B84B', marginBottom: 32 }} />

        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1.05,
            marginBottom: 8,
          }}
        >
          Blog
        </div>

        <div
          style={{
            fontSize: 28,
            color: 'rgba(255,255,255,0.45)',
            marginBottom: 40,
          }}
        >
          Data systems, software engineering, and building for the web.
        </div>

        <div
          style={{
            fontSize: 18,
            color: '#E8B84B',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}
        >
          Raj Gupta · rajg.dev
        </div>
      </div>
    ),
    { ...size, headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  )
}
