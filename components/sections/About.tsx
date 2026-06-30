import { bio } from '@/data/content'

export function About() {
  return (
    <section id="about" className="py-24 bg-[#111113]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-accent text-xs tracking-widest uppercase font-mono">/ About</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-zinc-400 text-lg leading-relaxed">{bio.paragraph}</p>
          </div>

          <div className="border border-white/10 rounded-lg p-6 transition-all duration-300 hover:bg-white/5">
            <p className="text-xs text-accent uppercase tracking-widest mb-4">Currently</p>
            <div className="flex flex-col gap-4">
              <div>
                <p className="text-xs text-zinc-600 mb-1">Status</p>
                <p className="text-white text-sm">{bio.currently.status}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-600 mb-1">Location</p>
                <p className="text-white text-sm">{bio.currently.location}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-600 mb-1">Experience</p>
                <p className="text-white text-sm">{bio.currently.experience}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
