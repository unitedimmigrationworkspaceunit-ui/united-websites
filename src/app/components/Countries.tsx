import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const countries = [
  {
    name: "Canada",
    flag: "🇨🇦",
    image:
      "https://images.unsplash.com/photo-1517935706615-2717063c2225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3JvbnRvJTIwY2FuYWRhJTIwc2t5bGluZXxlbnwxfHx8fDE3ODA0NzYzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    visaTypes: ["Express Entry", "PR", "Study Permit", "Work Permit"],
    color: "#FF0000",
  },
  {
    name: "Australia",
    flag: "🇦🇺",
    image:
      "https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBvcGVyYSUyMGhvdXNlJTIwYXVzdHJhbGlhfGVufDF8fHx8MTc4MDM3ODMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    visaTypes: ["Skilled Migration", "Student Visa", "TSS Visa", "PR"],
    color: "#FFD700",
  },
  {
    name: "United Kingdom",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1486299267070-83823f5448dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBiaWclMjBiZW4lMjBsYW5kbWFya3xlbnwxfHx8fDE3ODAzMzA2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    visaTypes: ["Skilled Worker", "Student Visa", "Graduate Route", "Innovator"],
    color: "#C8102E",
  },
  {
    name: "USA",
    flag: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGNvbnN1bHRhbnQlMjBtZWV0aW5nfGVufDF8fHx8MTc4MDQxNzgyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    visaTypes: ["H1B", "F1 Student", "Green Card", "Tourist Visa"],
    color: "#B22234",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    image:
      "https://images.unsplash.com/photo-1658314718453-211a5bb4592a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZXJtYW55JTIwYmVybGluJTIwbGFuZG1hcmtzfGVufDF8fHx8MTc4MDQ3NjM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    visaTypes: ["Opportunity Card", "Job Seeker", "EU Blue Card", "Student Visa"],
    color: "#FFCC00",
  },
];

export function Countries() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-[#FAF7F2] to-[#F5EFE6]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#0B1F3A] mb-4">
            Your Gateway to Global Opportunities
          </h2>
          <p className="text-xl text-[#1E1E1E]/70 max-w-3xl mx-auto">
            Expert immigration services to top destinations worldwide
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#D4A24C]/30"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={country.image}
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Flag Badge */}
                  <motion.div
                    animate={
                      hoveredIndex === index
                        ? { scale: [1, 1.2, 1], rotate: [0, 10, 0] }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                    className="absolute top-4 right-4 text-6xl filter drop-shadow-lg"
                  >
                    {country.flag}
                  </motion.div>

                  {/* Country Name */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {country.name}
                    </h3>
                  </div>
                </div>

                {/* Visa Types */}
                <div className="p-6">
                  <div className="flex items-center gap-2 text-[#D4A24C] mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-semibold">Popular Visa Types</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {country.visaTypes.map((visa) => (
                      <span
                        key={visa}
                        className="px-3 py-1 bg-[#F5EFE6] text-[#0B1F3A] text-sm rounded-full"
                      >
                        {visa}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-[#D4A24C] group-hover:text-white transition-colors duration-300"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-[#1E1E1E]/70 mb-4">
            Don't see your destination?
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-[#D4A24C] text-[#D4A24C] hover:bg-[#D4A24C] hover:text-white rounded-full px-8"
          >
            View All Countries
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
