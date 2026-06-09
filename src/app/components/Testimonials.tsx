import { motion } from "motion/react";
import { useState } from "react";
import { Star, Quote, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Button } from "./ui/button";

const testimonials = [
  {
    name: "Priya Sharma",
    country: "Canada PR",
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBpbmRpYW4lMjB3b21hbiUyMGJ1c2luZXNzfGVufDF8fHx8MTc4MDQ3NjM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    text: "United Immigration Services made my Canada PR journey incredibly smooth. Their team was professional, responsive, and guided me through every step. I got my PR in just 7 months!",
    visa: "Express Entry",
  },
  {
    name: "Rajesh Kumar",
    country: "Australia Work Visa",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBtZWV0aW5nfGVufDF8fHx8MTc4MDQxNzgyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    text: "I was skeptical about immigration consultants, but United Immigration proved me wrong. They helped me secure my TSS visa for Australia with zero complications. Highly recommended!",
    visa: "TSS 482 Visa",
  },
  {
    name: "Ananya Patel",
    country: "UK Student Visa",
    image: "https://images.unsplash.com/photo-1627556704302-624286467c65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwZ3JhZHVhdGlvbiUyMHN0dWRlbnQlMjBzdWNjZXNzfGVufDF8fHx8MTc4MDQ3NjM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    text: "From university selection to visa approval, United Immigration was with me at every step. I'm now studying at my dream university in London. Thank you for making it happen!",
    visa: "Tier 4 Student",
  },
  {
    name: "Vikram Singh",
    country: "Germany Opportunity Card",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBtZWV0aW5nfGVufDF8fHx8MTc4MDQxNzgyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    text: "The Germany Opportunity Card was a new process, but United Immigration's expertise made it seamless. I'm now in Berlin pursuing my career dreams. Excellent service!",
    visa: "Job Seeker Visa",
  },
  {
    name: "Meera & Family",
    country: "Canada Family Sponsorship",
    image: "https://images.unsplash.com/photo-1659352790654-058e9077a4f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGluZGlhbiUyMGZhbWlseSUyMHBvcnRyYWl0fGVufDF8fHx8MTc4MDQ3NjM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    text: "We're finally reunited with our daughter in Canada! United Immigration handled all the paperwork and kept us updated throughout. Forever grateful for their dedication.",
    visa: "Family Sponsorship",
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F5EFE6]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#0B1F3A] mb-4">
            Success Stories from Our Clients
          </h2>
          <p className="text-xl text-[#1E1E1E]/70 max-w-3xl mx-auto">
            Real people, real success stories, real dreams achieved
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-[#D4A24C]/20"
          >
            <div className="grid md:grid-cols-5 gap-0">
              {/* Image Section */}
              <div className="md:col-span-2 relative">
                <ImageWithFallback
                  src={current.image}
                  alt={current.name}
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Play Button for Video Testimonial */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute inset-0 m-auto w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl"
                >
                  <Play className="w-8 h-8 text-[#D4A24C] ml-1" />
                </motion.button>
              </div>

              {/* Content Section */}
              <div className="md:col-span-3 p-10 relative">
                {/* Quote Icon */}
                <Quote className="absolute top-8 right-8 w-16 h-16 text-[#D4A24C]/20" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(current.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#D4A24C] text-[#D4A24C]"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-lg text-[#1E1E1E] leading-relaxed mb-6 relative z-10">
                  "{current.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-[#0B1F3A]">
                      {current.name}
                    </h4>
                    <p className="text-[#D4A24C] font-semibold">
                      {current.visa}
                    </p>
                    <p className="text-sm text-[#1E1E1E]/60">
                      {current.country}
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="flex gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevSlide}
                      className="w-12 h-12 rounded-full bg-[#F5EFE6] hover:bg-[#D4A24C] hover:text-white transition-colors flex items-center justify-center"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextSlide}
                      className="w-12 h-12 rounded-full bg-[#D4A24C] text-white hover:bg-[#0B1F3A] transition-colors flex items-center justify-center"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </motion.button>
                  </div>
                </div>

                {/* Counter */}
                <div className="mt-6 text-sm text-[#1E1E1E]/40">
                  {currentIndex + 1} / {testimonials.length}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-[#D4A24C]"
                    : "w-2 bg-[#1E1E1E]/20 hover:bg-[#1E1E1E]/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg border-2 border-[#D4A24C]/20">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((t, i) => (
                <ImageWithFallback
                  key={i}
                  src={t.image}
                  alt={t.name}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-left">
              <div className="font-bold text-[#0B1F3A]">
                15,000+ Happy Clients
              </div>
              <div className="text-sm text-[#1E1E1E]/60">
                Join them on their journey
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
