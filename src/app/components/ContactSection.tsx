import { motion } from 'motion/react';
import { useState } from 'react';
import { MapPin, Phone, Clock, Send, MessageSquare, CheckCircle2, Star } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';

export function ContactSection() {
  const [formData, setFormData] = useState({ fullName: '', phone: '', email: '', country: '', visaType: '', callbackNeeded: false, message: '' });

  const countries = ['Canada', 'Australia', 'United Kingdom', 'United States', 'Ireland', 'New Zealand', 'Europe', 'Other'];
  const visaTypes = ['Study Visa', 'Visitor Visa', 'Spousal Visa', 'University Admissions', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const prefix = formData.callbackNeeded ? 'Callback request' : 'Assessment enquiry';
    toast.success(`${prefix} submitted! Our team will contact you within 24 hours.`);
    setFormData({ fullName: '', phone: '', email: '', country: '', visaType: '', callbackNeeded: false, message: '' });
  };

  const contactInfo = [
    { icon: MapPin, title: 'Our Office', details: ['SCO 495-496, 2nd Floor, Sector 35-C,', 'Chandigarh, Punjab 160022'], href: 'https://maps.google.com/?q=SCO+495-496+Sector+35-C+Chandigarh' },
    { icon: Phone, title: 'Call Us', details: ['+91 77107 05551'], href: 'tel:+917710705551' },
    { icon: Clock, title: 'Working Hours', details: ['Mon – Sat: 9:00 AM – 6:00 PM', 'Sunday: Closed'], href: null },
  ];

  const clientReviews = [
    { name: "Gurwinder Singh", rating: 5, text: "Truly Chandigarh's best study visa consultant! Got my Canada study visa approved in record time.", date: "Just now" },
    { name: "Rajveer Kaur", rating: 5, text: "Honest counselling and transparent fees. They guided me through the UK admission process so smoothly.", date: "1 week ago" }
  ];

  const inputClass = "w-full bg-[#FAF7F2] border border-gray-200 text-[#0B1F3A] placeholder:text-gray-400 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4A24C] focus:ring-2 focus:ring-[#D4A24C]/10 transition-all";

  return (
    <section id="contact" className="py-28 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A24C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B1F3A]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 bg-[#F5EFE6] text-[#D4A24C] rounded-full text-sm font-bold mb-5">
            Contact Us
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4 leading-tight">
            Start Your Journey Today
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Book a free consultation at Chandigarh's top-rated study visa agency or request an instant call-back.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form — 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_-15px_rgba(11,31,58,0.08)] p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-[#0B1F3A] mb-8">Request Free Assessment</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">Full Name *</label>
                  <input
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className={inputClass}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">Phone Number *</label>
                    <input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 77107 05551"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">Country of Interest *</label>
                    <Select value={formData.country} onValueChange={(v) => setFormData({ ...formData, country: v })}>
                      <SelectTrigger className="bg-[#FAF7F2] border-gray-200 rounded-xl h-[46px] text-sm focus:border-[#D4A24C]">
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>{countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">Visa Type *</label>
                    <Select value={formData.visaType} onValueChange={(v) => setFormData({ ...formData, visaType: v })}>
                      <SelectTrigger className="bg-[#FAF7F2] border-gray-200 rounded-xl h-[46px] text-sm focus:border-[#D4A24C]">
                        <SelectValue placeholder="Select visa type" />
                      </SelectTrigger>
                      <SelectContent>{visaTypes.map((v) => <SelectItem key={v} value={v}>{v}</SelectItem>)}</SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Quick Call-back toggle */}
                <div className="bg-[#FAF7F2] p-4 rounded-xl border border-gray-150 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="callbackToggle"
                    checked={formData.callbackNeeded}
                    onChange={(e) => setFormData({ ...formData, callbackNeeded: e.target.checked })}
                    className="mt-1 w-4.5 h-4.5 rounded text-[#D4A24C] focus:ring-[#D4A24C] accent-[#D4A24C]"
                  />
                  <div>
                    <label htmlFor="callbackToggle" className="text-sm font-bold text-[#0B1F3A] cursor-pointer">Request a Quick Call Back</label>
                    <p className="text-xs text-gray-500">Check this if you want our senior visa counselor to call you back directly.</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#0B1F3A] mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your education goals..."
                    rows={4}
                    className={inputClass + " resize-none"}
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#D4A24C] hover:bg-[#B8892E] text-white font-bold py-4 rounded-xl shadow-lg shadow-[#D4A24C]/20 transition-all hover:-translate-y-0.5"
                  >
                    <Send className="w-4 h-4" />
                    {formData.callbackNeeded ? 'Request Call Back' : 'Submit Assessment'}
                  </button>
                  <button
                    type="button"
                    onClick={() => window.open('https://wa.me/917710705551?text=Hi!+I+would+like+to+request+a+free+visa+assessment.', '_blank')}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b558] text-white font-bold py-4 rounded-xl shadow-lg shadow-green-500/20 transition-all hover:-translate-y-0.5"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Chat on WhatsApp
                  </button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                  {['Free Consultation', '24-hr Response', 'No Hidden Fees'].map((badge) => (
                    <div key={badge} className="flex items-center gap-1.5 text-gray-500 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
                      {badge}
                    </div>
                  ))}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info — 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const card = (
                <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(11,31,58,0.1)] transition-all group flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F5EFE6] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-[#D4A24C] transition-all">
                    <Icon className="w-5 h-5 text-[#D4A24C] group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#0B1F3A] mb-1">{info.title}</h4>
                    {info.details.map((d, i) => (
                      <p key={i} className="text-gray-500 text-sm leading-relaxed">{d}</p>
                    ))}
                  </div>
                </div>
              );
              return (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                >
                  {info.href ? (
                    <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                      {card}
                    </a>
                  ) : card}
                </motion.div>
              );
            })}

            {/* Embedded Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-2xl overflow-hidden border border-gray-100 shadow-md h-56 relative"
            >
              <iframe
                src="https://maps.google.com/maps?q=SCO%20495-496,%202nd%20Floor,%20Sector%2035-C,%20Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              />
            </motion.div>

            {/* Local Reviews */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-4"
            >
              <h4 className="text-sm font-bold text-[#0B1F3A] flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> Client Reviews
              </h4>
              <div className="space-y-3">
                {clientReviews.map((r, i) => (
                  <div key={i} className="text-xs border-b border-gray-50 last:border-b-0 pb-2 last:pb-0">
                    <div className="flex justify-between font-semibold text-[#0B1F3A] mb-1">
                      <span>{r.name}</span>
                      <span className="text-[10px] text-gray-400 font-normal">{r.date}</span>
                    </div>
                    <div className="flex gap-0.5 mb-1">
                      {[...Array(r.rating)].map((_, idx) => (
                        <Star key={idx} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-500 leading-relaxed">"{r.text}"</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
