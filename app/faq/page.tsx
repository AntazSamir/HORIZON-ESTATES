'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'


export default function FAQPage() {
  const [mounted, setMounted] = useState(false)
  const [activeCategory, setActiveCategory] = useState('general')

  useEffect(() => {
    setMounted(true)
  }, [])

  const faqs = {
    general: [
      {
        q: 'What is Horizon Estates?',
        a: 'Horizon Estates is a comprehensive real estate platform that combines cutting-edge technology with expert guidance to help you buy, sell, or invest in properties. We offer AI-driven searches, 3D walkthroughs, market analytics, and digital closing capabilities.'
      },
      {
        q: 'Is Horizon Estates available nationwide?',
        a: 'Yes! We currently serve over 150 markets across the United States, Canada, and select international locations. Check our listings page to see if your area is covered.'
      },
      {
        q: 'How do I create an account?',
        a: 'Simply visit our homepage and click "Get Started." You can sign up with your email or social media account. The entire process takes less than 2 minutes.'
      },
      {
        q: 'Is there a cost to use Horizon Estates?',
        a: 'Our buyer portal is completely free to use. We generate revenue through partnerships with sellers and agents, keeping the platform accessible to everyone.'
      }
    ],
    buying: [
      {
        q: 'How does the AI matching system work?',
        a: 'Our proprietary algorithm analyzes your preferences (location, price, style, commute) and learns from your interactions to suggest properties that match your ideal home. The more you interact, the smarter it gets.'
      },
      {
        q: 'What does the 3D walkthrough feature offer?',
        a: 'Our 3D tours allow you to virtually explore properties from any angle, at any time. You can zoom in on details, measure spaces, and get a true sense of the property before scheduling an in-person visit.'
      },
      {
        q: 'Can I get mortgage pre-approval through Horizon Estates?',
        a: 'Yes! We partner with leading financial institutions to provide instant pre-approval decisions. You can compare rates from multiple lenders directly on our platform.'
      },
      {
        q: 'How do I make an offer?',
        a: 'Once you find a property you love, click the "Make an Offer" button. Our system guides you through the process, and you can negotiate directly with the seller through our platform.'
      },
      {
        q: 'What is the digital closing process?',
        a: 'Our blockchain-based digital closing allows you to sign all documents electronically from anywhere. The entire closing can be completed in as little as 24 hours.'
      }
    ],
    selling: [
      {
        q: 'How do I list my property?',
        a: 'Click "Sell Your Home" on our homepage. You can list quickly with AI-generated descriptions and professionally photographed images. Our system handles the rest.'
      },
      {
        q: 'What marketing tools are available?',
        a: 'We provide virtual tours, professional photography, targeted advertising, and exposure to our network of pre-qualified buyers. Your listing appears across all major real estate platforms.'
      },
      {
        q: 'How are selling fees structured?',
        a: 'We charge a transparent, competitive commission. Most sellers pay 2.5% commission split between buyer and seller agents. There are no hidden fees.'
      },
      {
        q: 'How quickly can I sell my home?',
        a: 'Most properties receive offers within 7-14 days of listing. Our AI pricing engine ensures your home is priced competitively to attract qualified buyers quickly.'
      }
    ],
    investing: [
      {
        q: 'Does Horizon Estates help with investment properties?',
        a: 'Absolutely! We have a dedicated investment portfolio tool that analyzes cash flow, ROI, appreciation potential, and provides market insights to help you make data-driven decisions.'
      },
      {
        q: 'What kind of investments does the platform support?',
        a: 'We support residential rentals, fix-and-flip projects, commercial properties, and real estate investment trusts (REITs). Each has its own analytics and tools.'
      },
      {
        q: 'Can I track multiple properties?',
        a: 'Yes! Create a portfolio to monitor multiple properties, track performance metrics, manage tenants, and receive market alerts specific to each property.'
      },
      {
        q: 'Are there tax resources for investors?',
        a: 'We partner with tax professionals to provide guides on depreciation, deductions, and 1031 exchanges. You can also connect with verified accountants through our platform.'
      }
    ],
    technical: [
      {
        q: 'What devices is Horizon Estates compatible with?',
        a: 'Our platform is fully responsive and works on desktop computers, tablets, and smartphones. Download our mobile app for iOS and Android for the full experience on the go.'
      },
      {
        q: 'How secure is my personal information?',
        a: 'We use bank-level encryption (SSL 256-bit) and comply with all data protection regulations including GDPR and CCPA. Your data is never sold to third parties.'
      },
      {
        q: 'What payment methods are accepted?',
        a: 'We accept all major credit cards, bank transfers, and digital wallets. For large transactions, we can arrange wire transfers and certified checks.'
      },
      {
        q: 'Is there customer support available?',
        a: 'Yes! Our team is available 24/7 via chat, email, and phone. Most inquiries are resolved within 2 hours.'
      },
      {
        q: 'How do I report a technical issue?',
        a: 'Contact our support team through the "Help" button on any page. Provide details about the issue and any error messages. Our technical team typically responds within 30 minutes.'
      }
    ]
  }

  const categories = [
    { id: 'general', label: 'General' },
    { id: 'buying', label: 'Buying' },
    { id: 'selling', label: 'Selling' },
    { id: 'investing', label: 'Investing' },
    { id: 'technical', label: 'Technical' }
  ]

  if (!mounted) return null

  const currentFaqs = faqs[activeCategory as keyof typeof faqs]

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Find answers to common questions about buying, selling, and investing with Horizon Estates.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${activeCategory === cat.id
                  ? 'bg-teal-500 text-white shadow-lg'
                  : 'glass hover:shadow-md'
                  }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {currentFaqs.map((faq, index) => (
              <details
                key={index}
                className="glass p-6 rounded-lg cursor-pointer group hover:shadow-md transition-shadow"
              >
                <summary className="font-display font-bold text-lg flex items-center justify-between select-none">
                  <span>{faq.q}</span>
                  <span className="material-symbols-outlined text-teal-500 group-open:rotate-180 transition-transform">
                    expand_more
                  </span>
                </summary>
                <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-500/10 to-slate-200/10 dark:from-teal-500/5 dark:to-slate-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Didn't find your answer?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Our support team is here to help. Reach out anytime.
          </p>
          <a
            href="/contact"
            className="inline-block bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-xl transition-all active:scale-95"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />

    </div>
  )
}
