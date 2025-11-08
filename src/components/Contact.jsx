import { Mail, MessageSquare, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thanks! I’ll get back to you within 24 hours.')
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="bg-white p-6 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1917]">
              <h2 className="text-3xl font-semibold text-stone-900">Let’s Work Together</h2>
              <p className="mt-3 text-stone-700">For tutoring, dev projects, or collaborations. I speak EN/JP. Include goals, timelines, and budget if relevant.</p>
              <div className="mt-4 flex flex-col gap-2 text-stone-800">
                <div className="inline-flex items-center gap-2"><Mail size={18}/> hello@yourdomain.com</div>
                <div className="inline-flex items-center gap-2"><Calendar size={18}/> GMT+7 • Remote-first</div>
                <div className="inline-flex items-center gap-2"><MessageSquare size={18}/> Discord/Meet/Zoom</div>
              </div>
            </div>
          </div>
          <div className="md:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white p-6 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1917] space-y-4">
              <div>
                <label className="block text-sm font-medium text-stone-800">Name</label>
                <input required className="mt-1 w-full border-2 border-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-800">Email</label>
                <input type="email" required className="mt-1 w-full border-2 border-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"/>
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-800">Message</label>
                <textarea rows="4" required className="mt-1 w-full border-2 border-stone-900 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-300"/>
              </div>
              <button className="bg-stone-900 text-amber-100 px-5 py-3 border-2 border-stone-900 shadow-[6px_6px_0_0_#1c1917] hover:translate-x-1 hover:translate-y-1 hover:shadow-[3px_3px_0_0_#1c1917] transition-transform">Send</button>
              {status && <p className="text-amber-900 bg-amber-100 border-2 border-stone-900 px-3 py-2 inline-block mt-2">{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
