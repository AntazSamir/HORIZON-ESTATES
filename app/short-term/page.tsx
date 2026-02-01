import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

import FinancialCalculator from '@/components/financial-calculator'
import { properties } from '@/lib/properties'

export default function ShortTermPage() {
    const shortTermProperties = properties.filter(p => p.forRent && p.rentalType === 'short')

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-slate-900 dark:to-teal-950/20">
                <div className="max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-sm font-medium mb-4">
                        <span className="material-symbols-outlined text-lg">flight_takeoff</span>
                        Vacation Rentals & Short Stays
                    </div>
                    <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
                        Escape to <span className="text-teal-500 text-gradient">Paradise</span>
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        Discover curated short-term stays for your next getaway. From city lofts to beachfront villas, find your home away from home.
                    </p>
                </div>
            </section>

            {/* Properties Grid */}
            <section className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {shortTermProperties.map((property) => (
                            <div key={property.id} className="group glass rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 border border-white/20 dark:border-white/5">
                                <div className="relative overflow-hidden h-72">
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60"></div>

                                    <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md text-slate-900 dark:text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-sm flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm text-teal-500">star</span>
                                        4.9
                                    </div>

                                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                                        <div className="text-white">
                                            <p className="text-sm font-medium opacity-90">{property.location}</p>
                                            <p className="font-bold text-lg">{property.title}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Price per night</p>
                                            <p className="text-3xl font-bold text-teal-600 dark:text-teal-400 font-display">{property.price}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            {property.amenities.slice(0, 2).map((amenity, idx) => (
                                                <span key={idx} className="text-[10px] uppercase tracking-wider font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded">
                                                    {amenity}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-100 dark:border-slate-800 mb-6">
                                        <div className="text-center">
                                            <span className="material-symbols-outlined text-slate-400 mb-1">bed</span>
                                            <p className="text-sm font-semibold">{property.beds} Beds</p>
                                        </div>
                                        <div className="text-center border-l border-slate-100 dark:border-slate-800">
                                            <span className="material-symbols-outlined text-slate-400 mb-1">bathtub</span>
                                            <p className="text-sm font-semibold">{property.baths} Baths</p>
                                        </div>
                                        <div className="text-center border-l border-slate-100 dark:border-slate-800">
                                            <span className="material-symbols-outlined text-slate-400 mb-1">groups</span>
                                            <p className="text-sm font-semibold">1-{(property.beds * 2)} Guests</p>
                                        </div>
                                    </div>

                                    <Link href={`/properties/${property.id}`} className="block">
                                        <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 rounded-xl transition-all hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white hover:shadow-lg hover:shadow-teal-500/20 active:scale-[0.98] flex items-center justify-center gap-2 group-hover:gap-3">
                                            Book Now
                                            <span className="material-symbols-outlined text-lg transition-all">arrow_forward</span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="py-12 bg-white dark:bg-slate-900/50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: 'verified_user', label: 'Verified Listing' },
                            { icon: 'clean_hands', label: 'Deep Cleaning' },
                            { icon: 'support_agent', label: '24/7 Support' },
                            { icon: 'savings', label: 'Best Rate Guarantee' },
                        ].map((item, i) => (
                            <div key={i} className="flex flex-col items-center text-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-900/20 flex items-center justify-center text-teal-500">
                                    <span className="material-symbols-outlined">{item.icon}</span>
                                </div>
                                <span className="font-semibold text-sm">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
