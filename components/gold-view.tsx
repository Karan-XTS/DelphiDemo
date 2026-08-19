'use client'

import { ArrowDown } from 'lucide-react'
import { goldTable, silverTables } from '@/lib/data'
import { SchemaTable } from '@/components/schema-table'
import { Badge, CheckLabel, MetricCard } from '@/components/ui-bits'

export function GoldView() {
  return (
    <div className="animate-scale-in">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-gold">
            Gold Layer
          </p>
          <h2 className="mt-1 text-2xl font-bold text-foreground text-balance md:text-3xl">
            Gold Layer – Business Ready Data
          </h2>
          <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
            Silver entities are combined into highly consumable datasets
            optimized for reporting and analytics.
          </p>
        </div>
        <Badge tone="gold">21 Final Tables</Badge>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <CheckLabel>Fully Denormalized</CheckLabel>
        <CheckLabel>Reporting Ready</CheckLabel>
        <CheckLabel>Business Friendly</CheckLabel>
        <CheckLabel>Single Source of Truth</CheckLabel>
      </div>

      {/* Consolidation visual */}
      <div className="mt-8 grid items-center gap-6 lg:grid-cols-[1fr_auto_1.2fr]">
        <div>
          <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
            Silver Layer: multiple business entities
          </p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {silverTables.map((table, i) => (
              <SchemaTable
                key={table.name}
                table={table}
                tone="silver"
                className="animate-rise"
                style={{ animationDelay: `${i * 90}ms` }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center gap-1 text-accent">
            <span className="text-xs uppercase tracking-wider text-muted-foreground lg:rotate-0">
              flow into
            </span>
            <ArrowDown className="h-8 w-8 animate-pulse-glow lg:-rotate-90" />
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs uppercase tracking-wider text-muted-foreground">
            Gold Layer: single business-ready dataset
          </p>
          <div className="animate-scale-in rounded-2xl p-[1px] shadow-[0_0_60px_-12px_var(--gold)]">
            <SchemaTable table={goldTable} tone="gold" large />
          </div>
        </div>
      </div>

      {/* Metrics */}
      <p className="mt-10 text-xs uppercase tracking-wider text-muted-foreground">
        Pipeline at a glance
      </p>
      <div className="mt-3 grid grid-cols-2 gap-4 md:grid-cols-3">
        <MetricCard value="200+" label="Source Tables" />
        <MetricCard value="41" label="Silver Tables" />
        <MetricCard value="21" label="Unified Gold Dataset" />
      </div>
    </div>
  )
}