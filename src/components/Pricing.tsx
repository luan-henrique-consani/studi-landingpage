import { memo } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { VIEWPORT_ONCE, FEATURED_CARD_BORDER_STYLE } from '../constants'

interface Plan {
  id: string
  name: string
  price: string
  priceSub?: string
  priceSubHighlight?: string
  subtext?: string
  benefits: string[]
  buttonLabel: string
  buttonStyle: 'outline' | 'solid' | 'highlight'
  featured?: boolean
}

const PLANS: Plan[] = [
  {
    id: 'basico',
    name: 'Foco Livre',
    price: 'Grátis',
    benefits: [
      '1 cronograma manual',
      'Timer Pomodoro básico',
      'Acesso mobile',
    ],
    buttonLabel: 'Começar grátis',
    buttonStyle: 'outline',
  },
  {
    id: 'mensal',
    name: 'Studi Mensal',
    price: 'R$ 29,90',
    priceSub: '/mês',
    benefits: [
      'IA ilimitada para cronogramas',
      'Recálculo automático de metas',
      'Sincronização em nuvem',
      'Sem anúncios',
    ],
    buttonLabel: 'Assinar Mensal',
    buttonStyle: 'solid',
  },
  {
    id: 'anual',
    name: 'Studi Pro (Anual)',
    price: 'R$ 14,90',
    priceSub: '/mês',
    priceSubHighlight: 'R$ 178,80/ano',
    subtext: 'Economize 50% em comparação ao mensal.',
    benefits: [
      'Tudo do Mensal',
      'Relatórios de desempenho em PDF',
      'Prioridade em novos recursos de IA',
      'Suporte prioritário',
    ],
    buttonLabel: 'Garantir Desconto Anual',
    buttonStyle: 'highlight',
    featured: true,
  },
]

const BUTTON_CLASSES: Record<Plan['buttonStyle'], string> = {
  outline:
    'border border-slate-200 bg-white text-slate-900 hover:border-slate-300 hover:bg-slate-50',
  solid: 'bg-slate-800 text-white hover:bg-slate-700',
  highlight:
    'bg-gradient-to-r from-violet-500 to-indigo-500 text-white shadow-lg shadow-indigo-500/25 hover:shadow-xl hover:shadow-indigo-500/30',
}

const PricingCardInner = ({ plan, index }: { plan: Plan; index: number }) => {
  const isFeatured = plan.featured ?? false

  return (
    <motion.article
      className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm transition-shadow md:p-10 ${
        isFeatured ? 'border-transparent pt-10 shadow-lg md:pt-12' : 'border-slate-100'
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT_ONCE}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.02, y: -4 }}
      style={isFeatured ? FEATURED_CARD_BORDER_STYLE : undefined}
    >
      {isFeatured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-1.5 text-xs font-semibold text-white shadow-sm">
            MELHOR VALOR
          </span>
        </div>
      )}

      <p className="text-sm font-medium text-slate-500">{plan.name}</p>

      <div className="mt-4 flex flex-wrap items-baseline gap-1">
        <span className="text-3xl font-medium tracking-tight text-slate-900 md:text-4xl">
          {plan.price}
        </span>
        {plan.priceSub && (
          <span className="text-slate-500">{plan.priceSub}</span>
        )}
      </div>
      {plan.priceSubHighlight && (
        <p className="mt-2 text-lg font-medium text-indigo-600">
          {plan.priceSubHighlight}
        </p>
      )}
      {plan.subtext && (
        <p className="mt-1 text-sm text-emerald-600">{plan.subtext}</p>
      )}

      <ul className="mt-8 flex-1 space-y-4" role="list">
        {plan.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
              <Check className="h-3 w-3" aria-hidden />
            </span>
            <span className="text-slate-700">{benefit}</span>
          </li>
        ))}
      </ul>

      <a
        href="#precos"
        className={`mt-10 flex w-full items-center justify-center rounded-xl px-8 py-4 text-sm font-medium transition-all duration-300 ${BUTTON_CLASSES[plan.buttonStyle]}`}
      >
        {plan.buttonLabel}
      </a>
    </motion.article>
  )
}

const PricingCard = memo(PricingCardInner)
PricingCard.displayName = 'PricingCard'

export function Pricing() {
  return (
    <section
      id="precos"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24 md:py-28"
      aria-labelledby="pricing-heading"
    >
      {/* Formas geométricas de fundo */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-100/15 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute bottom-20 left-20 h-20 w-20 rounded-full bg-violet-100/20 blur-2xl" aria-hidden />
      <div className="pointer-events-none absolute right-32 top-1/3 h-16 w-16 rotate-12 rounded-xl bg-indigo-200/10" aria-hidden />

      <motion.h2
        id="pricing-heading"
        className="relative z-10 text-center text-3xl font-medium tracking-tight text-slate-900 sm:text-4xl"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.5 }}
      >
        Invista no seu foco
      </motion.h2>
      <motion.p
        className="relative z-10 mx-auto mt-4 max-w-xl text-center text-slate-600"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={VIEWPORT_ONCE}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Escolha o plano que combina com sua jornada. Cada passo conta para a aprovação.
      </motion.p>

      <div className="relative z-10 mx-auto mt-12 grid max-w-5xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="order-2 lg:order-1">
          <PricingCard plan={PLANS[0]} index={0} />
        </div>
        <div className="order-3 lg:order-2">
          <PricingCard plan={PLANS[1]} index={1} />
        </div>
        <div className="order-1 lg:order-3">
          <PricingCard plan={PLANS[2]} index={2} />
        </div>
      </div>
    </section>
  )
}
