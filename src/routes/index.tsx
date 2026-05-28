import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Xhris Dior — Fullstack Developer" },
      { name: "description", content: "Portfolio de Xhris Dior, Fullstack Developer spécialisé en React, Node.js et applications web modernes pour les marchés francophones d'Afrique." },
      { property: "og:title", content: "Xhris Dior — Fullstack Developer" },
      { property: "og:description", content: "Portfolio de Xhris Dior, Fullstack Developer spécialisé en React, Node.js et applications web modernes." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
