import { createClient } from '@supabase/supabase-js'
import { cacheTag, cacheLife } from 'next/cache'

export type Post = {
  id: string
  slug: string
  title: string
  excerpt: string
  content_html: string
  cover_image_url: string | null
  source_url: string
  published_at: string
  synced_at: string
  guid: string
}

export type PostSummary = Pick<Post, 'slug' | 'title' | 'excerpt' | 'published_at'>

function makeClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function getPosts(): Promise<PostSummary[]> {
  'use cache'
  cacheTag('blog-posts')
  cacheLife('days')
  const { data, error } = await makeClient()
    .from('posts')
    .select('slug, title, excerpt, published_at')
    .order('published_at', { ascending: false })
  if (error) throw error
  return data ?? []
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  'use cache'
  cacheTag('blog-posts')
  cacheLife('days')
  const { data, error } = await makeClient()
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single()
  if (error?.code === 'PGRST116') return null
  if (error) throw error
  return data
}
