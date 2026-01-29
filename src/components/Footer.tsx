import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { VIEWPORT_ONCE } from '../constants'

const FOOTER_LINKS = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#precos', label: 'Preços' },
  { href: '#', label: 'Termos de uso' },
  { href: '#', label: 'Privacidade' },
] as const

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white/60 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          className="mx-auto max-w-md text-center text-lg leading-relaxed text-slate-600"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT_ONCE}
          transition={{ duration: 0.5 }}
        >
          Respire fundo. A gente cuida do plano.
        </motion.p>
        <nav
          className="mt-8 flex flex-wrap items-center justify-center gap-6"
          aria-label="Links institucionais"
        >
          {FOOTER_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-500 transition-colors duration-300 hover:text-slate-900"
            >
              {label}
            </a>
          ))}
        </nav>
        <p className="mt-10 flex items-center justify-center gap-1.5 text-sm text-slate-400">
          Feito com <Heart className="h-4 w-4 text-rose-400" aria-hidden /> para quem estuda com intenção
        </p>
      </div>
    </footer>
  )
}
