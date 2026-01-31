'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

import { properties } from '@/lib/properties'

export default function PropertiesPage() {
  const [mounted, setMounted] = useState(false)
  const [filteredProperties, setFilteredProperties] = useState(properties)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    location: 'all'
  })

  useEffect(() => {
    setMounted(true)
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleFilterChange = (filterType: string, value: string) => {
    const newFilters = { ...filters, [filterType]: value }
    setFilters(newFilters)
    setOpenDropdown(null)

    let filtered = properties
    if (newFilters.type !== 'all') {
      filtered = filtered.filter(p => p.type === newFilters.type)
    }
    // Note: location and priceRange filtering could be implemented here as well
    setFilteredProperties(filtered)
  }

  const dropdownOptions = {
    type: [
      { label: 'All Types', value: 'all', description: 'Show everything', icon: 'home' },
      { label: 'House', value: 'house', description: 'Single family homes', icon: 'house' },
      { label: 'Apartment', value: 'apartment', description: 'Modern living units', icon: 'apartment' },
    ],
    priceRange: [
      { label: 'All Prices', value: 'all', description: 'No price limit', icon: 'payments' },
      { label: 'Under $1M', value: 'under-1m', description: 'Affordable entry levels', icon: 'keyboard_double_arrow_down' },
      { label: '$1M - $3M', value: '1m-3m', description: 'Mid-range luxury', icon: 'trending_up' },
      { label: 'Over $3M', value: 'over-3m', description: 'Ultra-premium collection', icon: 'workspace_premium' },
    ],
    location: [
      { label: 'All Locations', value: 'all', description: 'Nationwide search', icon: 'public' },
      { label: 'West Coast', value: 'west', description: 'California, WA, OR', icon: 'wb_sunny' },
      { label: 'Midwest', value: 'midwest', description: 'Central states', icon: 'agriculture' },
      { label: 'East Coast', value: 'east', description: 'NY, FL, MA', icon: 'location_city' },
    ]
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-500/10 to-transparent">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-display text-5xl lg:text-6xl font-bold mb-4">
            Discover Your Next Home
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Browse our curated collection of premium properties across the nation.
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto" ref={dropdownRef}>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Property Type Dropdown */}
            <div className="relative">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 ml-2">Property Type</label>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'type' ? null : 'type')}
                className="w-full flex items-center justify-between glass px-5 py-4 rounded-2xl hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-all border border-slate-200 dark:border-slate-800 group"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-teal-500">
                    {dropdownOptions.type.find(o => o.value === filters.type)?.icon}
                  </span>
                  <span className="font-bold">{dropdownOptions.type.find(o => o.value === filters.type)?.label}</span>
                </div>
                <span className={`material-symbols-outlined transition-transform duration-300 ${openDropdown === 'type' ? 'rotate-180' : ''}`}>expand_more</span>
              </button>

              <div className={`absolute top-full left-0 right-0 mt-2 glass rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 z-50 origin-top shadow-2xl ${openDropdown === 'type' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
                <div className="p-2 space-y-1">
                  {dropdownOptions.type.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleFilterChange('type', option.value)}
                      className={`w-full flex items-start gap-4 p-4 rounded-xl transition-all text-left group/item ${filters.type === option.value ? 'bg-teal-500/10 text-teal-500' : 'hover:bg-teal-500/5'}`}
                    >
                      <span className={`material-symbols-outlined ${filters.type === option.value ? 'text-teal-500' : 'text-slate-400 group-hover/item:text-teal-500'}`}>{option.icon}</span>
                      <div>
                        <div className="font-bold">{option.label}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">{option.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price Range Dropdown */}
            <div className="relative">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 ml-2">Price Range</label>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'price' ? null : 'price')}
                className="w-full flex items-center justify-between glass px-5 py-4 rounded-2xl hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-all border border-slate-200 dark:border-slate-800 group"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-teal-500">
                    {dropdownOptions.priceRange.find(o => o.value === filters.priceRange)?.icon}
                  </span>
                  <span className="font-bold">{dropdownOptions.priceRange.find(o => o.value === filters.priceRange)?.label}</span>
                </div>
                <span className={`material-symbols-outlined transition-transform duration-300 ${openDropdown === 'price' ? 'rotate-180' : ''}`}>expand_more</span>
              </button>

              <div className={`absolute top-full left-0 right-0 mt-2 glass rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 z-50 origin-top shadow-2xl ${openDropdown === 'price' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
                <div className="p-2 space-y-1">
                  {dropdownOptions.priceRange.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleFilterChange('priceRange', option.value)}
                      className={`w-full flex items-start gap-4 p-4 rounded-xl transition-all text-left group/item ${filters.priceRange === option.value ? 'bg-teal-500/10 text-teal-500' : 'hover:bg-teal-500/5'}`}
                    >
                      <span className={`material-symbols-outlined ${filters.priceRange === option.value ? 'text-teal-500' : 'text-slate-400 group-hover/item:text-teal-500'}`}>{option.icon}</span>
                      <div>
                        <div className="font-bold">{option.label}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">{option.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Location Dropdown */}
            <div className="relative">
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-3 ml-2">Location</label>
              <button
                onClick={() => setOpenDropdown(openDropdown === 'location' ? null : 'location')}
                className="w-full flex items-center justify-between glass px-5 py-4 rounded-2xl hover:bg-slate-100/50 dark:hover:bg-slate-900/50 transition-all border border-slate-200 dark:border-slate-800 group"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-teal-500">
                    {dropdownOptions.location.find(o => o.value === filters.location)?.icon}
                  </span>
                  <span className="font-bold">{dropdownOptions.location.find(o => o.value === filters.location)?.label}</span>
                </div>
                <span className={`material-symbols-outlined transition-transform duration-300 ${openDropdown === 'location' ? 'rotate-180' : ''}`}>expand_more</span>
              </button>

              <div className={`absolute top-full left-0 right-0 mt-2 glass rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-300 z-50 origin-top shadow-2xl ${openDropdown === 'location' ? 'opacity-100 scale-y-100 visible' : 'opacity-0 scale-y-95 invisible'}`}>
                <div className="p-2 space-y-1">
                  {dropdownOptions.location.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleFilterChange('location', option.value)}
                      className={`w-full flex items-start gap-4 p-4 rounded-xl transition-all text-left group/item ${filters.location === option.value ? 'bg-teal-500/10 text-teal-500' : 'hover:bg-teal-500/5'}`}
                    >
                      <span className={`material-symbols-outlined ${filters.location === option.value ? 'text-teal-500' : 'text-slate-400 group-hover/item:text-teal-500'}`}>{option.icon}</span>
                      <div>
                        <div className="font-bold">{option.label}</div>
                        <div className="text-[10px] text-slate-500 dark:text-slate-400">{option.description}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-4xl font-bold mb-2">Featured Listings</h2>
              <p className="text-slate-500 dark:text-slate-400">Showing {filteredProperties.length} properties matching your criteria</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.filter(p => !p.forRent).map((property) => (
              <div key={property.id} className="group glass rounded-2xl overflow-hidden hover:shadow-xl transition-all border border-slate-200 dark:border-slate-800">
                <div className="relative overflow-hidden h-64">
                  <img
                    src={property.image || "/placeholder.svg"}
                    alt={property.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    {property.featured && (
                      <div className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        Featured
                      </div>
                    )}
                    <div className="bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      For Sale
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-teal-500 transition-colors">{property.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 flex items-center gap-1">
                    <span className="material-symbols-outlined text-teal-500 text-base">location_on</span>
                    {property.location}
                  </p>
                  <div className="font-display text-3xl font-bold text-teal-500 mb-6">{property.price}</div>
                  <div className="grid grid-cols-3 gap-2 py-4 border-y border-slate-100 dark:border-slate-800 mb-6">
                    <div className="text-center">
                      <span className="material-symbols-outlined text-teal-500 text-xl block mb-1">bed</span>
                      <span className="text-xs font-bold uppercase tracking-tighter">{property.beds} Beds</span>
                    </div>
                    <div className="text-center">
                      <span className="material-symbols-outlined text-teal-500 text-xl block mb-1">bathtub</span>
                      <span className="text-xs font-bold uppercase tracking-tighter">{property.baths} Baths</span>
                    </div>
                    <div className="text-center">
                      <span className="material-symbols-outlined text-teal-500 text-xl block mb-1">square_foot</span>
                      <span className="text-xs font-bold uppercase tracking-tighter">{property.sqft} sqft</span>
                    </div>
                  </div>
                  <Link href={`/properties/${property.id}`}>
                    <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-950 text-white font-bold py-3.5 rounded-xl transition-all hover:bg-teal-500 hover:text-white active:scale-95 shadow-lg">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProperties.length === 0 && (
            <div className="text-center py-20 glass rounded-3xl">
              <span className="material-symbols-outlined text-6xl text-slate-300 mb-4 font-light">search_off</span>
              <h3 className="text-2xl font-bold mb-2">No Matching Properties</h3>
              <p className="text-slate-500">Try adjusting your filters to find more options.</p>
              <button
                onClick={() => handleFilterChange('type', 'all')}
                className="mt-6 text-teal-500 font-bold hover:underline"
              >
                Reset all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 italic">Looking for something specific?</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Our AI-powered search can help you find exactly what you're looking for by analyzing your lifestyle and preferences.
          </p>
          <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-5 px-10 rounded-2xl transition-all active:scale-95 shadow-xl shadow-teal-500/20">
            Activate AI Search助理
          </button>
        </div>
      </section>

      <Footer />

    </div>
  )
}
