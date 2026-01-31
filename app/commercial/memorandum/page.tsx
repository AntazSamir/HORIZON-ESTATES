'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

import Link from 'next/link'

export default function InvestmentMemorandumPage() {
    const [mounted, setMounted] = useState(false)
    const [activeSection, setActiveSection] = useState('summary')

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    const sections = [
        { id: 'summary', title: 'Executive Summary', icon: 'analytics' },
        { id: 'highlights', title: 'Investment Highlights', icon: 'auto_awesome' },
        { id: 'property', title: 'Property Overview', icon: 'domain' },
        { id: 'financials', title: 'Financial Projections', icon: 'payments' },
        { id: 'market', title: 'Market Intelligence', icon: 'hub' },
        { id: 'tenants', title: 'Tenant Profile', icon: 'groups' },
        { id: 'exit', title: 'Exit Strategy', icon: 'rocket_launch' }
    ]

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-teal-500/30">
            <Navigation />

            {/* Internal Ribbon / Status */}
            <div className="pt-24 bg-slate-900 text-white py-3 px-4 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em]">
                <div className="flex items-center gap-4">
                    <span className="bg-teal-500 text-black px-2 py-0.5 rounded">Strictly Confidential</span>
                    <span>Document ID: HE-2026-SP-01</span>
                </div>
                <div className="hidden md:flex items-center gap-6">
                    <span>Updated: Jan 31, 2026</span>
                    <button className="hover:text-teal-400 transition-colors flex items-center gap-1">
                        <span className="material-symbols-outlined text-xs">print</span> Print PDF
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
                {/* Sticky Sidebar Navigation */}
                <aside className="lg:w-72 shrink-0">
                    <div className="sticky top-32 space-y-2">
                        <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-6 px-4">Memorandum Sections</h3>
                        {sections.map(s => (
                            <button
                                key={s.id}
                                onClick={() => {
                                    setActiveSection(s.id)
                                    document.getElementById(s.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                }}
                                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all text-left font-bold ${activeSection === s.id ? 'bg-teal-500/10 text-teal-500' : 'hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-500'}`}
                            >
                                <span className="material-symbols-outlined text-xl">{s.icon}</span>
                                <span className="text-sm">{s.title}</span>
                            </button>
                        ))}

                        <div className="mt-12 p-6 glass rounded-[2rem] border border-teal-500/20 bg-teal-500/5">
                            <p className="text-[10px] font-black uppercase text-teal-500 mb-2">Primary Advisor</p>
                            <h4 className="font-bold">Jonathan Vance</h4>
                            <p className="text-xs text-slate-500 mb-4">Managing Director, Acquisitions</p>
                            <button className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 py-3 rounded-xl font-bold text-xs hover:bg-teal-500 hover:text-white transition-all">
                                Request Call
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Main Memorandum Content */}
                <main className="flex-1 space-y-32 pb-32">

                    {/* Header Section */}
                    <section id="header" className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
                        <div className="inline-flex items-center gap-3 text-teal-500 font-black uppercase text-xs tracking-[0.2em] mb-4">
                            <span className="w-12 h-px bg-teal-500"></span>
                            Asset Class: Mixed-Use Vertical Plaza
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95]">
                            Skyline Plaza <br />& Innovation Hub
                        </h1>
                        <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-3xl">
                            A 24-story architectural landmark positioned in the gateway of the city's highest-growth technology corridor.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Offering Price</p>
                                <p className="text-3xl font-black">$42,500,000</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Projected Yield</p>
                                <p className="text-3xl font-black text-teal-500">7.8% IRR</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Occupancy</p>
                                <p className="text-3xl font-black">94.2%</p>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">Asset Status</p>
                                <p className="text-3xl font-black underline decoration-teal-500">Freehold</p>
                            </div>
                        </div>
                    </section>

                    {/* 1. Executive Summary */}
                    <section id="summary" className="scroll-mt-32 space-y-8">
                        <h2 className="text-3xl font-black flex items-center gap-4">
                            <span className="w-2 h-10 bg-teal-500 rounded-full"></span>
                            Executive Summary
                        </h2>
                        <div className="prose prose-slate dark:prose-invert max-w-none text-lg text-slate-600 dark:text-slate-400 leading-relaxed space-y-6">
                            <p>
                                Horizon Estates is pleased to present the exclusive opportunity to acquire <strong>Skyline Plaza</strong>, a state-of-the-art office and retail asset. The property consists of 420,000 square feet of net leasable area, anchored by three Fortune 500 technology tenants on 12-year primary lease terms.
                            </p>
                            <p>
                                Strategically located within the master-planned 'Silicon Square', the asset benefits from 24/7 subterranean transit access and a LEED Platinum certification, making it a "Future-Proof" choice for institutional portfolios seeking stable, inflation-hedged yields.
                            </p>
                        </div>
                    </section>

                    {/* 2. Highlights */}
                    <section id="highlights" className="scroll-mt-32 space-y-12">
                        <h2 className="text-3xl font-black flex items-center gap-4 text-teal-500">
                            <span className="material-symbols-outlined text-4xl">auto_awesome</span>
                            Investment Highlights
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { title: 'Weighted Average Lease Term', val: '9.4 Years', desc: 'Secure long-term cash flow with major tech-sector anchors.' },
                                { title: 'Strategic Location Alpha', val: '+12% CAGR', desc: 'Neighborhood property values have outperformed the city average for 5 years.' },
                                { title: 'Tax Incentives', val: 'Enterprise Zone', desc: 'Property falls within the newly designated Business Stimulus zone.' },
                                { title: 'Energy Resiliency', val: '100% Solar', desc: 'Dual-grid energy systems reduce operating expenses by 22%.' }
                            ].map((h, idx) => (
                                <div key={idx} className="glass p-8 rounded-3xl border border-slate-100 dark:border-slate-800 flex items-start gap-6">
                                    <span className="material-symbols-outlined text-teal-500 text-3xl shrink-0">verified</span>
                                    <div>
                                        <div className="flex justify-between items-center mb-2">
                                            <h4 className="font-bold">{h.title}</h4>
                                            <span className="text-teal-500 font-black">{h.val}</span>
                                        </div>
                                        <p className="text-sm text-slate-500">{h.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 3. Property Overview */}
                    <section id="property" className="scroll-mt-32 space-y-12">
                        <h2 className="text-3xl font-black flex items-center gap-4">
                            <span className="w-2 h-10 bg-teal-500 rounded-full"></span>
                            Property Overview
                        </h2>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <p className="text-lg text-slate-600 dark:text-slate-400">
                                    Skyline Plaza is a 420,000 SF, Type I steel and glass office tower completed in 2022. The asset encompasses 24 floors of premium Grade-A office space, a three-level subterranean parking garage with 450 stalls, and 15,000 SF of ground-floor high-street retail.
                                </p>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                        <p className="text-[10px] font-black uppercase text-slate-400">Total Land Area</p>
                                        <p className="font-bold">1.25 Acres</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                        <p className="text-[10px] font-black uppercase text-slate-400">Typical Floor Plate</p>
                                        <p className="font-bold">18,500 SF</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                        <p className="text-[10px] font-black uppercase text-slate-400">Parking Ratio</p>
                                        <p className="font-bold">1.1 / 1,000 SF</p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                                        <p className="text-[10px] font-black uppercase text-slate-400">Zoning</p>
                                        <p className="font-bold">C-3 (Central Bus.)</p>
                                    </div>
                                </div>
                            </div>
                            <div className="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 dark:bg-slate-900">
                                <img
                                    src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=800&q=80"
                                    alt="Property Specs"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </section>

                    {/* 4. Financials */}
                    <section id="financials" className="scroll-mt-32 space-y-12">
                        <h2 className="text-3xl font-black flex items-center gap-4">
                            <span className="w-2 h-10 bg-teal-500 rounded-full"></span>
                            Financial Performance
                        </h2>
                        <div className="overflow-hidden rounded-[2.5rem] border border-slate-100 dark:border-slate-800">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 dark:bg-slate-900/50">
                                        <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400">P&L Item</th>
                                        <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400">Current (2025)</th>
                                        <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400">Year 3 Proj.</th>
                                        <th className="p-6 text-xs font-black uppercase tracking-widest text-slate-400 mt-auto">Margin</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                                    {[
                                        { label: 'Gross Rental Income', curr: '$6,420,000', proj: '$7,850,000', change: '+22.3%' },
                                        { label: 'Expense Pass-Throughs', curr: '$840,000', proj: '$1,020,000', change: '+21.4%' },
                                        { label: 'Total Operating Expenses', curr: '($2,120,000)', proj: '($2,340,000)', change: '-10.4%' },
                                        { label: 'Net Operating Income (NOI)', curr: '$5,140,000', proj: '$6,530,000', change: '+27.0%', bold: true }
                                    ].map((row, idx) => (
                                        <tr key={idx} className={`${row.bold ? 'bg-teal-500/5' : ''}`}>
                                            <td className={`p-6 ${row.bold ? 'font-black' : 'font-medium'}`}>{row.label}</td>
                                            <td className="p-6 font-mono text-sm">{row.curr}</td>
                                            <td className="p-6 font-mono text-sm">{row.proj}</td>
                                            <td className={`p-6 font-black text-sm ${row.change.startsWith('+') ? 'text-emerald-500' : 'text-slate-400'}`}>
                                                {row.change}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </section>

                    {/* 6. Tenant Profile */}
                    <section id="tenants" className="scroll-mt-32 space-y-12">
                        <h2 className="text-3xl font-black flex items-center gap-4">
                            <span className="w-2 h-10 bg-teal-500 rounded-full"></span>
                            Tenant Profile & Occupancy
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { name: 'Quantix AI Systems', space: '142,000 SF', lease: '2036 EXP', rent: '$62/SF', icon: 'smart_toy' },
                                { name: 'Nexus Logistics Gmbh', space: '85,000 SF', lease: '2032 EXP', rent: '$58/SF', icon: 'hub' },
                                { name: 'Prime Retail Group', space: '15,000 SF', lease: '2030 EXP', rent: '$110/SF', icon: 'storefront' }
                            ].map((t, idx) => (
                                <div key={idx} className="glass p-8 rounded-3xl border border-slate-100 dark:border-slate-800 relative overflow-hidden group">
                                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                        <span className="material-symbols-outlined text-8xl">{t.icon}</span>
                                    </div>
                                    <h4 className="text-xl font-bold mb-4">{t.name}</h4>
                                    <div className="space-y-3 relative z-10">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-500">Leasable Area</span>
                                            <span className="font-bold">{t.space}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-500">Lease Expiry</span>
                                            <span className="font-bold text-teal-500">{t.lease}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-slate-500">Scheduled Rent</span>
                                            <span className="font-bold">{t.rent}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* 7. Exit Strategy */}
                    <section id="exit" className="scroll-mt-32 space-y-12">
                        <h2 className="text-3xl font-black flex items-center gap-4">
                            <span className="w-2 h-10 bg-teal-500 rounded-full"></span>
                            Exit Strategy & Capital Appreciation
                        </h2>
                        <div className="glass p-12 rounded-[3.5rem] border border-slate-100 dark:border-slate-800 bg-gradient-to-br from-teal-500/5 to-transparent">
                            <div className="max-w-3xl space-y-8">
                                <p className="text-xl font-medium leading-relaxed">
                                    Our projected 5-year exit strategy relies on institutional recapitalization. Given the LEED Platinum status and high-credit tenant base, we forecast a significant "Green Premium" upon resale to national REITs.
                                </p>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-teal-500">Option A: Institutional Sale</h5>
                                        <p className="text-sm text-slate-500">Full disposition to a Tier-1 pension fund or commercial REIT within a 4.5 - 5.5% cap rate window.</p>
                                    </div>
                                    <div className="space-y-2">
                                        <h5 className="font-bold text-teal-500">Option B: Re-financing</h5>
                                        <p className="text-sm text-slate-500">Asset recapitalization to extract equity once Net Operating Income crosses the $7.5M annual threshold.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Final Call to Action Section */}
                    <section className="bg-slate-900 text-white p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/20 rounded-full -mr-48 -mt-48 blur-[100px]"></div>
                        <h2 className="text-4xl md:text-5xl font-black mb-8">Ready to formalize <br />your expression of interest?</h2>
                        <div className="flex flex-wrap justify-center gap-6">
                            <button className="bg-teal-500 text-black hover:bg-teal-600 hover:text-white px-12 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl shadow-teal-500/30">
                                Request Full Diligence Access
                            </button>
                        </div>
                        <p className="mt-12 text-slate-500 text-xs font-medium uppercase tracking-[0.3em]">Institutional Inquiries Only | Min. Ticket: $5.0M</p>
                    </section>

                </main>
            </div>

            <Footer />

        </div>
    )
}
