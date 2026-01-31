export default function SocialWall() {
  const posts = [
    {
      id: 1,
      avatar: true,
      handle: '@vickit_realty',
      time: '2 hours ago',
      text: 'Just closed on our first property in Austin using @horizonestates! The digital closing was seamless. No more stacks of paper at the notary office. 🏠✨',
      type: 'post',
    },
    {
      id: 2,
      title: 'Game Changer for Investors',
      text: 'The map-first navigation with heatmaps for rental yield is exactly what I needed. Found 3 gems in under an hour.',
      author: 'Jason M.',
      type: 'quote',
    },
    {
      id: 3,
      avatar: true,
      handle: 'The Austin Collective',
      time: 'Yesterday',
      image:
        'https://lh3.googleusercontent.com/aida-public/AB6AXuB_pkEOdJ3O5qZzzZj9k-baOzV2jlOaR7L9KnexyABnGvPf14BZzTU89LlgRp2w2kJRlm6G88L3N7rXij2Kex4kL3OmYgHu_lYGId-ZbLEej6FNpWwY2UAlSgOSboYI5F6wK8VPYyiqv8cgmyKACMhYOkC7g9Hz5WxV9BxNJnVnRrNYuEumAqht0BaG6ro1X8nuS3ndXJObegcRzAKHjcGAr57OLVTc_avdbkfnsnRMWFIslK4_BNuguUSx2IcLel9CseO5WaNOl0g',
      text: 'Found this stunning mid-century modern through the AI curation today. Look at those floor-to-ceiling windows!',
      type: 'post',
    },
    {
      id: 4,
      text: "Can we talk about the 3D walkthroughs? It's like Google Street View but for the inside of homes. Actually saved me from flying out for 2 viewings that weren't right. 👏",
      hashtag: '#PropTech #RealEstate',
      type: 'quote',
    },
    {
      id: 5,
      avatar: true,
      handle: '@urban_living',
      time: '3 days ago',
      text: 'The neighborhood insights are next level. Knowing exactly where the nearest organic market and high-rated schools are saved me hours of research.',
      type: 'post',
    },
    {
      id: 6,
      text: '"Hands down the best UI I\'ve ever seen for a property search. It actually makes looking for a home fun instead of stressful."',
      author: '— Elena K., Designer',
      type: 'quote-featured',
    },
  ]

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-teal-500 font-bold text-sm tracking-widest uppercase">Wall of Love</span>
          <h2 className="font-display text-4xl font-bold mt-4 mb-4">See why our users love Horizon</h2>
          <p className="text-slate-500">Join 50,000+ happy homeowners across the country.</p>
        </div>

        <div className="masonry gap-6 space-y-6">
          {posts.map((post) => {
            if (post.type === 'post') {
              return (
                <div key={post.id} className="break-inside-avoid glass p-6 rounded-2xl">
                  {post.handle && (
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-teal-500/20"></div>
                      <div>
                        <div className="font-bold text-sm">{post.handle}</div>
                        <div className="text-xs text-slate-500">{post.time}</div>
                      </div>
                    </div>
                  )}
                  {post.image && <img alt="Property" className="w-full rounded-xl mb-4" src={post.image || "/placeholder.svg"} />}
                  <p className="text-sm leading-relaxed mb-4">{post.text}</p>
                  <div className="flex gap-4 text-slate-400">
                    <span className="material-symbols-outlined text-sm">favorite</span>
                    <span className="material-symbols-outlined text-sm">chat_bubble</span>
                  </div>
                </div>
              )
            }

            if (post.type === 'quote-featured') {
              return (
                <div key={post.id} className="break-inside-avoid glass p-6 rounded-2xl bg-teal-500/10 border-teal-500/20">
                  <p className="text-sm italic mb-4">{post.text}</p>
                  <div className="font-bold text-xs uppercase tracking-tighter">{post.author}</div>
                </div>
              )
            }

            return (
              <div key={post.id} className="break-inside-avoid glass p-6 rounded-2xl border-l-4 border-teal-500">
                {post.title && <p className="font-bold mb-2">{post.title}</p>}
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{post.text}</p>
                {post.author && (
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-slate-300"></div>
                    <span className="text-xs font-bold">{post.author}</span>
                  </div>
                )}
                {post.hashtag && <span className="text-xs font-bold text-teal-500">{post.hashtag}</span>}
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <button className="bg-slate-200 dark:bg-slate-800 px-6 py-3 rounded-xl font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
            Show more testimonials
          </button>
        </div>
      </div>
    </section>
  )
}
