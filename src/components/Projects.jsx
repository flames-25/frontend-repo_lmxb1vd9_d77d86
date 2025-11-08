import { Globe, Code2, BookOpen } from 'lucide-react'

const projects = [
  {
    title: 'KanaQuest',
    desc: 'A minimalist hiragana/katakana trainer with spaced repetition and handwriting prompts.',
    tags: ['React', 'Tailwind', 'PWA'],
    link: '#',
    icon: BookOpen,
  },
  {
    title: 'Wabi Docs',
    desc: 'Opinionated docs theme inspired by washi paper and grid-based neobrutalism.',
    tags: ['VitePress', 'CSS Variables'],
    link: '#',
    icon: Globe,
  },
  {
    title: 'Sensei Tools',
    desc: 'Lesson planner + quiz builder for tutors. Offline-first with Markdown-driven content.',
    tags: ['Next.js', 'IndexedDB'],
    link: '#',
    icon: Code2,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-stone-900">Selected Work</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href={p.link} className="group block bg-white p-6 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1917] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_0_#1c1917] transition-transform">
              <div className="flex items-center gap-3">
                <div className="bg-amber-100 border-2 border-stone-900 p-2">
                  <p.icon size={18} />
                </div>
                <h3 className="font-semibold text-stone-900">{p.title}</h3>
              </div>
              <p className="mt-3 text-stone-700">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs bg-stone-100 border-2 border-stone-900 px-2 py-1">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
