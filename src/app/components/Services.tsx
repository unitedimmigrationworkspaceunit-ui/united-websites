import { motion } from "motion/react";
import { Plane, GraduationCap, Users, FileText, Globe, Building, Heart, MapPinned, FileCheck } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    icon: Plane,
    title: "Canada PR & Express Entry",
    description: "Fast-track your Canadian permanent residency through Express Entry program",
    gradient: "from-red-500 to-orange-500",
  },
  {
    icon: MapPinned,
    title: "Australia Skilled Migration",
    description: "Skilled Independent & Employer Sponsored visa pathways to Australia",
    gradient: "from-yellow-500 to-amber-500",
  },
  {
    icon: Building,
    title: "UK Skilled Worker Visa",
    description: "Work and settle in the UK with Skilled Worker and Global Talent visas",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    icon: Globe,
    title: "USA Work & Student Visa",
    description: "H1B, L1, F1 Student visas and Green Card applications for USA",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileCheck,
    title: "Germany Opportunity Card",
    description: "Job Seeker visa and EU Blue Card for skilled professionals",
    gradient: "from-gray-700 to-gray-900",
  },
  {
    icon: GraduationCap,
    title: "Student Visa Services",
    description: "Complete study abroad assistance for top universities worldwide",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Heart,
    title: "Family Sponsorship",
    description: "Reunite with your loved ones through family sponsorship programs",
    gradient: "from-rose-500 to-red-500",
  },
  {
    icon: Users,
    title: "Tourist Visa",
    description: "Quick tourist visa processing for leisure and business travel",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: FileText,
    title: "Document Assistance",
    description: "Professional help with translations, attestations, and documentation",
    gradient: "from-teal-500 to-cyan-500",
  },
];

export function Services() {
  return (
    <section className="py-20 bg-[#FAF7F2]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#0B1F3A] mb-4">
            Comprehensive Immigration Services
          </h2>
          <p className="text-xl text-[#1E1E1E]/70 max-w-3xl mx-auto">
            From consultation to visa approval, we handle every step of your immigration journey
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#D4A24C]/30 h-full">
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4A24C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3 group-hover:text-[#D4A24C] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#1E1E1E]/70 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Learn More Button */}
                  <Button
                    variant="ghost"
                    className="text-[#D4A24C] hover:bg-[#D4A24C] hover:text-white transition-all duration-300 rounded-full px-6"
                  >
                    Learn More →
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-[#D4A24C] to-[#0B1F3A] rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-lg mb-8 opacity-90">
              Book a free consultation with our immigration experts today
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-[#0B1F3A] hover:bg-white/90 rounded-full px-8 py-6 text-lg shadow-xl"
              >
                Schedule Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0B1F3A] rounded-full px-8 py-6 text-lg"
              >
                Check Eligibility
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
