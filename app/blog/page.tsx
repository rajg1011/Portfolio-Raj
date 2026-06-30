import Link from 'next/link'
import type { Metadata } from 'next'
import { Nav } from '@/components/ui/Nav'
import { Footer } from '@/components/ui/Footer'
import { getPosts, type PostSummary } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Blog | Raj',
  description: 'Articles on data engineering, software development, and building for the web.',
}

export default async function BlogPage() {
  let posts: PostSummary[] = []
  if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
    posts = await getPosts()
  }

  return (
    <>
      <Nav />
      <main className="min-h-screen bg-[#111113] pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold text-white mb-3">Blog</h1>
          <p className="text-zinc-500 mb-12 text-sm">
            Writing on data systems, software engineering, and building for the web.
          </p>

          {posts.length === 0 ? (
            <p className="text-zinc-600 text-sm">No posts yet — check back soon.</p>
          ) : (
            <div className="flex flex-col gap-5">
              {posts.map(post => (
                <article
                  key={post.slug}
                  className="border border-white/10 rounded-lg p-6 hover:border-accent/30 hover:shadow-[var(--shadow-accent-card)] transition-all duration-150 group"
                >
                  <time className="text-xs text-zinc-600">
                    {new Date(post.published_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h2 className="text-lg font-semibold text-white mt-1 mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-zinc-400 text-sm mb-4 leading-relaxed">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-sm text-accent hover:text-accent/80 transition-colors"
                  >
                    Read more
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
