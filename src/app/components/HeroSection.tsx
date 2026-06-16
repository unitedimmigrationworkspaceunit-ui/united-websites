import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Button } from './ui/button';
import { Sparkles, ArrowRight, CheckCircle2, Star, Play, Phone, Plane } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { indianHero } from '../assets/images';

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const features = [
    'Study Visa Specialists',
    '98% Success Rate',
    '10,000+ Students Placed',
    'Free 1-Hour Consultation',
  ];

  const destinations = [
    { flag: '🇨🇦', label: 'Canada' },
    { flag: '🇦🇺', label: 'Australia' },
    { flag: '🇬🇧', label: 'UK' },
    { flag: '🇺🇸', label: 'USA' },
    { flag: '🇳🇿', label: 'New Zealand' },
    { flag: '🌍', label: 'Europe' },
  ];

  const floatingParticles = Array.from({ length: 24 }, (_, i) => ({
    id: i,
    x: `${5 + (i * 17) % 90}%`,
    y: `${10 + (i * 23) % 80}%`,
    delay: (i * 0.3) % 3,
    size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1.5,
  }));

  return (
    <section
      ref={ref}
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #FAF7F2 0%, #F5EFE6 40%, #FAF7F2 100%)' }}
    >
      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingParticles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute rounded-full bg-[#D4A24C]/30"
            style={{ left: p.x, top: p.y, width: p.size * 4, height: p.size * 4 }}
            animate={{ y: [0, -40, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.3, 1] }}
            transition={{ duration: 4 + p.delay, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
          />
        ))}
        {/* Large decorative blobs */}
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#D4A24C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#0B1F3A]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#D4A24C]/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />

        {/* Animated Flying Planes Background */}
        {/* Plane 1: Bottom-Left to Top-Right */}
        <motion.div
          animate={{ x: ['-20vw', '120vw'], y: ['80vh', '-20vh'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute top-0 left-0 text-[#D4A24C]/10 z-0 pointer-events-none"
        >
          <Plane className="w-48 h-48 sm:w-64 sm:h-64" />
        </motion.div>

        {/* Plane 2: Top-Left to Bottom-Right */}
        <motion.div
          animate={{ x: ['-20vw', '120vw'], y: ['-20vh', '80vh'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear', delay: 5 }}
          className="absolute top-0 left-0 text-[#D4A24C]/10 z-0 pointer-events-none"
        >
          <Plane className="w-32 h-32 sm:w-48 sm:h-48 rotate-90" />
        </motion.div>
      </div>

      <motion.div style={{ y, opacity }} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* ── Left Content ── */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-5 py-2.5 rounded-full border border-[#D4A24C]/40 shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#D4A24C]" />
              <span className="text-sm font-semibold text-[#0B1F3A]">
                Trusted by 50,000+ Clients Worldwide
              </span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4A24C] text-[#D4A24C]" />
                ))}
              </div>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-4xl sm:text-5xl lg:text-[3rem] xl:text-[3.5rem] font-bold text-[#0B1F3A] leading-[1.1]"
              >
                <span className="block whitespace-nowrap">Turning Dreams Into</span>
                <span className="relative block">
                  <span className="text-[#D4A24C]">Destinations</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#D4A24C]/30 rounded-full origin-left"
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="text-xl lg:text-2xl text-[#1E1E1E]/75 leading-relaxed max-w-xl"
              >
                India's most trusted Study Visa & International Education Consultancy — guiding students to their dream universities worldwide with{' '}
                <span className="text-[#D4A24C] font-semibold">expert guidance</span>.
              </motion.p>
            </div>

            {/* Destinations flags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {destinations.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-2 bg-white/80 px-3 py-1.5 rounded-full border border-gray-200 text-sm font-medium text-[#0B1F3A] shadow-sm"
                >
                  <span className="text-base">{d.flag}</span>
                  {d.label}
                </div>
              ))}
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {features.map((f, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <CheckCircle2 className="w-5 h-5 text-[#D4A24C] flex-shrink-0" />
                  <span className="text-sm font-semibold text-[#1E1E1E]">{f}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#D4A24C] hover:bg-[#B8892E] text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all group"
              >
                Check Your Eligibility
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-[#0B1F3A] text-[#0B1F3A] hover:bg-[#0B1F3A] hover:text-white px-8 py-6 text-lg transition-all"
              >
                <Phone className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Button>
            </motion.div>

            {/* Social proof mini */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-center gap-4 pt-2"
            >
              <div className="flex -space-x-2">
                {indianHero.clientAvatars.map((src) => (
                  <div
                    key={src}
                    className="w-9 h-9 rounded-full border-2 border-white shadow-sm overflow-hidden bg-[#F5EFE6] flex-shrink-0"
                  >
                    <ImageWithFallback
                      src={src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4A24C] text-[#D4A24C]" />
                  ))}
                </div>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold text-[#0B1F3A]">4.9/5</span> from 12,000+ reviews
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right Content ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="relative h-full w-full flex items-center justify-center"
          >
            {/* Main large image */}
            <motion.div
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.02 }}
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl h-[500px] lg:h-[640px] w-full group border border-white/40"
            >
              <ImageWithFallback
                src="/aroimages.png"
                alt="Airplane flying at sunset - Turning Dreams into Destinations"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-[#0B1F3A]/20 to-transparent" />

              {/* Video play overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white/30 transition-all border border-white/30"
                >
                  <Play className="w-8 h-8 text-white fill-white ml-1 group-hover:scale-110 transition-transform drop-shadow-md" />
                </motion.button>
              </div>

              {/* Bottom label */}
              <div className="absolute bottom-8 left-8 text-white z-20">
                <p className="font-bold text-2xl drop-shadow-md mb-2">Your Dream, Our Mission</p>
                <div className="flex items-center text-white/90 hover:text-white transition-colors cursor-pointer group/link">
                  <span className="font-medium">Watch success stories</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1 }}
              className="absolute -left-6 lg:-left-12 top-24 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-5 border border-gray-100 z-30"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#D4A24C]/10 rounded-xl flex items-center justify-center border border-[#D4A24C]/20">
                  <span className="text-[#D4A24C] font-black text-lg">98%</span>
                </div>
                <div>
                  <p className="font-bold text-[#0B1F3A] text-sm lg:text-base">Success Rate</p>
                  <p className="text-xs text-gray-500 font-medium">Across all visa types</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -right-4 lg:-right-8 bottom-32 bg-white/95 backdrop-blur-md rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] p-5 border border-gray-100 z-30"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center border border-green-100">
                  <CheckCircle2 className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <p className="font-bold text-[#0B1F3A] text-sm lg:text-base">50,000+</p>
                  <p className="text-xs text-gray-500 font-medium">Visas Approved</p>
                </div>
              </div>
            </motion.div>

            {/* Live indicator */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="absolute top-6 right-6 lg:right-10 bg-white/90 backdrop-blur-md rounded-full px-5 py-2.5 shadow-lg flex items-center gap-2.5 border border-white/50 z-30"
            >
              <motion.div
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-2.5 h-2.5 bg-green-500 rounded-full"
              />
              <span className="text-sm font-bold text-[#0B1F3A]">Live Chat</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
