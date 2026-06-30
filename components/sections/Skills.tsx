import { Card } from '@/components/ui/Card'
import { skills } from '@/data/content'

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-[#111113]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-accent text-xs tracking-widest uppercase font-mono">/ Toolbox</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {skills.map(skill => (
            <Card key={skill.name} className="py-4 px-5">
              <p className="text-sm font-medium text-white group-hover:text-accent transition-colors">
                {skill.name}
              </p>
              <p className="text-xs mt-1 text-zinc-600">
                {skill.category}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
