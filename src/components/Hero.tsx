import hero from "@/assets/hero-cafe.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden grain">
      <img
        src={hero}
        alt="Cozy Bookbar interior with bookshelves and espresso bar"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-espresso/55 via-espresso/35 to-espresso/80" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(20,12,6,0.55)_100%)]" />

      {/* Floating ambient */}
      <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full bg-gold/20 blur-3xl float-slow" />
      <div
        className="absolute bottom-1/3 right-16 w-56 h-56 rounded-full bg-coffee/30 blur-3xl float-slow"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 min-h-screen flex flex-col justify-end pb-24 md:pb-32 px-6">
        <div className="mx-auto max-w-7xl w-full">
          <p className="reveal text-cream/80 text-xs uppercase tracking-[0.4em] mb-8">
            Est. Pune · Coffee · Books · Pizza
          </p>
          <h1 className="reveal reveal-delay-1 font-serif text-cream text-[clamp(2.75rem,8vw,7.5rem)] leading-[0.95] tracking-tight text-balance max-w-5xl">
            Where books, coffee
            <br />
            <span className="italic text-gold">&amp; conversations</span> come alive.
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-xl text-cream/80 text-base md:text-lg leading-relaxed">
            A handcrafted café experience blending artisan coffee, wood-fired pizzas,
            and the quiet warmth of a neighbourhood bookstore.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-3 rounded-full bg-cream text-espresso px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-gold transition-colors"
            >
              Explore Menu
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#reserve"
              className="inline-flex items-center gap-3 rounded-full border border-cream/40 text-cream px-7 py-4 text-xs uppercase tracking-[0.22em] hover:bg-cream/10 transition-colors"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 inset-x-0 flex justify-center">
        <div className="flex flex-col items-center gap-2 text-cream/60 text-[10px] uppercase tracking-[0.3em]">
          <span>Scroll</span>
          <span className="w-px h-10 bg-cream/40 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
