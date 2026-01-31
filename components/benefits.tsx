export default function Benefits() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-teal-500 font-bold text-sm tracking-widest uppercase">Benefits</span>
          <h2 className="font-display text-4xl font-bold mt-4">Your all-purpose property tool</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Map-First Exploration */}
          <div className="glass p-10 rounded-3xl relative overflow-hidden group">
            <div className="flex flex-col h-full">
              <h3 className="font-display font-bold text-2xl mb-4">Map-First Exploration</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Navigate properties with our high-fidelity map interface. See local schools, crime rates, and property tax history in real-time.
              </p>
              <div className="mt-auto bg-slate-200 dark:bg-slate-800 h-64 rounded-2xl overflow-hidden">
                <img
                  alt="Map View"
                  className="w-full h-full object-cover opacity-60"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX74Ysoto-2qzju35q8rJEMRM0at7QsitlVCoP3FxdwLEqkRis1ZkueZkbgNkCFOYu2FODtEQirdUB5eLEdM1Tvh7OUSzKh_67xhi4QXoG_F2NNp1fpz6UeJpxC9hC67udDG3RHk4l24LVEJZ1a2eW373KQx1WsKh5nPgfnplmxaEalrZu0Y7zAJttUvKDHo8aGvOpODUz9pmFBkI5fNvCA5-TqITiFF7CNsxtO3DaIqJPaxytlQcBQq8ROocopschvs_KGJxIXkk"
                />
              </div>
            </div>
          </div>

          {/* AI Personalization */}
          <div className="glass p-10 rounded-3xl relative overflow-hidden group">
            <div className="flex flex-col h-full">
              <h3 className="font-display font-bold text-2xl mb-4">AI Personalization</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Our engine learns your preferences—from architectural style to commute times—to curate your daily "Perfect Match" feed.
              </p>
              <div className="mt-auto flex flex-col gap-3">
                <div className="glass p-4 rounded-xl flex items-center justify-between border-l-4 border-l-teal-500">
                  <span className="font-bold">Modern Farmhouse - Austin</span>
                  <span className="text-teal-500 font-bold">98% Match</span>
                </div>
                <div className="glass p-4 rounded-xl flex items-center justify-between opacity-70">
                  <span className="font-bold">Industrial Loft - NYC</span>
                  <span className="text-teal-500 font-bold">82% Match</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Features Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-teal-500 text-3xl mb-3 inline-block">image_search</span>
              <h4 className="font-bold text-sm mb-2">3D Walkthroughs</h4>
              <p className="text-xs text-slate-500">Experience properties from home</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-teal-500 text-3xl mb-3 inline-block">trending_up</span>
              <h4 className="font-bold text-sm mb-2">Market Trends</h4>
              <p className="text-xs text-slate-500">Real-time pricing analytics</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-teal-500 text-3xl mb-3 inline-block">gavel</span>
              <h4 className="font-bold text-sm mb-2">Digital Closing</h4>
              <p className="text-xs text-slate-500">Sign from anywhere, anytime</p>
            </div>
            <div className="glass p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
              <span className="material-symbols-outlined text-teal-500 text-3xl mb-3 inline-block">contract</span>
              <h4 className="font-bold text-sm mb-2">Smart Contracts</h4>
              <p className="text-xs text-slate-500">Transparent transactions</p>
            </div>
          </div>

          <div className="glass p-10 rounded-3xl bg-gradient-to-br from-teal-500/10 to-slate-100/5 dark:to-slate-900/10 flex flex-col items-center justify-center min-h-64">
            <div className="text-center">
              <span className="material-symbols-outlined text-teal-500 text-6xl mb-4 inline-block">video_library</span>
              <h4 className="font-display font-bold text-2xl mb-2">See It In Action</h4>
              <p className="text-slate-600 dark:text-slate-400 mb-6">Watch how Horizon Estates transforms the home buying experience</p>
              <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-lg transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
