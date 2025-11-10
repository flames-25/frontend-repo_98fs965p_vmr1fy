import React, { useState } from 'react'
import { Shield, Mail, Menu, X } from 'lucide-react'

export default function Navbar({ email }) {
  const [open, setOpen] = useState(false)
  const links = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-black/5 backdrop-blur bg-white/70">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="font-semibold text-slate-900 flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
              <Shield size={18} />
            </span>
            <span>Jaydeep Chauhan</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-sm text-slate-700">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-blue-600 transition-colors">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <Mail size={16} /> Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-black/10"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <div className="max-w-6xl mx-auto px-4 py-3 space-y-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="block px-2 py-2 rounded-md text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a
              href={`mailto:${email}`}
              className="mt-2 inline-flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => setOpen(false)}
            >
              <Mail size={16} /> Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
