'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import Partners from '@/components/partners'
import HowItWorks from '@/components/how-it-works'
import Benefits from '@/components/benefits'
import Features from '@/components/features'
import Testimonials from '@/components/testimonials'
import SocialWall from '@/components/social-wall'
import UserLove from '@/components/user-love'
import FinalCTA from '@/components/final-cta'
import Footer from '@/components/footer'


export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 scroll-smooth">
      <Navigation />
      <HeroSection />
      <Partners />
      <HowItWorks />
      <Benefits />
      <Features />
      <Testimonials />
      <SocialWall />
      <UserLove />
      <FinalCTA />
      <Footer />

    </div>
  )
}
