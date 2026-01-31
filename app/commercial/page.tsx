'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

import Link from 'next/link'

export default function CommercialPage() {
    const [mounted, setMounted] = useState(false)
    const [activeTab, setActiveTab] = useState('browse')

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const categories = [
        { id: 'usage', title: 'Usage & Zoning', icon: 'domain' },
        { id: 'location', title: 'Market & Location', icon: 'hub' },
        { id: 'financial', title: 'Financial ROI', icon: 'payments' },
        { id: 'condition', title: 'Specs & Sustainability', icon: 'architecture' },
        { id: 'legal', title: 'Legal & Compliance', icon: 'gavel' },
        { id: 'risk', title: 'Risk & Strategy', icon: 'monitoring' }
    ]

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 relative overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent"></div>
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2 space-y-6">
                            <span className="inline-block py-1 px-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 text-[10px] font-black tracking-[0.3em] uppercase">
                                Institutional Grade
                            </span>
                            <h1 className="font-display text-5xl md:text-7xl font-black leading-tight">
                                Commercial <span className="text-teal-500">Investment</span> Portal
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-xl">
                                Access exclusive off-market commercial opportunities vetted by our proprietary 7-tier risk and yield analysis.
                            </p>
                            <div className="flex gap-4 pt-4">
                                <button
                                    onClick={() => setActiveTab('browse')}
                                    className={`px-8 py-4 rounded-2xl font-bold transition-all ${activeTab === 'browse' ? 'bg-teal-500 text-white shadow-xl shadow-teal-500/20' : 'glass hover:bg-slate-100 dark:hover:bg-slate-900'}`}
                                >
                                    Browse Opportunities
                                </button>
                                <button
                                    onClick={() => setActiveTab('submit')}
                                    className={`px-8 py-4 rounded-2xl font-bold transition-all ${activeTab === 'submit' ? 'bg-teal-500 text-white shadow-xl shadow-teal-500/20' : 'glass hover:bg-slate-100 dark:hover:bg-slate-900'}`}
                                >
                                    List Opportunity
                                </button>
                            </div>
                        </div>

                        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                            <div className="space-y-4 pt-12">
                                <div className="glass p-6 rounded-3xl border border-teal-500/20 shadow-xl transform hover:-translate-y-2 transition-all">
                                    <span className="material-symbols-outlined text-teal-500 text-3xl mb-4">analytics</span>
                                    <h3 className="font-bold">8.4% Avg Yield</h3>
                                    <p className="text-xs text-slate-500">Net operating income across our current portfolio.</p>
                                </div>
                                <div className="glass p-6 rounded-3xl border border-white/20 shadow-xl transform hover:-translate-y-2 transition-all">
                                    <span className="material-symbols-outlined text-slate-400 text-3xl mb-4">verified</span>
                                    <h3 className="font-bold">100% Vetted</h3>
                                    <p className="text-xs text-slate-500">Every property clears our 7-point compliance check.</p>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="glass p-6 rounded-3xl border border-white/20 shadow-xl transform hover:-translate-y-2 transition-all">
                                    <span className="material-symbols-outlined text-slate-400 text-3xl mb-4">monitoring</span>
                                    <h3 className="font-bold">Rising Alpha</h3>
                                    <p className="text-xs text-slate-500">Focus on high-growth commercial corridors.</p>
                                </div>
                                <div className="glass p-6 rounded-3xl border border-teal-500/20 shadow-xl transform hover:-translate-y-2 transition-all">
                                    <span className="material-symbols-outlined text-teal-500 text-3xl mb-4">apartment</span>
                                    <h3 className="font-bold">Mixed-Use</h3>
                                    <p className="text-xs text-slate-500">Optimized for stable multi-tenant income streams.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Area */}
            <section className="py-20 px-4 bg-slate-100/50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto">
                    {activeTab === 'browse' ? (
                        <div className="animate-in fade-in duration-700">
                            {/* Filters based on User Details */}
                            <div className="grid md:grid-cols-4 gap-6 mb-16">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Property Type</label>
                                    <select className="w-full glass border-none rounded-2xl py-4 px-6 outline-none appearance-none font-bold">
                                        <option>All Assets</option>
                                        <option>Office Towers</option>
                                        <option>Retail Plazas</option>
                                        <option>Industrial / Warehouse</option>
                                        <option>Hospitality / Hotels</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Desired Yield</label>
                                    <select className="w-full glass border-none rounded-2xl py-4 px-6 outline-none appearance-none font-bold">
                                        <option>Any Yield</option>
                                        <option>5% - 7% (Low Risk)</option>
                                        <option>7% - 10% (Growth)</option>
                                        <option>10%+ (Specialized)</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Location Hub</label>
                                    <select className="w-full glass border-none rounded-2xl py-4 px-6 outline-none appearance-none font-bold">
                                        <option>Nationwide</option>
                                        <option>Financial District</option>
                                        <option>Logistics Corridors</option>
                                        <option>Upcoming Tech Hubs</option>
                                    </select>
                                </div>
                                <div className="flex items-end">
                                    <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 rounded-2xl shadow-xl shadow-teal-500/20 transition-all">
                                        Apply Smart Filters
                                    </button>
                                </div>
                            </div>

                            {/* Sample Opportunities Table/Grid */}
                            <div className="grid lg:grid-cols-3 gap-8">
                                {[
                                    { title: 'Skyline Plaza', type: 'Mixed-use', location: 'Tech Corridor', price: '$42.5M', yield: '7.8%', status: 'Leasehold' },
                                    { title: 'Logistics Hub A', type: 'Industrial', location: 'Port Terminal', price: '$18.2M', yield: '9.2%', status: 'Freehold' },
                                    { title: 'Boutique Hotel', type: 'Hospitality', location: 'Heritage District', price: '$12.0M', yield: '6.5%', status: 'Freehold' },
                                ].map((item, idx) => (
                                    <div key={idx} className="glass rounded-[2rem] overflow-hidden border border-white/20 hover:border-teal-500/50 transition-all group">
                                        <div className="h-48 bg-slate-200 dark:bg-slate-800 relative">
                                            <img
                                                src={`https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=500&q=80`}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className="absolute top-4 right-4 bg-teal-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">
                                                Active Opp
                                            </div>
                                        </div>
                                        <div className="p-8 space-y-4">
                                            <div className="flex justify-between items-start">
                                                <div>
                                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                                    <p className="text-sm text-slate-500">{item.location}</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-teal-500 font-black text-lg">{item.yield}</span>
                                                    <p className="text-[10px] text-slate-400 font-bold uppercase">Expected ROI</p>
                                                </div>
                                            </div>
                                            <div className="grid grid-cols-2 gap-4 py-4 border-y border-slate-100 dark:border-slate-800">
                                                <div>
                                                    <p className="text-[10px] text-slate-400 font-bold uppercase">Entry Price</p>
                                                    <p className="font-bold">{item.price}</p>
                                                </div>
                                                <div>
                                                    <p className="text-[10px] text-slate-400 font-bold uppercase">Ownership</p>
                                                    <p className="font-bold">{item.status}</p>
                                                </div>
                                            </div>
                                            <Link href="/commercial/memorandum" className="block w-full text-center py-4 rounded-xl border-2 border-slate-100 dark:border-slate-800 font-bold hover:bg-slate-900 dark:hover:bg-white hover:text-white dark:hover:text-slate-950 transition-all">
                                                View Investment Memorandum
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="animate-in slide-in-from-bottom-8 duration-700 max-w-4xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl font-bold mb-4">Opportunity Submission</h2>
                                <p className="text-slate-500 italic">Every submission undergoes a 7-point institutional audit before listing.</p>
                            </div>

                            <div className="glass p-10 md:p-14 rounded-[3.5rem] border border-white/20 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>
                                <form className="space-y-10">
                                    {/* 1. Property Type & Usage */}
                                    <div className="space-y-6">
                                        <h4 className="flex items-center gap-3 text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2">
                                            <span className="material-symbols-outlined text-teal-500">domain</span>
                                            1. Property Type & Usage
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <input type="text" placeholder="Allowed Uses (e.g. Retail/F&B)" className="w-full bg-slate-100/50 dark:bg-slate-900 rounded-2xl py-4 px-6 outline-none font-semibold border-2 border-transparent focus:border-teal-500/30" />
                                            <input type="text" placeholder="Zoning Compliance Code" className="w-full bg-slate-100/50 dark:bg-slate-900 rounded-2xl py-4 px-6 outline-none font-semibold border-2 border-transparent focus:border-teal-500/30" />
                                        </div>
                                    </div>

                                    {/* 2. Financials */}
                                    <div className="space-y-6">
                                        <h4 className="flex items-center gap-3 text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2">
                                            <span className="material-symbols-outlined text-teal-500">payments</span>
                                            2. Financial & Investment Criteria
                                        </h4>
                                        <div className="grid md:grid-cols-3 gap-4">
                                            <input type="text" placeholder="Expected ROI / Yield (%)" className="w-full bg-slate-100/50 dark:bg-slate-900 rounded-xl py-4 px-6 outline-none font-semibold" />
                                            <input type="text" placeholder="Current Vacancy Rate (%)" className="w-full bg-slate-100/50 dark:bg-slate-900 rounded-xl py-4 px-6 outline-none font-semibold" />
                                            <input type="text" placeholder="Operating Expenses / Year" className="w-full bg-slate-100/50 dark:bg-slate-900 rounded-xl py-4 px-6 outline-none font-semibold" />
                                        </div>
                                    </div>

                                    {/* 3. Specs & Eco */}
                                    <div className="space-y-6">
                                        <h4 className="flex items-center gap-3 text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2">
                                            <span className="material-symbols-outlined text-teal-500">eco</span>
                                            3. Specs & Sustainability
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <input type="text" placeholder="Sustainability Rating (LEED/Solar)" className="w-full bg-slate-100/50 dark:bg-slate-900 rounded-xl py-4 px-6 outline-none font-semibold" />
                                            <input type="text" placeholder="HVAC & Facility Condition" className="w-full bg-slate-100/50 dark:bg-slate-900 rounded-xl py-4 px-6 outline-none font-semibold" />
                                        </div>
                                    </div>

                                    {/* 4. Risks & Compliance */}
                                    <div className="space-y-6">
                                        <h4 className="flex items-center gap-3 text-lg font-bold border-b border-slate-100 dark:border-slate-800 pb-2">
                                            <span className="material-symbols-outlined text-teal-500">security</span>
                                            4. Legal & Tenant Risk
                                        </h4>
                                        <div className="grid md:grid-cols-2 gap-4">
                                            <select className="w-full bg-slate-100/50 dark:bg-slate-900 rounded-xl py-4 px-6 outline-none font-semibold appearance-none">
                                                <option>Clear Title - No Disputes</option>
                                                <option>Pending Verification</option>
                                            </select>
                                            <input type="text" placeholder="Tenant Lease Reliability Score" className="w-full bg-slate-100/50 dark:bg-slate-900 rounded-xl py-4 px-6 outline-none font-semibold" />
                                        </div>
                                    </div>

                                    <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-black py-6 rounded-3xl shadow-2xl shadow-teal-500/20 active:scale-95 transition-all text-xl mt-8">
                                        Encrypt & Submit for Audit
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* 7-Tier Criteria Deep Dive */}
            <section className="py-32 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <span className="text-teal-500 font-black uppercase tracking-[0.4em] text-xs">Vetting Standards</span>
                        <h2 className="text-4xl md:text-5xl font-black mt-4">Our Institutional Investment Criteria</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { title: 'Usage & Zoning', desc: 'Rigid compliance checks for commercial activities and local zoning laws.', icon: 'gavel' },
                            { title: 'Location Growth', desc: 'Data-driven analysis of proximity to transport hubs and business growth potentials.', icon: 'hub' },
                            { title: 'Yield Optimization', desc: 'Precision calculation of ROI, operating expenses, and tax implications.', icon: 'insights' },
                            { title: 'Sustainability', desc: 'Evaluation of LEED ratings, solar integration, and energy efficiency specs.', icon: 'eco' },
                            { title: 'Occupancy Flow', desc: 'Deep dive into vacancy rates and long-term tenant reliability risks.', icon: 'group' },
                            { title: 'Capital Strategy', desc: 'Clear exit criteria based on forecasted appreciation and liquidity risks.', icon: 'rocket_launch' },
                        ].map((c, idx) => (
                            <div key={idx} className="space-y-4 group">
                                <div className="w-16 h-16 bg-teal-500/10 rounded-2xl flex items-center justify-center text-teal-500 group-hover:bg-teal-500 group-hover:text-white transition-all shadow-lg">
                                    <span className="material-symbols-outlined text-3xl font-bold">{c.icon}</span>
                                </div>
                                <h4 className="text-xl font-bold">{c.title}</h4>
                                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Professional Call To Action */}
            <section className="py-24 px-4 border-t border-slate-100 dark:border-slate-800">
                <div className="max-w-5xl mx-auto glass p-16 rounded-[3rem] text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-blue-500 opacity-50"></div>
                    <h2 className="text-4xl font-black mb-6 italic">Ready to diversify your portfolio?</h2>
                    <p className="text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
                        Speak with our dedicated commercial acquisition team for customized investment memorandums and off-market deal flows.
                    </p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-10 py-5 rounded-2xl font-black shadow-xl hover:bg-teal-500 hover:text-white transition-all">
                            Consult Portfolio Manager
                        </button>
                        <button className="glass border border-slate-200 dark:border-slate-800 px-10 py-5 rounded-2xl font-black transition-all hover:bg-slate-100 dark:hover:bg-slate-900">
                            Request Information
                        </button>
                    </div>
                </div>
            </section>

            <Footer />

        </div>
    )
}
