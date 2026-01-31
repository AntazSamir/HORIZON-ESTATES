export default function Testimonials() {
  const testimonials = [
    {
      text: '"Horizon Estates completely changed the way we looked for a home. The AI matches were scary accurate!"',
      author: 'David Chen',
      role: 'First-time Homebuyer',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuC-5-L6oNdpT2Yvv5qq8dN_xkQeF6iKb7kR0VSIt61ZXITI_x93uHdm_5DmVUAY7T5Ymwhz6Et0h-x5o4bNbQ_sU2Vi5fGF5v9ssvFghVcbTU0ww2xbCEV8-KWijDjpzdTkOY12wF-3IcniilzeNsZFCKWHo2f2y4Vk1F4BAWxu8iUs4-ZAsCWC7hTjanyryCYoxcfLgmFVZ6a5in0am3owrecw0D-4YwmCX_R4TcImC8zJWJ4RzFVORPTcEWrSzmR06kUOuTaFEgs',
    },
    {
      text: '"The digital closing process saved me weeks of paperwork. I won\'t use any other platform for my investments."',
      author: 'Sarah Jenkins',
      role: 'Real Estate Investor',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuBaHcUZQ5bYcg3zWb1pTrkwOuIFIOiN9Qkv6K58OWTrZXw8tuv4D3hRs_jH2jPIARYBc0rWGGOucOzpRgrAW--U323BaYWC7IkKliiKB8Eg884FcN7jhKNfPvDsHxhykz_g8mE7XZNGzzOt6Ei2Iq0PS_nZXKPVyskvZRELFdcbX0T1uf-HXYttvP4Tfg83bw6CEB4BpfIzZk5JZr4BYSrrCb2lIrKDiJVsECVQOyZc2KSaApDVdn-DZrVCto1qX6XUFIfg5biCRyU',
    },
    {
      text: '"The 3D tours are the best in the market. It feels like you\'re actually walking through the space."',
      author: 'Michael Ross',
      role: 'Relocated Homeowner',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB7Y3oAtTwP68eLPLetRqBEcgiDXUDkkw2eq3rCw2AOt8wWO5tR1ok3GmvH6ffx6D6l1DOgV_52Tt0uiSsOwj_xnCGP85dOh2ZcXUs-TDvkYEgNrEm4c0v0HaKDjn-pohKvo7naVeq-f0kCWXM4x3pWzoqjz5SEjgBExSRfSotIjc_JAdBaAqHUShXjgb9XsBAQJ_VXaqeudYPI66LSJCw4ao7_l9oavSmNcL6v3mOQ5OY-mEU7DPfX-i5puZ7r01Vk9tdli1iQU3Y',
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-teal-500 font-bold text-sm tracking-widest uppercase">Testimonials</span>
          <h2 className="font-display text-4xl font-bold mt-4">Don't just take our word for it</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="glass p-8 rounded-3xl">
              <div className="mb-6 text-yellow-500 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined">
                    star
                  </span>
                ))}
              </div>
              <p className="font-serif text-xl italic mb-8">{testimonial.text}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-300 overflow-hidden">
                  <img alt={testimonial.author} src={testimonial.image || "/placeholder.svg"} />
                </div>
                <div>
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-xs text-slate-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
