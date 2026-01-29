import { motion } from 'framer-motion'
import { FileText, Sparkles, Play } from 'lucide-react'
import { VIEWPORT_ONCE, VIEWPORT_OFFSET } from '../constants'

const STEPS = [
  {
    icon: FileText,
    title: 'Importe seu objetivo',
    description: 'A IA lê seu edital ou meta e entende exatamente o que você precisa estudar.',
  },
  {
    icon: Sparkles,
    title: 'Plano Dinâmico',
    description: 'O app divide as matérias sozinho e ajusta o ritmo conforme você avança.',
  },
  {
    icon: Play,
    title: 'Execute com foco',
    description: 'Timer Pomodoro integrado para sessões de estudo sem distração.',
  },
] as const

const CONTAINER_VARIANTS = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export function Workflow() {
  return (
    <section
      id="como-funciona"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24 md:py-28"
      aria-labelledby="workflow-heading"
    >
      {/* Formas geométricas de fundo */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-64 w-64 rounded-full bg-indigo-100/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-violet-100/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-indigo-200/10 blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute right-32 top-20 h-20 w-20 rotate-45 rounded-xl border border-violet-200/30 bg-transparent" aria-hidden />
      <div className="pointer-events-none absolute bottom-32 left-20 h-16 w-16 rounded-full bg-indigo-200/15" aria-hidden />

      <motion.h2
        id="workflow-heading"
        className="relative z-10 text-center text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.5 }}
      >
        O fluxo Studi
      </motion.h2>
      <motion.p
        className="relative z-10 mx-auto mt-4 max-w-2xl text-center text-slate-600"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Três passos para paz de espírito e produtividade sem burnout.
      </motion.p>

      <motion.div
        className="relative z-10 mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        variants={CONTAINER_VARIANTS}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT_OFFSET}
      >
        {STEPS.map((step, stepIndex) => (
          <motion.article
            key={step.title}
            variants={ITEM_VARIANTS}
            className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm transition-shadow duration-300 hover:shadow-md"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <step.icon className="h-6 w-6" aria-hidden />
            </div>
            <p className="text-sm font-medium text-indigo-600">Passo {stepIndex + 1}</p>
            <h3 className="mt-2 text-xl font-medium tracking-tight text-slate-900">
              {step.title}
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">{step.description}</p>
          </motion.article>
        ))}
      </motion.div>
    </section>
  )
}
