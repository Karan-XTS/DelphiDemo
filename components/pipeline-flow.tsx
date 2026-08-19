'use client'

import {
  Database,
  Layers,
  Sparkles,
  Trophy,
  BarChart3,
  ChevronRight,
  ArrowDown,
} from 'lucide-react'
import type { LayerId } from '@/components/dashboard'

type Stage = {
  id: LayerId | 'source' | 'insights'
  title: string
  subtitle: string
  tone: 'bronze' | 'silver' | 'gold' | 'azure'
  icon: React.ComponentType<{ className?: string }>
  clickable: boolean
}

const stages: Stage[] = [
  {
    id: 'source',
    title: 'MySQL (XDBS + ODM data)',
    subtitle: 'Operational systems captured continuously',
    tone: 'azure',
    icon: Database,
    clickable: false,
  },
  {
    id: 'bronze',
    title: 'Bronze Layer',
    subtitle: 'Raw ingestion · 200+ normalized tables',
    tone: 'bronze',
    icon: Layers,
    clickable: true,
  },
  {
    id: 'silver',
    title: 'Silver Layer',
    subtitle: 'Cleansed & integrated · 41 business tables',
    tone: 'silver',
    icon: Sparkles,
    clickable: true,
  },
  {
    id: 'gold',
    title: 'Gold Layer',
    subtitle: 'Business ready · 21 unified dataset',
    tone: 'gold',
    icon: Trophy,
    clickable: true,
  },
  {
    id: 'insights',
    title: 'Delphi',
    subtitle: 'Routes Data to Delphi',
    tone: 'azure',
    icon: BarChart3,
    clickable: true,
  },
]

const toneClasses: Record<
  Stage['tone'],
  { icon: string; glow: string; ring: string }
> = {
  bronze: {
    icon: 'bg-bronze/15 text-bronze border-bronze/40',
    glow: 'group-hover:shadow-[0_0_50px_-10px_var(--bronze)]',
    ring: 'hover:border-bronze/60',
  },
  silver: {
    icon: 'bg-silver/15 text-silver border-silver/40',
    glow: 'group-hover:shadow-[0_0_50px_-10px_var(--silver)]',
    ring: 'hover:border-silver/60',
  },
  gold: {
    icon: 'bg-gold/15 text-gold border-gold/40',
    glow: 'group-hover:shadow-[0_0_60px_-10px_var(--gold)]',
    ring: 'hover:border-gold/60',
  },
  azure: {
    icon: 'bg-azure/15 text-azure border-azure/40',
    glow: 'group-hover:shadow-[0_0_50px_-10px_var(--azure)]',
    ring: 'hover:border-azure/60',
  },
}

function Connector() {
  return (
    <div className="relative flex h-14 w-full items-center justify-center" aria-hidden>
      <div className="absolute h-full w-px bg-gradient-to-b from-border via-accent/50 to-border" />
      <div className="absolute top-0 h-3 w-3 -translate-x-0 rounded-full bg-accent shadow-[0_0_12px_var(--accent)] animate-travel" />
      <ArrowDown className="relative h-5 w-5 text-accent/80" />
    </div>
  )
}

export function PipelineFlow({
  onSelectLayer,
}: {
  onSelectLayer: (id: LayerId) => void
}) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-stretch">
      {stages.map((stage, i) => {
        const t = toneClasses[stage.tone]
        const Icon = stage.icon
        const content = (
          <div
            className={`glass-strong group relative flex w-full items-center gap-4 rounded-2xl px-5 py-5 text-left transition-all duration-300 ${t.ring} ${
              stage.clickable
                ? `cursor-pointer hover:-translate-y-1 ${t.glow}`
                : ''
            }`}
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${t.icon} ${
                stage.clickable ? 'animate-float' : ''
              }`}
            >
              <Icon className="h-6 w-6" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-lg font-semibold text-foreground">
                  {stage.title}
                </h3>
                {stage.clickable && (
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                    Click to explore
                  </span>
                )}
              </div>
              <p className="mt-0.5 truncate text-sm text-muted-foreground">
                {stage.subtitle}
              </p>
            </div>
            {stage.clickable && (
              <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:text-foreground" />
            )}
          </div>
        )

        return (
          <div key={stage.id} className="w-full">
            <div
              className="animate-rise"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              {stage.clickable ? (
                          <button
              type="button"
              onClick={() => {
                if (stage.id === 'insights') {
                  window.open(
                    'delphi_combined.html',
                    '_blank'
                  )
                } else {
                  onSelectLayer(stage.id as LayerId)
                }
              }}
              className="block w-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {content}
            </button>
              ) : (
                content
              )}
            </div>
            {i < stages.length - 1 && <Connector />}
          </div>
        )
      })}
    </div>
  )
}