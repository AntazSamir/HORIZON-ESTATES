'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'


export default function BlogPage() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    setMounted(true)
  }, [])

  const posts = [
    {
      id: 1,
      title: '2024 Real Estate Market Trends: What to Expect',
      excerpt: 'Explore the key market trends shaping the real estate landscape in 2024. From interest rates to demographic shifts, here\'s what buyers and sellers need to know.',
      category: 'market',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      author: 'Sarah Chen',
      date: 'Jan 28, 2024',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'First-Time Homebuyer Guide: Everything You Need to Know',
      excerpt: 'Buying your first home can be overwhelming. This comprehensive guide walks you through every step of the process, from pre-approval to closing day.',
      category: 'guide',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
      author: 'James Wilson',
      date: 'Jan 25, 2024',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'Investment Properties: Finding the Right Opportunity',
      excerpt: 'Not all properties make good investments. Learn how to evaluate investment opportunities like a pro with our detailed analysis framework.',
      category: 'investment',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&h=400&fit=crop',
      author: 'Marcus Johnson',
      date: 'Jan 22, 2024',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Home Renovation ROI: Which Projects Add the Most Value',
      excerpt: 'Planning renovations? Not all upgrades deliver the same return. Discover which projects consistently increase home value and buyer appeal.',
      category: 'guide',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
      author: 'Elena Rodriguez',
      date: 'Jan 20, 2024',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'How AI is Transforming Real Estate Search',
      excerpt: 'From personalized recommendations to predictive analytics, discover how artificial intelligence is revolutionizing the way we find properties.',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1677442d019cecf8e5c43e9b79532198?w=600&h=400&fit=crop',
      author: 'Sarah Chen',
      date: 'Jan 18, 2024',
      readTime: '5 min read'
    },
    {
      id: 6,
      title: 'Digital Closing: The Future of Real Estate Transactions',
      excerpt: 'Say goodbye to piles of paperwork. Learn how blockchain and digital signing are streamlining the closing process and saving days off transactions.',
      category: 'technology',
      image: 'https://images.unsplash.com/photo-1450101499163-c8917c7b0efc?w=600&h=400&fit=crop',
      author: 'Marcus Johnson',
      date: 'Jan 15, 2024',
      readTime: '4 min read'
    },
    {
      id: 7,
      title: 'Neighborhood Guide: Top Emerging Areas in 2024',
      excerpt: 'Looking for up-and-coming neighborhoods? We analyze data to identify neighborhoods poised for growth and appreciation.',
      category: 'market',
      image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=400&fit=crop',
      author: 'Elena Rodriguez',
      date: 'Jan 12, 2024',
      readTime: '6 min read'
    },
    {
      id: 8,
      title: 'Rental Income Calculator: Maximizing Your Investment',
      excerpt: 'Use our comprehensive rental income calculator and guidelines to estimate potential returns on investment properties.',
      category: 'investment',
      image: 'https://images.unsplash.com/photo-1434217261537-f0fd60b4f11d?w=600&h=400&fit=crop',
      author: 'James Wilson',
      date: 'Jan 10, 2024',
      readTime: '5 min read'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'market', label: 'Market Trends' },
    { id: 'guide', label: 'Guides' },
    { id: 'investment', label: 'Investment' },
    { id: 'technology', label: 'Technology' }
  ]

  const filteredPosts = selectedCategory === 'all'
    ? posts
    : posts.filter(post => post.category === selectedCategory)

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-500/10 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">
            Horizon Insights
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400">
            Expert advice, market trends, and tips for buyers, sellers, and investors.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-full font-bold transition-all ${selectedCategory === cat.id
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

      {/* Featured Post */}
      {selectedCategory === 'all' && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-6xl mx-auto">
            <div className="glass rounded-3xl overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto overflow-hidden">
                  <img
                    src={posts[0].image || "/placeholder.svg"}
                    alt={posts[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <span className="inline-block w-fit px-3 py-1 bg-teal-500 text-white rounded-full text-sm font-bold mb-4">
                    Featured
                  </span>
                  <h2 className="font-display text-3xl font-bold mb-4">{posts[0].title}</h2>
                  <p className="text-slate-600 dark:text-slate-400 text-lg mb-6">{posts[0].excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>{posts[0].author}</span>
                    <span>•</span>
                    <span>{posts[0].date}</span>
                    <span>•</span>
                    <span>{posts[0].readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(selectedCategory === 'all' ? posts.slice(1) : filteredPosts).map((post) => (
              <article key={post.id} className="glass rounded-2xl overflow-hidden hover:shadow-lg transition-all cursor-pointer group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 bg-teal-500 text-white rounded-full text-xs font-bold">
                      {categories.find(c => c.id === post.category)?.label}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-700">
                    <p className="text-xs text-slate-500">{post.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-500/10 to-slate-200/10 dark:from-teal-500/5 dark:to-slate-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            Get weekly insights and trends delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 glass px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
            <button
              type="submit"
              className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-3 px-8 rounded-lg transition-all active:scale-95 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <Footer />

    </div>
  )
}
