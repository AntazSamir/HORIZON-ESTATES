'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'

export default function SignupPage() {
    const [mounted, setMounted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleSignup = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate registration
        setTimeout(() => {
            localStorage.setItem('isLoggedIn', 'true')
            setIsLoading(false)
            router.push('/')
            window.location.reload()
        }, 2000)
    }

    if (!mounted) return null

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
            <Navigation />

            <main className="flex-1 flex items-center justify-center p-4 lg:p-8 pt-24 lg:pt-32">
                <div className="max-w-6xl w-full grid lg:grid-cols-2 glass rounded-[3rem] overflow-hidden shadow-2xl border border-white/20 dark:border-slate-800">

                    {/* Left Side: Illustration & Branding */}
                    <div className="hidden lg:flex flex-col justify-between p-16 bg-gradient-to-br from-teal-500/20 via-teal-500/5 to-transparent relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1),transparent_50%)]"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-8">
                                <span className="material-symbols-outlined text-teal-500 text-4xl">domain</span>
                                <span className="font-display font-black text-2xl">HORIZON <span className="text-teal-500">ESTATES</span></span>
                            </div>

                            <h2 className="text-4xl font-black mb-6 leading-tight">
                                Unlock Your <span className="text-teal-500 font-serif italic font-normal">Future Home</span> Today.
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-sm mb-8">
                                Join our exclusive ecosystem of high-net-worth investors and homeowners.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: 'verified', text: 'Institutional Grade Market Insights' },
                                    { icon: 'bolt', text: 'Instant AI Property Valuations' },
                                    { icon: 'lock', text: 'Encrypted Transaction Portal' }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 text-sm font-bold text-slate-500 dark:text-slate-400">
                                        <span className="material-symbols-outlined text-teal-500 text-xl">{item.icon}</span>
                                        {item.text}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative pt-8">
                            <img
                                src="/signup-sketch.png"
                                alt="City Sketch"
                                className="w-full max-w-sm mx-auto drop-shadow-2xl dark:invert mix-blend-multiply dark:mix-blend-screen"
                            />
                        </div>

                        <div className="relative z-10 pt-8 opacity-50 flex items-center gap-8">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Partner</span>
                            <div className="h-px bg-slate-300 dark:bg-slate-700 flex-1"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] font-serif italic">Premier Luxury Index</span>
                        </div>
                    </div>

                    {/* Right Side: Signup Form */}
                    <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                        <div className="max-w-md w-full mx-auto">
                            <div className="mb-10 text-center lg:text-left">
                                <h1 className="text-3xl font-black mb-3">Create Account</h1>
                                <p className="text-slate-500 dark:text-slate-400">Ready to join the future of real estate?</p>
                            </div>

                            <form onSubmit={handleSignup} className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">First Name</label>
                                        <input
                                            type="text" required placeholder="John"
                                            className="w-full bg-slate-100 dark:bg-slate-800/50 border-2 border-transparent focus:border-teal-500/30 rounded-2xl py-4 px-6 outline-none transition-all font-bold placeholder:text-slate-400"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Last Name</label>
                                        <input
                                            type="text" required placeholder="Doe"
                                            className="w-full bg-slate-100 dark:bg-slate-800/50 border-2 border-transparent focus:border-teal-500/30 rounded-2xl py-4 px-6 outline-none transition-all font-bold placeholder:text-slate-400"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Official Email</label>
                                    <input
                                        type="email" required placeholder="name@company.com"
                                        className="w-full bg-slate-100 dark:bg-slate-800/50 border-2 border-transparent focus:border-teal-500/30 rounded-2xl py-4 px-6 outline-none transition-all font-bold placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Secure Password</label>
                                    <input
                                        type="password" required placeholder="••••••••"
                                        className="w-full bg-slate-100 dark:bg-slate-800/50 border-2 border-transparent focus:border-teal-500/30 rounded-2xl py-4 px-6 outline-none transition-all font-bold placeholder:text-slate-400"
                                    />
                                </div>

                                <div className="flex items-center gap-3 pt-2">
                                    <input
                                        type="checkbox" required id="terms"
                                        className="w-5 h-5 rounded-lg border-2 border-slate-200 dark:border-slate-800 bg-transparent checked:bg-teal-500 transition-all cursor-pointer"
                                    />
                                    <label htmlFor="terms" className="text-xs text-slate-500 dark:text-slate-400 leading-tight">
                                        I agree to the <Link href="/terms" className="text-teal-500 font-bold hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-teal-500 font-bold hover:underline">Privacy Policy</Link>.
                                    </label>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black py-5 rounded-2xl shadow-xl hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2"
                                    >
                                        {isLoading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white dark:border-slate-900/30 dark:border-t-slate-900 border-solid rounded-full animate-spin"></div>
                                                Initializing Account...
                                            </>
                                        ) : (
                                            <>Create Your Horizon Account <span className="material-symbols-outlined">key</span></>
                                        )}
                                    </button>
                                </div>

                                <div className="text-center pt-8">
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        Already a member? <Link href="/login" className="text-teal-500 font-bold hover:underline ml-1 transition-all">Sign In Here</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
