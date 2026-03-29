import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-[-20%] left-[-10%] w-[40%] h-[60%] rounded-full bg-accent/20 blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[40%] h-[60%] rounded-full bg-accent/10 blur-[120px]" />
        </div>
      </div>

      <div className="container relative z-10 px-4 md:px-6 mx-auto text-center max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
        >
          Ready for the Best Sleep of Your Life?
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-secondary-foreground/80 mb-12 max-w-2xl mx-auto"
        >
          Try the CloudRest mattress risk-free for 100 nights. If you don't love it, we'll pick it up and refund you in full.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
        >
          <Button size="lg" className="h-16 px-10 text-lg bg-white text-secondary hover:bg-white/90 group w-full sm:w-auto">
            Shop the Collection
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <div className="flex flex-col items-start text-left">
            <span className="text-sm font-medium text-secondary-foreground/80">Free Shipping & Returns</span>
            <span className="text-sm font-medium text-secondary-foreground/80">10-Year Limited Warranty</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
