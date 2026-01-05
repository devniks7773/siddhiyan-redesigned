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
    slug: "holiday-tours",
    title: "Holiday Tours",
    tagline: "Unforgettable vacations crafted just for you",
    description: "Discover the world's most breathtaking destinations with our handcrafted vacation packages. From serene beaches of Goa to the majestic Himalayas, from romantic European getaways to exotic Southeast Asian escapes, we curate every detail to ensure your holiday is nothing short of extraordinary. Our expert travel designers work closely with you to understand your preferences, creating personalized itineraries that balance adventure, relaxation, and cultural immersion.",
    heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Personalized itineraries tailored to your preferences",
      "Hand-picked luxury accommodations",
      "Private guided tours with local experts",
      "24/7 concierge support during your trip",
      "Seamless airport transfers and logistics",
      "Exclusive access to hidden gems and local experiences"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
    ],
    packages: []
  },
  {
    slug: "pilgrimage",
    title: "Pilgrimage Tours",
    tagline: "Sacred journeys for spiritual awakening",
    description: "Embark on transformative spiritual journeys to India's holiest sites. Our pilgrimage tours are designed with deep respect for tradition while ensuring your comfort and safety. Visit the sacred temples of Varanasi, the serene ghats of Rishikesh, the divine shrines of Char Dham, and many more spiritual destinations. We handle all logistics so you can focus entirely on your spiritual experience.",
    heroImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Expert spiritual guides with deep knowledge",
      "Comfortable accommodation near holy sites",
      "Special darshan arrangements where possible",
      "Group prayers and meditation sessions",
      "Vegetarian cuisine throughout the journey",
      "Assistance with religious rituals and offerings"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1545126178-862cdb469409?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1591018653367-7d150e706625?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80"
    ],
    packages: []
  },
  {
    slug: "wildlife",
    title: "Wildlife Safaris",
    tagline: "Encounter India's majestic wildlife",
    description: "Experience the thrill of encountering India's magnificent wildlife in their natural habitats. Our safari experiences take you to the heart of tiger reserves, bird sanctuaries, and pristine nature trails. From the royal Bengal tigers of Ranthambore to the one-horned rhinos of Kaziranga, witness nature's most spectacular creatures with expert naturalists guiding your journey.",
    heroImage: "https://images.unsplash.com/photo-1535338454770-8be927b5a00b?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Expert naturalists and wildlife photographers",
      "Premium safari lodges and jungle camps",
      "Multiple game drives for maximum sighting chances",
      "Bird watching and nature walks included",
      "Conservation-focused responsible tourism",
      "Night safaris where permitted"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544985361-b420d7a77043?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1474511320723-9a56873571b7?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=800&q=80"
    ],
    packages: []
  },
  {
    slug: "medical-tourism",
    title: "Medical Tourism",
    tagline: "World-class healthcare with personalized care",
    description: "Access India's world-renowned healthcare facilities combined with comfortable recovery retreats. We partner with JCI-accredited hospitals and top medical professionals to provide comprehensive medical travel packages. From cosmetic procedures to major surgeries, cardiac care to wellness retreats, we ensure you receive the best medical care while managing all travel logistics.",
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Partnerships with JCI-accredited hospitals",
      "Assistance with medical visa and documentation",
      "Pre-arrival consultations with specialists",
      "Comfortable recovery accommodations",
      "Post-procedure wellness and rehabilitation",
      "Family accommodation arrangements"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbec8a?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=800&q=80"
    ],
    packages: []
  },
  {
    slug: "adventure",
    title: "Adventure Tours",
    tagline: "Thrilling experiences for the bold explorer",
    description: "Push your limits with our adrenaline-pumping adventure tours. Whether you're trekking through Himalayan trails, white-water rafting in Rishikesh, paragliding over Bir Billing, or exploring the rugged terrains of Ladakh, our adventure packages are designed for those who seek excitement. All activities are conducted with certified professionals and top-grade safety equipment.",
    heroImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "Certified adventure guides and instructors",
      "International-standard safety equipment",
      "Activities for all skill levels",
      "Camping under the stars included",
      "Photography assistance for adventure shots",
      "Comprehensive travel insurance coverage"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&w=800&q=80"
    ],
    packages: []
  },
  {
    slug: "events",
    title: "Event Management",
    tagline: "Flawless events, unforgettable memories",
    description: "From intimate gatherings to grand celebrations, we orchestrate events that leave lasting impressions. Our event management expertise spans destination weddings, corporate conferences, product launches, and private celebrations. With meticulous attention to detail and a network of premium vendors, we transform your vision into reality while you enjoy every moment.",
    heroImage: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=2000&q=80",
    highlights: [
      "End-to-end event planning and execution",
      "Access to exclusive venues across India",
      "Premium vendor network for all services",
      "Custom theme design and decoration",
      "Guest management and hospitality",
      "Entertainment and artist bookings"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80"
    ],
    packages: []
  }
];

export const packages: Package[] = [
  // Holiday Tours
  {
    id: "kerala-backwaters",
    title: "Kerala Backwaters Bliss",
    destination: "Kerala",
    duration: "5 Days / 4 Nights",
    price: "₹35,000",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=800&q=80",
    category: "holiday-tours"
  },
  {
    id: "rajasthan-royal",
    title: "Royal Rajasthan Heritage",
    destination: "Rajasthan",
    price: "₹45,000",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=80",
    category: "holiday-tours"
  },
  {
    id: "goa-beaches",
    title: "Goa Beach Escape",
    destination: "Goa",
    duration: "4 Days / 3 Nights",
    price: "₹22,000",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
    category: "holiday-tours"
  },
  // Wildlife
  {
    id: "jim-corbett",
    title: "Jim Corbett Tiger Safari",
    destination: "Uttarakhand",
    duration: "3 Days / 2 Nights",
    price: "₹28,000",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80",
    category: "wildlife"
  },
  {
    id: "ranthambore",
    title: "Ranthambore Wildlife Expedition",
    destination: "Rajasthan",
    duration: "4 Days / 3 Nights",
    price: "₹32,000",
    image: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=800&q=80",
    category: "wildlife"
  },
  {
    id: "kaziranga",
    title: "Kaziranga Rhino Safari",
    destination: "Assam",
    duration: "4 Days / 3 Nights",
    price: "₹38,000",
    image: "https://images.unsplash.com/photo-1585970480901-90d6bb2a48b5?auto=format&fit=crop&w=800&q=80",
    category: "wildlife"
  },
  // Adventure
  {
    id: "manali-trekking",
    title: "Manali Adventure Trek",
    destination: "Himachal Pradesh",
    duration: "6 Days / 5 Nights",
    price: "₹25,000",
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=800&q=80",
    category: "adventure"
  },
  {
    id: "rishikesh-rafting",
    title: "Rishikesh Rafting & Camping",
    destination: "Uttarakhand",
    duration: "3 Days / 2 Nights",
    price: "₹15,000",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=80",
    category: "adventure"
  },
  {
    id: "ladakh-expedition",
    title: "Ladakh Bike Expedition",
    destination: "Ladakh",
    duration: "10 Days / 9 Nights",
    price: "₹55,000",
    image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=800&q=80",
    category: "adventure"
  },
  // Pilgrimage
  {
    id: "varanasi-spiritual",
    title: "Varanasi Spiritual Journey",
    destination: "Varanasi",
    duration: "4 Days / 3 Nights",
    price: "₹20,000",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
    category: "pilgrimage"
  },
  {
    id: "char-dham",
    title: "Char Dham Yatra",
    destination: "Uttarakhand",
    duration: "12 Days / 11 Nights",
    price: "₹65,000",
    image: "https://images.unsplash.com/photo-1545126178-862cdb469409?auto=format&fit=crop&w=800&q=80",
    category: "pilgrimage"
  },
  {
    id: "golden-temple",
    title: "Golden Temple & Wagah Border",
    destination: "Punjab",
    duration: "3 Days / 2 Nights",
    price: "₹18,000",
    image: "https://images.unsplash.com/photo-1591018653367-7d150e706625?auto=format&fit=crop&w=800&q=80",
    category: "pilgrimage"
  },
  // Medical Tourism
  {
    id: "wellness-retreat",
    title: "Ayurveda Wellness Retreat",
    destination: "Kerala",
    duration: "7 Days / 6 Nights",
    price: "₹75,000",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    category: "medical-tourism"
  },
  // Events
  {
    id: "destination-wedding",
    title: "Destination Wedding Package",
    destination: "Udaipur",
    duration: "5 Days / 4 Nights",
    price: "Custom",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80",
    category: "events"
  },
  {
    id: "corporate-retreat",
    title: "Corporate Team Retreat",
    destination: "Goa",
    duration: "3 Days / 2 Nights",
    price: "Custom",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    category: "events"
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
