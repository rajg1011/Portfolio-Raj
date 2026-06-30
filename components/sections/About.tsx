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
          {/* Left — bio + experience */}
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-2">
              {bio.paragraph.map((line, i) => (
                <p key={i} className="text-zinc-300 text-lg leading-relaxed">{line}</p>
              ))}
            </div>

            <div className="flex flex-col gap-6">
              {bio.experience.map((item) => (
                <div key={item.company} className="flex gap-4">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <div>
                    <div className="flex items-baseline gap-2 flex-wrap">
                      <span className="text-white font-medium text-sm">{item.role}</span>
                      <span className="text-zinc-600 text-xs">·</span>
                      <span className="text-accent text-sm">{item.company}</span>
                      <span className="text-zinc-600 text-xs ml-auto">{item.period}</span>
                    </div>
                    <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — currently + education + off-screen */}
          <div className="flex flex-col gap-4">
            <div className="border border-white/10 rounded-lg p-6 hover:bg-white/5 transition-all duration-300">
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
                <div>
                  <p className="text-xs text-zinc-600 mb-1">Education</p>
                  <p className="text-white text-sm">{bio.education}</p>
                </div>
              </div>
            </div>

            <div className="border border-white/10 rounded-lg px-6 py-4 hover:bg-white/5 transition-all duration-300">
              <p className="text-xs text-zinc-600 mb-1">Off-screen</p>
              <p className="text-zinc-400 text-sm">{bio.offscreen}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
