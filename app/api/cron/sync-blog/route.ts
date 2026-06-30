import { type NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { revalidateTag } from 'next/cache'
import { fetchMediumPosts } from '@/lib/rss'

export async function GET(request: NextRequest) {
  const auth = request.headers.get('Authorization')
  if (!process.env.CRON_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }
  if (auth !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const raw = await fetchMediumPosts()
  const seen = new Set<string>()
  const posts = raw.filter(p => {
    if (seen.has(p.guid)) return false
    seen.add(p.guid)
    return true
  })

  const { data, error } = await supabase
    .from('posts')
    .upsert(posts, { onConflict: 'guid' })
    .select('guid')

  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  revalidateTag('blog-posts')

  return Response.json({ synced: data?.length ?? 0 })
}
