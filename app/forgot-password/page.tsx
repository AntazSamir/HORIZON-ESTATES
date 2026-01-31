'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { CubeLoader } from '@/components/ui/cube-loader'

export default function ForgotPasswordPage() {
    const [mounted, setMounted] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('')
    const [isSubmitted, setIsSubmitted] = useState(false)
    const router = useRouter()

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleRecovery = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulate recovery email send
        setTimeout(() => {
            setIsLoading(false)
            setIsSubmitted(true)
        }, 2500)
    }

    if (!mounted) return null

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
            <Navigation />

            <main className="flex-1 flex items-center justify-center p-4 lg:p-8 pt-24 lg:pt-32">
                <div className="max-w-6xl w-full grid lg:grid-cols-2 glass rounded-[3rem] overflow-hidden shadow-2xl border border-white/20 dark:border-slate-800">

                    {/* Left Side: Illustration */}
                    <div className="hidden lg:flex flex-col justify-between p-16 bg-gradient-to-br from-teal-500/20 via-teal-500/5 to-transparent relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(20,184,166,0.1),transparent_50%)]"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-2 mb-8">
                                <span className="material-symbols-outlined text-teal-500 text-4xl">domain</span>
                                <span className="font-display font-black text-2xl">HORIZON <span className="text-teal-500">ESTATES</span></span>
                            </div>

                            <h2 className="text-4xl font-black mb-6 leading-tight">
                                Secure Your <span className="text-teal-500 font-serif italic font-normal">Asset Access</span>.
                            </h2>
                            <p className="text-slate-600 dark:text-slate-400 text-lg max-w-sm">
                                Multi-factor recovery protocols to ensure your property portfolio remains exclusively yours.
                            </p>
                        </div>

                        <div className="relative pt-8">
                            <img
                                src="/recovery-sketch.png"
                                alt="Recovery Protocol Sketch"
                                className="w-full max-w-sm mx-auto drop-shadow-2xl dark:invert mix-blend-multiply dark:mix-blend-screen"
                            />
                        </div>

                        <div className="relative z-10 pt-8 opacity-50 flex items-center gap-8">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Security Verified</span>
                            <div className="h-px bg-slate-300 dark:bg-slate-700 flex-1"></div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] font-serif italic">Recovery Center</span>
                        </div>
                    </div>

                    {/* Right Side: Recovery Form */}
                    <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white/50 dark:bg-slate-900/50 backdrop-blur-md">
                        <div className="max-w-md w-full mx-auto">
                            {!isSubmitted ? (
                                <>
                                    <div className="mb-10 text-center lg:text-left">
                                        <h1 className="text-3xl font-black mb-3">Recover Access</h1>
                                        <p className="text-slate-500 dark:text-slate-400">Enter your email and we'll send recovery instructions.</p>
                                    </div>

                                    <form onSubmit={handleRecovery} className="space-y-6">
                                        <div className="space-y-2">
                                            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Registered Email Address</label>
                                            <div className="relative">
                                                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">mail</span>
                                                <input
                                                    type="email"
                                                    required
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    placeholder="yourname@domain.com"
                                                    className="w-full bg-slate-100 dark:bg-slate-800/50 border-2 border-transparent focus:border-teal-500/30 rounded-2xl py-4 pl-12 pr-6 outline-none transition-all font-bold placeholder:text-slate-400"
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isLoading}
                                                className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 font-black py-5 rounded-2xl shadow-xl hover:bg-teal-500 hover:text-white transition-all active:scale-95 flex items-center justify-center gap-2"
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <div className="w-6 h-6 flex items-center justify-center mr-2">
                                                            <CubeLoader className="text-teal-500" style={{ transform: 'scale(0.4)' }} />
                                                        </div>
                                                        Sending Encrypted Key...
                                                    </>
                                                ) : (
                                                    <>Send Recovery Link <span className="material-symbols-outlined">send_and_archive</span></>
                                                )}
                                            </button>
                                        </div>

                                        <div className="text-center pt-8">
                                            <Link href="/login" className="text-sm font-bold text-slate-500 dark:text-slate-400 hover:text-teal-500 flex items-center justify-center gap-2 transition-all">
                                                <span className="material-symbols-outlined text-sm">arrow_back</span> Return to Login
                                            </Link>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div className="text-center animate-in zoom-in-95 duration-500">
                                    <div className="w-20 h-20 bg-teal-500/10 text-teal-500 rounded-full flex items-center justify-center mx-auto mb-8">
                                        <span className="material-symbols-outlined text-4xl">mark_email_read</span>
                                    </div>
                                    <h1 className="text-3xl font-black mb-4">Check Your Inbox</h1>
                                    <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed">
                                        Recovery instructions have been sent to <span className="text-slate-900 dark:text-white font-bold">{email}</span>. Please click the link to reset your secure access.
                                    </p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="text-teal-500 font-bold hover:underline mb-8"
                                    >
                                        Wait, I didn't get it. Resend email.
                                    </button>
                                    <div className="pt-8 border-t border-slate-100 dark:border-slate-800">
                                        <Link href="/login" className="bg-slate-900 dark:bg-white text-white dark:text-slate-950 px-10 py-5 rounded-2xl font-black hover:bg-teal-500 hover:text-white transition-all">
                                            Done, Back to Login
                                        </Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    )
}
