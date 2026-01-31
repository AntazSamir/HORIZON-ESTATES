'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'


export default function TermsPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const sections = [
    {
      title: 'Acceptance of Terms',
      content: 'By accessing and using Horizon Estates, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.'
    },
    {
      title: 'Use License',
      content: 'Permission is granted to temporarily download one copy of the materials (information or software) on Horizon Estates for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to reverse engineer, disassemble or decompile any software contained on Horizon Estates; remove any copyright or other proprietary notations from the materials.'
    },
    {
      title: 'Disclaimer',
      content: 'The materials on Horizon Estates are provided on an "as is" basis. Horizon Estates makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.'
    },
    {
      title: 'Limitations',
      content: 'In no event shall Horizon Estates or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Horizon Estates, even if Horizon Estates or an authorized representative has been notified orally or in writing of the possibility of such damage.'
    },
    {
      title: 'Accuracy of Materials',
      content: 'The materials appearing on Horizon Estates could include technical, typographical, or photographic errors. Horizon Estates does not warrant that any of the materials on Horizon Estates are accurate, complete, or current. Horizon Estates may make changes to the materials contained on its website at any time without notice.'
    },
    {
      title: 'Materials and Content',
      content: 'Horizon Estates has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Horizon Estates of the site. Use of any such linked website is at the user\'s own risk.'
    },
    {
      title: 'Modifications',
      content: 'Horizon Estates may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.'
    },
    {
      title: 'Governing Law',
      content: 'These terms and conditions are governed by and construed in accordance with the laws of the State of California, and you irrevocably submit to the exclusive jurisdiction of the courts located in California.'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">
            Terms of Service
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Last updated: January 28, 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="font-display text-2xl font-bold mb-4">{section.title}</h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{section.content}</p>
              </div>
            ))}
            <div className="glass p-8 rounded-2xl mt-12">
              <h2 className="font-display text-xl font-bold mb-4">Contact Information</h2>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="space-y-2 text-slate-600 dark:text-slate-400">
                <p>Email: legal@horizonestates.com</p>
                <p>Phone: +1 (888) HORIZON-1</p>
                <p>Address: 123 Market Street, San Francisco, CA 94103</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}
