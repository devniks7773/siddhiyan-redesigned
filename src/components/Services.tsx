import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Holiday Tours",
    description: "Handcrafted vacation packages to the world's most breathtaking destinations. From serene beaches to majestic mountains.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Pilgrimage Tours",
    description: "Sacred journeys to India's holiest sites. Experience spiritual awakening with our carefully planned religious tours.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Wildlife Safaris",
    description: "Encounter India's magnificent wildlife in their natural habitats. Tiger reserves, bird sanctuaries, and nature trails.",
    image: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Medical Tourism",
    description: "World-class healthcare combined with recovery retreats. Access top hospitals and wellness centers across India.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Adventure Tours",
    description: "Thrilling experiences for the bold explorer. Trekking, rafting, paragliding, and more adrenaline-pumping activities.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Event Management",
    description: "Flawless corporate events, weddings, and celebrations. From intimate gatherings to grand conferences.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

const Services = () => {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="container-luxury">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-primary mb-4">
            What We Offer
          </span>
          <h2 className="heading-section text-foreground mb-6">
            Our Expertise
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            From dream vacations to seamless corporate events, we craft 
            experiences that exceed expectations.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.article
              key={service.title}
              variants={cardVariants}
              className="group card-luxury cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-sans text-sm font-medium text-primary group/link"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
