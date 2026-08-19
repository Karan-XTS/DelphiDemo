'use client'

import { useState } from 'react'
import { ArrowLeft, GitBranch, Trophy, Workflow, Database } from 'lucide-react'
import { PipelineFlow } from '@/components/pipeline-flow'
import { BronzeView } from '@/components/bronze-view'
import { SilverView } from '@/components/silver-view'
import { GoldView } from '@/components/gold-view'
import { DataLineage } from '@/components/data-lineage'
import { Achievements } from '@/components/achievements'

export type LayerId = 'bronze' | 'silver' | 'gold'
type Tab = 'pipeline' | 'lineage' | 'achievements'

const tabs: { id: Tab; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
  { id: 'pipeline', label: 'Pipeline', icon: Workflow },
  { id: 'lineage', label: 'Data Lineage', icon: GitBranch },
  { id: 'achievements', label: 'Achievements', icon: Trophy },
]

const layerLabels: Record<LayerId, string> = {
  bronze: 'Bronze Layer',
  silver: 'Silver Layer',
  gold: 'Gold Layer',
}

export function Dashboard() {
  const [tab, setTab] = useState<Tab>('pipeline')
  const [layer, setLayer] = useState<LayerId | null>(null)

  const selectLayer = (id: LayerId) => setLayer(id)

  return (
    <main className="app-bg min-h-dvh text-foreground">
      <div className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12">
        {/* Header */}
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-azure/40 bg-azure/15 text-azure animate-float">
              <Database className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-foreground text-balance md:text-2xl">
                CRM Data Warehousing
              </h1>
              <p className="text-sm text-muted-foreground">
                Sources → Bronze → Silver → Gold → Insights
              </p>
            </div>
          </div>

          {/* Tabs */}
          <nav className="glass flex items-center gap-1 rounded-full p-1" aria-label="Views">
            {tabs.map((t) => {
              const Icon = t.icon
              const active = tab === t.id
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => {
                    setTab(t.id)
                    setLayer(null)
                  }}
                  className={`flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium transition-colors md:px-4 ${
                    active
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{t.label}</span>
                </button>
              )
            })}
          </nav>
        </header>

        {/* Body */}
        <section className="mt-10">
          {tab === 'pipeline' && (
            <>
              {layer === null ? (
                <div>
                  <div className="mb-8 text-center">
                    <p className="text-sm uppercase tracking-[0.25em] text-accent">
                      Interactive Architecture
                    </p>
                    <h2 className="mt-2 text-2xl font-bold text-foreground text-balance md:text-3xl">
                      The complete data journey
                    </h2>
                    <p className="mx-auto mt-2 max-w-xl text-pretty text-muted-foreground">
                      Follow raw CRM data as it is refined layer by layer into a
                      single business-ready dataset. Click any layer to dive in.
                    </p>
                  </div>
                  <PipelineFlow onSelectLayer={selectLayer} />
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    onClick={() => setLayer(null)}
                    className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground transition-transform hover:-translate-x-0.5"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to pipeline
                  </button>

                  {/* Layer switcher */}
                  <div className="mb-8 flex flex-wrap gap-2">
                    {(Object.keys(layerLabels) as LayerId[]).map((id) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => setLayer(id)}
                        className={`rounded-full border px-4 py-1.5 text-sm font-medium capitalize transition-colors ${
                          layer === id
                            ? id === 'bronze'
                              ? 'border-bronze/50 bg-bronze/15 text-bronze'
                              : id === 'silver'
                                ? 'border-silver/50 bg-silver/15 text-silver'
                                : 'border-gold/50 bg-gold/15 text-gold'
                            : 'border-border text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {layerLabels[id]}
                      </button>
                    ))}
                  </div>

                  {layer === 'bronze' && <BronzeView />}
                  {layer === 'silver' && <SilverView />}
                  {layer === 'gold' && <GoldView />}
                </div>
              )}
            </>
          )}

          {tab === 'lineage' && <DataLineage />}
          {tab === 'achievements' && <Achievements />}
        </section>

        <footer className="mt-16 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          CRM Data Warehouse Modernization · Bronze / Silver / Gold medallion
          architecture
        </footer>
      </div>
    </main>
  )
}