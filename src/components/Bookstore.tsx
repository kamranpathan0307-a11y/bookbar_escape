import bookshelf from "@/assets/bookshelf.jpg";
import reading from "@/assets/reading.jpg";

export function Bookstore() {
  return (
    <section id="bookstore" className="relative py-28 md:py-40 px-6 overflow-hidden">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-6">
          <p className="text-xs uppercase tracking-[0.35em] text-coffee/80 mb-5">
            — The Bookstore
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
            Read while
            <br />
            <span className="italic text-coffee">you sip.</span>
          </h2>

          <div className="divider-rule my-10 max-w-sm" />

          <p className="text-foreground/75 text-base md:text-lg leading-relaxed max-w-xl">
            Two thousand titles. Independent imprints, second-hand classics,
            poetry on the lower shelf because that's where the light is best.
            Buy one. Borrow one. Read it here with a flat white and a window
            seat all afternoon.
          </p>

          <ul className="mt-10 space-y-4 max-w-md">
            {[
              ["Literary Fiction", "Booker shortlists & quiet debuts"],
              ["Poetry & Essays", "Hand-curated, ever-changing"],
              ["Art & Architecture", "Coffee-table heavyweights"],
              ["Local Voices", "Marathi & Indian writing"],
            ].map(([title, desc]) => (
              <li key={title} className="flex items-baseline gap-4 group">
                <span className="text-coffee/40 font-serif text-2xl group-hover:text-gold transition-colors">
                  ✦
                </span>
                <div>
                  <p className="font-serif text-xl">{title}</p>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-6 relative">
          <div className="img-zoom rounded-sm overflow-hidden aspect-[3/4] max-w-md ml-auto">
            <img
              src={bookshelf}
              alt="Floor-to-ceiling bookshelf with leather reading chair"
              width={1080}
              height={1440}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="img-zoom rounded-sm overflow-hidden aspect-[4/5] w-56 md:w-72 absolute -bottom-8 -left-4 md:-left-12 border-8 border-background shadow-2xl hidden sm:block">
            <img
              src={reading}
              alt="Person reading with a cappuccino"
              width={800}
              height={1000}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-6 -right-2 md:-right-6 glass rounded-sm px-5 py-4 max-w-[200px] hidden md:block">
            <p className="font-serif text-2xl leading-tight italic">
              "Coffee tastes better beside a bookshelf."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
