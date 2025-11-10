import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ExternalLink, Mail, MapPin, Phone } from 'lucide-react'

export default function Hero3D({ name, title, location, phone, email }) {
  return (
    <section className="relative pt-24 overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Atmospheric layers */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/70 to-white" />
      <div className="pointer-events-none absolute inset-0" style={{
        background: 'radial-gradient(800px 400px at 20% 10%, rgba(59,130,246,0.18), transparent), radial-gradient(800px 400px at 80% 30%, rgba(14,165,233,0.15), transparent)'
      }} />

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute h-2 w-2 rounded-full bg-blue-500/40 blur-[1px]"
            initial={{ opacity: 0, y: 20, scale: 0.6 }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              y: [0, -50, 0],
              x: [0, i % 2 ? 30 : -30, 0],
              scale: [0.6, 1, 0.6]
            }}
            transition={{ duration: 6 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ left: `${(i * 9) % 100}%`, top: `${(i * 13) % 90}%` }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="py-28 md:py-36">
          <motion.p className="text-xs uppercase tracking-widest text-blue-700 font-semibold"
            initial={{ y: 10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.p>

          <motion.h1
            className="mt-3 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-slate-900"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            {name}
          </motion.h1>

          <motion.p
            className="mt-4 text-slate-700 max-w-2xl"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            A motivated Cybersecurity Analyst with 3+ years in VAPT, AppSec, and Security Operations. M.Sc. IT Cybersecurity from Ganpat University. Eager to contribute as an Associate Security Analyst at Net-Square.
          </motion.p>

          <motion.div className="mt-6 flex flex-wrap items-center gap-3"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <a href="#projects" className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              <ExternalLink size={16} /> View Projects
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
              <Mail size={16} /> Get in Touch
            </a>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap gap-4 text-sm text-slate-700"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="inline-flex items-center gap-2"><MapPin size={16} className="text-blue-600" /> {location}</span>
            <a href={`tel:${phone}`} className="inline-flex items-center gap-2 hover:text-blue-600"><Phone size={16} className="text-blue-600" /> {phone}</a>
            <a href={`mailto:${email}`} className="inline-flex items-center gap-2 hover:text-blue-600"><Mail size={16} className="text-blue-600" /> {email}</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
