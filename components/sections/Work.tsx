import { ExternalLink } from 'lucide-react'
import { Card } from '@/components/ui/Card'
import { projects } from '@/data/content'

export function Work() {
  return (
    <section id="work" className="py-24 bg-[#141416]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-accent text-xs tracking-widest uppercase font-mono">/ Selected Work</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="flex flex-col gap-4">
          {projects.map(project => (
            <Card key={project.id}>
              <div className="flex items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-zinc-700 text-sm font-mono">
                      {String(project.id).padStart(2, '0')}
                    </span>
                    <h3
                      className="text-xl text-white group-hover:text-accent transition-colors"
                      style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                    >
                      {project.name}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-sm mb-4 ml-10">{project.description}</p>
                  <div className="flex flex-wrap gap-2 ml-10">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 border border-white/10 text-zinc-500 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 group-hover:text-accent group-hover:scale-110 transition-all duration-200 mt-1 shrink-0"
                  aria-label={`View ${project.name}`}
                >
                  <ExternalLink size={16} />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
