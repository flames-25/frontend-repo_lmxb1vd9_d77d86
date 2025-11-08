import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-stone-100 text-stone-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b-2 border-stone-900">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <a href="#" className="inline-flex items-center gap-2 font-semibold text-stone-900">
            <span className="bg-amber-100 border-2 border-stone-900 px-2 py-1 shadow-[4px_4px_0_0_#1c1917]">侘び寂び</span>
            <span>Portfolio</span>
          </a>
          <nav className="flex items-center gap-4 text-sm">
            <a href="#about" className="bg-white px-3 py-2 border-2 border-stone-900 shadow-[4px_4px_0_0_#1c1917] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_#1c1917] transition-transform">About</a>
            <a href="#projects" className="bg-white px-3 py-2 border-2 border-stone-900 shadow-[4px_4px_0_0_#1c1917] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_#1c1917] transition-transform">Projects</a>
            <a href="#contact" className="bg-stone-900 text-amber-100 px-3 py-2 border-2 border-stone-900 shadow-[4px_4px_0_0_#1c1917] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_0_#1c1917] transition-transform">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="py-10 border-t-2 border-stone-900 bg-white">
        <div className="mx-auto max-w-6xl px-6 text-sm text-stone-600 flex flex-col md:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} — Built with a wabi-sabi × neobrutalism spirit.</p>
          <p>日本語 / English</p>
        </div>
      </footer>
    </div>
  )
}

export default App
