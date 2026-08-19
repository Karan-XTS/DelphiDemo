import { Check } from 'lucide-react'

export function CheckLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="glass inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium text-foreground/90">
      <Check className="h-3.5 w-3.5 text-accent" />
      {children}
    </span>
  )
}

export function Badge({
  children,
  tone = 'azure',
}: {
  children: React.ReactNode
  tone?: 'bronze' | 'silver' | 'gold' | 'azure'
}) {
  const map = {
    bronze: 'bg-bronze/15 text-bronze border-bronze/40',
    silver: 'bg-silver/15 text-silver border-silver/40',
    gold: 'bg-gold/15 text-gold border-gold/40',
    azure: 'bg-azure/15 text-azure border-azure/40',
  } as const
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold tracking-wide ${map[tone]}`}
    >
      {children}
    </span>
  )
}

export function MetricCard({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="glass flex flex-col items-center justify-center rounded-2xl px-5 py-6 text-center transition-transform duration-300 hover:-translate-y-1">
      <span className="font-mono text-3xl font-bold text-foreground text-glow text-accent md:text-4xl">
        {value}
      </span>
      <span className="mt-2 text-sm text-muted-foreground text-balance">{label}</span>
    </div>
  )
}