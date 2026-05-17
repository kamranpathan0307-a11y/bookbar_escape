import hero from "@/assets/hero-cafe.jpg";
import coffeeBook from "@/assets/coffee-book.jpg";
import pizza from "@/assets/pizza.jpg";
import bookshelf from "@/assets/bookshelf.jpg";
import barista from "@/assets/barista.jpg";
import reading from "@/assets/reading.jpg";
import bakery from "@/assets/bakery.jpg";
import interior from "@/assets/interior.jpg";

const tiles = [
  { src: hero, h: "row-span-2", alt: "Cafe interior" },
  { src: pizza, h: "", alt: "Wood-fired pizza" },
  { src: barista, h: "row-span-2", alt: "Barista pouring latte art" },
  { src: bakery, h: "", alt: "Bakery counter" },
  { src: bookshelf, h: "row-span-2", alt: "Bookshelves" },
  { src: coffeeBook, h: "", alt: "Coffee and book" },
  { src: reading, h: "row-span-2", alt: "Reading nook" },
  { src: interior, h: "", alt: "Brick wall and pendants" },
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-28 md:py-40 bg-espresso text-cream grain">
      <div className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-gold/80 mb-5">
                — Moments
              </p>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-2xl text-balance">
                A slow scroll through
                <span className="italic"> our afternoons.</span>
              </h2>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.22em] text-cream/80 hover:text-gold transition-colors"
            >
              @bookbar.pune ↗
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
            {tiles.map((t, i) => (
              <div
                key={i}
                className={`img-zoom relative overflow-hidden rounded-sm ${t.h}`}
              >
                <img
                  src={t.src}
                  alt={t.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-cream/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
