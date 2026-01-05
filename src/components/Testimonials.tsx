import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai, India",
    rating: 5,
    text: "Siddhiyan planned our entire family vacation to Ladakh. Every detail was perfect - from the accommodation to the local guides. An experience we'll cherish forever.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Priya Sharma",
    location: "Delhi, India",
    rating: 5,
    text: "Our corporate retreat was handled flawlessly. The team went above and beyond to ensure every executive was comfortable. Highly recommend for business events.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Amit Patel",
    location: "Ahmedabad, India",
    rating: 5,
    text: "The wildlife safari to Ranthambore was magical. Spotted two tigers! The guides were knowledgeable and the lodges were luxurious. Already planning our next trip.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Sunita Reddy",
    location: "Hyderabad, India",
    rating: 5,
    text: "Organized our daughter's destination wedding in Udaipur. Absolutely stunning! From venue selection to vendor coordination, Siddhiyan made it stress-free.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const next = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container-luxury relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block font-sans text-sm tracking-[0.2em] uppercase text-primary mb-4">
            Testimonials
          </span>
          <h2 className="heading-section text-foreground mb-6">
            What Our Travelers Say
          </h2>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-0 md:left-10 z-10">
              <Quote className="w-16 h-16 text-primary/20" />
            </div>

            {/* Testimonial Content */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-2xl p-8 md:p-12 shadow-luxury-md"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Image */}
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-primary/20"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Rating */}
                  <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="font-sans text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
                    "{testimonials[activeIndex].text}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-serif text-lg font-semibold text-foreground">
                      {testimonials[activeIndex].name}
                    </p>
                    <p className="font-sans text-sm text-muted-foreground">
                      {testimonials[activeIndex].location}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-border bg-card hover:bg-muted flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setActiveIndex(index);
                    }}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary w-8"
                        : "bg-border hover:bg-muted-foreground"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-border bg-card hover:bg-muted flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
