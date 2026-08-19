'use client'

import { bronzeTables } from '@/lib/data'
import { SchemaTable } from '@/components/schema-table'
import { Badge, CheckLabel } from '@/components/ui-bits'

export function BronzeView() {
  return (
    <div className="animate-scale-in">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-bronze">
            Bronze Layer
          </p>
          <h2 className="mt-1 text-2xl font-bold text-foreground text-balance md:text-3xl">
            Bronze Layer – Raw Data Ingestion
          </h2>
          <p className="mt-2 max-w-2xl text-pretty text-muted-foreground">
            Data is ingested exactly as received from source systems without
            applying business transformations.
          </p>
        </div>
        <Badge tone="bronze">200+ Raw CRM Tables</Badge>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <CheckLabel>Raw Data</CheckLabel>
        <CheckLabel>Source Structure Preserved</CheckLabel>
        <CheckLabel>Fully Normalized</CheckLabel>
        <CheckLabel>No Business Rules Applied</CheckLabel>
      </div>

      <p className="mt-6 text-xs uppercase tracking-wider text-muted-foreground">
        Highly normalized source schema
      </p>
      <div className="mt-3 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {bronzeTables.map((table, i) => (
          <SchemaTable
            key={table.name}
            table={table}
            tone="bronze"
            className="animate-rise"
            style={{ animationDelay: `${i * 60}ms` }}
          />
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Showing 10 of{' '}
        <span className="font-semibold text-bronze">200+ normalized tables</span>{' '}
        - connected by primary and foreign keys, mirroring the source exactly.
      </p>
    </div>
  )
}