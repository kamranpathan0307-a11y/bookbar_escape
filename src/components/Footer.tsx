export function Footer() {
  return (
    <footer className="relative bg-espresso text-cream/80 grain">
      <div className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="font-serif text-4xl md:text-5xl text-cream leading-tight italic max-w-md">
                "Coffee tastes better beside a bookshelf."
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-7">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-5">Visit</p>
              <ul className="space-y-2 font-serif text-lg">
                <li>14, North Main Road</li>
                <li>Koregaon Park, Pune</li>
                <li>8 am — 11 pm</li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-5">Explore</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#menu" className="hover:text-cream">Menu</a></li>
                <li><a href="#bookstore" className="hover:text-cream">Bookstore</a></li>
                <li><a href="#gallery" className="hover:text-cream">Gallery</a></li>
                <li><a href="#reserve" className="hover:text-cream">Reserve</a></li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80 mb-5">Follow</p>
              <ul className="space-y-2 text-sm">
                <li><a href="https://instagram.com" className="hover:text-cream">Instagram</a></li>
                <li><a href="https://zomato.com" className="hover:text-cream">Zomato</a></li>
                <li><a href="https://google.com" className="hover:text-cream">Google</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-8 border-t border-cream/15 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/60">
            <p>
              <span className="font-serif text-base text-cream">Bookbar</span> · Artisanal Coffee, Bookstore &amp; Pizza House
            </p>
            <p>© {new Date().getFullYear()} Bookbar Pune. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919822012345"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-[0_15px_40px_-10px_rgba(37,211,102,0.5)] flex items-center justify-center hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-current" aria-hidden>
        <path d="M19.11 17.21c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35zM16.02 5.33c-5.87 0-10.65 4.78-10.65 10.66 0 1.88.49 3.71 1.42 5.33L5.3 26.67l5.49-1.44a10.6 10.6 0 0 0 5.23 1.34h.01c5.87 0 10.65-4.78 10.65-10.66 0-2.85-1.11-5.52-3.12-7.53a10.58 10.58 0 0 0-7.54-3.05z"/>
      </svg>
    </a>
  );
}
