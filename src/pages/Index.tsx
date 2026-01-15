import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutSection from "@/components/AboutSection";
import TrustSection from "@/components/TrustSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Siddhiyan - Tours, Events & Handicrafts | India</title>
        <meta
          name="description"
          content="Siddhiyan offers inbound & outbound tours, events management (weddings & MICE), and exquisite handicrafts & jewellery. Your trusted partner for excellence."
        />
        <meta name="keywords" content="travel agency India, event management, inbound tours, outbound tours, destination wedding, MICE events, handicrafts, gold jewellery, silver jewellery, sculptures" />
        <link rel="canonical" href="https://www.siddhiyan.com" />

        {/* Open Graph */}
        <meta property="og:title" content="Siddhiyan - Tours, Events & Handicrafts" />
        <meta property="og:description" content="Your trusted partner for seamless travel, unforgettable events, and exquisite handicrafts & jewellery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.siddhiyan.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Siddhiyan - Tours, Events & Handicrafts" />
        <meta name="twitter:description" content="Your trusted partner for seamless travel, unforgettable events, and exquisite handicrafts & jewellery." />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Services />
        <AboutSection />
        <TrustSection />
        <Testimonials />
        <Footer />
      </main>
    </>
  );
};

export default Index;
