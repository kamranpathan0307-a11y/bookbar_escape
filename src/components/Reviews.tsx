const reviews = [
  {
    name: "Ananya R.",
    role: "Writer",
    text: "The kind of café you walk into for a coffee and leave four hours later with a new favourite book. Every detail is considered.",
    rating: 5,
  },
  {
    name: "Karan M.",
    role: "Architect",
    text: "Pune's most beautiful interior — warm wood, soft jazz, a flat white that ruined every other flat white for me.",
    rating: 5,
  },
  {
    name: "Sara P.",
    role: "Student",
    text: "I came to read for an hour. Three pizzas later, I had finished a novel and made two friends. This place is magic.",
    rating: 5,
  },
  {
    name: "Devika S.",
    role: "Designer",
    text: "Truffle pizza, a corner armchair, and the smell of espresso. It's the soft Sunday I didn't know I needed.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section className="relative py-28 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-coffee/80 mb-5">
            — Kind Words
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl mx-auto text-balance">
            Loved by readers,
            <span className="italic text-coffee"> coffee drinkers,</span> and
            quiet souls.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <figure
              key={r.name}
              className="hover-lift bg-card rounded-sm border border-border/60 p-7 flex flex-col"
            >
              <div className="flex gap-0.5 text-gold mb-5" aria-label={`${r.rating} of 5`}>
                {Array.from({ length: r.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="font-serif text-xl leading-snug text-foreground/90 flex-1">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-8 pt-5 border-t border-border/60">
                <p className="font-medium">{r.name}</p>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {r.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
