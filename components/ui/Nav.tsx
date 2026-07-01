'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#work', label: 'Work' },
  { href: '/#skills', label: 'Skills' },
  { href: '/blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return
    function handleOutsideClick(e: MouseEvent) {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => document.removeEventListener('mousedown', handleOutsideClick)
  }, [isOpen])

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-8 flex items-center justify-between h-16">
          <Link href="/" className="text-[11px] font-semibold tracking-[0.35em] uppercase text-white hover:text-zinc-300 transition-colors">
            R. Gupta
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] tracking-[0.2em] uppercase text-zinc-300 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-zinc-400 hover:text-white transition-colors"
            onClick={() => setIsOpen(prev => !prev)}
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div
            ref={drawerRef}
            className="md:hidden w-full bg-[#111111] border-t border-white/10 flex flex-col p-6 gap-5"
          >
            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-[0.2em] uppercase text-zinc-300 hover:text-white transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  )
}
