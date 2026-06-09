import { motion } from "motion/react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Plane, Globe2, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#FAF7F2] overflow-hidden">
      {/* Floating particles animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#D4A24C] rounded-full opacity-20"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-[#D4A24C]/20"
            >
              <Award className="w-4 h-4 text-[#D4A24C]" />
              <span className="text-sm text-[#0B1F3A]">
                Government Authorized Immigration Consultants
              </span>
            </motion.div>

            <h1 className="text-6xl lg:text-7xl font-bold text-[#0B1F3A] mb-6 leading-tight">
              Turning Dreams
              <br />
              Into{" "}
              <span className="text-[#D4A24C] relative">
                Destinations
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-[#D4A24C]"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>
            </h1>

            <p className="text-xl text-[#1E1E1E]/70 mb-8 leading-relaxed">
              Trusted Immigration & Visa Consultancy for Students, Skilled
              Workers, and Families Worldwide.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#D4A24C]/10"
              >
                <div className="text-3xl font-bold text-[#D4A24C]">98%</div>
                <div className="text-sm text-[#1E1E1E]/60">Success Rate</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#D4A24C]/10"
              >
                <div className="text-3xl font-bold text-[#D4A24C]">15K+</div>
                <div className="text-sm text-[#1E1E1E]/60">Visas Approved</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-2xl border border-[#D4A24C]/10"
              >
                <div className="text-3xl font-bold text-[#D4A24C]">20+</div>
                <div className="text-sm text-[#1E1E1E]/60">Countries</div>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-[#D4A24C] hover:bg-[#D4A24C]/90 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#D4A24C]/30"
                >
                  <Globe2 className="mr-2 h-5 w-5" />
                  Check Your Eligibility
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white px-8 py-6 text-lg rounded-full"
                >
                  <Plane className="mr-2 h-5 w-5" />
                  Book Free Consultation
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Big Ben */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="col-span-2 rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1486299267070-83823f5448dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBiaWclMjBiZW4lMjBsYW5kbWFya3xlbnwxfHx8fDE3ODAzMzA2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Big Ben London"
                  className="w-full h-80 object-cover"
                />
              </motion.div>

              {/* Toronto Skyline */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1517935706615-2717063c2225?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3JvbnRvJTIwY2FuYWRhJTIwc2t5bGluZXxlbnwxfHx8fDE3ODA0NzYzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Toronto Canada"
                  className="w-full h-48 object-cover"
                />
              </motion.div>

              {/* Sydney Opera House */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
              >
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBvcGVyYSUyMGhvdXNlJTIwYXVzdHJhbGlhfGVufDF8fHx8MTc4MDM3ODMxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Sydney Opera House"
                  className="w-full h-48 object-cover"
                />
              </motion.div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-2xl border-2 border-[#D4A24C]/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4A24C] to-[#0B1F3A] rounded-full flex items-center justify-center">
                  <Plane className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-[#0B1F3A]">15,000+</div>
                  <div className="text-xs text-[#1E1E1E]/60">
                    Happy Clients
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
