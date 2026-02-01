'use client'

import React from 'react'

interface ThemeToggleProps {
  isDark?: boolean
  toggle: () => void
}

export function ThemeToggle({ isDark, toggle }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300 active:scale-95"
      aria-label="Toggle theme"
    >
      <div className={`absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-teal-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="relative h-5 w-5">
        {/* Sun Icon */}
        <svg
          className={`absolute inset-0 text-amber-500 transition-all duration-500 ease-in-out ${isDark ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>

        {/* Moon Icon */}
        <svg
          className={`absolute inset-0 text-indigo-400 transition-all duration-500 ease-in-out ${isDark ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </div>
    </button>
  )
}
