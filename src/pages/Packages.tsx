import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, MapPin, Clock, Filter, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BookingModal from "@/components/BookingModal";
import { packages, searchPackages, Package } from "@/data/services";

const categories = [
  { id: "all", label: "All" },
  { id: "inbound-outbound-tours", label: "Tours" },
  { id: "events-management", label: "Events" },
  { id: "handicrafts-jewellery", label: "Handicrafts & Jewellery" },
];

const Packages = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredPackages, setFilteredPackages] = useState<Package[]>(packages);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);

  useEffect(() => {
    let results = packages;

    // Apply search filter
    if (searchQuery) {
      results = searchPackages(searchQuery);
    }

    // Apply category filter
    if (activeCategory !== "all") {
      results = results.filter(pkg => pkg.category === activeCategory);
    }

    setFilteredPackages(results);
  }, [searchQuery, activeCategory]);

  // Handle initial search from URL
  useEffect(() => {
    if (initialSearch) {
      setSearchQuery(initialSearch);
    }
  }, [initialSearch]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams(searchQuery ? { search: searchQuery } : {});
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchParams({});
  };

  const handleBookNow = (pkg: Package) => {
    setSelectedPackage(pkg);
    setIsBookingOpen(true);
  };

  return (
    <>
      <Helmet>
        <title>Our Offerings | Siddhiyan - Tours, Events & Handicrafts</title>
        <meta
          name="description"
          content="Explore Siddhiyan's curated collection - from inbound & outbound tours, weddings & MICE events, to exquisite handicrafts and jewellery."
        />
        <link rel="canonical" href="https://www.siddhiyan.com/packages" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-charcoal">
          <div className="absolute inset-0 z-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=2000&q=80"
              alt="Tour packages"
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
              Our Offerings
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl font-sans text-sand/80"
            >
              Explore our complete range of services
            </motion.p>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="py-8 bg-muted/50 border-b border-border sticky top-16 z-30 glass-effect">
          <div className="container-luxury">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:w-80">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search destinations, packages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 pr-10"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={clearSearch}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>
                <Button type="submit" variant="luxury">
                  Search
                </Button>
              </form>

              {/* Category Pills */}
              <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-4 py-2 rounded-full text-sm font-sans font-medium whitespace-nowrap transition-colors ${
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-background text-muted-foreground hover:bg-muted border border-border"
                    }`}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Packages Grid */}
        <section className="section-padding bg-background">
          <div className="container-luxury">
            {/* Results Count */}
            <div className="mb-8">
              <p className="font-sans text-muted-foreground">
                {searchQuery && (
                  <span>
                    Showing results for "{searchQuery}" — {" "}
                  </span>
                )}
                <span className="text-foreground font-medium">
                  {filteredPackages.length} package{filteredPackages.length !== 1 ? "s" : ""} found
                </span>
              </p>
            </div>

            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPackages.map((pkg, index) => (
                  <motion.article
                    key={pkg.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group card-luxury"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-sans font-medium">
                        {pkg.price}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {pkg.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground font-sans mb-4">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {pkg.destination}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {pkg.duration}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        <Link
                          to={`/services/${pkg.category}`}
                          className="flex-1"
                        >
                          <Button variant="luxuryOutline" className="w-full" size="sm">
                            View Details
                          </Button>
                        </Link>
                        <Button
                          variant="luxury"
                          size="sm"
                          onClick={() => handleBookNow(pkg)}
                        >
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-20"
              >
                <Filter className="w-16 h-16 mx-auto mb-4 text-muted-foreground/50" />
                <h3 className="font-serif text-2xl text-foreground mb-2">
                  No packages found
                </h3>
                <p className="text-muted-foreground font-sans mb-6">
                  Try adjusting your search or filter criteria
                </p>
                <Button
                  variant="luxuryOutline"
                  onClick={() => {
                    clearSearch();
                    setActiveCategory("all");
                  }}
                >
                  Clear Filters
                </Button>
              </motion.div>
            )}
          </div>
        </section>

        <Footer />

        {/* Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={() => {
            setIsBookingOpen(false);
            setSelectedPackage(null);
          }}
          prefilledDestination={selectedPackage?.destination || ""}
        />
      </main>
    </>
  );
};

export default Packages;
