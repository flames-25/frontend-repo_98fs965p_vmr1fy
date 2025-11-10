import React from 'react'
import TiltCard from './TiltCard'

export default function ProjectGrid({ projects }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <TiltCard key={p.title} className="rounded-xl border border-black/5 p-5 bg-white shadow-sm">
          <h3 className="font-semibold text-slate-900">{p.title}</h3>
          <p className="text-sm text-slate-600 mt-2">{p.desc}</p>
          {p.note && <p className="text-xs text-slate-500 mt-2">{p.note}</p>}
        </TiltCard>
      ))}
    </div>
  )
}
