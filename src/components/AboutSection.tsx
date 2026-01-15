import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Complete travel solutions - domestic and international",
  "Expert wedding and MICE event management",
  "Authentic handicrafts and exclusive jewellery",
  "Transparent pricing with no hidden costs",
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80"
                  alt="Taj Mahal at sunset"
                  className="w-full h-48 md:h-64 object-cover rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=600&q=80"
                  alt="Traditional boat in Kerala backwaters"
                  className="w-full h-32 md:h-44 object-cover rounded-2xl"
                />
              </div>
              <div className="space-y-4 pt-8">
                <img
                  src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?auto=format&fit=crop&w=600&q=80"
                  alt="Himalayan mountain peaks"
                  className="w-full h-32 md:h-44 object-cover rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80"
                  alt="Desert camping experience"
                  className="w-full h-48 md:h-64 object-cover rounded-2xl"
                />
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:bottom-8 md:right-0 bg-primary text-primary-foreground rounded-2xl p-6 shadow-luxury-lg">
              <div className="text-center">
                <span className="font-serif text-4xl font-bold">10+</span>
                <p className="font-sans text-sm mt-1">Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-secondary mb-4">
              About Siddhiyan
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Your Trusted Partner for
              <span className="text-primary"> Excellence & Craftsmanship</span>
            </h2>
            <p className="text-body-lg text-muted-foreground mb-8">
              Siddhiyan is your one-stop destination for premium travel services, memorable
              event experiences, and exquisite handicrafts & jewellery collections.
            </p>
            <p className="font-sans text-muted-foreground mb-8">
              From seamless inbound and outbound tours to stunning destination weddings,
              from MICE events to handcrafted sculptures and exclusive gold & silver jewellery
              – we deliver excellence in everything we do.
            </p>

            {/* Features List */}
            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center">
                    <Check className="w-4 h-4 text-secondary" />
                  </div>
                  <span className="font-sans text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            <Button variant="luxury" size="lg">
              Discover Our Story
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
