import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Heart, Shield, Sparkles, Users, Calendar, Award, Globe, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";

const coreValues = [
  {
    icon: Shield,
    title: "Trust & Reliability",
    description: "Building lasting relationships through transparent dealings and consistent delivery of exceptional experiences."
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "Pursuing perfection in every detail, from initial planning to the final moment of your journey."
  },
  {
    icon: Heart,
    title: "Personalization",
    description: "Crafting unique experiences tailored to your preferences, ensuring every trip feels truly yours."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our priority. We go above and beyond to exceed your expectations."
  }
];

const milestones = [
  { year: "2014", title: "Founded", description: "Siddhiyan established with a vision to transform travel experiences in India." },
  { year: "2016", title: "100+ Clients", description: "Reached our first major milestone of serving over 100 satisfied travelers." },
  { year: "2018", title: "Event Division", description: "Expanded services to include corporate events and destination weddings." },
  { year: "2020", title: "Digital Transformation", description: "Adapted to new realities with virtual tours and enhanced digital booking." },
  { year: "2022", title: "Pan-India Presence", description: "Extended our network to cover all major tourist destinations across India." },
  { year: "2024", title: "10 Years Strong", description: "Celebrating a decade of creating unforgettable travel memories." }
];

const teamMembers = [
  {
    name: "Rajesh Sharma",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    description: "20+ years in travel industry"
  },
  {
    name: "Priya Patel",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    description: "Expert in logistics & planning"
  },
  {
    name: "Amit Kumar",
    role: "Travel Consultant",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    description: "Specializes in adventure tours"
  },
  {
    name: "Sneha Reddy",
    role: "Client Relations",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    description: "Ensures seamless experiences"
  }
];

const stats = [
  { icon: Calendar, value: "10+", label: "Years of Excellence" },
  { icon: Users, value: "5000+", label: "Happy Travelers" },
  { icon: Globe, value: "100+", label: "Destinations" },
  { icon: Award, value: "50+", label: "Industry Awards" }
];

const About = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>About Us | Siddhiyan - Your Trusted Travel Partner Since 2014</title>
        <meta name="description" content="Learn about Siddhiyan's journey, our passionate team, and our commitment to creating exceptional travel experiences across India since 2014." />
      </Helmet>
      
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop"
              alt="Beautiful Indian landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
          </div>
          
          <div className="relative z-10 text-center text-sand px-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6"
            >
              Established 2014
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl mb-6"
            >
              Our Story
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-2xl mx-auto opacity-90"
            >
              A decade of crafting unforgettable journeys across incredible India
            </motion.p>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-primary font-medium tracking-wider uppercase text-sm">Who We Are</span>
                <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4 mb-6">
                  Passionate About Creating Memories
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2014, Siddhiyan began with a simple yet powerful vision: to transform how people experience travel in India. What started as a small team with big dreams has grown into one of the most trusted names in the travel industry.
                  </p>
                  <p>
                    Our name "Siddhiyan" derives from the Sanskrit word for achievements and accomplishments. We believe every journey is an achievement – a collection of moments that stay with you forever. This philosophy drives everything we do.
                  </p>
                  <p>
                    Over the past decade, we've had the privilege of serving over 5,000 travelers, planning more than 500 corporate events, and creating countless memories across 100+ destinations. But numbers only tell part of our story.
                  </p>
                  <p>
                    What truly sets us apart is our deep understanding of India's diverse landscapes, cultures, and hidden treasures. Our team doesn't just plan trips – we craft experiences that resonate with your soul.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=400&h=500&fit=crop"
                    alt="Taj Mahal"
                    className="rounded-2xl w-full h-64 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=500&fit=crop"
                    alt="Mountain landscape"
                    className="rounded-2xl w-full h-64 object-cover mt-8"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=500&fit=crop"
                    alt="Kerala backwaters"
                    className="rounded-2xl w-full h-64 object-cover -mt-4"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1477587458883-47145ed94245?w=400&h=500&fit=crop"
                    alt="Cultural experience"
                    className="rounded-2xl w-full h-64 object-cover mt-4"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl">
                  <div className="text-4xl font-display font-bold">10+</div>
                  <div className="text-sm opacity-90">Years of Excellence</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Foundation</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4">
                Core Values
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow text-center group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-medium tracking-wider uppercase text-sm">Our Journey</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4">
                Milestones
              </h2>
            </motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden lg:block" />
              
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                      <div className="bg-card p-6 rounded-2xl shadow-sm inline-block">
                        <div className="text-primary font-display text-2xl font-bold mb-2">{milestone.year}</div>
                        <h3 className="font-semibold text-foreground mb-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm">{milestone.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-4 h-4 bg-primary rounded-full ring-4 ring-background shadow-lg z-10 hidden lg:block" />
                    
                    <div className="flex-1 hidden lg:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-primary font-medium tracking-wider uppercase text-sm">The People Behind</span>
              <h2 className="font-display text-4xl md:text-5xl text-foreground mt-4">
                Meet Our Team
              </h2>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="relative mb-6 overflow-hidden rounded-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="w-10 h-10 mx-auto mb-4 opacity-80" />
                  <div className="font-display text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                Ready to Start Your Journey?
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Let us help you create memories that will last a lifetime. Our team is ready to plan your perfect adventure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="luxury" 
                  size="xl"
                  onClick={() => setIsBookingOpen(true)}
                >
                  <Star className="w-5 h-5 mr-2" />
                  Plan My Trip
                </Button>
                <Button variant="outline" size="xl" asChild>
                  <a href="/contact">Contact Us</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </>
  );
};

export default About;
