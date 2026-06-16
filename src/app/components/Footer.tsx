import { motion } from 'motion/react';
import { MapPin, Phone, Mail, ArrowRight, Instagram, Facebook, MessageCircle, Clock, Send, Shield, Star } from 'lucide-react';
import { Logo } from './Logo';
import { useState } from 'react';
import { toast } from 'sonner';
import { PrivacyPolicy } from './PrivacyPolicy';

export function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Subscribed! You\'ll receive immigration updates soon.');
    setEmail('');
  };

  const quickLinks = [
    { label: 'About Us', href: '#/about' },
    { label: 'Study Visa', href: '#/' },
    { label: 'Visitor Visa', href: '#/visitor-visa' },
    { label: 'Spousal Visa', href: '#/spousal-visa' },
    { label: 'Testimonials', href: '#/' },
    { label: 'Contact Us', href: '#/contact' },
    { label: 'FAQ', href: '#/' },
  ];

  const services = [
    { label: 'Study Visa', href: '#/' },
    { label: 'Visitor Visa', href: '#/visitor-visa' },
    { label: 'Spousal Visa', href: '#/spousal-visa' },
    { label: 'Free Consultation', href: '#/contact' },
  ];

  const destinations = [
    { flag: '🇨🇦', name: 'Canada', href: '#/study-visa/canada' },
    { flag: '🇦🇺', name: 'Australia', href: '#/study-visa/australia' },
    { flag: '🇬🇧', name: 'United Kingdom', href: '#/study-visa/uk' },
    { flag: '🇺🇸', name: 'United States', href: '#/study-visa/usa' },
    { flag: '🇪🇺', name: 'Europe', href: '#/study-visa/europe' },
    { flag: '🇳🇿', name: 'New Zealand', href: '#/study-visa/new-zealand' },
  ];

  const socialLinks = [
    { icon: MessageCircle, href: 'https://wa.me/917710705551', label: 'WhatsApp', bg: 'bg-green-500' },
    { icon: Instagram, href: 'https://www.instagram.com/unitedimmigrationservicespvt', label: 'Instagram', bg: 'bg-gradient-to-br from-pink-500 to-orange-400' },
    { icon: Facebook, href: 'https://www.facebook.com/share/18fYWem5Ey/', label: 'Facebook', bg: 'bg-blue-600' },
  ];



  const stats = [
    { value: '50,000+', label: 'Visas Approved' },
    { value: '98%', label: 'Success Rate' },
    { value: '15+', label: 'Years Experience' },
    { value: '5', label: 'Countries' },
  ];

  return (
    <footer className="bg-[#06121E] text-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, #D4A24C 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A24C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B1F3A]/80 rounded-full blur-3xl" />
      </div>

      {/* Pre-footer CTA Banner */}
      <div className="relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Ready to Start Your Immigration Journey?
              </h3>
              <p className="text-white/60 text-lg">
                Free consultation available — no obligation, no hidden fees.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#D4A24C] to-[#B8892E] hover:from-[#B8892E] hover:to-[#D4A24C] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-[#D4A24C]/20 transition-all hover:-translate-y-0.5"
              >
                Book Free Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={() => window.open('https://wa.me/917710705551', '_blank')}
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b558] text-white font-bold px-8 py-4 rounded-xl shadow-lg shadow-green-500/20 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </button>
            </div>
          </div>
        </div>
      </div>



      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

          {/* Company Info — 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            {/* Logo */}
            <div className="flex items-center gap-4 mb-6">
              <Logo size="xl" variant="dark" />
              <div>
                <h3 className="font-black text-white text-lg leading-tight">United Immigration</h3>
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#D4A24C] uppercase mt-0.5">Services</p>
              </div>
            </div>

            <p className="text-white/55 text-sm leading-relaxed mb-6 max-w-sm">
              India's most trusted Study Visa &amp; International Education Consultancy. We've helped thousands of students achieve their dream of studying abroad with expert guidance and a proven success rate.
            </p>

            {/* Contact Details */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-[#D4A24C]/15 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#D4A24C]" />
                </div>
                <p className="text-white/55 text-sm leading-relaxed">2nd Floor, SCO 495-496, Sector 35-C,<br />Chandigarh, Punjab 160022</p>
              </div>
              <a href="tel:+917710705551" className="flex items-center gap-3 group">
                <div className="w-8 h-8 bg-[#D4A24C]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 text-[#D4A24C]" />
                </div>
                <p className="text-white/55 text-sm group-hover:text-[#D4A24C] transition-colors">+91 77107 05551</p>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-[#D4A24C]/15 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 text-[#D4A24C]" />
                </div>
                <p className="text-white/55 text-sm">Mon – Sat: 9AM – 6PM · <span className="text-red-400 font-semibold">Sunday Closed</span></p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={label}
                  className={`w-10 h-10 ${bg} rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg opacity-90 hover:opacity-100`}
                >
                  <Icon className="w-4.5 h-4.5 text-white" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xs font-bold mb-5 text-[#D4A24C] uppercase tracking-[0.15em]">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/55 hover:text-white transition-colors flex items-center gap-2 text-sm group"
                  >
                    <span className="w-1.5 h-1.5 bg-[#D4A24C]/50 group-hover:bg-[#D4A24C] rounded-full transition-colors flex-shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services — 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-2"
          >
            <h4 className="text-xs font-bold mb-5 text-[#D4A24C] uppercase tracking-[0.15em]">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-white/55 hover:text-white transition-colors flex items-center gap-2 text-sm group whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 bg-[#D4A24C]/50 group-hover:bg-[#D4A24C] rounded-full transition-colors flex-shrink-0" />
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter + Destinations — 4 cols */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-8"
          >
            {/* Newsletter */}
            <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6">
              <h4 className="text-xs font-bold mb-1 text-[#D4A24C] uppercase tracking-[0.15em]">Newsletter</h4>
              <p className="text-white/50 text-sm mb-4 leading-relaxed">
                Get the latest immigration news, policy updates, and exclusive visa tips.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border border-white/15 text-white placeholder:text-white/30 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4A24C] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-[#D4A24C] hover:bg-[#B8892E] text-white p-3 rounded-xl transition-colors flex-shrink-0"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Destinations */}
            <div>
              <h4 className="text-xs font-bold mb-4 text-[#D4A24C] uppercase tracking-[0.15em]">Destinations We Cover</h4>
              <div className="grid grid-cols-2 gap-2.5">
                {destinations.map((c) => (
                  <div
                    key={c.name}
                    onClick={() => (window.location.hash = c.href)}
                    className="flex items-center gap-2.5 bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.07] rounded-xl px-3 py-2 transition-colors cursor-pointer"
                  >
                    <span className="text-base">{c.flag}</span>
                    <span className="text-white/60 text-xs font-medium">{c.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xs font-bold mb-3 text-[#D4A24C] uppercase tracking-[0.15em] flex items-center gap-2">
                <Shield className="w-3.5 h-3.5" /> Certifications
              </h4>
              <div className="flex flex-wrap gap-2">
                {['ICCRC', 'MARA', 'OISC', 'ISO 9001'].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1.5 bg-[#D4A24C]/10 border border-[#D4A24C]/25 rounded-full text-xs font-bold text-[#D4A24C] hover:bg-[#D4A24C]/20 transition-colors cursor-default"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/35 text-sm text-center md:text-left">
              © 2026 United Immigration Services. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <PrivacyPolicy>
                <button className="text-white/35 hover:text-[#D4A24C] text-xs transition-colors cursor-pointer">
                  Privacy Policy
                </button>
              </PrivacyPolicy>
              <a href="#" className="text-white/35 hover:text-[#D4A24C] text-xs transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
