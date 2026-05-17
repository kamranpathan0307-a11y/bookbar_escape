import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Story" },
  { href: "#menu", label: "Menu" },
  { href: "#bookstore", label: "Bookstore" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reserve", label: "Reserve" },
  { href: "#contact", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    let lastScrolled = window.scrollY > 24;

    const updateScrolled = () => {
      ticking = false;
      const nextScrolled = window.scrollY > 24;
      if (nextScrolled !== lastScrolled) {
        lastScrolled = nextScrolled;
        setScrolled(nextScrolled);
      }
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScrolled);
      }
    };

    setScrolled(lastScrolled);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      ticking = false;
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-6"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 flex items-center justify-between transition-all duration-500 ${
          scrolled
            ? "glass rounded-full px-5 py-2 shadow-[0_10px_40px_-20px_rgba(60,40,20,0.25)] border border-border/60 max-w-6xl"
            : ""
        }`}
      >
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-serif text-2xl tracking-tight">Bookbar</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em] text-muted-foreground border-l border-border pl-2 ml-1">
            Pune
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-foreground/80 hover:text-foreground relative after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-foreground after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#reserve"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground text-background text-xs uppercase tracking-[0.18em] px-5 py-3 hover:bg-coffee transition-colors"
        >
          Reserve
        </a>
        <button
          aria-label="Menu"
          className="md:hidden p-2"
          onClick={() => setOpen((o) => !o)}
        >
          <div className="w-6 h-px bg-foreground mb-1.5" />
          <div className="w-6 h-px bg-foreground mb-1.5" />
          <div className="w-4 h-px bg-foreground ml-auto" />
        </button>
      </div>
      {open && (
        <div className="md:hidden mx-6 mt-3 glass rounded-2xl border border-border p-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-lg font-serif"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
