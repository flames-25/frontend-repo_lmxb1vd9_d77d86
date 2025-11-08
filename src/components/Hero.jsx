import { Github, Linkedin, Mail, Globe } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[85vh] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-50 via-stone-50 to-stone-100" />
      <div className="absolute inset-0 opacity-60 mix-blend-multiply pointer-events-none" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI0OTY0MjR8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="inline-block bg-amber-100 text-amber-900 px-4 py-1 rounded-sm border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1917] mb-6">
          わびさび • Wabi-Sabi × Neobrutalism
        </div>

        <h1 className="font-semibold tracking-tight text-5xl md:text-6xl text-stone-900 leading-tight">
          Japanese Tutor & Web Developer
        </h1>
        <p className="mt-5 max-w-2xl text-lg md:text-xl text-stone-700">
          I teach authentic Japanese with cultural nuance, and craft purposeful web experiences. Simple, imperfect, and human — 侘び寂び。
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#contact" className="inline-flex items-center gap-2 bg-stone-900 text-amber-100 px-5 py-3 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1917] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_0_#1c1917] transition-transform">
            <Mail size={18} /> Contact Me
          </a>
          <a href="#projects" className="inline-flex items-center gap-2 bg-white text-stone-900 px-5 py-3 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1917] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_0_#1c1917] transition-transform">
            <Globe size={18} /> See Projects
          </a>
          <div className="flex items-center gap-2 ml-2">
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="bg-white p-3 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1917] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_0_#1c1917] transition-transform">
              <Github size={18} />
            </a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noreferrer" className="bg-white p-3 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1917] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_0_#1c1917] transition-transform">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { jp: '誠', en: 'Sincerity' },
            { jp: '簡', en: 'Simplicity' },
            { jp: '余白', en: 'Negative Space' },
            { jp: '手作り', en: 'Handmade' },
          ].map((v, i) => (
            <div key={i} className="bg-white/90 backdrop-blur-sm p-5 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1917]">
              <div className="text-2xl">{v.jp}</div>
              <div className="text-stone-600 text-sm">{v.en}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
