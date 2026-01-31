'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'


export default function HomeValuationPage() {
    const [mounted, setMounted] = useState(false)
    const [step, setStep] = useState(1)
    const [isCalculating, setIsCalculating] = useState(false)
    const [showResults, setShowResults] = useState(false)

    // Detailed State Management
    const [formData, setFormData] = useState({
        // Core details
        type: 'house',
        city: '',
        area: '',
        neighborhood: '',
        size: '',
        beds: '3',
        baths: '2',
        floorLevel: '',
        yearBuilt: '2015',
        condition: 'good',

        // Land & Legal
        landSize: '',
        ownership: 'freehold',
        legalStatus: 'approved',
        facing: 'east',

        // Features & Proximity
        amenities: [] as string[],
        deteriorants: [] as string[],
        proximity: {
            schools: 'medium',
            hospitals: 'medium',
            transport: 'medium',
            commercial: 'medium'
        }
    })

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleValuationSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setIsCalculating(true)
        setShowResults(false)

        // Complex AI simulation
        setTimeout(() => {
            setIsCalculating(false)
            setShowResults(true)
            window.scrollTo({ top: 800, behavior: 'smooth' })
        }, 4000)
    }

    const toggleItem = (list: 'amenities' | 'deteriorants', item: string) => {
        setFormData(prev => ({
            ...prev,
            [list]: prev[list].includes(item)
                ? prev[list].filter(i => i !== item)
                : [...prev[list], item]
        }))
    }

    if (!mounted) return null

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 scroll-smooth">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-teal-500/10 via-transparent to-slate-200/20 dark:to-slate-900/10">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="inline-block py-1 px-3 rounded-full bg-teal-100 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400 text-xs font-bold tracking-widest uppercase mb-6">
                        Institutional Grade Analysis
                    </span>
                    <h1 className="font-display text-5xl md:text-6xl font-black mb-6 leading-tight">
                        The Industry's Most <span className="text-teal-500 underline decoration-teal-500/20 underline-offset-8">Precise</span> Valuation
                    </h1>
                    <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
                        Our neural network analyzes 200+ variables including ownership legality, neighborhood demand, and local proximity data.
                    </p>

                    {/* Trust Logos (As Seen In) */}
                    <div className="pt-8 border-t border-slate-200/50 dark:border-slate-800/50">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8">As Featured In</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-30 dark:opacity-20 hover:opacity-100 transition-opacity grayscale">
                            <span className="font-serif text-xl font-bold tracking-tighter">THE WALL STREET JOURNAL</span>
                            <span className="font-display text-2xl font-black tracking-tight">Bloomberg</span>
                            <span className="font-sans text-xl font-black uppercase italic">Forbes</span>
                            <span className="font-display text-2xl font-bold">TechCrunch</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Trust Our Data */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="glass p-8 rounded-3xl border border-teal-500/10 hover:border-teal-500/30 transition-all">
                            <span className="material-symbols-outlined text-4xl text-teal-500 mb-6">database</span>
                            <h3 className="text-xl font-bold mb-4">MLS Direct Integration</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">Unlike public estimators, we pull live data directly from Multiple Listing Services (MLS) and verified tax assessor records to ensure sub-meter accuracy.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-teal-500/10 hover:border-teal-500/30 transition-all">
                            <span className="material-symbols-outlined text-4xl text-teal-500 mb-6">psychology</span>
                            <h3 className="text-xl font-bold mb-4">Neural Market Prediction</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">Our AI doesn't just look at past sales. It analyzes hyperlocal demand signals, urban development plans, and economic shifts to predict future value cycles.</p>
                        </div>
                        <div className="glass p-8 rounded-3xl border border-teal-500/10 hover:border-teal-500/30 transition-all">
                            <span className="material-symbols-outlined text-4xl text-teal-500 mb-6">encrypted</span>
                            <h3 className="text-xl font-bold mb-4">Consumer Data Vault</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">Your property data is yours. We use bank-level AES-256 encryption. We never sell your personal information or valuation reports to third-party advertisers.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Valuation Engine */}
            <section className="pb-32 px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Progress Multi-stepper */}
                    <div className="flex justify-between items-center mb-12 px-2 max-w-2xl mx-auto">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="flex items-center flex-1 last:flex-none group">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-bold transition-all duration-500 ${step >= i ? 'bg-teal-500 text-white shadow-xl shadow-teal-500/30 border-0' : 'bg-slate-100 dark:bg-slate-900 text-slate-400 border border-slate-200 dark:border-slate-800'}`}>
                                    {step > i ? <span className="material-symbols-outlined">check</span> : i}
                                </div>
                                {i < 3 && <div className={`h-1 flex-1 mx-4 rounded-full transition-all duration-700 ${step > i ? 'bg-teal-500' : 'bg-slate-200 dark:bg-slate-800'}`}></div>}
                            </div>
                        ))}
                    </div>

                    <div className="glass p-8 md:p-14 rounded-[3.5rem] border border-white/20 dark:border-slate-800 shadow-2xl relative">
                        <form onSubmit={handleValuationSubmit} className="space-y-12">

                            {/* Step 1: Core Property Details */}
                            {step === 1 && (
                                <div className="animate-in fade-in slide-in-from-right-8 duration-700">
                                    <div className="flex items-center gap-4 mb-10">
                                        <span className="material-symbols-outlined p-4 bg-teal-500/10 text-teal-500 rounded-2xl">home_work</span>
                                        <div>
                                            <h2 className="text-3xl font-bold">Core Property Specs</h2>
                                            <p className="text-slate-500 text-sm italic">Define the physical foundation of your home.</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Structure Type</label>
                                            <select
                                                value={formData.type}
                                                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                                                className="w-full bg-slate-100/50 dark:bg-slate-900 border-2 border-transparent focus:border-teal-500/50 rounded-2xl py-4 px-6 outline-none transition-all font-bold appearance-none cursor-pointer"
                                            >
                                                <option value="apartment">Apartment / Flat</option>
                                                <option value="house">Detached House</option>
                                                <option value="duplex">Duplex / Penthouse</option>
                                                <option value="commercial">Commercial Unit</option>
                                            </select>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">City / Region</label>
                                            <input
                                                type="text" placeholder="e.g. New York"
                                                className="w-full bg-slate-100/50 dark:bg-slate-900 border-2 border-transparent focus:border-teal-500/50 rounded-2xl py-4 px-6 outline-none transition-all font-bold"
                                                value={formData.city}
                                                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Area / Neighborhood</label>
                                            <input
                                                type="text" placeholder="e.g. Manhattan"
                                                className="w-full bg-slate-100/50 dark:bg-slate-900 border-2 border-transparent focus:border-teal-500/50 rounded-2xl py-4 px-6 outline-none transition-all font-bold"
                                                value={formData.area}
                                                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Internal Area (sq ft)</label>
                                            <input
                                                type="number" placeholder="2400"
                                                className="w-full bg-slate-100/50 dark:bg-slate-900 border-2 border-transparent focus:border-teal-500/50 rounded-2xl py-4 px-6 outline-none transition-all font-bold"
                                                value={formData.size}
                                                onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Beds</label>
                                                <input type="number" min="0" value={formData.beds} onChange={(e) => setFormData({ ...formData, beds: e.target.value })} className="w-full bg-slate-100/50 dark:bg-slate-900 border-none rounded-2xl py-4 px-6 font-bold" />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Baths</label>
                                                <input type="number" min="0" value={formData.baths} onChange={(e) => setFormData({ ...formData, baths: e.target.value })} className="w-full bg-slate-100/50 dark:bg-slate-900 border-none rounded-2xl py-4 px-6 font-bold" />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Year Built</label>
                                            <input type="number" value={formData.yearBuilt} onChange={(e) => setFormData({ ...formData, yearBuilt: e.target.value })} className="w-full bg-slate-100/50 dark:bg-slate-900 border-none rounded-2xl py-4 px-6 font-bold" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 2: Land, Legal & Facing */}
                            {step === 2 && (
                                <div className="animate-in fade-in slide-in-from-right-8 duration-700">
                                    <div className="flex items-center gap-4 mb-10">
                                        <span className="material-symbols-outlined p-4 bg-teal-500/10 text-teal-500 rounded-2xl">gavel</span>
                                        <div>
                                            <h2 className="text-3xl font-bold">Land & Legal Assets</h2>
                                            <p className="text-slate-500 text-sm italic">Ownership structure and legal standing determine marketability.</p>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Ownership Type</label>
                                            <div className="flex bg-slate-100/50 dark:bg-slate-900 p-1.5 rounded-2xl">
                                                {['freehold', 'leasehold'].map(o => (
                                                    <button
                                                        key={o} type="button"
                                                        onClick={() => setFormData({ ...formData, ownership: o })}
                                                        className={`flex-1 py-3 rounded-xl font-bold text-xs uppercase transition-all ${formData.ownership === o ? 'bg-teal-500 text-white shadow-lg' : 'text-slate-400'}`}
                                                    >
                                                        {o}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Facing Direction</label>
                                            <select
                                                value={formData.facing}
                                                onChange={(e) => setFormData({ ...formData, facing: e.target.value })}
                                                className="w-full bg-slate-100/50 dark:bg-slate-900 border-none rounded-2xl py-4 px-6 font-bold appearance-none cursor-pointer"
                                            >
                                                <option value="north">North</option>
                                                <option value="south">South</option>
                                                <option value="east">East</option>
                                                <option value="west">West</option>
                                            </select>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Legal Status</label>
                                            <select
                                                value={formData.legalStatus}
                                                onChange={(e) => setFormData({ ...formData, legalStatus: e.target.value })}
                                                className="w-full bg-slate-100/50 dark:bg-slate-900 border-none rounded-2xl py-4 px-6 font-bold appearance-none cursor-pointer"
                                            >
                                                <option value="approved">Fully Approved / Clear</option>
                                                <option value="pending">Approval Pending</option>
                                                <option value="partial">Partially Verified</option>
                                            </select>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Land Size (Acres/Sqft)</label>
                                            <input
                                                type="text" placeholder="0.25 (optional)"
                                                className="w-full bg-slate-100/50 dark:bg-slate-900 border-none rounded-2xl py-4 px-6 font-bold outline-none"
                                                value={formData.landSize}
                                                onChange={(e) => setFormData({ ...formData, landSize: e.target.value })}
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Floor Level</label>
                                            <input
                                                type="number" placeholder="4"
                                                className="w-full bg-slate-100/50 dark:bg-slate-900 border-none rounded-2xl py-4 px-6 font-bold outline-none"
                                                value={formData.floorLevel}
                                                onChange={(e) => setFormData({ ...formData, floorLevel: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Step 3: Amenities & Proximity */}
                            {step === 3 && (
                                <div className="animate-in fade-in slide-in-from-right-8 duration-700">
                                    <div className="flex items-center gap-4 mb-10">
                                        <span className="material-symbols-outlined p-4 bg-teal-500/10 text-teal-500 rounded-2xl">verified</span>
                                        <div>
                                            <h2 className="text-3xl font-bold">Premium Boosters & Deteriorants</h2>
                                            <p className="text-slate-500 text-sm italic">Smart features and neighborhood acoustics finalize the value.</p>
                                        </div>
                                    </div>

                                    <div className="space-y-10">
                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-teal-500">Positive Value Multipliers</h4>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                                {[
                                                    { id: 'parking', label: 'Dedicated Parking', icon: 'local_parking' },
                                                    { id: 'elevator', label: 'Elevator Access', icon: 'elevator' },
                                                    { id: 'security', label: '24/7 Security', icon: 'security' },
                                                    { id: 'balcony', label: 'Balcony / Rooftop', icon: 'balcony' },
                                                    { id: 'furnished', label: 'Fully Furnished', icon: 'chair' },
                                                    { id: 'smart', label: 'Smart Home / Solar', icon: 'sunny' },
                                                    { id: 'garden', label: 'Private Garden', icon: 'park' },
                                                    { id: 'pool', label: 'Swimming Pool', icon: 'pool' }
                                                ].map((item) => (
                                                    <button
                                                        key={item.id} type="button"
                                                        onClick={() => toggleItem('amenities', item.id)}
                                                        className={`p-5 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-3 ${formData.amenities.includes(item.id) ? 'border-teal-500 bg-teal-500/5 text-teal-500 shadow-lg' : 'border-slate-100 dark:border-slate-800 text-slate-400 hover:border-teal-500/30'}`}
                                                    >
                                                        <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                                        <span className="text-[10px] font-black uppercase text-center leading-tight">{item.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="space-y-4">
                                            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-red-500/60">Risk & Condition Factors</h4>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {[
                                                    { id: 'noise', label: 'High Noise Pollution', icon: 'volume_up' },
                                                    { id: 'access', label: 'Restricted Road Access', icon: 'no_road' },
                                                    { id: 'flood', label: 'Flood-Prone Zone', icon: 'flood' },
                                                    { id: 'maintenance', label: 'Structural Cracks / Aging', icon: 'construction' },
                                                    { id: 'pipes', label: 'Plumbing / Electrical Debt', icon: 'plumbing' }
                                                ].map((item) => (
                                                    <button
                                                        key={item.id} type="button"
                                                        onClick={() => toggleItem('deteriorants', item.id)}
                                                        className={`p-5 rounded-3xl border-2 transition-all flex items-center gap-4 ${formData.deteriorants.includes(item.id) ? 'border-red-500 bg-red-500/5 text-red-500 shadow-md' : 'border-slate-100 dark:border-slate-800 text-slate-400 hover:border-red-500/20'}`}
                                                    >
                                                        <span className="material-symbols-outlined text-xl">{item.icon}</span>
                                                        <span className="text-[10px] font-black uppercase leading-none">{item.label}</span>
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Form Navigation */}
                            <div className="flex gap-4 pt-12 border-t border-slate-100 dark:border-slate-800">
                                {step > 1 && (
                                    <button
                                        type="button" onClick={() => setStep(step - 1)}
                                        className="flex-1 py-5 rounded-2xl font-bold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all hover:bg-slate-200"
                                    >
                                        Previous Step
                                    </button>
                                )}

                                {step < 3 ? (
                                    <button
                                        type="button" onClick={() => setStep(step + 1)}
                                        className="flex-[2] py-5 rounded-2xl font-black bg-slate-900 dark:bg-white text-white dark:text-slate-950 transition-all hover:bg-teal-500 hover:text-white"
                                    >
                                        Next Calculation Phase
                                    </button>
                                ) : (
                                    <button
                                        type="submit" disabled={isCalculating}
                                        className="flex-[3] py-5 rounded-2xl font-black bg-teal-500 hover:bg-teal-600 text-white shadow-2xl shadow-teal-500/30 transition-all active:scale-95 text-lg flex items-center justify-center gap-3"
                                    >
                                        {isCalculating ? (
                                            <>
                                                <span className="animate-spin inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"></span>
                                                Compiling Market Micro-Data...
                                            </>
                                        ) : (
                                            <>Generate Valuation Report <span className="material-symbols-outlined">rocket_launch</span></>
                                        )}
                                    </button>
                                )}
                            </div>
                        </form>
                    </div>

                    <div className="mt-12 text-center text-slate-400 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-4">
                        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                        99% Data Freshness Accuracy
                        <div className="h-px bg-slate-200 dark:bg-slate-800 flex-1"></div>
                    </div>
                </div>
            </section>

            {/* Results Rendering */}
            {showResults && (
                <section className="py-24 px-4 bg-teal-500/5 animate-in zoom-in-95 fade-in duration-700 scroll-mt-32">
                    <div className="max-w-4xl mx-auto space-y-12">

                        {/* Main Value Display */}
                        <div className="glass p-12 md:p-20 rounded-[4rem] border-2 border-teal-500/20 text-center relative overflow-hidden shadow-2xl">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full -mr-40 -mt-40 blur-3xl animate-pulse"></div>

                            <div className="flex items-center justify-center gap-3 text-teal-500 font-bold tracking-widest text-sm mb-6">
                                <span className="material-symbols-outlined text-lg">verified</span>
                                PEAK ALGORITHM CONFIDENCE
                            </div>

                            <div className="space-y-2 mb-10">
                                <div className="text-xl font-bold text-slate-400">Market Value Range</div>
                                <div className="text-6xl md:text-8xl font-black tabular-nums tracking-tighter">$1,145,000 – $1,280,000</div>
                                <div className="text-teal-500 font-black text-2xl pt-2">Weighted Fair Value: $1,212,500</div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-10 border-t border-slate-100 dark:border-slate-800 max-w-2xl mx-auto">
                                <div>
                                    <div className="text-[10px] font-black uppercase text-slate-400 mb-2">Confidence</div>
                                    <div className="text-xl font-bold text-teal-600">High (96%)</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase text-slate-400 mb-2">Price / Sqft</div>
                                    <div className="text-xl font-bold">$492.50</div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase text-slate-400 mb-2">Market Trend</div>
                                    <div className="text-xl font-bold flex items-center justify-center gap-1 text-emerald-500">
                                        Rising <span className="material-symbols-outlined text-sm">trending_up</span>
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[10px] font-black uppercase text-slate-400 mb-2">Demand Level</div>
                                    <div className="text-xl font-bold text-amber-500">Intense</div>
                                </div>
                            </div>
                        </div>

                        {/* Detailed Trust Breakdown */}
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="glass p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-teal-500">account_balance_wallet</span>
                                    Pricing Breakdown
                                </h3>
                                <div className="space-y-5">
                                    {[
                                        { label: 'Baseline (Neighborhood Median)', value: '$1,020,000', type: 'neutral' },
                                        { label: 'Condition & Physical Specs', value: '+$145,000', type: 'positive' },
                                        { label: 'Ownership & Legal Premium', value: '+$50,000', type: 'positive' },
                                        { label: 'Amenity Score Adjustments', value: '+$22,500', type: 'positive' },
                                        { label: 'Noise & Environmental Risks', value: '-$25,000', type: 'negative' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex justify-between items-center text-sm">
                                            <span className="text-slate-500">{item.label}</span>
                                            <span className={`font-black ${item.type === 'positive' ? 'text-emerald-500' : item.type === 'negative' ? 'text-red-500' : 'text-slate-900 dark:text-white'}`}>
                                                {item.value}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="glass p-10 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 to-transparent"></div>
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-teal-500">near_me</span>
                                    Proximity Intelligence
                                </h3>
                                <div className="space-y-6">
                                    {[
                                        { label: 'Educational Facilities', rating: 92, icon: 'school' },
                                        { label: 'Healthcare Access', rating: 78, icon: 'medical_services' },
                                        { label: 'Rapid Transit Links', rating: 85, icon: 'train' },
                                        { label: 'Commercial Expansion', rating: 40, icon: 'storefront' }
                                    ].map((p, idx) => (
                                        <div key={idx} className="space-y-2">
                                            <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                                                <span className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-sm">{p.icon}</span> {p.label}
                                                </span>
                                                <span>{p.rating}% Impact</span>
                                            </div>
                                            <div className="h-1.5 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden">
                                                <div className="h-full bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.3)] transition-all duration-1000" style={{ width: `${p.rating}%` }}></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Action Items */}
                        <div className="text-center py-8">
                            <p className="text-slate-400 text-sm mb-8">Data last synchronized: Today, 13:42 GMT</p>
                            <div className="flex flex-wrap justify-center gap-6">
                                <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-10 py-5 rounded-2xl font-black shadow-2xl hover:bg-teal-500 hover:text-white transition-all">
                                    Download Full 18-Page PDF
                                </button>
                                <button className="glass border-2 border-teal-500/30 text-teal-600 dark:text-teal-400 px-10 py-5 rounded-2xl font-black transition-all hover:bg-teal-500 hover:text-white">
                                    Request Physical Inspection
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Enhanced Trust Section */}
            <section className="py-32 px-4 border-t border-slate-100 dark:border-slate-800 bg-slate-100/30 dark:bg-slate-900/10">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className="text-4xl font-black mb-8 leading-tight">Human Intelligence <br /><span className="text-teal-500 font-serif italic font-normal">Meets Silicon Precision</span></h2>
                            <p className="text-slate-600 dark:text-slate-400 mb-10 text-lg leading-relaxed">
                                AI is powerful, but it doesn't walk the halls. Our results are cross-calibrated weekly by a board of licensed appraisers with over 50 years of combined experience in high-net-worth real estate.
                            </p>
                            <div className="space-y-6">
                                {[
                                    { title: 'ISO 27001 Certified', desc: 'Global standard for information security management.' },
                                    { title: 'SOC 2 Type II Compliant', desc: 'Verified data privacy and system availability.' },
                                    { title: 'NAR Recognized Partner', desc: 'Official alliance with real estate excellence.' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <span className="material-symbols-outlined text-teal-500">verified_user</span>
                                        <div>
                                            <h4 className="font-bold text-sm">{item.title}</h4>
                                            <p className="text-xs text-slate-500">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-teal-500/20 blur-[120px] rounded-full"></div>
                            <div className="glass p-12 rounded-[3.5rem] border border-white/20 relative">
                                <div className="space-y-8">
                                    <div className="flex items-center gap-6">
                                        <div className="w-14 h-14 rounded-2xl bg-teal-500 flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                                            <span className="material-symbols-outlined">analytics</span>
                                        </div>
                                        <h3 className="text-2xl font-bold">Horizon AI Index</h3>
                                    </div>
                                    <div className="space-y-4">
                                        <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                                            <span>Current Accuracy Rating</span>
                                            <span className="text-teal-500">99.2%</span>
                                        </div>
                                        <div className="h-4 bg-slate-100 dark:bg-slate-900 rounded-full overflow-hidden p-1">
                                            <div className="h-full bg-teal-500 rounded-full w-[99.2%] shadow-inner"></div>
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="bg-slate-100/50 dark:bg-slate-900/50 p-6 rounded-3xl">
                                            <div className="text-3xl font-black mb-1">1.2M</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Reports Run</div>
                                        </div>
                                        <div className="bg-slate-100/50 dark:bg-slate-900/50 p-6 rounded-3xl">
                                            <div className="text-3xl font-black mb-1">&lt;$5k</div>
                                            <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. Deviation</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <h2 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-16">Global Verification Partners</h2>
                        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                            {['FINANCE PRO', 'LUXURY INDEX', 'METRO DATA', 'HOMESMART', 'VITAL APPRAISAL'].map(l => (
                                <span key={l} className="text-2xl font-black tracking-tighter italic">{l}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}
