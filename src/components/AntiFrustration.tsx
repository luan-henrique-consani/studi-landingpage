import { motion } from 'framer-motion'
import { RefreshCw } from 'lucide-react'
import { VIEWPORT_ONCE } from '../constants'

export function AntiFrustration() {
  return (
    <section
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24 md:py-28"
      aria-labelledby="anti-frustration-heading"
    >
      {/* Formas geométricas de fundo */}
      <div className="pointer-events-none absolute -right-20 top-0 h-48 w-48 rounded-full bg-violet-100/25 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-indigo-100/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-24 w-24 -translate-y-1/2 rotate-45 rounded-2xl border border-indigo-200/25 bg-transparent" aria-hidden />

      <motion.article
        className="relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-indigo-50/80 via-white to-violet-50/60 p-10 shadow-sm md:p-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.6 }}
      >
        <div className="relative z-10 max-w-2xl">
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-violet-500 shadow-sm">
            <RefreshCw className="h-7 w-7" aria-hidden />
          </div>
          <h2
            id="anti-frustration-heading"
            className="text-2xl font-medium tracking-tight text-slate-900 sm:text-3xl md:text-4xl"
          >
            O botão de Reset Mental
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600">
            Falhou hoje? Um clique e a IA reorganiza sua semana. Sem culpa, apenas progresso.
          </p>
          <p className="mt-4 text-slate-500">
            Respire fundo. O plano se adapta a você — não o contrário.
          </p>
        </div>
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-200/30 blur-3xl" aria-hidden />
        <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" aria-hidden />
      </motion.article>
    </section>
  )
}
