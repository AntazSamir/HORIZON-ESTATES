export default function Features() {
  const features = [
    { icon: 'calculate', label: 'Mortgage Calc' },
    { icon: 'local_fire_department', label: 'Heatmaps' },
    { icon: 'school', label: 'School Ratings' },
    { icon: 'account_balance_wallet', label: 'Financing Hub' },
    { icon: 'notifications_active', label: 'Instant Alerts' },
    { icon: 'history', label: 'Price History' },
    { icon: 'event', label: 'Tour Scheduler' },
    { icon: 'verified', label: 'Verified Agents' },
  ]

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950/30">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="font-display text-4xl font-bold mb-16">...and so much more!</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="glass p-6 rounded-2xl flex flex-col items-center hover:shadow-xl transition-shadow cursor-pointer"
            >
              <span className="material-symbols-outlined text-teal-500 mb-3 text-3xl">{feature.icon}</span>
              <span className="font-bold text-sm">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
