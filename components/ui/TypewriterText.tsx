'use client'

import { useEffect, useState } from 'react'

type Phase = 'typing' | 'pausing-after-type' | 'deleting' | 'pausing-after-delete'

type Props = {
  strings: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
}

export function TypewriterText({
  strings,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1500,
}: Props) {
  const [displayText, setDisplayText] = useState('')
  const [phase, setPhase] = useState<Phase>('typing')
  const [stringIndex, setStringIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = strings[stringIndex]

    if (phase === 'typing') {
      if (charIndex < current.length) {
        const t = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex + 1))
          setCharIndex(c => c + 1)
        }, typingSpeed)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => setPhase('pausing-after-type'), pauseDuration)
      return () => clearTimeout(t)
    }

    if (phase === 'pausing-after-type') {
      const t = setTimeout(() => setPhase('deleting'), 200)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (charIndex > 0) {
        const t = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex - 1))
          setCharIndex(c => c - 1)
        }, deletingSpeed)
        return () => clearTimeout(t)
      }
      const t = setTimeout(() => {
        setStringIndex(i => (i + 1) % strings.length)
        setPhase('typing')
      }, pauseDuration / 2)
      return () => clearTimeout(t)
    }
  }, [phase, charIndex, stringIndex, strings, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span>
      {displayText}
      <span className="animate-pulse ml-0.5">|</span>
    </span>
  )
}
