'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { properties } from '@/lib/properties'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

import FinancialCalculator from '@/components/financial-calculator'
import { useState, useEffect } from 'react'

export default function PropertyDetailsPage() {
    const params = useParams()
    const router = useRouter()
    const id = Number(params.id)
    const property = properties.find((p) => p.id === id)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    if (!property) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
                    <p className="text-slate-600 dark:text-slate-400 mb-8">The property you're looking for doesn't exist or has been removed.</p>
                    <Link href="/rent" className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-xl transition-all">
                        Back to Listings
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navigation />

            <main className="pt-24 pb-16">
                {/* Back Button */}
                <div className="max-w-7xl mx-auto px-4 mb-8">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-teal-500 transition-colors group"
                    >
                        <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">arrow_back</span>
                        Back to listings
                    </button>
                </div>

                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-4 mb-8 lg:mb-12">
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
                        {/* Main Image */}
                        <div className="lg:col-span-2 relative rounded-2xl lg:rounded-3xl overflow-hidden h-[300px] sm:h-[400px] lg:h-[500px] shadow-xl lg:shadow-2xl group">
                            <img
                                src={property.image}
                                alt={property.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 lg:top-6 lg:left-6 flex gap-2">
                                <span className="bg-teal-500 text-white px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-xs lg:text-sm font-bold shadow-lg">
                                    {property.forRent ? 'For Rent' : 'For Sale'}
                                </span>
                                {property.featured && (
                                    <span className="bg-amber-500 text-white px-3 lg:px-4 py-1 lg:py-1.5 rounded-full text-xs lg:text-sm font-bold shadow-lg">
                                        Featured
                                    </span>
                                )}
                            </div>
                        </div>

                        {/* Price & Primary Info */}
                        <div className="glass p-6 lg:p-8 rounded-2xl lg:rounded-3xl flex flex-col justify-between border border-white/20 dark:border-slate-800/50 shadow-xl">
                            <div>
                                <h1 className="text-2xl lg:text-3xl font-bold mb-2">{property.title}</h1>
                                <p className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-4 lg:mb-6 text-sm lg:text-base">
                                    <span className="material-symbols-outlined text-teal-500 text-lg lg:text-xl">location_on</span>
                                    {property.location}
                                </p>
                                <div className="text-3xl lg:text-4xl font-bold text-teal-500 mb-6 lg:mb-8">{property.price}</div>

                                <div className="grid grid-cols-3 gap-3 lg:gap-4 mb-6 lg:mb-8">
                                    <div className="text-center p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50">
                                        <span className="material-symbols-outlined block text-teal-500 mb-1 text-xl">bed</span>
                                        <span className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-wider">{property.beds} Beds</span>
                                    </div>
                                    <div className="text-center p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50">
                                        <span className="material-symbols-outlined block text-teal-500 mb-1 text-xl">bathtub</span>
                                        <span className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-wider">{property.baths} Baths</span>
                                    </div>
                                    <div className="text-center p-3 lg:p-4 rounded-xl lg:rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50">
                                        <span className="material-symbols-outlined block text-teal-500 mb-1 text-xl">square_foot</span>
                                        <span className="text-[10px] sm:text-xs lg:text-sm font-bold uppercase tracking-wider">{property.sqft} sqft</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 lg:space-y-4">
                                <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-3.5 lg:py-4 rounded-xl lg:rounded-2xl transition-all active:scale-[0.98] shadow-lg shadow-teal-500/25">
                                    Contact Agent
                                </button>
                                <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-950 text-white font-bold py-3.5 lg:py-4 rounded-xl lg:rounded-2xl transition-all hover:bg-slate-800 dark:hover:bg-slate-200 active:scale-[0.98]">
                                    Schedule a Tour
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Details Content */}
                <section className="max-w-7xl mx-auto px-4 mb-16">
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            {/* Description */}
                            <div className="glass p-8 rounded-3xl border border-white/20 dark:border-slate-800/50">
                                <h2 className="text-2xl font-bold mb-6">Description</h2>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
                                    {property.description}
                                </p>
                            </div>

                            {/* Amenities */}
                            <div className="glass p-8 rounded-3xl border border-white/20 dark:border-slate-800/50">
                                <h2 className="text-2xl font-bold mb-6">Key Amenities</h2>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {property.amenities.map((amenity, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-100/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50">
                                            <span className="material-symbols-outlined text-teal-500">check_circle</span>
                                            <span className="font-medium">{amenity}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="glass p-8 rounded-3xl border border-white/20 dark:border-slate-800/50 shadow-xl sticky top-24">
                                <h3 className="text-xl font-bold mb-6">Inquire About This Property</h3>
                                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                    <div>
                                        <input
                                            type="text"
                                            placeholder="Your Name"
                                            className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            placeholder="Your Email"
                                            className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                                        />
                                    </div>
                                    <div>
                                        <textarea
                                            placeholder="Message"
                                            rows={4}
                                            className="w-full bg-slate-100 dark:bg-slate-900 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-teal-500 outline-none transition-all"
                                        ></textarea>
                                    </div>
                                    <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-950 text-white font-bold py-4 rounded-xl hover:bg-teal-500 hover:text-white transition-all">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Financial Clarity Section */}
                <div className="bg-slate-100 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                    <FinancialCalculator />
                </div>
            </main>

            <Footer />

        </div>
    )
}
