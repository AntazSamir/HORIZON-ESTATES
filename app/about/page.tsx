'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'


export default function AboutPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const values = [
    {
      icon: 'lightbulb',
      title: 'Innovation',
      description: 'We constantly push boundaries to bring cutting-edge technology to real estate.'
    },
    {
      icon: 'handshake',
      title: 'Integrity',
      description: 'Transparency and honesty guide every transaction and interaction.'
    },
    {
      icon: 'people',
      title: 'Community',
      description: 'We believe in building connections and fostering a supportive ecosystem.'
    },
    {
      icon: 'accessibility',
      title: 'Accessibility',
      description: 'Making real estate opportunities available to everyone, everywhere.'
    }
  ]

  const team = [
    {
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Marcus Johnson',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    },
    {
      name: 'James Wilson',
      role: 'VP of Product',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-8">
            The story behind <span className="text-gradient">Horizon Estates</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
            Founded in 2020, we set out to reimagine the real estate industry with technology, transparency, and a genuine commitment to helping people find their perfect home.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
              To democratize real estate by combining cutting-edge technology with human insight. We believe everyone deserves access to powerful tools and expert guidance in their property journey.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              Whether you're a first-time homebuyer, a seasoned investor, or somewhere in between, Horizon Estates is built with you in mind.
            </p>
          </div>
          <div className="glass p-12 rounded-3xl">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-teal-500 text-3xl flex-shrink-0">verified</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">50,000+</h3>
                  <p className="text-slate-600 dark:text-slate-400">Happy customers</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-teal-500 text-3xl flex-shrink-0">home</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">$50B+</h3>
                  <p className="text-slate-600 dark:text-slate-400">Properties transacted</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-teal-500 text-3xl flex-shrink-0">public</span>
                <div>
                  <h3 className="font-bold text-lg mb-1">150+</h3>
                  <p className="text-slate-600 dark:text-slate-400">Markets served globally</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-16">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="glass p-8 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <span className="material-symbols-outlined text-teal-500 text-4xl mb-4 inline-block">{value.icon}</span>
                <h3 className="font-bold text-xl mb-3">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                <p className="text-teal-500 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Dedicated to transforming real estate.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: '2020', title: 'Founded Horizon Estates', desc: 'Started with a vision to revolutionize real estate.' },
              { year: '2021', title: 'Launched AI Matching', desc: 'Introduced our proprietary AI algorithm.' },
              { year: '2022', title: 'Crossed 1M Users', desc: 'Reached one million users worldwide.' },
              { year: '2023', title: 'Digital Closing Launch', desc: 'Pioneered blockchain-based transactions.' },
              { year: '2024', title: 'Global Expansion', desc: 'Now serving 150+ markets across continents.' }
            ].map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold">{index + 1}</div>
                  {index < 4 && <div className="w-1 h-16 bg-gradient-to-b from-teal-500 to-transparent mt-2"></div>}
                </div>
                <div className="pt-2">
                  <p className="font-bold text-teal-500 text-sm mb-1">{milestone.year}</p>
                  <h3 className="font-bold text-lg mb-1">{milestone.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-500/10 to-slate-200/10 dark:from-teal-500/5 dark:to-slate-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Join the Horizon Estates Community</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Whether you're looking to buy, sell, or invest, we're here to support your real estate goals.
          </p>
          <a
            href="/"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-xl transition-all active:scale-95"
          >
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />

    </div>
  )
}
