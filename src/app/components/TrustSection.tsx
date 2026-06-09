import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Award, CheckCircle2, Globe, Users, Star, TrendingUp, Shield, Zap } from 'lucide-react';

function CountUp({ target, suffix = '', decimals = 0 }: { target: number; suffix?: string; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const duration = 2200;
    const steps = 80;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(+(target * eased).toFixed(decimals));
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [isInView, target, decimals]);

  return (
    <span ref={ref}>
      {decimals > 0 ? count.toFixed(decimals) : count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function TrustSection() {
  const stats = [
    { icon: TrendingUp, value: 98, suffix: '%', label: 'Success Rate', sublabel: 'Visa Approvals', gradient: 'from-green-400 to-emerald-500' },
    { icon: CheckCircle2, value: 50000, suffix: '+', label: 'Visas Approved', sublabel: 'Across all categories', gradient: 'from-blue-400 to-cyan-500' },
    { icon: Globe, value: 25, suffix: '+', label: 'Countries Served', sublabel: 'Global destinations', gradient: 'from-purple-400 to-violet-500' },
    { icon: Users, value: 45000, suffix: '+', label: 'Happy Clients', sublabel: 'Families relocated', gradient: 'from-orange-400 to-amber-500' },
    { icon: Award, value: 15, suffix: '+', label: 'Years Experience', sublabel: 'Industry expertise', gradient: 'from-red-400 to-rose-500' },
    { icon: Star, value: 4.9, suffix: '', label: 'Google Rating', sublabel: '12,000+ reviews', gradient: 'from-yellow-400 to-amber-400', decimals: 1 },
  ];

  const certifications = [
    { name: 'RCIC Certified', body: 'Immigration Consultants of Canada Regulatory Council', abbr: 'ICCRC' },
    { name: 'MARA Registered', body: 'Migration Agents Registration Authority — Australia', abbr: 'MARA' },
    { name: 'OISC Licensed', body: 'Office of the Immigration Services Commissioner — UK', abbr: 'OISC' },
    { name: 'Govt. Authorized', body: 'Ministry of External Affairs — India', abbr: 'MEA' },
  ];

  const trustBadges = [
    { icon: Shield, label: 'ISO 27001 Certified', color: 'text-green-400' },
    { icon: Award, label: 'BBB A+ Accredited', color: 'text-blue-400' },
    { icon: CheckCircle2, label: 'Trusted Partner', color: 'text-purple-400' },
    { icon: Zap, label: '24/7 Support', color: 'text-amber-400' },
    { icon: TrendingUp, label: 'Money-Back Policy', color: 'text-rose-400' },
    { icon: Globe, label: 'Secure & Private', color: 'text-cyan-400' },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#0B1F3A] via-[#0d2545] to-[#0B1F3A] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#D4A24C]/8 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#D4A24C]/8 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-900/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(#D4A24C 1px, transparent 1px), linear-gradient(90deg, #D4A24C 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#D4A24C]/20 text-[#D4A24C] rounded-full text-sm font-semibold mb-4 border border-[#D4A24C]/30">
            Our Track Record
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Trusted by Thousands{' '}
            <span className="text-[#D4A24C]">Worldwide</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Numbers that reflect 15 years of dedication, expertise, and unwavering commitment to client success.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="relative bg-white/8 backdrop-blur-lg rounded-2xl p-6 border border-white/15 hover:bg-white/12 hover:border-[#D4A24C]/40 transition-all duration-300 group"
              >
                {/* Glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#D4A24C]/0 to-[#D4A24C]/0 group-hover:from-[#D4A24C]/5 group-hover:to-transparent transition-all duration-300" />

                <div className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-xl flex items-center justify-center mb-4 mx-auto shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-white mb-1">
                    <CountUp target={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </p>
                  <p className="text-sm font-semibold text-white/90 mb-0.5">{stat.label}</p>
                  <p className="text-xs text-white/50">{stat.sublabel}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/8 backdrop-blur-lg rounded-3xl p-8 lg:p-10 border border-white/15 mb-10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Licensed & Certified Immigration Consultants
            </h3>
            <p className="text-white/60">Regulated by international bodies — your application is in safe hands</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.abbr}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="flex items-start space-x-4 bg-white/8 rounded-2xl p-5 border border-white/10 hover:border-[#D4A24C]/40 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-[#D4A24C] to-[#B8892E] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-xs">{cert.abbr}</span>
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{cert.name}</p>
                  <p className="text-white/50 text-xs leading-snug mt-1">{cert.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 lg:grid-cols-6 gap-5"
        >
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
                whileHover={{ y: -5 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white/8 rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/15 group-hover:border-[#D4A24C]/40 group-hover:bg-white/12 transition-all">
                  <Icon className={`w-7 h-7 ${badge.color}`} />
                </div>
                <p className="text-xs text-white/70 font-medium leading-tight">{badge.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
