import { Navbar } from "@/src/components/layout/Navbar";
import { Hero } from "@/src/components/sections/Hero";
import { Features } from "@/src/components/sections/Features";
import { ProductHighlight } from "@/src/components/sections/ProductHighlight";
import { Testimonials } from "@/src/components/sections/Testimonials";
import { CTA } from "@/src/components/sections/CTA";
import { Footer } from "@/src/components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <ProductHighlight />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
