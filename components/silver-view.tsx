'use client'

import {
  Brush,
  FilterX,
  Scale,
  Map as MapIcon,
  ShieldCheck,
  Workflow,
  ArrowDown,
} from 'lucide-react'
import { silverTables, transformations } from '@/lib/data'
import { SchemaTable } from '@/components/schema-table'
import { Badge, CheckLabel } from '@/components/ui-bits'

const transformIcons = [Brush, FilterX, Scale, MapIcon, ShieldCheck, Workflow]

export function SilverView() {
  return (
    <div className="animate-scale-in">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-silver">
            Silver Layer
          </p>
          <h2 className="mt-1 text-2xl font-bold text-foreground text-balance md:text-3xl">
            Silver Layer – Cleansed &amp; Integrated Data
          </h2>
          <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
            Data is standardized, cleaned, enriched, and partially denormalized
            to create trusted business entities.
          </p>
        </div>
        <Badge tone="silver">41 Business Tables</Badge>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <CheckLabel>Cleaned Data</CheckLabel>
        <CheckLabel>Standardized Values</CheckLabel>
        <CheckLabel>Business Rules Applied</CheckLabel>
        <CheckLabel>Improved Data Quality</CheckLabel>
      </div>

      {/* Transformations */}
      <p className="mt-8 text-xs uppercase tracking-wider text-muted-foreground">
        Transformations applied · Bronze → Silver
      </p>
      <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {transformations.map((t, i) => {
          const Icon = transformIcons[i]
          return (
            <div
              key={t.title}
              className="glass animate-rise flex flex-col items-center gap-2 rounded-xl px-3 py-4 text-center transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 70}ms` }}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-accent/40 bg-accent/15 text-accent">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-foreground">
                {t.title}
              </span>
              <span className="text-[11px] leading-snug text-muted-foreground">
                {t.desc}
              </span>
            </div>
          )
        })}
      </div>

      {/* Comparison */}
      <div className="mt-8 flex flex-col items-center gap-3">
        <div className="glass flex items-center gap-3 rounded-full px-5 py-2">
          <span className="font-mono text-sm text-bronze">Bronze: 200+ Tables</span>
        </div>
        <ArrowDown className="h-5 w-5 text-accent animate-pulse-glow" />
        <div className="glass flex items-center gap-3 rounded-full px-5 py-2">
          <span className="font-mono text-sm text-silver">
            Silver: 41 Business Tables
          </span>
        </div>
      </div>

      {/* Silver tables */}
      <p className="mt-8 text-xs uppercase tracking-wider text-muted-foreground">
        Trusted business entities
      </p>
      <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {silverTables.map((table, i) => (
          <SchemaTable
            key={table.name}
            table={table}
            tone="silver"
            large
            className="animate-rise"
            style={{ animationDelay: `${i * 100}ms` }}
          />
        ))}
      </div>
    </div>
  )
}