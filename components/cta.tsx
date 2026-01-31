export default function CTA() {
  const categories = [
    { label: 'BUY', href: '#' },
    { label: 'EXPLORE', href: '#' },
    { label: 'PLAN', href: '#' },
  ]

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-900 -z-20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-700/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-5xl lg:text-6xl font-extrabold text-white mb-8">
              Everything connects. <span className="text-teal-300">Perfectly.</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-10">
              From discovering your dream property to completing the digital closing, Horizon Estates seamlessly connects every step of your real estate journey.
            </p>

            <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-xl transition-all active:scale-95 shadow-xl shadow-teal-500/30">
              Get Started Free
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="glass p-8 rounded-2xl border border-white/10 hover:border-teal-500/50 transition-colors">
              <span className="material-symbols-outlined text-teal-400 text-4xl mb-4 inline-block">home_app_logo</span>
              <h4 className="font-bold text-white text-lg mb-2">BUY</h4>
              <p className="text-sm text-slate-400">Discover and explore properties</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/10 hover:border-teal-500/50 transition-colors">
              <span className="material-symbols-outlined text-teal-400 text-4xl mb-4 inline-block">explore</span>
              <h4 className="font-bold text-white text-lg mb-2">EXPLORE</h4>
              <p className="text-sm text-slate-400">Tour with 3D walkthroughs</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/10 hover:border-teal-500/50 transition-colors">
              <span className="material-symbols-outlined text-teal-400 text-4xl mb-4 inline-block">analytics</span>
              <h4 className="font-bold text-white text-lg mb-2">PLAN</h4>
              <p className="text-sm text-slate-400">Financing and market insights</p>
            </div>
            <div className="glass p-8 rounded-2xl border border-white/10 hover:border-teal-500/50 transition-colors">
              <span className="material-symbols-outlined text-teal-400 text-4xl mb-4 inline-block">verified</span>
              <h4 className="font-bold text-white text-lg mb-2">SECURE</h4>
              <p className="text-sm text-slate-400">Digital closing and transactions</p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 pt-12 border-t border-slate-700 grid grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-teal-400 mb-2">50K+</div>
            <p className="text-sm text-slate-400 uppercase tracking-wide">Happy Customers</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-400 mb-2">$50B+</div>
            <p className="text-sm text-slate-400 uppercase tracking-wide">Homes Transacted</p>
          </div>
          <div>
            <div className="text-3xl font-bold text-teal-400 mb-2">98%</div>
            <p className="text-sm text-slate-400 uppercase tracking-wide">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
