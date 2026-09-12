import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Raj Gupta - Software Engineer',
    short_name: 'Raj Gupta',
    description: 'Software engineer focused on data systems and web products.',
    start_url: '/',
    display: 'standalone',
    background_color: '#111113',
    theme_color: '#111113',
    icons: [
      { src: '/icon', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  }
}
