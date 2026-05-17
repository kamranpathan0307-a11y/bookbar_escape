export function Contact() {
  return (
    <section id="contact" className="relative py-28 md:py-40 px-6">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-stretch">
        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-[0.35em] text-coffee/80 mb-5">
            — Find Us
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight text-balance">
            Drop in.
            <br />
            <span className="italic text-coffee">Stay a while.</span>
          </h2>

          <div className="divider-rule my-10 max-w-sm" />

          <dl className="space-y-7 text-base">
            <div>
              <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Address</dt>
              <dd className="font-serif text-2xl leading-snug">
                14, North Main Road
                <br />
                Koregaon Park, Pune 411001
              </dd>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Hours</dt>
                <dd className="font-serif text-xl">8 am — 11 pm<br />Every day</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-1">Call</dt>
                <dd className="font-serif text-xl">
                  +91 98220 12345
                  <br />
                  hello@bookbar.in
                </dd>
              </div>
            </div>
          </dl>

          <div className="flex flex-wrap gap-3 mt-10">
            {[
              { label: "Instagram", href: "https://instagram.com" },
              { label: "Zomato", href: "https://zomato.com" },
              { label: "Google Reviews", href: "https://google.com/maps" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-sm overflow-hidden border border-border min-h-[420px] relative bg-muted">
          <iframe
            title="Bookbar location"
            src="https://www.google.com/maps?q=Koregaon+Park+Pune&output=embed"
            loading="lazy"
            className="w-full h-full min-h-[420px]"
            style={{ border: 0, filter: "grayscale(0.4) sepia(0.15) contrast(0.95)" }}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
