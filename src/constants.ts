/**
 * Design tokens e constantes compartilhadas para consistência e manutenção.
 */

/** Opções de viewport para Framer Motion (evita re-animação ao scroll) */
export const VIEWPORT_ONCE = { once: true } as const
export const VIEWPORT_OFFSET = { once: true, margin: '-80px' } as const
export const VIEWPORT_TIGHT = { once: true, margin: '-50px' } as const

/** Classe base de seção (max-width + padding horizontal) */
export const SECTION_CONTAINER = 'mx-auto max-w-6xl px-6'
/** Padding vertical padrão de seções */
export const SECTION_PADDING = 'py-24 md:py-28'

/** Scroll em px a partir do qual a navbar entra em modo "scrolled" (glassmorphism) */
export const NAV_SCROLL_THRESHOLD = 24

/** Estilo inline da borda em gradiente do card destacado (Pricing) */
export const FEATURED_CARD_BORDER_STYLE = {
  background:
    'linear-gradient(white, white) padding-box, linear-gradient(135deg, rgb(139 92 246), rgb(99 102 241)) border-box',
  border: '2px solid transparent',
} as const
