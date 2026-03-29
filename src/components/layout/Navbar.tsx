import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Menu, X, ShoppingCart } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-md border-b border-secondary/10 shadow-sm py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container px-4 md:px-6 mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 z-50">
          <span className="text-2xl font-bold tracking-tight text-secondary">
            SwanMattresses
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Mattresses</a>
          <a href="#" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Bedding</a>
          <a href="#" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Accessories</a>
          <a href="#" className="text-sm font-medium text-secondary hover:text-accent transition-colors">Our Story</a>
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <Button variant="ghost" size="icon" className="text-secondary hover:bg-secondary/5 rounded-full">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button className="rounded-full px-6">Shop Now</Button>
        </div>

        {/* Mobile Toggle */}
        <div className="flex lg:hidden items-center gap-4 z-50">
          <Button variant="ghost" size="icon" className="text-secondary hover:bg-secondary/5 rounded-full">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-secondary focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-white border-b border-secondary/10 shadow-lg py-6 px-4 flex flex-col gap-6 lg:hidden"
        >
          <nav className="flex flex-col gap-4">
            <a href="#" className="text-lg font-medium text-secondary">Mattresses</a>
            <a href="#" className="text-lg font-medium text-secondary">Bedding</a>
            <a href="#" className="text-lg font-medium text-secondary">Accessories</a>
            <a href="#" className="text-lg font-medium text-secondary">Our Story</a>
          </nav>
          <Button className="w-full h-12 text-base">Shop Now</Button>
        </motion.div>
      )}
    </motion.header>
  );
}
