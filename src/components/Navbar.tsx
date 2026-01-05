import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Linkedin, Facebook, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Packages", href: "/packages" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle hash navigation
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith("/#")) {
      const hash = href.substring(1);
      if (location.pathname === "/") {
        // Already on home page, scroll to section
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home first, then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    if (href.startsWith("/#")) return location.pathname === "/" && location.hash === href.substring(1);
    return location.pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-effect py-3" : "bg-transparent py-5"
        }`}
      >
        {/* Top bar with contact info - hidden on scroll */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="hidden lg:flex container-luxury justify-between items-center text-sm mb-3 text-foreground/80"
            >
              <div className="flex items-center gap-6">
                <a href="tel:+919415037315" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone size={14} />
                  +91 9415037315
                </a>
                <a href="mailto:info@siddhiyan.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail size={14} />
                  info@siddhiyan.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram size={16} />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin size={16} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook size={16} />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <nav className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <span className="font-serif text-2xl md:text-3xl font-bold text-primary">
              Siddhiyan
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-sans text-sm font-medium transition-colors relative group ${
                    isActive(link.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`font-sans text-sm font-medium transition-colors relative group ${
                    isActive(link.href) ? "text-primary" : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="luxury" size="lg" onClick={() => setIsBookingOpen(true)}>
              Plan My Trip
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t border-border"
            >
              <div className="container-luxury py-6 flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  link.href.startsWith("/#") ? (
                    <motion.button
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="font-sans text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 text-left"
                      onClick={() => handleNavClick(link.href)}
                    >
                      {link.name}
                    </motion.button>
                  ) : (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={link.href}
                        className="font-sans text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 block"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  )
                ))}
                <Button 
                  variant="luxury" 
                  size="lg" 
                  className="mt-4 w-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsBookingOpen(true);
                  }}
                >
                  Plan My Trip
                </Button>
                <div className="flex items-center gap-6 pt-4 border-t border-border mt-2">
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Instagram size={20} />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin size={20} />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </>
  );
};

export default Navbar;
