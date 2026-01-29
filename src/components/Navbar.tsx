import { useState, useEffect, useCallback, useMemo } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_SCROLL_THRESHOLD } from '../constants'
import { throttle } from '../lib/throttle'
import { Logo } from './Logo'

const NAV_LINKS = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#precos', label: 'Preços' },
] as const

const HEADER_BASE = 'sticky top-0 z-50 border-b transition-all duration-300'
const HEADER_SCROLLED =
  'border-slate-200/60 bg-white/70 shadow-sm shadow-slate-200/20 backdrop-blur-xl'
const HEADER_DEFAULT = 'border-slate-100 bg-[#F8F9FA]/80 backdrop-blur-sm'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const updateScrolled = useCallback(() => {
    setScrolled(window.scrollY > NAV_SCROLL_THRESHOLD)
  }, [])

  const throttledScroll = useMemo(
    () => throttle(updateScrolled, 100),
    [updateScrolled]
  )

  useEffect(() => {
    updateScrolled()
    window.addEventListener('scroll', throttledScroll, { passive: true })
    return () => window.removeEventListener('scroll', throttledScroll)
  }, [throttledScroll, updateScrolled])

  return (
    <header
      className={`${HEADER_BASE} ${scrolled ? HEADER_SCROLLED : HEADER_DEFAULT}`}
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4"
        aria-label="Navegação principal"
      >
        <a
          href="#"
          className="flex items-center gap-3 text-xl font-bold tracking-tight text-slate-900"
          aria-label="Studi - ir ao início"
        >
          <Logo className="h-12 w-auto sm:h-14" ariaHidden />
          <span>Studi</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="font-medium text-slate-600 transition-colors duration-300 hover:text-slate-900"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-100 bg-[#F8F9FA]/90 backdrop-blur-xl md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="block rounded-lg px-4 py-3 font-medium text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
