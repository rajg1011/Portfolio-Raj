import { siteTagline } from '@/data/content'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="bg-[#111113] py-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between text-sm text-zinc-600">
          <span suppressHydrationWarning>Raj &copy; {year}</span>
          <span>{siteTagline}</span>
        </div>
      </div>
    </footer>
  )
}
