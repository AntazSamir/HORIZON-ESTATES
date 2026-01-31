'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'


export default function PrivacyPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const sections = [
    {
      title: 'Introduction',
      content: 'Horizon Estates ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.'
    },
    {
      title: 'Information We Collect',
      subsections: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information you voluntarily provide when registering for an account, including name, email address, phone number, address, and financial information necessary for transactions.'
        },
        {
          subtitle: 'Automatically Collected Information',
          text: 'When you visit our site, we automatically collect certain device and usage information including IP address, browser type, operating system, pages visited, and the time/date of your visits.'
        },
        {
          subtitle: 'Cookies and Tracking',
          text: 'We use cookies and similar tracking technologies to enhance your experience, remember preferences, and understand how you use our platform.'
        }
      ]
    },
    {
      title: 'How We Use Your Information',
      content: 'We use collected information for: (1) providing and improving our services, (2) processing transactions, (3) sending promotional communications (with your consent), (4) detecting and preventing fraud, (5) complying with legal obligations, and (6) analyzing usage patterns to enhance user experience.'
    },
    {
      title: 'Data Security',
      content: 'We implement comprehensive security measures to protect your personal information. All data is encrypted using SSL 256-bit encryption, and we comply with industry-standard security practices. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.'
    },
    {
      title: 'Information Sharing',
      content: 'We do not sell, trade, or rent your personal information to third parties. We may share information with: (1) service providers assisting in our operations, (2) real estate professionals involved in transactions, (3) legal authorities when required by law, and (4) business partners you consent to sharing with.'
    },
    {
      title: 'Your Privacy Rights',
      subsections: [
        {
          subtitle: 'Access and Correction',
          text: 'You have the right to access, review, and correct your personal information at any time by logging into your account or contacting us.'
        },
        {
          subtitle: 'Opt-Out',
          text: 'You can opt out of promotional emails by clicking the unsubscribe link or adjusting your preferences in account settings.'
        },
        {
          subtitle: 'Data Deletion',
          text: 'You may request deletion of your account and personal information, subject to our legal and regulatory obligations.'
        }
      ]
    },
    {
      title: 'GDPR and CCPA Compliance',
      content: 'For users in the EU, we comply with the General Data Protection Regulation (GDPR). For California residents, we comply with the California Consumer Privacy Act (CCPA). Both laws provide specific rights regarding your personal information. Please contact us for details on exercising these rights.'
    },
    {
      title: 'Third-Party Links',
      content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. We encourage you to review the privacy policies of any websites you visit through our platform.'
    },
    {
      title: 'Children\'s Privacy',
      content: 'Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we discover we have collected such information, we will delete it promptly.'
    },
    {
      title: 'Policy Updates',
      content: 'Horizon Estates may update this Privacy Policy periodically. We will notify you of significant changes by posting the updated policy on our website and updating the "last updated" date. Your continued use of our services after changes constitutes your acceptance of the updated policy.'
    },
    {
      title: 'Contact Us',
      content: 'If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at: privacy@horizonestates.com or call +1 (888) HORIZON-1.'
    }
  ]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Last updated: January 28, 2024
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="font-display text-2xl font-bold mb-4">{section.title}</h2>
                {section.content && (
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{section.content}</p>
                )}
                {section.subsections && (
                  <div className="space-y-4">
                    {section.subsections.map((subsection, subIndex) => (
                      <div key={subIndex} className="glass p-4 rounded-lg">
                        <h3 className="font-bold mb-2">{subsection.subtitle}</h3>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{subsection.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="glass p-8 rounded-2xl mt-12 border-l-4 border-l-teal-500">
              <h2 className="font-display text-xl font-bold mb-4">Your Consent</h2>
              <p className="text-slate-600 dark:text-slate-400">
                By using Horizon Estates, you consent to our Privacy Policy and agree to its terms. If you do not agree with our policies and practices, please do not use our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  )
}
