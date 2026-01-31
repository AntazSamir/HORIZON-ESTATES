'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function FinalCTA() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const auth = localStorage.getItem('isLoggedIn')
    setIsLoggedIn(auth === 'true')
  }, [])

  const handleStartJourney = () => {
    if (isLoggedIn) {
      router.push('/properties')
    } else {
      router.push('/login')
    }
  }

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-900"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-5xl lg:text-7xl font-extrabold text-white mb-8">
          Ready to find your <span className="text-teal-300">forever home?</span>
        </h2>

        <p className="text-xl text-slate-300 mb-12 leading-relaxed">
          Join thousands of others who found their perfect match with Horizon Estates. Start your journey today.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={handleStartJourney}
            className="w-full sm:w-auto bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all active:scale-95 shadow-2xl shadow-teal-500/30"
          >
            Start Your Journey
          </button>
          <button
            onClick={() => router.push('/contact')}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-10 rounded-xl text-lg transition-all border border-white/20"
          >
            Talk to an Agent
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-teal-300 mb-2">50K+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">Happy Customers</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-teal-300 mb-2">$50B+</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">Homes Transacted</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl font-bold text-teal-300 mb-2">4.9/5</div>
            <div className="text-sm text-slate-400 uppercase tracking-wide">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  )
}
