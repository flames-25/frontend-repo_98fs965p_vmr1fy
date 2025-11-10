import React from 'react'

export function TimelineItem({ role, org, period, bullets }) {
  return (
    <div className="relative pl-6 pb-8">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-blue-600" />
      <div className="absolute left-1.5 top-1.5 bottom-0 w-px bg-blue-200" />
      <h3 className="text-lg font-semibold text-slate-900">{role} · <span className="text-blue-600">{org}</span></h3>
      <p className="text-sm text-slate-500 mb-3">{period}</p>
      <ul className="list-disc pl-5 space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

export default function ExperienceTimeline({ items }) {
  return (
    <div className="relative">
      {items.map((item) => (
        <TimelineItem key={item.role + item.period} {...item} />
      ))}
    </div>
  )
}
