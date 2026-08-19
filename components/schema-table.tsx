import { KeyRound, Link2 } from 'lucide-react'
import type { TableDef } from '@/lib/data'

type Tone = 'bronze' | 'silver' | 'gold' | 'azure'

const toneRing: Record<Tone, string> = {
  bronze: 'shadow-[0_0_0_1px_var(--bronze)] hover:shadow-[0_0_28px_-6px_var(--bronze)]',
  silver: 'shadow-[0_0_0_1px_var(--silver)] hover:shadow-[0_0_28px_-6px_var(--silver)]',
  gold: 'shadow-[0_0_0_1px_var(--gold)] hover:shadow-[0_0_36px_-6px_var(--gold)]',
  azure: 'shadow-[0_0_0_1px_var(--azure)] hover:shadow-[0_0_28px_-6px_var(--azure)]',
}

const toneHeader: Record<Tone, string> = {
  bronze: 'bg-bronze/15 text-bronze border-bronze/30',
  silver: 'bg-silver/15 text-silver border-silver/30',
  gold: 'bg-gold/15 text-gold border-gold/30',
  azure: 'bg-azure/15 text-azure border-azure/30',
}

export function SchemaTable({
  table,
  tone = 'bronze',
  className = '',
  style,
  large = false,
}: {
  table: TableDef
  tone?: Tone
  className?: string
  style?: React.CSSProperties
  large?: boolean
}) {
  return (
    <div
      className={`glass-strong overflow-hidden rounded-xl transition-all duration-300 ${toneRing[tone]} ${className}`}
      style={style}
    >
      <div
        className={`flex items-center gap-2 border-b px-3 py-2 font-mono text-xs font-semibold tracking-wide ${toneHeader[tone]}`}
      >
        <span
          aria-hidden
          className="inline-block h-2 w-2 shrink-0 rounded-full bg-current"
        />
        <span className="truncate">{table.name}</span>
      </div>
      <ul className={`divide-y divide-border ${large ? 'text-sm' : 'text-xs'}`}>
        {table.columns.map((col) => (
          <li
            key={col.name}
            className="flex items-center gap-2 px-3 py-1.5 font-mono text-card-foreground/85"
          >
            {col.pk ? (
              <KeyRound className="h-3 w-3 shrink-0 text-gold" aria-label="primary key" />
            ) : col.fk ? (
              <Link2 className="h-3 w-3 shrink-0 text-azure" aria-label="foreign key" />
            ) : (
              <span aria-hidden className="inline-block h-3 w-3 shrink-0" />
            )}
            <span className="truncate">{col.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}