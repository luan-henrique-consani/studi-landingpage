import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { SocialProof } from './components/SocialProof'
import { Workflow } from './components/Workflow'
import { AntiFrustration } from './components/AntiFrustration'
import { Pricing } from './components/Pricing'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Pular para o conteúdo
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <SocialProof />
        <Workflow />
        <AntiFrustration />
        <Pricing />
      </main>
      <Footer />
    </>
  )
}

export default App
