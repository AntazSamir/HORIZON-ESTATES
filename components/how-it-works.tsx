export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Use our AI-powered search to find homes tailored to your lifestyle and investment goals.',
      icon: 'search_insights',
    },
    {
      number: '02',
      title: 'Explore',
      description: 'Take immersive 3D walkthroughs and explore neighborhood data without leaving your couch.',
      icon: 'visibility',
    },
    {
      number: '03',
      title: 'Secure',
      description: 'Handle offers, inspections, and closing digitally with our secure end-to-end platform.',
      icon: 'verified_user',
    },
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-teal-500 font-bold text-sm tracking-widest uppercase">How it works</span>
        <h2 className="font-display text-4xl font-bold mt-4 mb-16">Finding your dream home is easy</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="glass p-8 rounded-3xl text-left border-b-4 border-b-teal-500/30">
              <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-500 mb-6">
                <span className="material-symbols-outlined font-bold">{step.icon}</span>
              </div>
              <h3 className="font-display font-bold text-xl mb-4">
                {step.number}. {step.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">{step.description}</p>
              <div className="bg-white/50 dark:bg-slate-800/50 rounded-xl p-4 border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-slate-700"></div>
                  <div className="h-2 w-24 bg-slate-200 dark:bg-slate-700 rounded"></div>
                </div>
                <div className="h-20 w-full bg-slate-100 dark:bg-slate-700/50 rounded-lg"></div>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-16 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-8 py-4 rounded-xl font-bold transition-transform">
          Get Started Now
        </button>
      </div>
    </section>
  )
}
