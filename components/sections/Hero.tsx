'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowDown } from 'lucide-react'
import { TypewriterText } from '@/components/ui/TypewriterText'

const heroStrings = [
  'Continuous Learner',
  'Problem Solver',
  'Builder',
  'Data Engineer',
]

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <Image
        src="/ghibli-hero-section.png"
        alt="Raj — Ghibli style"
        fill
        priority
        style={{ objectFit: 'contain', objectPosition: 'center center', filter: 'saturate(0.5) brightness(0.75)' }}
      />
      {/* Vignette overlay — darker at edges, lighter in center */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.75) 75%, rgba(0,0,0,0.92) 100%)' }} />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <p className="text-[11px] tracking-[0.45em] uppercase text-zinc-400 mb-6">
          Hey, I&apos;m Raj
        </p>

        <h1 className="font-[family-name:var(--font-playfair)] font-bold leading-[1.05] mb-8">
          <span className="block text-[clamp(3.5rem,10vw,7rem)] text-white">
            I build things
          </span>
          <span className="block text-[clamp(3.5rem,10vw,7rem)] text-white/60">
            for the web.
          </span>
        </h1>

        <p className="font-[family-name:var(--font-playfair)] text-[#E8B84B] text-xl md:text-2xl mb-4">
          <TypewriterText strings={heroStrings} />
        </p>

        <p className="text-sm md:text-[15px] text-zinc-400 mb-10 max-w-md mx-auto leading-relaxed">
          One year in. Still learning every day. Enjoying the process
          more than I expected.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#contact"
            className="px-8 py-3 bg-[#E8B84B] text-black text-[11px] tracking-[0.22em] uppercase font-semibold hover:bg-[#d4a43e] transition-colors"
          >
            Get In Touch
          </Link>
          <Link
            href="#work"
            className="px-8 py-3 border border-white/30 text-white text-[11px] tracking-[0.22em] uppercase font-semibold hover:border-white hover:bg-white/5 transition-colors"
          >
            View Work
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center gap-2 text-zinc-500">
        <span className="text-[10px] tracking-[0.35em] uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  )
}
