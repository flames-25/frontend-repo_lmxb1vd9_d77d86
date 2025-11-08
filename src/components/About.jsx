export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-0 bg-gradient-to-b from-transparent via-amber-50 to-transparent" />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="bg-white p-6 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1917]">
            <h2 className="text-3xl font-semibold text-stone-900">About Me</h2>
            <p className="mt-4 text-stone-700 leading-relaxed">
              こんにちは。I'm a bilingual Japanese tutor and web developer. I blend pedagogy with product thinking: lessons are structured like lean sprints—clear goals, tight feedback loops, and visible progress. My code mirrors wabi-sabi: minimal, honest, and built to age gracefully.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-stone-800">
              {[
                'JLPT-focused pathways',
                'Conversation + culture',
                'React, Next.js, Tailwind',
                'FastAPI & MongoDB',
              ].map((x, i) => (
                <li key={i} className="bg-amber-100 px-3 py-2 border-2 border-stone-900 shadow-[4px_4px_0_0_#1c1917]">
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="bg-white p-6 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1917]">
              <h3 className="font-semibold text-stone-900">Teaching Philosophy</h3>
              <p className="mt-2 text-stone-700">Small, imperfect steps. We focus on rhythm over perfection: shadowing, spaced repetition, and real-world materials—menus, signage, manga panels.</p>
            </div>
            <div className="bg-white p-6 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1917]">
              <h3 className="font-semibold text-stone-900">Dev Approach</h3>
              <p className="mt-2 text-stone-700">Accessible interfaces, bold shapes, honest textures. I prefer clarity, performance, and thoughtful micro-interactions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
