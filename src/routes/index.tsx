import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Menu } from "@/components/Menu";
import { Bookstore } from "@/components/Bookstore";
import { Gallery } from "@/components/Gallery";
import { Reviews } from "@/components/Reviews";
import { Experience } from "@/components/Experience";
import { Reservation } from "@/components/Reservation";
import { Contact } from "@/components/Contact";
import { Footer, WhatsAppFloat } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Bookbar — Artisanal Coffee, Bookstore & Pizza House · Pune" },
      {
        name: "description",
        content:
          "A handcrafted café experience in Pune blending artisan coffee, wood-fired pizzas, and the warmth of a neighbourhood bookstore.",
      },
      { property: "og:title", content: "Bookbar — Coffee, Books & Pizza in Pune" },
      {
        property: "og:description",
        content:
          "Where books, coffee and conversations come alive. A cozy bookstore café in Koregaon Park, Pune.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Bookstore />
      <Gallery />
      <Reviews />
      <Experience />
      <Reservation />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
