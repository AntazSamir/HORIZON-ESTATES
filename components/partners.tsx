export default function Partners() {
  const partners = ['ESTATECO.', 'REALTREE', 'METROPROP', 'URBANLAND', 'SKYLINE']

  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-8">
          Trusted by industry-leading partners
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
          {partners.map((partner) => (
            <div key={partner} className="flex items-center font-display font-bold text-2xl">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
