import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address").max(255),
  phone: z.string().min(10, "Please enter a valid phone number").max(15),
  destination: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 9415037315", "+91 9876543210"],
    href: "tel:+919415037315",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@siddhiyan.com", "bookings@siddhiyan.com"],
    href: "mailto:info@siddhiyan.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Lucknow, Uttar Pradesh", "India - 226001"],
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat: 9 AM - 7 PM", "Sun: 10 AM - 4 PM"],
    href: null,
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      contactSchema.parse(formData);
      setIsSubmitting(true);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Siddhiyan - Get in Touch</title>
        <meta 
          name="description" 
          content="Contact Siddhiyan for premium travel packages, event management, and tour inquiries. Reach us via phone, email, or visit our office in Lucknow, India." 
        />
        <link rel="canonical" href="https://www.siddhiyan.com/contact" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-charcoal">
          <div className="absolute inset-0 z-0 opacity-30">
            <img
              src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&w=2000&q=80"
              alt="Contact us"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 container-luxury text-center pt-20">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="heading-display text-sand mb-4"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl font-sans text-sand/80"
            >
              We'd love to hear from you
            </motion.p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-background">
          <div className="container-luxury">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Left: Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-primary mb-4">
                  Contact Information
                </span>
                <h2 className="heading-section text-foreground mb-6">
                  Let's Start Planning Your Journey
                </h2>
                <p className="text-body-lg text-muted-foreground mb-10">
                  Whether you're dreaming of a mountain retreat, beach escape, or a grand event, 
                  our team is here to make it happen. Reach out to us through any of the channels below.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="p-6 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      {item.details.map((detail, i) => (
                        <p key={i} className="font-sans text-muted-foreground text-sm">
                          {item.href && i === 0 ? (
                            <a href={item.href} className="hover:text-primary transition-colors">
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </motion.div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="rounded-xl overflow-hidden h-64 bg-muted flex items-center justify-center border border-border">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="w-12 h-12 mx-auto mb-3 opacity-50" />
                    <p className="font-sans">Interactive Map</p>
                    <p className="text-sm">Coming Soon</p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-card rounded-2xl shadow-luxury p-8 border border-border">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", delay: 0.2 }}
                        className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-6"
                      >
                        <CheckCircle className="w-10 h-10 text-secondary" />
                      </motion.div>
                      <h3 className="font-serif text-2xl text-foreground mb-2">
                        Thank You!
                      </h3>
                      <p className="text-muted-foreground font-sans mb-6">
                        Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                      <Button
                        variant="luxuryOutline"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            phone: "",
                            destination: "",
                            message: "",
                          });
                        }}
                      >
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <>
                      <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                        Send Us a Message
                      </h3>
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <Label htmlFor="name">Full Name *</Label>
                            <Input
                              id="name"
                              name="name"
                              placeholder="Your full name"
                              value={formData.name}
                              onChange={handleInputChange}
                              className={`mt-2 ${errors.name ? "border-destructive" : ""}`}
                            />
                            {errors.name && (
                              <p className="text-destructive text-sm mt-1">{errors.name}</p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="email">Email Address *</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              placeholder="your@email.com"
                              value={formData.email}
                              onChange={handleInputChange}
                              className={`mt-2 ${errors.email ? "border-destructive" : ""}`}
                            />
                            {errors.email && (
                              <p className="text-destructive text-sm mt-1">{errors.email}</p>
                            )}
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              placeholder="+91 9876543210"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className={`mt-2 ${errors.phone ? "border-destructive" : ""}`}
                            />
                            {errors.phone && (
                              <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor="destination">Interested Destination</Label>
                            <Input
                              id="destination"
                              name="destination"
                              placeholder="e.g., Kerala, Rajasthan"
                              value={formData.destination}
                              onChange={handleInputChange}
                              className="mt-2"
                            />
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="message">Your Message *</Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="Tell us about your travel plans or event requirements..."
                            value={formData.message}
                            onChange={handleInputChange}
                            className={`mt-2 min-h-[150px] ${errors.message ? "border-destructive" : ""}`}
                          />
                          {errors.message && (
                            <p className="text-destructive text-sm mt-1">{errors.message}</p>
                          )}
                        </div>
                        <Button
                          type="submit"
                          variant="luxury"
                          size="lg"
                          className="w-full"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Message
                              <Send className="w-4 h-4 ml-2" />
                            </>
                          )}
                        </Button>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Contact;
