import coffee from "@/assets/coffee-book.jpg";
import pizza from "@/assets/pizza.jpg";
import bakery from "@/assets/bakery.jpg";
import bookshelf from "@/assets/bookshelf.jpg";
import coldbrew from "@/assets/coldbrew.jpg";

const categories = [
  {
    tag: "01",
    icon: "☕",
    title: "Artisan Coffee",
    desc: "House-roasted single-origin beans, pulled with care.",
    items: [
      { name: "Slow-pour Espresso", price: "₹180" },
      { name: "Honey Cortado", price: "₹240" },
      { name: "Cardamom Flat White", price: "₹260" },
      { name: "Pour-over Ethiopia", price: "₹320" },
    ],
    image: coffee,
  },
  {
    tag: "02",
    icon: "🍕",
    title: "Wood-fired Pizzas",
    desc: "48-hour dough, stone oven, fresh basil.",
    items: [
      { name: "Burrata Margherita", price: "₹520" },
      { name: "Truffle & Mushroom", price: "₹680" },
      { name: "Spiced Paneer Tikka", price: "₹560" },
      { name: "Fig, Honey & Walnut", price: "₹640" },
    ],
    image: pizza,
  },
  {
    tag: "03",
    icon: "🥐",
    title: "Bakery & Desserts",
    desc: "Laminated, layered, and lovingly made at dawn.",
    items: [
      { name: "Almond Croissant", price: "₹220" },
      { name: "Basque Cheesecake", price: "₹320" },
      { name: "Pistachio Babka", price: "₹280" },
      { name: "Dark Chocolate Tart", price: "₹340" },
    ],
    image: bakery,
  },
  {
    tag: "04",
    icon: "📚",
    title: "Bookbar Specials",
    desc: "Curated pairings — a book, a brew, a quiet hour.",
    items: [
      { name: "The Reader's Plate", price: "₹460" },
      { name: "Writer's Late Night", price: "₹520" },
      { name: "Sunday Slow Brunch", price: "₹780" },
      { name: "Poetry & Filter", price: "₹290" },
    ],
    image: bookshelf,
  },
  {
    tag: "05",
    icon: "🥤",
    title: "Cold Brews & Matcha",
    desc: "Steeped overnight, whisked by hand.",
    items: [
      { name: "Classic Cold Brew", price: "₹260" },
      { name: "Tonic Espresso", price: "₹290" },
      { name: "Iced Ceremonial Matcha", price: "₹320" },
      { name: "Rose Cold Foam Latte", price: "₹310" },
    ],
    image: coldbrew,
  },
];

export function Menu() {
  return (
    <section id="menu" className="relative py-28 md:py-40 bg-muted/40">
      <div className="px-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-coffee/80 mb-5">
                — Signature Menu
              </p>
              <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-2xl text-balance">
                Small menu. <span className="italic text-coffee">Big intention.</span>
              </h2>
            </div>
            <p className="text-foreground/70 max-w-sm text-base">
              Five categories, rotating seasonally. Everything you see is made
              in-house — from the focaccia to the foam.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <article
                key={cat.tag}
                className="hover-lift group bg-card rounded-sm overflow-hidden border border-border/60 flex flex-col"
              >
                <div className="img-zoom aspect-[4/3] relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 text-cream text-xs tracking-[0.3em] uppercase">
                    {cat.tag}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-3">
                    <h3 className="text-cream font-serif text-2xl md:text-3xl">
                      {cat.title}
                    </h3>
                    <span className="text-2xl">{cat.icon}</span>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="text-sm text-muted-foreground italic mb-5">{cat.desc}</p>
                  <ul className="space-y-3 flex-1">
                    {cat.items.map((item) => (
                      <li key={item.name} className="flex items-baseline gap-3 text-sm">
                        <span className="text-foreground/90">{item.name}</span>
                        <span className="flex-1 border-b border-dotted border-border translate-y-[-3px]" />
                        <span className="text-coffee font-medium tabular-nums">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
