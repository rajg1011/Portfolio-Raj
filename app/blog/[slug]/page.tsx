import { notFound } from 'next/navigation'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { Nav } from '@/components/ui/Nav'
import { Footer } from '@/components/ui/Footer'
import { getPostBySlug, getPosts } from '@/lib/supabase'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
    // Cache Components require at least one param. Return a placeholder that the
    // page component resolves to notFound(). See Next.js docs on Cache Components
    // + generateStaticParams.
    return [{ slug: '__placeholder__' }]
  }
  const posts = await getPosts()
  if (posts.length === 0) return [{ slug: '__placeholder__' }]
  return posts.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) return {}
  const post = await getPostBySlug(slug)
  if (!post) return {}
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajg.dev'
  return {
    title: `${post.title} | Raj`,
    description: post.excerpt,
    alternates: { canonical: post.source_url },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.published_at,
      url: `${siteUrl}/blog/${post.slug}`,
      images: post.cover_image_url
        ? [post.cover_image_url]
        : [{ url: `${siteUrl}/blog/${post.slug}/opengraph-image`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL) notFound()
  const post = await getPostBySlug(slug)
  if (!post) notFound()

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajg.dev'
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published_at,
    url: `${siteUrl}/blog/${post.slug}`,
    author: { '@type': 'Person', name: 'Raj Gupta' },
    ...(post.cover_image_url ? { image: post.cover_image_url } : {}),
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#111113] pt-32 pb-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
        />
        <article className="mx-auto max-w-3xl px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-zinc-600 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Back to blog
          </Link>

          <time className="text-xs text-zinc-600 block">
            {new Date(post.published_at).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <h1 className="text-4xl font-bold text-white mt-2 mb-8 leading-tight">{post.title}</h1>

          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.content_html }}
          />

          <div className="mt-12 pt-6 border-t border-white/10">
            <a
              href={post.source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-accent transition-colors"
            >
              Read original on Medium
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
