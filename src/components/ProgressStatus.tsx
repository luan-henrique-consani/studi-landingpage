import { motion, useReducedMotion } from 'framer-motion'
import { Target } from 'lucide-react'

const PROGRESS_PERCENT = 72

export function ProgressStatus() {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.aside
      className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 lg:block xl:right-8"
      initial={{ opacity: 0, x: 16 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      aria-label="Status de progresso"
    >
      <motion.div
        className="w-44 rounded-2xl border border-white/60 bg-white/70 p-4 shadow-lg shadow-slate-200/30 backdrop-blur-xl"
        animate={prefersReducedMotion ? undefined : { y: [0, -6, 0] }}
        transition={
          prefersReducedMotion
            ? undefined
            : { duration: 3.5, repeat: Infinity, ease: 'easeInOut' }
        }
      >
        <div className="mb-3 flex items-center gap-2">
          <Target className="h-4 w-4 text-violet-500" aria-hidden />
          <span className="text-xs font-medium text-slate-600">Status de progresso</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200/80">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-400"
            initial={{ width: 0 }}
            animate={{ width: `${PROGRESS_PERCENT}%` }}
            transition={{ duration: 1.2, delay: 0.8, ease: 'easeOut' }}
          />
        </div>
        <motion.p
          className="mt-2 text-right text-xs font-medium text-slate-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          {PROGRESS_PERCENT}% do plano
        </motion.p>
      </motion.div>
    </motion.aside>
  )
}
