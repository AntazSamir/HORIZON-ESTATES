'use client'

export default function UserLove() {
  const testimonials = [
    {
      name: 'Jennifer Martinez',
      role: 'First-time Buyer',
      text: 'The whole process felt effortless. From AI recommendations to digital signing, everything was streamlined.',
      highlight: 'Saved 3 weeks on paperwork',
    },
    {
      name: 'Robert Kim',
      role: 'Real Estate Investor',
      text: 'Portfolio analysis and market insights help me make data-driven decisions. Best investment platform ever.',
      highlight: 'Portfolio tracking',
    },
    {
      name: 'Lisa Thompson',
      role: 'Relocated Professional',
      text: 'The neighborhood deep-dive feature helped me understand the area before moving. Absolutely loved it!',
      highlight: 'Community insights',
    },
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900/50 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">
            See why our users love <span className="text-teal-500">Horizon</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              {/* Card */}
              <div className="glass p-8 rounded-3xl h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-sm text-teal-500 font-medium">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-yellow-500 text-sm">
                        star
                      </span>
                    ))}
                  </div>
                </div>

                <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6 flex-grow">
                  {testimonial.text}
                </p>

                <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-600 dark:text-teal-400 px-4 py-2 rounded-lg text-sm font-medium w-fit">
                  <span className="material-symbols-outlined text-base">check_circle</span>
                  {testimonial.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Elements */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl border-l-4 border-l-teal-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-2xl font-bold">
                98%
              </div>
              <div>
                <h3 className="font-bold text-xl">Satisfaction Rate</h3>
                <p className="text-sm text-slate-500">Our users rate us highly across all categories</p>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800/50 dark:to-slate-700/50 flex flex-col items-center justify-center">
            <div className="text-center">
              <h3 className="font-display text-6xl font-bold text-teal-500 mb-2">50K+</h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">Happy users finding their perfect home</p>
            </div>
          </div>
        </div>

        {/* Call-to-action */}
        <div className="mt-16 text-center">
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-xl transition-all active:scale-95">
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  )
}
