'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'


export default function LoginPage() {
    const [mounted, setMounted] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Mock login delay
        setTimeout(() => {
            localStorage.setItem('isLoggedIn', 'true')
            setIsLoading(false)
            router.push('/sell')
        }, 1500)
    }

    if (!mounted) return null

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
            <Navigation />

            <main className="flex-1 flex items-center justify-center px-4 py-32 relative overflow-hidden">
                {/* Background Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse delay-700"></div>
                </div>

                <div className="w-full max-w-5xl animate-in fade-in zoom-in-95 duration-700">
                    <div className="glass rounded-[3rem] border border-white/20 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col lg:grid lg:grid-cols-2 min-h-[600px]">
                        {/* Illustration Section */}
                        <div className="relative bg-teal-500/5 flex items-center justify-center p-12 overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px]"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px]"></div>

                            <div className="relative z-10 space-y-8 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 bg-teal-500/10 text-teal-600 dark:text-teal-400 px-4 py-2 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                                    <span className="material-symbols-outlined text-sm">auto_awesome</span>
                                    AI-Powered Real Estate
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-black leading-tight">
                                    Unlock the <span className="text-teal-500">Future</span> of Living.
                                </h2>
                                <p className="text-slate-500 text-lg max-w-sm mx-auto lg:mx-0">
                                    Your gateway to a seamless property journey starts here. Access your dashboard and premium listings.
                                </p>

                                <div className="pt-8">
                                    <img
                                        src="/login-sketch.png"
                                        alt="City Sketch Illustration"
                                        className="w-full max-w-sm mx-auto lg:mx-0 drop-shadow-2xl dark:invert mix-blend-multiply dark:mix-blend-screen"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="p-10 lg:p-16 flex flex-col justify-center text-center">
                            <div className="w-20 h-20 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
                                <span className="material-symbols-outlined text-4xl text-teal-500">lock</span>
                            </div>

                            <h1 className="text-3xl font-black mb-2">Welcome Back</h1>
                            <p className="text-slate-500 text-sm mb-10">Sign in to manage your property listings and valuations.</p>

                            <form onSubmit={handleLogin} className="space-y-6 text-left">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Email Address</label>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                                        <input
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="name@example.com"
                                            className="w-full bg-slate-100/50 dark:bg-slate-900/50 border-2 border-transparent focus:border-teal-500/50 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all font-bold"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <div className="flex justify-between items-center ml-1">
                                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Password</label>
                                        <Link href="/forgot-password" className="text-[10px] font-black uppercase tracking-widest text-teal-500 hover:underline">Forgot?</Link>
                                    </div>
                                    <div className="relative">
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">lock</span>
                                        <input
                                            type="password"
                                            required
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="••••••••"
                                            className="w-full bg-slate-100/50 dark:bg-slate-900/50 border-2 border-transparent focus:border-teal-500/50 rounded-2xl py-4 pl-12 pr-4 outline-none transition-all font-bold"
                                        />
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black py-5 rounded-2xl shadow-xl hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white dark:border-slate-900/30 dark:border-t-slate-900 border-solid rounded-full animate-spin"></div>
                                            Authenticating...
                                        </>
                                    ) : (
                                        <>Sign In to Explore <span className="material-symbols-outlined">east</span></>
                                    )}
                                </button>
                            </form>

                            <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
                                <p className="text-sm text-slate-500">
                                    Don't have an account? <Link href="/signup" className="font-black text-teal-500 hover:underline">Create Account</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />

        </div>
    )
}
