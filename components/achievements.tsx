'use client'

import { CheckCircle2 } from 'lucide-react'
import { achievements } from '@/lib/data'

export function Achievements() {
  return (
    <div className="animate-scale-in">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Project Achievements
          </h2>
          <p className="mt-2 max-w-2xl text-muted-foreground">
            Milestones delivered across the modernization program.
          </p>
        </div>
      </div>

      <ol className="relative mt-10 ml-3 border-l border-border">
        {achievements.map((a, i) => (
          <li
            key={a.title}
            className="animate-rise mb-6 ml-6"
            style={{ animationDelay: `${i * 90}ms` }}
          >
            <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full border border-gold/50 bg-gold/15">
              <CheckCircle2 className="h-4 w-4 text-gold" />
            </span>
            <div className="glass-strong rounded-xl px-5 py-4 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-semibold text-foreground">{a.title}</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{a.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  )
}