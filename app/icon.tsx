import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
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
          fontSize: 20,
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
