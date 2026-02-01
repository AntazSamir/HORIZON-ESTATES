import Link from "next/link"

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
              <li><Link href="/properties" className="text-slate-500 hover:text-teal-500 transition-colors">Properties</Link></li>
              <li><Link href="/rent" className="text-slate-500 hover:text-teal-500 transition-colors">Rent</Link></li>
              <li><Link href="/sell" className="text-slate-500 hover:text-teal-500 transition-colors">Sell</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-slate-500 hover:text-teal-500 transition-colors">About</Link></li>
              <li><Link href="/blog" className="text-slate-500 hover:text-teal-500 transition-colors">Blog</Link></li>
              <li><Link href="/faq" className="text-slate-500 hover:text-teal-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-4 uppercase">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/contact" className="text-slate-500 hover:text-teal-500 transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="text-slate-500 hover:text-teal-500 transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-slate-500 hover:text-teal-500 transition-colors">Terms</Link></li>
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
