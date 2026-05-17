import barista from "@/assets/barista.jpg";
import coffeeBook from "@/assets/coffee-book.jpg";

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-40 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1 grid grid-cols-2 gap-4">
          <div className="img-zoom rounded-sm aspect-[3/4] -mt-12">
            <img
              src={barista}
              alt="Barista pouring latte art"
              width={1080}
              height={1440}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="img-zoom rounded-sm aspect-[3/4] mt-12">
            <img
              src={coffeeBook}
              alt="Latte beside an open book"
              width={1080}
              height={1440}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-8">
          <p className="text-xs uppercase tracking-[0.35em] text-coffee/80 mb-6">
            — Our Story
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
            A quiet corner of Pune for
            <span className="italic text-coffee"> slow mornings</span> and
            longer conversations.
          </h2>
          <div className="divider-rule my-10 max-w-md" />
          <div className="space-y-5 text-foreground/75 text-base md:text-lg leading-relaxed max-w-xl">
            <p>
              Bookbar began as a love letter — to single-origin coffee, to the
              smell of paperbacks, to dough that rises overnight and to the
              kind of afternoons that disappear without a clock.
            </p>
            <p>
              We built the kind of room we always wanted to walk into: warm
              wood, soft light, shelves of well-read titles, and a bar where
              the espresso is pulled with patience and the pizza is fired on
              stone.
            </p>
          </div>

          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Beans</dt>
              <dd className="font-serif text-3xl mt-1">Single Origin</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Dough</dt>
              <dd className="font-serif text-3xl mt-1">48 hr</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Titles</dt>
              <dd className="font-serif text-3xl mt-1">2,000+</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
