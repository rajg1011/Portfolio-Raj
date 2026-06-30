import Link from 'next/link'

type Props = {
  variant: 'filled' | 'outlined'
  icon?: React.ReactNode
  href?: string
  onClick?: () => void
  children: React.ReactNode
}

const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-150 cursor-pointer'
const styles = {
  filled: 'bg-accent text-black hover:bg-accent/80 hover:shadow-[var(--shadow-accent-glow)]',
  outlined: 'border border-white/20 text-white hover:border-accent hover:text-accent hover:shadow-[var(--shadow-accent-outline)]',
}

export function Button({ variant, icon, href, onClick, children }: Props) {
  const className = `${base} ${styles[variant]}`
  if (href) {
    return (
      <Link href={href} className={className}>
        {icon}
        {children}
      </Link>
    )
  }
  return (
    <button onClick={onClick} className={className}>
      {icon}
      {children}
    </button>
  )
}
