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
              {/* Dynamic Illustration Area */}
              <div className="h-40 bg-white/50 dark:bg-slate-800/50 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden relative group-hover:border-teal-500/30 transition-colors">

                {/* Step 1: Discover Illustration - Smart Search UI */}
                {step.title === 'Discover' && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="w-full h-8 bg-white dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-600 flex items-center px-3 shadow-sm mb-4">
                      <div className="w-3 h-3 rounded-full bg-teal-500 mr-2"></div>
                      <div className="h-1.5 w-20 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                    </div>
                    <div className="w-full flex gap-2">
                      <div className="flex-1 h-16 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-600 p-2 shadow-sm">
                        <div className="w-full h-8 bg-slate-100 dark:bg-slate-800 rounded mb-2"></div>
                        <div className="h-1.5 w-10 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                      </div>
                      <div className="flex-1 h-16 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-600 p-2 shadow-sm opacity-50">
                        <div className="w-full h-8 bg-slate-100 dark:bg-slate-800 rounded mb-2"></div>
                        <div className="h-1.5 w-10 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                      </div>
                    </div>
                    {/* Floating Cursor/Pointer */}
                    <div className="absolute bottom-4 right-8 w-0 h-0 border-l-[12px] border-l-transparent border-b-[18px] border-b-teal-500 border-r-[6px] border-r-transparent -rotate-[15deg] drop-shadow-md"></div>
                  </div>
                )}

                {/* Step 2: Explore Illustration - 3D Viewport */}
                {step.title === 'Explore' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-100/50 dark:bg-slate-900/50">
                    <div className="relative w-20 h-20 border-2 border-teal-500/30 rounded-full flex items-center justify-center">
                      <div className="absolute inset-0 border-2 border-t-teal-500 border-r-transparent border-b-transparent border-l-transparent rounded-full rotate-45"></div>
                      <div className="w-12 h-12 bg-white dark:bg-slate-800 rounded-lg transform rotate-45 shadow-lg border border-slate-200 dark:border-slate-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-teal-500 text-2xl -rotate-45">360</span>
                      </div>
                      {/* Scanning beam */}
                      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-teal-500/50 shadow-[0_0_10px_rgba(20,184,166,0.5)] animate-[pulse_2s_infinite]"></div>
                    </div>
                  </div>
                )}

                {/* Step 3: Secure Illustration - Shield & Contract */}
                {step.title === 'Secure' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-20 h-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600 rounded-lg shadow-sm p-3 transform -rotate-6">
                      <div className="space-y-2">
                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                        <div className="h-1.5 w-3/4 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                        <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-700 rounded-full"></div>
                      </div>
                      <div className="absolute -bottom-3 -right-3 w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white dark:border-slate-900">
                        <span className="material-symbols-outlined text-white text-lg">lock</span>
                      </div>
                    </div>
                  </div>
                )}
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
