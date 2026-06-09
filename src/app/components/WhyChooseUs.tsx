import { motion } from "motion/react";
import { Shield, Clock, Award, Users, HeadphonesIcon, Globe2, FileCheck, Zap } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Success Rate Focus",
    description: "We don't just process applications, we ensure success with meticulous preparation",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: Award,
    title: "Government Authorized",
    description: "Licensed RCIC, MARA, and OISC registered immigration consultants",
    color: "from-[#D4A24C] to-[#D4A24C]/80",
  },
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Streamlined processes ensuring quicker turnaround times than industry average",
    color: "from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "15+ experienced immigration lawyers and consultants at your service",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock assistance via phone, email, and WhatsApp",
    color: "from-orange-500 to-red-600",
  },
  {
    icon: FileCheck,
    title: "Document Assistance",
    description: "Complete help with translations, attestations, and documentation",
    color: "from-teal-500 to-cyan-600",
  },
  {
    icon: Globe2,
    title: "Global Network",
    description: "Partner offices in 20+ countries for seamless local support",
    color: "from-indigo-500 to-blue-600",
  },
  {
    icon: Zap,
    title: "No Hidden Costs",
    description: "Transparent pricing with no surprise fees - what you see is what you pay",
    color: "from-yellow-500 to-amber-600",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#0B1F3A] mb-4">
            Why Choose United Immigration?
          </h2>
          <p className="text-xl text-[#1E1E1E]/70 max-w-3xl mx-auto">
            Your success is our mission. Here's what makes us different.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="bg-[#FAF7F2] rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-[#D4A24C]/30">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#1E1E1E]/70 leading-relaxed text-sm">
                    {feature.description}
                  </p>
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
          className="mt-16 text-center"
        >
          <p className="text-lg text-[#1E1E1E]/70 mb-6">
            Join thousands of successful clients who trusted us with their dreams
          </p>
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-[#D4A24C]/10 to-[#0B1F3A]/10 rounded-full px-8 py-4 border-2 border-[#D4A24C]/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4A24C]">98%</div>
              <div className="text-sm text-[#1E1E1E]/60">Success Rate</div>
            </div>
            <div className="w-px h-12 bg-[#D4A24C]/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4A24C]">15K+</div>
              <div className="text-sm text-[#1E1E1E]/60">Happy Clients</div>
            </div>
            <div className="w-px h-12 bg-[#D4A24C]/20" />
            <div className="text-center">
              <div className="text-3xl font-bold text-[#D4A24C]">4.9/5</div>
              <div className="text-sm text-[#1E1E1E]/60">Rating</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
