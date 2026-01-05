import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, Check, Clock, MapPin, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getServiceBySlug, getPackagesByCategory } from "@/data/services";

const ServiceDetails = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = getServiceBySlug(slug || "");
  const relatedPackages = getPackagesByCategory(slug || "").slice(0, 3);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif text-foreground mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} | Siddhiyan - Premium Travel Services</title>
        <meta name="description" content={service.description.slice(0, 160)} />
        <link rel="canonical" href={`https://www.siddhiyan.com/services/${slug}`} />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={service.heroImage}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/50 to-charcoal/80" />
          </div>

          <div className="relative z-10 container-luxury text-center pt-20">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block font-sans text-sm tracking-[0.3em] uppercase text-sand/80 mb-4"
            >
              Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-display text-sand mb-4"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl font-sans text-sand/90"
            >
              {service.tagline}
            </motion.p>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Left: Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="heading-section text-foreground mb-6">
                    About This Service
                  </h2>
                  <p className="text-body-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    What's Included
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                    {service.highlights.map((highlight, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="font-sans text-foreground">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Gallery */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                    Gallery
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {service.gallery.map((image, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className={`relative overflow-hidden rounded-xl ${
                          index === 0 ? "col-span-2 row-span-2 h-64 md:h-80" : "h-32 md:h-40"
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${service.title} gallery ${index + 1}`}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Right: Enquiry Form */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="sticky top-24"
                >
                  <div className="bg-card rounded-2xl shadow-luxury p-6 border border-border">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                      Quick Enquiry
                    </h3>
                    <form className="space-y-4">
                      <div>
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          placeholder="Enter your name"
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+91 9876543210"
                          className="mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          placeholder="Tell us about your travel plans..."
                          className="mt-2 min-h-[100px]"
                        />
                      </div>
                      <Button variant="luxury" className="w-full">
                        Send Enquiry
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Packages */}
        {relatedPackages.length > 0 && (
          <section className="section-padding bg-muted/30">
            <div className="container-luxury">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <span className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-primary mb-4">
                  Explore
                </span>
                <h2 className="heading-section text-foreground">
                  Related Packages
                </h2>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPackages.map((pkg, index) => (
                  <motion.div
                    key={pkg.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/packages?search=${pkg.destination}`}
                      className="group card-luxury block"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={pkg.image}
                          alt={pkg.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-sans font-medium">
                          {pkg.price}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {pkg.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {pkg.destination}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {pkg.duration}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-10">
                <Link to="/packages">
                  <Button variant="luxuryOutline" size="lg">
                    View All Packages
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        )}

        <Footer />
      </main>
    </>
  );
};

export default ServiceDetails;
