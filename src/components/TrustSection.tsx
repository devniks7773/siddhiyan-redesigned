import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Award, Users, Clock, MapPin } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Successful Events",
  },
  {
    icon: MapPin,
    value: 50,
    suffix: "+",
    label: "Destinations",
  },
  {
    icon: Clock,
    value: 24,
    suffix: "/7",
    label: "Support Available",
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
};

const TrustSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-secondary mb-4">
            Why Choose Us
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Trusted by Thousands
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            Over a decade of crafting perfect journeys and unforgettable events 
            for travelers and businesses alike.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                <stat.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <div className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-sans text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
