'use client'

import { useState } from 'react'
import { Database, Layers, Sparkles, Trophy, BarChart3, ArrowDown } from 'lucide-react'
import { lineageStages } from '@/lib/data'

const icons: Record<string, React.ComponentType<{ className?: string }>> = {
  source: Database,
  bronze: Layers,
  silver: Sparkles,
  gold: Trophy,
  reporting: BarChart3,
}

const tone: Record<string, { chip: string; ring: string }> = {
  azure: { chip: 'bg-azure/15 text-azure border-azure/40', ring: 'ring-azure/60' },
  bronze: { chip: 'bg-bronze/15 text-bronze border-bronze/40', ring: 'ring-bronze/60' },
  silver: { chip: 'bg-silver/15 text-silver border-silver/40', ring: 'ring-silver/60' },
  gold: { chip: 'bg-gold/15 text-gold border-gold/40', ring: 'ring-gold/60' },
}

export function DataLineage() {
  const [active, setActive] = useState<string>(lineageStages[0].id)
  const activeStage = lineageStages.find((s) => s.id === active)!

  return (
    <div className="animate-scale-in">
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">Data Lineage</h2>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        End-to-end flow from source systems to reporting. Click any stage to
        inspect what happens there.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,320px)_1fr]">
        {/* Flow */}
        <div className="flex flex-col">
          {lineageStages.map((stage, i) => {
            const Icon = icons[stage.id]
            const t = tone[stage.tone]
            const isActive = stage.id === active
            return (
              <div key={stage.id} className="flex flex-col items-stretch">
                <button
                  type="button"
                  onClick={() => setActive(stage.id)}
                  className={`glass-strong animate-rise flex items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-300 hover:-translate-y-0.5 ${
                    isActive ? `ring-2 ${t.ring}` : ''
                  }`}
                  style={{ animationDelay: `${i * 80}ms` }}
                >
                  <span className={`flex h-9 w-9 items-center justify-center rounded-lg border ${t.chip}`}>
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-medium text-foreground">{stage.label}</span>
                </button>
                {i < lineageStages.length - 1 && (
                  <div className="relative flex h-10 items-center justify-center" aria-hidden>
                    <div className="absolute h-full w-px bg-gradient-to-b from-border via-accent/60 to-border" />
                    <div className="absolute top-0 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_var(--accent)] animate-travel" />
                    <ArrowDown className="relative h-4 w-4 text-accent/80" />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Detail */}
        <div className="glass-strong h-fit rounded-2xl p-6">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${tone[activeStage.tone].chip}`}
          >
            Stage detail
          </span>
          <h3 className="mt-4 text-xl font-bold text-foreground">
            {activeStage.label}
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            {activeStage.detail}
          </p>
        </div>
      </div>
    </div>
  )
}