import { motion } from "framer-motion";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { ArrowRight, Star } from "lucide-react";

export function ProductHighlight() {
  return (
    <section className="py-24 bg-secondary/5 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0 bg-accent/10 rounded-[2rem] transform -rotate-3 scale-105 -z-10" />
            <Card className="overflow-hidden rounded-[2rem] border-0 shadow-2xl bg-white">
              <CardContent className="p-0 relative aspect-[4/3]">
                <img 
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop" 
                  alt="Swan Mattress CloudRest" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="text-sm font-semibold text-secondary">4.9/5 (2,400+ Reviews)</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                Best Seller
              </div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-secondary">
                The CloudRest™ Hybrid
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our flagship mattress combines the pressure-relieving comfort of premium memory foam with the responsive support of individually wrapped pocket coils.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "Breathable organic cotton cover",
                "2 inches of cooling gel memory foam",
                "Targeted lumbar support zone",
                "Reinforced edge support",
                "100-night risk-free trial"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-secondary">
                  <div className="h-6 w-6 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 text-base group">
                Shop CloudRest
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-sm text-muted-foreground font-medium">
                Starting at $995 or $83/mo
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
