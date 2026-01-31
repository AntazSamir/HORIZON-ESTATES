export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-teal-50 dark:from-teal-950/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block py-1 px-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-bold tracking-widest uppercase mb-6">
              Redefining Real Estate
            </span>
            <h1 className="font-display text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8">
              The better way to <span className="text-gradient">find your next home.</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-xl">
              A fully customizable marketplace for individuals and investors. Experience AI-driven searches, 3D walkthroughs, and seamless digital closing.
            </p>

            {/* Search Bar */}
            <div className="glass p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2">
              <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 py-3 md:py-0">
                <span className="material-symbols-outlined text-slate-400 mr-2">search</span>
                <input
                  className="bg-transparent border-none focus:ring-0 w-full text-slate-900 dark:text-white placeholder:text-slate-500"
                  placeholder="Location, Zip, or Neighborhood"
                  type="text"
                />
              </div>
              <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700 py-3 md:py-0">
                <span className="material-symbols-outlined text-slate-400 mr-2">home_work</span>
                <select className="bg-transparent border-none focus:ring-0 w-full text-slate-900 dark:text-white appearance-none">
                  <option>Property Type</option>
                  <option>Luxury Villa</option>
                  <option>Penthouse</option>
                  <option>Smart Condo</option>
                </select>
              </div>
              <button className="bg-teal-500 text-white font-bold py-4 px-8 rounded-xl hover:bg-teal-600 transition-colors">
                Search
              </button>
            </div>

            <p className="mt-4 text-sm text-slate-500 dark:text-slate-500">
              Popular: Malibu Penthouses, Austin Smart Homes, Miami Beach Front
            </p>
          </div>

          {/* Featured Property */}
          <div className="relative">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                alt="Luxury Villa"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI8fgkjw1zg0i3Nun4FH6yetsQwVmnuDEyeDJAhjQ23TCELwAEQ88XuxKa9x1g4L7haIS5PMR6UVEzMiMGOInshjpVpgr1hsLILp_bNCJ4_Bhg6wvMnAVEk5x3AAQ5tm0E-Uo1wovOhp6XshWxECMphM4nQsZ8MyOheYLlQI0CJz2gZ7NSvJDSVovdnpaxpTs5MJj5aWDh1unV1D2HHsGFXrMBUimPumgVsgEUy7c8QIEq96lKn-ktN-XE9GRelplJTcwc-vTJ91c"
              />
              <div className="absolute bottom-6 left-6 right-6 glass p-6 rounded-2xl">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-display font-bold text-xl">Azure Bay Residence</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 flex items-center">
                      <span className="material-symbols-outlined text-sm mr-1">location_on</span> Malibu, California
                    </p>
                  </div>
                  <div className="text-teal-500 font-bold text-xl">$4,250,000</div>
                </div>
                <div className="flex gap-4 border-t border-slate-200 dark:border-slate-700 pt-4">
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <span className="material-symbols-outlined text-lg">bed</span> 5 Bed
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <span className="material-symbols-outlined text-lg">bathtub</span> 4 Bath
                  </div>
                  <div className="flex items-center gap-1 text-sm font-medium">
                    <span className="material-symbols-outlined text-lg">square_foot</span> 4,500 sqft
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
