import { motion } from "framer-motion";
import { Wind, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  {
    icon: <Wind className="h-6 w-6" />,
    title: "Advanced Cooling Tech",
    description: "Phase-change materials draw heat away from your body, keeping you at the optimal sleep temperature all night.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Orthopedic Support",
    description: "Zoned support layers adapt to your body's natural curves, providing targeted pressure relief for your spine.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Zero Motion Transfer",
    description: "Individually wrapped coils isolate movement, so you won't feel your partner tossing and turning.",
  }
];

export function Features() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-secondary mb-4"
          >
            The Science of Perfect Sleep
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Every layer is meticulously designed to provide the ultimate balance of comfort and support.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="h-16 w-16 rounded-2xl bg-secondary/5 flex items-center justify-center text-accent mb-6 transition-colors group-hover:bg-accent group-hover:text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
