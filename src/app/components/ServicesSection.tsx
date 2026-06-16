import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, GraduationCap, Plane, Heart, BookOpen } from 'lucide-react';

const services = [
  {
    icon: GraduationCap,
    emoji: '🎓',
    title: 'Study Visa',
    tagline: 'Your gateway to world-class education',
    description: 'Comprehensive study visa assistance for Canada, UK, Australia, USA, Ireland, New Zealand, Singapore, UAE & Europe. From university selection to visa grant — we handle it all.',
    features: ['University & College Selection', 'Admission Application Support', 'Study Visa Filing', 'Pre-Departure Guidance'],
    success: '98%',
    gradient: 'from-[#D4A24C] via-[#B8892E] to-[#D4A24C]',
    lightBg: 'from-[#D4A24C]/10 to-transparent',
    accent: '#D4A24C',
    glowColor: 'rgba(212, 162, 76, 0.15)',
  },
  {
    icon: Plane,
    emoji: '✈️',
    title: 'Visitor Visa',
    tagline: 'Explore the world with confidence',
    description: 'Fast-track visitor visa processing for Canada, UK, Australia, USA, Schengen & beyond. We handle documentation, cover letters, financial proofs & appointment booking.',
    features: ['Document Checklist & Review', 'Cover Letter Drafting', 'Embassy Appointment Support', 'Fast Processing'],
    success: '99%',
    gradient: 'from-[#D4A24C] via-[#B8892E] to-[#D4A24C]',
    lightBg: 'from-[#D4A24C]/10 to-transparent',
    accent: '#D4A24C',
    glowColor: 'rgba(212, 162, 76, 0.15)',
  },
  {
    icon: Heart,
    emoji: '💑',
    title: 'Spousal Visa',
    tagline: 'Reunite with your loved ones abroad',
    description: 'Dedicated spousal & family reunification visa assistance. We guide you through relationship documentation, financial requirements & visa application for multiple destinations.',
    features: ['Spousal Sponsorship Support', 'Relationship Documentation', 'Financial Requirement Guidance', 'End-to-End Application Help'],
    success: '97%',
    gradient: 'from-[#D4A24C] via-[#B8892E] to-[#D4A24C]',
    lightBg: 'from-[#D4A24C]/10 to-transparent',
    accent: '#D4A24C',
    glowColor: 'rgba(212, 162, 76, 0.15)',
  },
  {
    icon: BookOpen,
    emoji: '📚',
    title: 'Additional Services',
    tagline: 'Complete end-to-end student support',
    description: 'Beyond visa filing — we provide ticket booking assistance, health insurance guidance, documentation support, country-specific counseling & application review.',
    features: ['Ticket Booking Assistance', 'Health Insurance Guidance', 'Country-Specific Counseling', 'Application Review & Submission'],
    success: '98%',
    gradient: 'from-[#D4A24C] via-[#B8892E] to-[#D4A24C]',
    lightBg: 'from-[#D4A24C]/10 to-transparent',
    accent: '#D4A24C',
    glowColor: 'rgba(212, 162, 76, 0.15)',
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getServiceHash = (title: string) => {
    switch (title.toLowerCase()) {
      case 'study visa':
        return '#/study-visa/canada';
      case 'visitor visa':
        return '#/visitor-visa';
      case 'spousal visa':
        return '#/spousal-visa';
      case 'additional services':
      default:
        return '#/chandigarh-consultant';
    }
  };

  return (
    <section id="services" className="py-28 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0B1F3A 0%, #0d2a4a 40%, #0B1F3A 100%)' }}>
      {/* Premium background texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #D4A24C 1px, transparent 0)',
          backgroundSize: '48px 48px',
        }} />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4A24C]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-5 py-2 bg-[#D4A24C]/20 text-[#D4A24C] rounded-full text-sm font-bold mb-5 border border-[#D4A24C]/30">
            Our Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            Your Path to <span className="text-[#D4A24C]">Global Education</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From study visas to visitor permits — personalized, transparent, and end-to-end support for every step of your journey.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.5 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -14, scale: 1.02 }}
                onClick={() => window.location.hash = getServiceHash(service.title)}
                className="relative group h-full flex flex-col"
              >
                {/* Card */}
                <div
                  className="relative h-full flex flex-col rounded-2xl overflow-hidden cursor-pointer transition-all duration-500"
                  style={{
                    background: isHovered ? `linear-gradient(135deg, ${service.accent}18, ${service.accent}08)` : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${isHovered ? service.accent + '50' : 'rgba(255,255,255,0.1)'}`,
                    boxShadow: isHovered ? `0 25px 50px -12px ${service.glowColor}, 0 0 0 1px ${service.accent}30` : '0 4px 20px rgba(0,0,0,0.2)',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  {/* Top gradient bar */}
                  <div className={`h-1 bg-gradient-to-r ${service.gradient} w-0 group-hover:w-full transition-all duration-500`} />

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Icon + Success badge */}
                    <div className="flex items-start justify-between mb-5 flex-shrink-0">
                      <motion.div
                        animate={{ scale: isHovered ? 1.15 : 1, rotate: isHovered ? 5 : 0 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                        className="text-5xl"
                      >
                        {service.emoji}
                      </motion.div>
                      <div
                        className="px-2.5 py-1 rounded-full text-xs font-bold"
                        style={{ background: `${service.accent}25`, color: service.accent }}
                      >
                        {service.success} success
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white mb-1 text-lg leading-tight group-hover:text-white transition-colors flex-shrink-0">
                      {service.title}
                    </h3>
                    <p style={{ color: service.accent }} className="text-xs font-semibold mb-3 uppercase tracking-wide flex-shrink-0">
                      {service.tagline}
                    </p>

                    {/* Description */}
                    <p className="text-white/55 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Feature list */}
                    <div className="space-y-2 mb-5 flex-grow">
                      {service.features.map((f) => (
                        <div key={f} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: service.accent }} />
                          <span className="text-white/60 text-xs">{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl px-8 py-6">
            <div className="text-white/80 text-left">
              <p className="font-bold text-white">Get a free 1-hour consultation</p>
              <p className="text-sm text-white/60">Our counsellors will guide you to the right study destination — no obligation.</p>
            </div>
            <a
              href="#/contact"
              className="flex items-center gap-2 bg-gradient-to-r from-[#D4A24C] to-[#B8892E] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-[#D4A24C]/30 hover:shadow-xl transition-all whitespace-nowrap"
            >
              Free Consultation <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
