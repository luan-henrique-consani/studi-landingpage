import { motion } from 'framer-motion'
import { BookMarked, Calculator, FlaskConical, Sparkles } from 'lucide-react'
import { ProgressStatus } from './ProgressStatus'

const SCHEDULE_ITEMS = [
  { icon: Calculator, label: 'Matemática', progress: 90 },
  { icon: BookMarked, label: 'Português', progress: 70 },
  { icon: FlaskConical, label: 'Química', progress: 45 },
] as const

const FADE_UP = { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 } }
const TRANSITION_FAST = { duration: 0.5 }
const TRANSITION_MED = { duration: 0.6, delay: 0.2 }

export function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto grid max-w-6xl gap-12 overflow-hidden px-6 py-20 md:grid-cols-2 md:items-center md:py-28 lg:gap-16"
      aria-labelledby="hero-heading"
    >
      {/* Formas geométricas de fundo */}
      <div className="pointer-events-none absolute -left-24 -top-12 h-72 w-72 rounded-full bg-indigo-200/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-violet-200/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-indigo-100/25 blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute right-20 top-20 h-32 w-32 rotate-45 rounded-2xl border border-indigo-100/40 bg-transparent" aria-hidden />
      <div className="pointer-events-none absolute left-1/4 top-40 h-24 w-24 rotate-12 rounded-3xl bg-violet-100/20" aria-hidden />

      <ProgressStatus />

      <div className="relative z-10 space-y-8">
        <motion.h1
          id="hero-heading"
          className="text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          {...FADE_UP}
          transition={TRANSITION_FAST}
        >
          Estude com intenção, não com ansiedade.
        </motion.h1>
        <motion.p
          className="max-w-xl text-lg leading-relaxed text-slate-600"
          {...FADE_UP}
          transition={{ ...TRANSITION_FAST, delay: 0.1 }}
        >
          O Studi usa IA para transformar seu edital em um plano de ação diário que se ajusta à sua vida — e não o contrário.
        </motion.p>
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          {...FADE_UP}
          transition={{ ...TRANSITION_FAST, delay: 0.2 }}
        >
          <a
            href="#precos"
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-8 py-4 text-sm font-medium text-white shadow-sm transition-all duration-300 hover:bg-indigo-700 hover:shadow-md"
          >
            Começar agora
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-8 py-4 text-sm font-medium text-slate-900 transition-all duration-300 hover:border-slate-300"
          >
            Ver como funciona
          </a>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={TRANSITION_MED}
      >
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-400" aria-hidden />
            <span className="text-sm font-medium text-slate-500">Cronograma gerado pela IA</span>
          </div>
          <div className="space-y-3">
            {SCHEDULE_ITEMS.map((item, i) => (
              <motion.div
                key={item.label}
                className="flex items-center gap-3 rounded-xl bg-slate-50/80 p-3"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.15 }}
              >
                <item.icon className="h-5 w-5 shrink-0 text-violet-400" aria-hidden />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-slate-700">{item.label}</p>
                  <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-400"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.progress}%` }}
                      transition={{ duration: 0.8, delay: 0.8 + i * 0.1, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              className="flex items-center gap-3 rounded-xl bg-violet-50/80 p-3"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.95 }}
            >
              <Sparkles className="h-5 w-5 shrink-0 text-violet-400" aria-hidden />
              <p className="text-sm font-medium text-slate-700">
                tudo o que você imaginar!
              </p>
            </motion.div>
          </div>
          <motion.p
            className="mt-4 text-center text-xs text-slate-400"
            animate={{ opacity: [0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Plano se adapta ao seu ritmo
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
