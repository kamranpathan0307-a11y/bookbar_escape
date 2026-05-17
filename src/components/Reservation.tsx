import { useState } from "react";

export function Reservation() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="reserve" className="relative py-28 md:py-40 px-6 bg-muted/40">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.35em] text-coffee/80 mb-5">
            — Reservations
          </p>
          <h2 className="font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-2xl mx-auto text-balance">
            Reserve your
            <span className="italic text-coffee"> cozy corner.</span>
          </h2>
        </div>

        {submitted ? (
          <div className="bg-card border border-border rounded-sm p-12 text-center">
            <div className="text-4xl mb-4">☕</div>
            <h3 className="font-serif text-3xl mb-3">Your table is saved.</h3>
            <p className="text-muted-foreground">
              We'll see you soon. A confirmation is on its way.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="bg-card border border-border rounded-sm p-8 md:p-12 grid md:grid-cols-2 gap-6"
          >
            <Field label="Name" name="name" placeholder="Your name" required />
            <Field label="Date" name="date" type="date" required />
            <Field label="Time" name="time" type="time" required />
            <Field label="Guests" name="guests" type="number" min={1} max={20} defaultValue={2} required />
            <div className="md:col-span-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">
                Special Request
              </label>
              <textarea
                name="request"
                rows={4}
                placeholder="A window seat, a quiet corner, a birthday surprise..."
                className="w-full bg-transparent border-b border-border focus:border-coffee outline-none py-3 text-base resize-none transition-colors"
              />
            </div>
            <div className="md:col-span-2 flex justify-end pt-4">
              <button
                type="submit"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.22em] hover:bg-coffee transition-colors"
              >
                Reserve Your Cozy Corner
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground block mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        className="w-full bg-transparent border-b border-border focus:border-coffee outline-none py-3 text-base transition-colors"
        {...rest}
      />
    </div>
  );
}
