export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  highlights: string[];
  gallery: string[];
  packages: Package[];
}

export interface Package {
  id: string;
  title: string;
  destination: string;
  duration: string;
  price: string;
  image: string;
  category: string;
}

export const services: Service[] = [
  {
    slug: "inbound-outbound-tours",
    title: "Inbound & Outbound Tours",
    tagline: "Complete travel solutions for domestic and international journeys",
    description: "Siddhiyan offers comprehensive travel services for both inbound and outbound tours. Whether you're planning a domestic getaway or an international adventure, we handle every aspect of your journey with precision and care. From flight bookings to hotel reservations, visa assistance to forex services, we ensure a seamless travel experience that lets you focus on creating memories.",
    heroImage: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Air tickets booking for domestic and international flights",
      "Premium hotel bookings across all categories",
      "Fleet arrangements for comfortable ground transportation",
      "Visa assistance and documentation support",
      "Forex services for hassle-free currency exchange",
      "Travel insurance for complete peace of mind",
      "Train tickets and IRCTC packages",
      "Educational trips for schools and institutions",
      "Air charter and cruise bookings for luxury travel"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=800&q=80"
    ],
    packages: []
  },
  {
    slug: "events-management",
    title: "Events Management",
    tagline: "Creating unforgettable experiences for weddings and corporate events",
    description: "From dream weddings to successful corporate gatherings, Siddhiyan's event management services bring your vision to life. We specialize in destination weddings that blend tradition with elegance, and MICE (Meetings, Incentives, Conferences, and Exhibitions) events that deliver results. Our experienced team handles every detail—from venue selection and décor to catering and entertainment—ensuring flawless execution.",
    heroImage: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Destination weddings at stunning venues across India",
      "Traditional and themed wedding planning",
      "Corporate meetings and conferences",
      "Incentive travel programs for teams",
      "Exhibitions and trade show management",
      "End-to-end event coordination",
      "Premium vendor network for catering, décor, and entertainment",
      "Guest management and hospitality services"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff32?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
    ],
    packages: []
  },
  {
    slug: "handicrafts-jewellery",
    title: "Handicrafts & Jewellery",
    tagline: "Exquisite artistry in sculptures and precious ornaments",
    description: "Discover the finest collection of traditional Indian handicrafts and exclusive jewellery at Siddhiyan. Our curated selection features masterfully crafted wooden and stone sculptures that showcase India's rich artistic heritage, alongside stunning gold and silver jewellery pieces that blend traditional craftsmanship with contemporary designs. Each piece tells a story of skilled artisans and timeless elegance.",
    heroImage: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Handcrafted wooden sculptures by master artisans",
      "Exquisite stone carvings and sculptures",
      "Exclusive gold jewellery collections",
      "Sterling silver ornaments and accessories",
      "Traditional and contemporary designs",
      "Customized jewellery on order",
      "Authentic certification for precious metals",
      "Corporate gifting solutions"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=800&q=80"
    ],
    packages: []
  }
];

export const packages: Package[] = [
  // Inbound & Outbound Tours
  {
    id: "domestic-holiday",
    title: "Domestic Holiday Package",
    destination: "Pan India",
    duration: "Customizable",
    price: "Custom",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
    category: "inbound-outbound-tours"
  },
  {
    id: "international-tour",
    title: "International Tour Package",
    destination: "Worldwide",
    duration: "Customizable",
    price: "Custom",
    image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
    category: "inbound-outbound-tours"
  },
  {
    id: "educational-trip",
    title: "Educational Trip",
    destination: "Various",
    duration: "3-7 Days",
    price: "Custom",
    image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    category: "inbound-outbound-tours"
  },
  {
    id: "cruise-booking",
    title: "Cruise Packages",
    destination: "International Waters",
    duration: "5-14 Days",
    price: "Custom",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=800&q=80",
    category: "inbound-outbound-tours"
  },
  // Events Management
  {
    id: "destination-wedding",
    title: "Destination Wedding",
    destination: "Pan India",
    duration: "3-5 Days",
    price: "Custom",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
    category: "events-management"
  },
  {
    id: "corporate-conference",
    title: "Corporate Conference",
    destination: "Pan India",
    duration: "1-3 Days",
    price: "Custom",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    category: "events-management"
  },
  {
    id: "mice-event",
    title: "MICE Event Package",
    destination: "Pan India",
    duration: "Customizable",
    price: "Custom",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=800&q=80",
    category: "events-management"
  },
  // Handicrafts & Jewellery
  {
    id: "wooden-sculptures",
    title: "Wooden Sculptures Collection",
    destination: "Delivery Available",
    duration: "Made to Order",
    price: "Custom",
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=800&q=80",
    category: "handicrafts-jewellery"
  },
  {
    id: "stone-carvings",
    title: "Stone Carvings & Sculptures",
    destination: "Delivery Available",
    duration: "Made to Order",
    price: "Custom",
    image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&w=800&q=80",
    category: "handicrafts-jewellery"
  },
  {
    id: "gold-jewellery",
    title: "Exclusive Gold Jewellery",
    destination: "Store & Delivery",
    duration: "Ready & Custom",
    price: "Custom",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=800&q=80",
    category: "handicrafts-jewellery"
  },
  {
    id: "silver-jewellery",
    title: "Silver Jewellery Collection",
    destination: "Store & Delivery",
    duration: "Ready & Custom",
    price: "Custom",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=800&q=80",
    category: "handicrafts-jewellery"
  }
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find(s => s.slug === slug);
};

export const getPackagesByCategory = (category: string): Package[] => {
  return packages.filter(p => p.category === category);
};

export const searchPackages = (query: string): Package[] => {
  const lowerQuery = query.toLowerCase();
  return packages.filter(p =>
    p.title.toLowerCase().includes(lowerQuery) ||
    p.destination.toLowerCase().includes(lowerQuery) ||
    p.category.toLowerCase().includes(lowerQuery)
  );
};
