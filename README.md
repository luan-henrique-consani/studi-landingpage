# Studi — Landing Page

Landing page profissional do **Studi**, um SaaS de planejamento de estudos inteligente. Desenvolvida em React com Tailwind CSS, Lucide React e Framer Motion.

## Design

- **Cores:** Fundo off-white (`#F8F9FA`), accent indigo-600 (botões) e violet-400 (elementos de IA), texto slate-900.
- **Tipografia:** Plus Jakarta Sans / Inter, títulos com tracking-tight e font-medium.
- **Componentes:** Cards brancos com borda slate-100, shadow-sm e rounded-2xl; botões com px-8 py-4 e transições suaves.

## Tecnologias

- **React 18** + TypeScript
- **Vite**
- **Tailwind CSS**
- **Lucide React** (ícones)
- **Framer Motion** (animações ao scroll)

## Como rodar

```bash
npm install
npm run dev
```

Acesse [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Estrutura

- `src/App.tsx` — composição da página
- `src/components/` — Navbar, Hero, SocialProof, Workflow, AntiFrustration, Pricing, Footer
- `src/index.css` — Tailwind e tokens de design

## Seções

1. **Navbar** — Logo Studi, links (Como funciona, Preços), botão Entrar; menu hambúrguer no mobile.
2. **Hero** — Headline “Estude com intenção, não com ansiedade”, subheadline e mockup do cronograma com animações.
3. **Social Proof** — Faixa com métricas (horas de foco, estudantes, etc.).
4. **O fluxo Studi** — 3 passos: Importe seu objetivo, Plano Dinâmico, Execute com foco.
5. **O botão de Reset Mental** — Card em destaque com gradiente suave.
6. **Preços** — Plano Vitalício, valor único, lista de benefícios com checkmarks.
7. **Footer** — Frase inspiradora e links institucionais.

Tom de voz: empático, calmo e encorajador. Foco em paz de espírito e produtividade sem burnout.
