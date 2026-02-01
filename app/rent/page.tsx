import Link from 'next/link'
import Image from 'next/image'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

import FinancialCalculator from '@/components/financial-calculator'
import { properties } from '@/lib/properties'

export default function RentPage() {
  const rentalProperties = properties.filter(p => p.forRent && p.rentalType === 'long')

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm font-medium mb-4">
            <span className="material-symbols-outlined text-lg">key</span>
            Long Term Leasing
          </div>
          <h1 className="font-display text-5xl font-bold mb-6">
            Find Your Next <span className="text-teal-500">Home</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Browse our selection of premium long-term rental properties. Flexible lease terms and move-in ready homes waiting for you.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rentalProperties.map((property) => (
              <div key={property.id} className="group glass rounded-2xl overflow-hidden hover:shadow-xl transition-all">
                <div className="relative overflow-hidden h-64">
                  <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {property.featured && (
                    <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                      Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 bg-slate-900/60 backdrop-blur-md text-white px-3 py-1 rounded-lg text-sm font-medium">
                    {property.location}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2 group-hover:text-teal-500 transition-colors">{property.title}</h3>
                  <p className="text-teal-500 text-2xl font-bold mb-4">{property.price}</p>

                  <div className="flex justify-between text-sm text-slate-600 dark:text-slate-400 mb-6">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">bed</span>
                      {property.beds} Beds
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">bathtub</span>
                      {property.baths} Baths
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-lg">square_foot</span>
                      {property.sqft} sqft
                    </span>
                  </div>

                  <Link href={`/properties/${property.id}`}>
                    <button className="w-full bg-slate-900 dark:bg-white dark:text-slate-950 text-white font-bold py-3 px-4 rounded-xl transition-all hover:bg-teal-500 hover:text-white dark:hover:bg-teal-500 dark:hover:text-white active:scale-[0.98]">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinancialCalculator />

      <Footer />

    </div>
  )
}
