import { motion } from 'framer-motion'
import { Clock, GraduationCap, Target, BookMarked } from 'lucide-react'
import { VIEWPORT_TIGHT } from '../constants'

const STATS = [
  { icon: Clock, value: 'Mais de 10.000', label: 'horas de foco cronometradas' },
  { icon: GraduationCap, value: 'Milhares', label: 'de estudantes em prova' },
  { icon: Target, value: 'Foco', label: 'sem burnout' },
  { icon: BookMarked, value: 'Edital', label: 'transformado em plano' },
] as const

export function SocialProof() {
  return (
    <section
      className="border-y border-slate-100 bg-white/60 py-8"
      aria-labelledby="social-proof-heading"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p id="social-proof-heading" className="sr-only">
          Prova social e números do Studi
        </p>
        <motion.div
          className="grid grid-cols-1 place-items-start gap-6 text-slate-600 sm:grid-cols-2 lg:flex lg:flex-wrap lg:items-center lg:justify-start lg:gap-x-12 lg:gap-y-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_TIGHT}
          transition={{ duration: 0.5 }}
        >
          {STATS.map((item) => (
            <div
              key={`${item.value}-${item.label}`}
              className="flex min-w-0 items-center gap-3"
            >
              <item.icon className="h-5 w-5 shrink-0 text-indigo-600/80" aria-hidden />
              <span className="min-w-0">
                <span className="font-medium text-slate-700">{item.value}</span>
                <span className="text-slate-500"> {item.label}</span>
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
