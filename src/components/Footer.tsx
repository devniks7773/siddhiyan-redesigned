import { Link } from "react-router-dom";
import { Instagram, Linkedin, Facebook, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Contact", href: "/contact" },
  { name: "Packages", href: "/packages" },
];

const serviceLinks = [
  { name: "Holiday Tours", href: "/services/holiday-tours" },
  { name: "Event Management", href: "/services/events" },
  { name: "Medical Tourism", href: "/services/medical-tourism" },
  { name: "Wildlife Safaris", href: "/services/wildlife" },
];

const Footer = () => {
  return (
    <footer id="contact" className="bg-charcoal text-sand">
      {/* Main Footer */}
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-sand mb-6">
              Siddhiyan
            </h3>
            <p className="font-sans text-sand/70 leading-relaxed mb-6">
              Crafting extraordinary travel experiences and seamless events since 2014. 
              Your journey, our passion.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sand/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sand/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-sand/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-sand mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-sans text-sand/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-sand mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="font-sans text-sand/70 hover:text-primary transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h4 className="font-serif text-lg font-semibold text-sand mb-6">
              Subscribe for Travel Deals
            </h4>
            <p className="font-sans text-sand/70 text-sm mb-4">
              Get exclusive offers and travel inspiration delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-sand/10 border-sand/20 text-sand placeholder:text-sand/50 focus:border-primary"
              />
              <Button variant="luxury" size="icon" className="shrink-0">
                <ArrowRight size={18} />
              </Button>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:+919415037315"
                className="flex items-center gap-3 text-sand/70 hover:text-primary transition-colors text-sm"
              >
                <Phone size={16} />
                +91 9415037315
              </a>
              <a
                href="mailto:info@siddhiyan.com"
                className="flex items-center gap-3 text-sand/70 hover:text-primary transition-colors text-sm"
              >
                <Mail size={16} />
                info@siddhiyan.com
              </a>
              <div className="flex items-start gap-3 text-sand/70 text-sm">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Lucknow, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-sand/10">
        <div className="container-luxury py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-sand/60">
            © 2026 Siddhiyan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="font-sans text-sm text-sand/60 hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-sans text-sm text-sand/60 hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
