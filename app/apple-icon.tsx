import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#111113',
          color: '#E8B84B',
          fontSize: 96,
          fontWeight: 700,
          fontFamily: 'serif',
        }}
      >
        R
      </div>
    ),
    { ...size, headers: { 'cache-control': 'public, max-age=31536000, immutable' } },
  )
}
