import interior from "@/assets/interior.jpg";

export function Experience() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden grain">
      <img
        src={interior}
        alt="Warm cafe interior at evening"
        width={1920}
        height={1080}
        loading="lazy"
        decoding="async"
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/85 via-espresso/60 to-transparent" />

      <div className="relative z-10 px-6 py-24 mx-auto max-w-7xl w-full">
        <div className="max-w-2xl text-cream">
          <p className="text-xs uppercase tracking-[0.35em] text-gold mb-6">
            — The Experience
          </p>
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance">
            More than a café —
            <span className="italic"> it's an experience.</span>
          </h2>
          <p className="mt-8 text-cream/80 text-lg leading-relaxed max-w-xl">
            Work mornings. First dates. Long letters. Solo coffees. Whatever
            you carry in, we have a corner for it.
          </p>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-2xl">
            {[
              ["Wi-Fi", "Fast & quiet"],
              ["Hours", "8am – 11pm"],
              ["Seats", "62 cozy ones"],
              ["Vibe", "Always soft"],
            ].map(([k, v]) => (
              <div key={k}>
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">{k}</p>
                <p className="font-serif text-2xl mt-2">{v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
