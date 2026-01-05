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
        <title>Siddhiyan - Premium Travel & Event Management | India</title>
        <meta 
          name="description" 
          content="Siddhiyan offers premium holiday tours, corporate event management, wildlife safaris, and medical tourism across India. 10+ years of crafting unforgettable journeys." 
        />
        <meta name="keywords" content="travel agency India, event management, holiday tours, wildlife safari, medical tourism, destination wedding, corporate events" />
        <link rel="canonical" href="https://www.siddhiyan.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Siddhiyan - Premium Travel & Event Management" />
        <meta property="og:description" content="Crafting extraordinary travel experiences and seamless events since 2014. Your journey, our passion." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.siddhiyan.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Siddhiyan - Premium Travel & Event Management" />
        <meta name="twitter:description" content="Crafting extraordinary travel experiences and seamless events since 2014." />
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
