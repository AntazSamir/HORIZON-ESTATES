'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'


import Link from 'next/link'

export default function SellPage() {
  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState(1)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setMounted(true)
    const auth = localStorage.getItem('isLoggedIn')
    setIsLoggedIn(auth === 'true')
  }, [])

  if (!mounted) return null

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
        <Navigation />
        <main className="flex-1 flex items-center justify-center px-4 py-32">
          <div className="max-w-md w-full text-center space-y-8 animate-in fade-in zoom-in-95 duration-700">
            <div className="w-24 h-24 bg-teal-500/10 rounded-[2rem] flex items-center justify-center mx-auto mb-8 animate-bounce">
              <span className="material-symbols-outlined text-5xl text-teal-500">lock_person</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight">Login Required</h1>
            <p className="text-slate-500 text-lg leading-relaxed">
              To ensure the security and quality of our listings, you must be signed in to list a property on Horizon Estates.
            </p>
            <div className="pt-4">
              <Link
                href="/login"
                className="inline-flex items-center gap-3 bg-teal-500 text-white font-black px-10 py-5 rounded-2xl shadow-2xl shadow-teal-500/20 hover:bg-teal-600 transition-all text-lg"
              >
                Sign In to Continue <span className="material-symbols-outlined">login</span>
              </Link>
            </div>
            <div className="pt-8">
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Trust & Security first</p>
            </div>
          </div>
        </main>
        <Footer />

      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />

      {/* Hero Header */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-teal-500/10 via-transparent to-slate-200/20 dark:to-slate-900/10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-bold tracking-widest uppercase mb-6">
            List Your Property
          </span>
          <h1 className="font-display text-5xl font-bold mb-6">
            Tell us about your <span className="text-teal-500">Masterpiece</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Provide the details below to get your property in front of millions of buyers.
          </p>
        </div>
      </section>

      {/* Multi-Step Intake Form */}
      <section className="pb-32 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <div className="flex justify-between items-center mb-12 px-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center flex-1 last:flex-none">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${step >= i ? 'bg-teal-500 text-white shadow-lg shadow-teal-500/20' : 'bg-slate-200 dark:bg-slate-800 text-slate-400'}`}>
                  {i}
                </div>
                {i < 4 && <div className={`h-1 flex-1 mx-2 rounded-full transition-all ${step > i ? 'bg-teal-500' : 'bg-slate-200 dark:bg-slate-800'}`}></div>}
              </div>
            ))}
          </div>

          <div className="glass p-8 md:p-12 rounded-[2.5rem] border border-white/20 dark:border-slate-800/50 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-8">
              {step === 1 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Basic Information</h2>
                    <p className="text-slate-500">Let's start with the essentials of your property.</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2 lg:col-span-2">
                      <label className="text-sm font-bold ml-1">Property Address</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">location_on</span>
                        <input
                          type="text"
                          placeholder="Street Address, City, State, Zip"
                          className="w-full bg-slate-100/50 dark:bg-slate-900/50 border-2 border-transparent focus:border-teal-500/50 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Listing Price</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">attach_money</span>
                        <input
                          type="number"
                          placeholder="Your asking price"
                          className="w-full bg-slate-100/50 dark:bg-slate-900/50 border-2 border-transparent focus:border-teal-500/50 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Property Type</label>
                      <div className="relative">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">home</span>
                        <select className="w-full bg-slate-100/50 dark:bg-slate-900/50 border-2 border-transparent focus:border-teal-500/50 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all appearance-none">
                          <option>Single Family Home</option>
                          <option>Condo / Apartment</option>
                          <option>Townhouse</option>
                          <option>Luxury Villa</option>
                          <option>Commercial</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Technical Details</h2>
                    <p className="text-slate-500">Provide the specific measurements and specs.</p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {[
                      { label: 'Bedrooms', icon: 'bed', placeholder: '0' },
                      { label: 'Bathrooms', icon: 'bathtub', placeholder: '0' },
                      { label: 'Total Sqft', icon: 'square_foot', placeholder: '0' },
                      { label: 'Year Built', icon: 'event', placeholder: '2024' },
                      { label: 'Lot Size', icon: 'landscape', placeholder: '0.00' },
                      { label: 'Garages', icon: 'directions_car', placeholder: '0' },
                      { label: 'Floors', icon: 'layers', placeholder: '1' },
                      { label: 'Basement', icon: 'house_siding', placeholder: 'None' },
                    ].map((item, id) => (
                      <div key={id} className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400 ml-1">{item.label}</label>
                        <div className="relative">
                          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl">{item.icon}</span>
                          <input
                            type="text"
                            placeholder={item.placeholder}
                            className="w-full bg-slate-100/50 dark:bg-slate-900/50 border-2 border-transparent focus:border-teal-500/50 rounded-xl py-3 pl-10 pr-3 outline-none transition-all text-sm font-bold"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Features & Amenities</h2>
                    <p className="text-slate-500">Check everything that adds value to your home.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      'Central Cooling', 'Swimming Pool', 'Smart Home System',
                      'Gym / Fitness Room', 'Fireplace', 'Wine Cellar',
                      'Home Theater', 'Lawn / Garden', 'Waterfront',
                      'High Ceilings', 'Hardwood Floors', 'Solar Panels'
                    ].map((feature) => (
                      <label key={feature} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 cursor-pointer hover:border-teal-500/50 transition-all group">
                        <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-teal-500 focus:ring-teal-500 cursor-pointer" />
                        <span className="font-semibold text-sm group-hover:text-teal-500 transition-colors">{feature}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {step === 4 && (
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">Description & Media</h2>
                    <p className="text-slate-500">Tell the story of your property and upload photos.</p>
                  </div>

                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Property Description</label>
                      <textarea
                        rows={6}
                        placeholder="Describe the unique features, history, and atmosphere of your home..."
                        className="w-full bg-slate-100/50 dark:bg-slate-900/50 border-2 border-transparent focus:border-teal-500/50 rounded-2xl p-6 outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-bold ml-1">Photos (Up to 20)</label>
                      <div className="border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-2xl p-12 text-center hover:border-teal-500/50 transition-all cursor-pointer bg-slate-50/50 dark:bg-slate-900/50 group">
                        <span className="material-symbols-outlined text-5xl text-slate-300 group-hover:text-teal-500 transition-colors mb-4">add_a_photo</span>
                        <p className="font-bold text-slate-500">Click or drag images here to upload</p>
                        <p className="text-xs text-slate-400 mt-2">Maximum file size 5MB. Supports JPG, PNG, WEBP.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => step > 1 && setStep(step - 1)}
                  className={`flex items-center gap-2 font-bold px-6 py-3 rounded-xl transition-all ${step === 1 ? 'opacity-0 pointer-events-none' : 'hover:bg-slate-100 dark:hover:bg-slate-900'}`}
                >
                  <span className="material-symbols-outlined">west</span> Back
                </button>

                {step < 4 ? (
                  <button
                    type="button"
                    onClick={() => setStep(step + 1)}
                    className="bg-teal-500 text-white font-bold px-8 py-3 rounded-xl shadow-lg shadow-teal-500/20 hover:bg-teal-600 active:scale-95 transition-all"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-slate-900 dark:bg-white dark:text-slate-950 text-white font-bold px-10 py-3 rounded-xl shadow-lg hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-all active:scale-95 flex items-center gap-2"
                  >
                    Final Submission <span className="material-symbols-outlined">rocket_launch</span>
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined p-3 rounded-xl bg-teal-500/10 text-teal-500">security</span>
              <div>
                <h4 className="font-bold text-sm">Secure Data</h4>
                <p className="text-xs text-slate-500">Your property information is protected by enterprise-grade encryption.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <span className="material-symbols-outlined p-3 rounded-xl bg-amber-500/10 text-amber-500">support_agent</span>
              <div>
                <h4 className="font-bold text-sm">Agent Review</h4>
                <p className="text-xs text-slate-500">Every listing is manually reviewed by a verified agent within 24 hours.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}
