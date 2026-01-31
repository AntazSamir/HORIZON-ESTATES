'use client'

import React from "react"

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'


export default function ContactPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '', subject: 'general', message: '' })
    }, 3000)
  }

  if (!mounted) return null

  const contactMethods = [
    {
      icon: 'phone',
      title: 'Phone',
      detail: '+1 (888) HORIZON-1',
      description: 'Available Monday to Friday, 9 AM - 6 PM EST'
    },
    {
      icon: 'mail',
      title: 'Email',
      detail: 'support@horizonestates.com',
      description: 'We respond within 24 hours'
    },
    {
      icon: 'location_on',
      title: 'Office',
      detail: 'San Francisco, CA',
      description: 'Visit us by appointment'
    },
    {
      icon: 'chat',
      title: 'Live Chat',
      detail: 'Available 24/7',
      description: 'Instant support from our team'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Have questions? Our team is here to help you find the perfect home or investment opportunity.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactMethods.map((method, index) => (
              <div key={index} className="glass p-6 rounded-2xl text-center hover:shadow-lg transition-shadow">
                <span className="material-symbols-outlined text-teal-500 text-4xl mb-4 inline-block">{method.icon}</span>
                <h3 className="font-bold text-lg mb-2">{method.title}</h3>
                <p className="font-semibold text-teal-500 mb-2">{method.detail}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-8">Send us a Message</h2>
              {submitted && (
                <div className="mb-6 p-4 bg-teal-500/20 border border-teal-500 rounded-lg text-teal-700 dark:text-teal-300 font-semibold">
                  ✓ Thank you! We'll be in touch shortly.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block font-bold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div>
                  <label className="block font-bold mb-2">Subject</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="buying">Buying a Home</option>
                    <option value="selling">Selling a Home</option>
                    <option value="investing">Investment Opportunity</option>
                    <option value="support">Technical Support</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-6 rounded-lg transition-all active:scale-95"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map and Info */}
            <div>
              <h2 className="font-display text-3xl font-bold mb-8">Office Locations</h2>
              <div className="space-y-6">
                {[
                  {
                    city: 'San Francisco',
                    address: '123 Market Street, San Francisco, CA 94103',
                    phone: '+1 (415) 555-0100'
                  },
                  {
                    city: 'New York',
                    address: '456 Park Avenue, New York, NY 10022',
                    phone: '+1 (212) 555-0200'
                  },
                  {
                    city: 'Los Angeles',
                    address: '789 Sunset Boulevard, Los Angeles, CA 90028',
                    phone: '+1 (310) 555-0300'
                  }
                ].map((office, index) => (
                  <div key={index} className="glass p-6 rounded-2xl">
                    <h3 className="font-bold text-lg mb-2">{office.city}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-2 flex items-start gap-2">
                      <span className="material-symbols-outlined text-teal-500 text-5xl flex-shrink-0 mt-1">location_on</span>
                      <span>{office.address}</span>
                    </p>
                    <p className="text-teal-500 font-semibold flex items-center gap-2">
                      <span className="material-symbols-outlined">phone</span>
                      {office.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">Common Questions</h2>
          <div className="space-y-4">
            {[
              {
                q: 'How long does the home buying process take?',
                a: 'On average, 30-60 days from offer acceptance to closing. Our digital platform can accelerate this.'
              },
              {
                q: 'Do you offer financing options?',
                a: 'We partner with top lenders to provide competitive mortgage options directly through our platform.'
              },
              {
                q: 'Is there a fee for using Horizon Estates?',
                a: 'Our buyer portal is completely free. We earn through partnerships with sellers and agents.'
              }
            ].map((faq, index) => (
              <details key={index} className="glass p-6 rounded-lg cursor-pointer group">
                <summary className="font-bold flex items-center justify-between">
                  {faq.q}
                  <span className="material-symbols-outlined group-open:rotate-180 transition-transform">expand_more</span>
                </summary>
                <p className="text-slate-600 dark:text-slate-400 mt-4">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-500/10 to-slate-200/10 dark:from-teal-500/5 dark:to-slate-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Join thousands of satisfied customers in finding their perfect home.
          </p>
          <a
            href="/"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-xl transition-all active:scale-95"
          >
            Back to Home
          </a>
        </div>
      </section>

      <Footer />

    </div>
  )
}
