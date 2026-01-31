'use client'

import { useState } from 'react'

export default function FinancialCalculator() {
  const [monthlyRent, setMonthlyRent] = useState(2500)
  const [homePrice, setHomePrice] = useState(650000)

  // Calculate break-even point (simplified formula)
  const monthlyMortgage = homePrice * 0.006 // Approximate mortgage at 7% for 30 years
  const breakEvenMonths = Math.max(
    0,
    (homePrice * 0.1) / (monthlyMortgage - monthlyRent)
  )
  const breakEvenYears = (breakEvenMonths / 12).toFixed(1)

  // Calculate 5-year comparison
  const rentTotal = monthlyRent * 12 * 5
  const buyTotal = monthlyMortgage * 12 * 5 + homePrice * 0.1
  const rentIsMore = rentTotal > buyTotal
  const difference = Math.abs(rentTotal - buyTotal)
  const percentage = ((difference / Math.max(rentTotal, buyTotal)) * 100).toFixed(0)

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-teal-500 font-bold text-sm tracking-widest uppercase">Financial Clarity</span>
          <h2 className="font-display text-4xl font-bold mt-4 mb-6">
            Rent vs. Buy: Decide with Confidence
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            Buying isn&apos;t always the best move. Use our interactive calculator to see how long it takes for buying to become more cost-effective than renting in your target neighborhood.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Calculator */}
          <div className="space-y-8">
            {/* Monthly Rent Budget */}
            <div>
              <label className="block font-bold text-sm mb-4">Monthly Rent Budget</label>
              <input
                type="range"
                min="1000"
                max="5000"
                step="100"
                value={monthlyRent}
                onChange={(e) => setMonthlyRent(Number(e.target.value))}
                className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
              />
              <div className="mt-3 text-2xl font-bold text-teal-500">
                ${monthlyRent.toLocaleString()}
              </div>
            </div>

            {/* Target Home Price */}
            <div>
              <label className="block font-bold text-sm mb-4">Target Home Price</label>
              <input
                type="range"
                min="200000"
                max="2000000"
                step="50000"
                value={homePrice}
                onChange={(e) => setHomePrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-300 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-teal-500"
              />
              <div className="mt-3 text-2xl font-bold text-teal-500">
                ${homePrice.toLocaleString()}
              </div>
            </div>

            {/* Break-Even Point */}
            <div className="glass p-6 rounded-2xl">
              <div className="text-sm uppercase tracking-widest text-slate-600 dark:text-slate-400 font-bold mb-2">
                Break-Even Point
              </div>
              <div className="text-4xl font-bold mb-6">
                {breakEvenYears} <span className="text-lg">Years</span>
              </div>
              <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                Detailed Report
              </button>
            </div>
          </div>

          {/* Right Side - Neighborhood Card */}
          <div className="relative">
            <div className="glass p-8 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 text-white border-0 overflow-hidden">
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-900/80"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <span className="material-symbols-outlined text-teal-400 text-4xl">location_on</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">Neighborhood: Highland Park</h3>

                <p className="text-slate-200 mb-6 leading-relaxed">
                  Rent is currently <span className="text-teal-400 font-bold">{percentage}% more cost-effective</span> than buying over a 5-year horizon in this area.
                </p>

                {/* Comparison Stats */}
                <div className="space-y-4 pt-6 border-t border-slate-700">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">5-Year Rent Cost:</span>
                    <span className="font-bold text-teal-400">
                      ${rentTotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">5-Year Buy Cost:</span>
                    <span className="font-bold text-slate-300">
                      ${buyTotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-700">
                    <span className="text-slate-300 font-bold">Savings:</span>
                    <span className={`font-bold text-lg ${rentIsMore ? 'text-teal-400' : 'text-orange-400'}`}>
                      ${difference.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
