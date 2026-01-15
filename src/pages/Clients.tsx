import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Building2, Users, Award, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const clientCategories = [
  {
    icon: Building2,
    title: "Corporate Clients",
    description: "We've partnered with leading corporations for travel, events, and corporate gifting needs.",
    clients: ["Tech Solutions Inc.", "Global Finance Corp.", "Healthcare Partners", "Manufacturing Leaders Ltd."],
  },
  {
    icon: Globe,
    title: "Government & PSUs",
    description: "Trusted by government bodies and public sector organizations for official travel, events, and handicrafts procurement.",
    clients: ["State Tourism Board", "Ministry of Culture", "Public Works Department", "National Health Mission"],
  },
  {
    icon: Users,
    title: "Educational Institutions",
    description: "Managing educational tours and institutional events for schools and universities.",
    clients: ["Central University", "St. Xavier's College", "Delhi Public School", "National Institute of Technology"],
  },
  {
    icon: Award,
    title: "MICE & Retail",
    description: "Delivering exceptional experiences for MICE events and exclusive jewellery & handicrafts retail.",
    clients: ["Medical Association of India", "Chamber of Commerce", "Luxury Retail Partners", "Tourism Association"],
  },
];

const stats = [
  { value: "200+", label: "Corporate Clients" },
  { value: "50+", label: "Government Projects" },
  { value: "1000+", label: "Events Managed" },
  { value: "15+", label: "Years of Trust" },
];

const Clients = () => {
  return (
    <>
      <Helmet>
        <title>Our Clients | Siddhiyan - Trusted by Leading Organizations</title>
        <meta
          name="description"
          content="Discover the organizations that trust Siddhiyan for tours, events, and handicrafts & jewellery. From corporates to government bodies, we deliver excellence."
        />
      </Helmet>

      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=2000&q=80"
              alt="Our clients"
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
                Our Partners
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-sand mb-6">
                Our Valued Clients
              </h1>
              <p className="text-lg text-sand/80 leading-relaxed">
                Over the years, we've had the privilege of working with some of the most
                respected organizations across industries. Their trust drives our commitment
                to excellence.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-primary">
          <div className="container-luxury">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                    {stat.value}
                  </div>
                  <div className="text-primary-foreground/80 font-sans text-sm uppercase tracking-wide">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Categories */}
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
                Who We Work With
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From multinational corporations to educational institutions, 
                we cater to diverse client needs with customized solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {clientCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-elegant"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <category.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                        {category.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  <div className="border-t border-border pt-6">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                      Select Clients
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {category.clients.map((client) => (
                        <span
                          key={client}
                          className="px-3 py-1.5 bg-muted rounded-full text-sm text-foreground/80"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial Highlight */}
        <section className="section-padding bg-muted">
          <div className="container-luxury">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <div className="text-6xl text-primary/30 font-serif mb-6">"</div>
              <blockquote className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-8 font-serif italic">
                Siddhiyan has been our trusted partner for corporate events for over 5 years. 
                Their attention to detail and commitment to excellence is unmatched.
              </blockquote>
              <div>
                <p className="font-semibold text-foreground">Rajesh Kumar</p>
                <p className="text-muted-foreground text-sm">Director, Corporate Affairs - Tech Solutions Inc.</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Clients;
