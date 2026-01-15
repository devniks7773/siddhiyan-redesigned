import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (destination) {
      navigate(`/packages?search=${encodeURIComponent(destination)}`);
    } else {
      navigate("/packages");
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=2000&q=80"
          alt="Majestic mountain landscape at sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/60 via-charcoal/40 to-charcoal/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-luxury text-center pt-32 pb-40">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block font-sans text-sm md:text-base tracking-[0.3em] uppercase text-sand mb-6"
        >
          Tours | Events | Handicrafts & Jewellery
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="heading-display text-sand mb-6 max-w-4xl mx-auto"
        >
          We Plan Your Dreams,
          <br />
          <span className="text-primary">You Just Relax</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-body-lg text-sand/90 max-w-2xl mx-auto mb-10"
        >
          Your trusted partner for seamless travel experiences, unforgettable events,
          and exquisite handicrafts & jewellery collections.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button variant="luxury" size="xl" onClick={() => navigate("/packages")}>
            Explore Services
          </Button>
          <Button variant="luxuryOutline" size="xl" onClick={() => navigate("/contact")}>
            Contact Us
          </Button>
        </motion.div>
      </div>

      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 z-20"
      >
        <div className="container-luxury">
          <div className="bg-card rounded-t-2xl shadow-luxury-lg p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Destination */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-sans uppercase tracking-wider text-muted-foreground mb-1">
                    Destination
                  </label>
                  <input
                    type="text"
                    placeholder="Where to?"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    className="w-full bg-transparent font-sans text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Calendar className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-sans uppercase tracking-wider text-muted-foreground mb-1">
                    Travel Date
                  </label>
                  <input
                    type="text"
                    placeholder="When?"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full bg-transparent font-sans text-foreground placeholder:text-muted-foreground focus:outline-none"
                  />
                </div>
              </div>

              {/* Search Button */}
              <Button 
                variant="accent" 
                size="xl" 
                className="h-full min-h-[72px]"
                onClick={handleSearch}
              >
                <Search className="w-5 h-5 mr-2" />
                Search Experiences
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
