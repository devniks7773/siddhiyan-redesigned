import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle, Award, Shield, Users, Target, Leaf } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const practices = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize the safety and well-being of our travelers with comprehensive risk assessments, travel insurance guidance, and 24/7 emergency support during all trips.",
  },
  {
    icon: Leaf,
    title: "Sustainable Tourism",
    description: "Our commitment to eco-friendly practices includes partnering with sustainable accommodations, minimizing carbon footprints, and supporting local conservation efforts.",
  },
  {
    icon: Users,
    title: "Local Community Support",
    description: "We believe in responsible tourism that benefits local communities through fair wages, local guides, and supporting community-based tourism initiatives.",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Every service provider, hotel, and experience in our network undergoes rigorous quality checks to ensure exceptional standards for our clients.",
  },
  {
    icon: Target,
    title: "Personalized Service",
    description: "We take time to understand each client's unique preferences, creating tailor-made itineraries that exceed expectations and create lasting memories.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Pricing",
    description: "No hidden costs or surprises. We provide detailed breakdowns of all expenses, ensuring complete transparency in all our dealings.",
  },
];

const BestPractices = () => {
  return (
    <>
      <Helmet>
        <title>Best Practices | Siddhiyan - Our Commitment to Excellence</title>
        <meta
          name="description"
          content="Discover Siddhiyan's best practices in travel and event management. We prioritize safety, sustainability, and exceptional service delivery."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2000&q=80"
              alt="Best practices"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/70" />
          </div>
          <div className="relative z-10 container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <span className="text-primary font-sans text-sm tracking-widest uppercase mb-4 block">
                Our Standards
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-sand mb-6">
                Best Practices
              </h1>
              <p className="text-lg text-sand/80 leading-relaxed">
                At Siddhiyan, excellence isn't just a goal—it's our standard. Our best practices
                ensure every journey and event we manage meets the highest standards of quality,
                safety, and sustainability.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Practices Grid */}
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {practices.map((practice, index) => (
                <motion.div
                  key={practice.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-luxury transition-shadow duration-300"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <practice.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                    {practice.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {practice.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-muted">
          <div className="container-luxury text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Experience the Siddhiyan Difference
              </h2>
              <p className="text-muted-foreground mb-8">
                Ready to plan your next adventure with a team that truly cares about 
                quality and your experience? Let's start a conversation.
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default BestPractices;
