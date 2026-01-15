import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Linkedin, Facebook, Phone, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookingModal from "@/components/BookingModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const serviceLinks = [
  { name: "Inbound & Outbound Tours", href: "/services/inbound-outbound-tours" },
  { name: "Events Management", href: "/services/events-management" },
  { name: "Handicrafts & Jewellery", href: "/services/handicrafts-jewellery" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith("/#")) {
      const hash = href.substring(1);
      if (location.pathname === "/") {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
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

  const isServicesActive = serviceLinks.some(link => location.pathname.startsWith(link.href));

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass-effect py-3" : "bg-transparent py-5"
        }`}
      >
        {/* Top bar with contact info */}
        <AnimatePresence>
          {!isScrolled && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="hidden lg:flex container-luxury justify-between items-center text-sm mb-3 text-sand/90"
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
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logo.png"
              alt="Siddhiyan"
              className="h-10 md:h-12 w-auto bg-white px-4 rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className={`font-sans text-sm font-medium transition-colors relative group ${
                isActive("/") ? "text-terracotta-light" : isScrolled ? "text-foreground/80 hover:text-terracotta-light" : "text-sand hover:text-terracotta-light"
              }`}
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta-light transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/about"
              className={`font-sans text-sm font-medium transition-colors relative group ${
                isActive("/about") ? "text-terracotta-light" : isScrolled ? "text-foreground/80 hover:text-terracotta-light" : "text-sand hover:text-terracotta-light"
              }`}
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta-light transition-all duration-300 group-hover:w-full" />
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`font-sans text-sm font-medium transition-colors relative group flex items-center gap-1 ${
                    isServicesActive ? "text-terracotta-light" : isScrolled ? "text-foreground/80 hover:text-terracotta-light" : "text-sand hover:text-terracotta-light"
                  }`}
                >
                  Services
                  <ChevronDown size={14} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta-light transition-all duration-300 group-hover:w-full" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-background border border-border shadow-luxury min-w-[200px]">
                {serviceLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link
                      to={link.href}
                      className={`w-full cursor-pointer ${
                        isActive(link.href) ? "text-terracotta-light" : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/best-practices"
              className={`font-sans text-sm font-medium transition-colors relative group ${
                isActive("/best-practices") ? "text-terracotta-light" : isScrolled ? "text-foreground/80 hover:text-terracotta-light" : "text-sand hover:text-terracotta-light"
              }`}
            >
              Best Practices
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta-light transition-all duration-300 group-hover:w-full" />
            </Link>

            <Link
              to="/clients"
              className={`font-sans text-sm font-medium transition-colors relative group ${
                isActive("/clients") ? "text-terracotta-light" : isScrolled ? "text-foreground/80 hover:text-terracotta-light" : "text-sand hover:text-terracotta-light"
              }`}
            >
              Clients
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-terracotta-light transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link to="/contact">
              <Button variant="luxury" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled ? "text-foreground" : "text-sand"}`}
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
              <div className="container-luxury py-6 flex flex-col gap-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0 }}
                >
                  <Link
                    to="/"
                    className="font-sans text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 }}
                >
                  <Link
                    to="/about"
                    className="font-sans text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </motion.div>

                {/* Mobile Services Accordion */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <button
                    className="font-sans text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 flex items-center gap-2 w-full text-left"
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  >
                    Services
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform ${isMobileServicesOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="pl-4 flex flex-col gap-1 overflow-hidden"
                      >
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            className="font-sans text-base text-foreground/70 hover:text-primary transition-colors py-2 block"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 }}
                >
                  <Link
                    to="/best-practices"
                    className="font-sans text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Best Practices
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    to="/clients"
                    className="font-sans text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Clients
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  <Link
                    to="/contact"
                    className="font-sans text-lg font-medium text-foreground/80 hover:text-primary transition-colors py-2 block"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </motion.div>

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
