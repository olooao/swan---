import { motion } from "framer-motion";
import { Card, CardContent } from "@/src/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Verified Buyer",
    content: "I've struggled with back pain for years. After just one week on the CloudRest, I'm waking up completely pain-free. It's truly life-changing.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Verified Buyer",
    content: "The cooling technology is no joke. I usually sleep very hot, but this mattress keeps me at the perfect temperature all night long.",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Verified Buyer",
    content: "The perfect balance of soft and supportive. It feels like sleeping on a cloud, but you don't sink in too far. Worth every penny.",
    rating: 5,
  }
];

export function Testimonials() {
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
            Don't Just Take Our Word For It
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            Join over 50,000 happy sleepers who have upgraded their rest.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Card className="h-full border-secondary/10 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-secondary text-lg leading-relaxed mb-8 flex-grow">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-auto">
                    <p className="font-semibold text-secondary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
