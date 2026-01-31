export default function Footer() {
  return (
    <footer className="pt-24 pb-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="material-symbols-outlined text-teal-500 text-3xl">domain</span>
              <span className="font-display font-bold text-lg">HORIZON ESTATES</span>
            </div>
            <p className="text-sm text-slate-500 mb-4">The next-generation real estate marketplace</p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/properties" className="text-slate-500 hover:text-teal-500 transition-colors">Properties</a></li>
              <li><a href="/rent" className="text-slate-500 hover:text-teal-500 transition-colors">Rent</a></li>
              <li><a href="/sell" className="text-slate-500 hover:text-teal-500 transition-colors">Sell</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="text-slate-500 hover:text-teal-500 transition-colors">About</a></li>
              <li><a href="/blog" className="text-slate-500 hover:text-teal-500 transition-colors">Blog</a></li>
              <li><a href="/faq" className="text-slate-500 hover:text-teal-500 transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="text-slate-500 hover:text-teal-500 transition-colors">Contact</a></li>
              <li><a href="/privacy" className="text-slate-500 hover:text-teal-500 transition-colors">Privacy</a></li>
              <li><a href="/terms" className="text-slate-500 hover:text-teal-500 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-slate-500">© 2024 Horizon Estates. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-slate-500 hover:text-teal-500"><span className="material-symbols-outlined text-lg">public</span></a>
            <a href="#" className="text-slate-500 hover:text-teal-500"><span className="material-symbols-outlined text-lg">share</span></a>
            <a href="#" className="text-slate-500 hover:text-teal-500"><span className="material-symbols-outlined text-lg">mail</span></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
