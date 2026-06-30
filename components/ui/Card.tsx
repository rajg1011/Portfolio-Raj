type Props = {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: Props) {
  return (
    <div
      className={`border border-white/10 rounded-lg p-6 transition-all duration-300 hover:bg-white/5 group ${className}`}
    >
      {children}
    </div>
  )
}
