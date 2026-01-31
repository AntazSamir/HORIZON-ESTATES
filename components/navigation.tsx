'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isDark, setIsDark] = useState(false)

  // Sync login and theme state
  useEffect(() => {
    const auth = localStorage.getItem('isLoggedIn')
    setIsLoggedIn(auth === 'true')

    // Check if dark mode is enabled
    const darkMode = document.documentElement.classList.contains('dark')
    setIsDark(darkMode)
  }, [])

  const toggleTheme = () => {
    const html = document.documentElement
    // Disable transitions
    html.classList.add('no-transition')

    if (html.classList.contains('dark')) {
      html.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      html.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }

    // Re-enable transitions after a frame
    setTimeout(() => {
      html.classList.remove('no-transition')
    }, 0)
  }

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn')
    setIsLoggedIn(false)
    window.location.reload()
  }

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const dropdowns = {
    properties: [
      { title: 'All Listings', description: 'Browse all available homes', href: '/properties', icon: 'list_alt' },
      { title: 'Featured', description: 'Hand-picked premium homes', href: '/properties', icon: 'stars' },
    ],
    rent: [
      { title: 'Rentals', description: 'Find your perfect rental', href: '/rent', icon: 'key' },
      { title: 'Short Term', description: 'Villas and apartments', href: '/rent', icon: 'calendar_month' },
    ],
    sell: [
      { title: 'Sell with Us', description: 'Get the best market price', href: '/sell', icon: 'sell' },
      { title: 'Home Valuation', description: 'Free instant AI appraisal', href: '/home-valuation', icon: 'calculate' },
      { title: 'Commercial', description: 'Investment opportunities', href: '/commercial', icon: 'corporate_fare' },
    ],
    about: [
      { title: 'About Us', description: 'Our story and mission', href: '/about', icon: 'info' },
      { title: 'Blog', description: 'Latest insights', href: '/blog', icon: 'article' },
      { title: 'FAQ', description: 'Common questions', href: '/faq', icon: 'quiz' },
    ]
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] glass border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity z-[110]">
            <span className="material-symbols-outlined text-teal-500 text-3xl">domain</span>
            <span className="font-display font-bold text-xl tracking-tight">
              HORIZON <span className="text-teal-500">ESTATES</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 font-medium text-sm">
            {/* Properties Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown('properties')}
                onMouseLeave={() => setActiveDropdown(null)}
                className={`hover:text-teal-500 transition-colors flex items-center gap-1 py-4 ${activeDropdown === 'properties' ? 'text-teal-500' : ''}`}
              >
                Properties
                <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${activeDropdown === 'properties' ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div
                onMouseEnter={() => setActiveDropdown('properties')}
                onMouseLeave={() => setActiveDropdown(null)}
                className={`absolute top-full left-0 w-64 glass rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-200 origin-top shadow-xl ${activeDropdown === 'properties' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}
              >
                <div className="p-2">
                  {dropdowns.properties.map((item, idx) => (
                    <Link key={idx} href={item.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-teal-500/10 dark:hover:bg-teal-500/20 transition-colors group">
                      <span className="material-symbols-outlined text-teal-500 text-xl">{item.icon}</span>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-500 transition-colors">{item.title}</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Rent Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown('rent')}
                onMouseLeave={() => setActiveDropdown(null)}
                className={`hover:text-teal-500 transition-colors flex items-center gap-1 py-4 ${activeDropdown === 'rent' ? 'text-teal-500' : ''}`}
              >
                Rent
                <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${activeDropdown === 'rent' ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div
                onMouseEnter={() => setActiveDropdown('rent')}
                onMouseLeave={() => setActiveDropdown(null)}
                className={`absolute top-full left-0 w-64 glass rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-200 origin-top shadow-xl ${activeDropdown === 'rent' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}
              >
                <div className="p-2">
                  {dropdowns.rent.map((item, idx) => (
                    <Link key={idx} href={item.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-teal-500/10 dark:hover:bg-teal-500/20 transition-colors group">
                      <span className="material-symbols-outlined text-teal-500 text-xl">{item.icon}</span>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-500 transition-colors">{item.title}</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Sell Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown('sell')}
                onMouseLeave={() => setActiveDropdown(null)}
                className={`hover:text-teal-500 transition-colors flex items-center gap-1 py-4 ${activeDropdown === 'sell' ? 'text-teal-500' : ''}`}
              >
                Sell
                <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${activeDropdown === 'sell' ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div
                onMouseEnter={() => setActiveDropdown('sell')}
                onMouseLeave={() => setActiveDropdown(null)}
                className={`absolute top-full left-0 w-64 glass rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-200 origin-top shadow-xl ${activeDropdown === 'sell' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}
              >
                <div className="p-2">
                  {dropdowns.sell.map((item, idx) => (
                    <Link key={idx} href={item.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-teal-500/10 dark:hover:bg-teal-500/20 transition-colors group">
                      <span className="material-symbols-outlined text-teal-500 text-xl">{item.icon}</span>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-500 transition-colors">{item.title}</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
                className={`hover:text-teal-500 transition-colors flex items-center gap-1 py-4 ${activeDropdown === 'about' ? 'text-teal-500' : ''}`}
              >
                About
                <span className={`material-symbols-outlined text-sm transition-transform duration-200 ${activeDropdown === 'about' ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
                className={`absolute top-full left-0 w-64 glass rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-200 origin-top shadow-xl ${activeDropdown === 'about' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}
              >
                <div className="p-2">
                  {dropdowns.about.map((item, idx) => (
                    <Link key={idx} href={item.href} className="flex items-start gap-3 p-3 rounded-lg hover:bg-teal-500/10 dark:hover:bg-teal-500/20 transition-colors group">
                      <span className="material-symbols-outlined text-teal-500 text-xl">{item.icon}</span>
                      <div>
                        <div className="font-bold text-slate-900 dark:text-slate-100 group-hover:text-teal-500 transition-colors">{item.title}</div>
                        <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{item.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link className="hover:text-teal-500 transition-colors" href="/contact">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
              {isLoggedIn ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-500/10 hover:text-red-500 transition-all"
                  >
                    Sign Out
                  </button>
                  <Link href="/sell" className="bg-teal-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-lg shadow-teal-500/20 hover:bg-teal-600 hover:shadow-teal-500/40 transition-all active:scale-95 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">sell</span>
                    List Property
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/login" className="text-sm font-semibold px-4 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all">
                    Log in
                  </Link>
                  <Link href="/signup" className="bg-teal-500 text-white text-sm font-semibold px-5 py-2.5 rounded-lg shadow-lg shadow-teal-500/20 hover:bg-teal-600 hover:shadow-teal-500/40 transition-all active:scale-95">
                    Get Started
                  </Link>
                </>
              )}
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <ThemeToggle isDark={isDark} toggle={toggleTheme} />

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-[110]"
                aria-label="Toggle Menu"
              >
                <span className="material-symbols-outlined text-2xl">
                  {isMobileMenuOpen ? 'close' : 'menu'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 z-[105] transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-slate-950/20 dark:bg-slate-950/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        {/* Menu Content */}
        <div className={`absolute right-0 top-0 h-screen w-4/5 max-w-sm bg-white dark:bg-slate-900 shadow-2xl transition-transform duration-300 ease-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full pt-20 pb-8 px-6">
            <div className="flex-1 space-y-4 overflow-y-auto pr-2">
              {Object.entries(dropdowns).map(([key, items]) => (
                <div key={key} className="space-y-3">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4">{key}</p>
                  <div className="space-y-1">
                    {items.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center gap-4 p-4 rounded-xl hover:bg-teal-50 dark:hover:bg-teal-900/20 group transition-all"
                      >
                        <span className="material-symbols-outlined text-teal-500">{item.icon}</span>
                        <div>
                          <div className="font-bold text-slate-900 dark:text-slate-100">{item.title}</div>
                          <div className="text-[10px] text-slate-500 dark:text-slate-400">{item.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 font-bold"
                >
                  <span>Contact Support</span>
                  <span className="material-symbols-outlined">mail</span>
                </Link>
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-100 dark:border-slate-800">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/sell"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-teal-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-500/20 active:scale-[0.98] transition-all text-center block"
                  >
                    List Your Property
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full bg-red-500/10 text-red-500 font-bold py-4 rounded-xl active:scale-[0.98] transition-all"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-xl active:scale-[0.98] transition-all text-center block"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full bg-teal-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-500/20 active:scale-[0.98] transition-all text-center block"
                  >
                    Get Started
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
