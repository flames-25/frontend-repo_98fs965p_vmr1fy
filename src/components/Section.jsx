import React from 'react'
import { Shield } from 'lucide-react'

export default function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
          <Shield size={18} />
        </span>
        {title}
      </h2>
      <div className="text-slate-700">{children}</div>
    </section>
  )
}
