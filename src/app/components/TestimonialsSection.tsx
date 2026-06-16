import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Instagram, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { face, indianPortraits, portraitIds } from '../assets/images';

const testimonials = [
  {
    id: 1,
    name: 'Harpreet Kaur',
    role: 'B.Sc. Nursing Student',
    destination: 'Canada Study Visa',
    city: 'Now in Brampton 🇨🇦',
    image: indianPortraits.womanPortrait,
    rating: 5,
    text: "I was so confused about the university selection process and which documents were needed. The team at United Immigration guided me step by step, helped me get admission at a great college in Brampton, and my study permit was approved in just 6 weeks! Highly recommend to every student!",
    date: 'March 2026',
    flag: '🇨🇦',
    processingTime: '6 weeks',
    visaType: 'Study Permit',
    instagramUrl: 'https://www.instagram.com/unitedimmigrationservicespvt',
  },
  {
    id: 2,
    name: 'Gurpreet Singh',
    role: 'MBA Student',
    destination: 'UK Student Visa',
    city: 'Now in Manchester 🇬🇧',
    image: indianPortraits.manProfessional,
    rating: 5,
    text: "From choosing the right university to getting the CAS and then the visa — United Immigration handled everything. I got my UK Student Visa in 3 weeks. The counsellors are very honest and never mislead you. Best decision I made for my future!",
    date: 'February 2026',
    flag: '🇬🇧',
    processingTime: '3 weeks',
    visaType: 'Student Visa',
    instagramUrl: 'https://www.instagram.com/unitedimmigrationservicespvt',
  },
  {
    id: 3,
    name: 'Simran Sharma',
    role: 'Nursing Student',
    destination: 'Australia Student Visa',
    city: 'Now in Melbourne 🇦🇺',
    image: indianPortraits.womanStudent,
    rating: 5,
    text: "I applied to 3 colleges in Australia and got admission offers from all of them! United Immigration helped me pick the best one and got my Student Visa (500) approved within 5 weeks. The pre-departure session they gave me was also very helpful. Thank you so much!",
    date: 'January 2026',
    flag: '🇦🇺',
    processingTime: '5 weeks',
    visaType: 'Student Visa (500)',
    instagramUrl: 'https://www.instagram.com/unitedimmigrationservicespvt',
  },
  {
    id: 4,
    name: 'Manpreet Bains',
    role: 'Diploma in IT',
    destination: 'Ireland Study Visa',
    city: 'Now in Dublin 🇮🇪',
    image: indianPortraits.manYoung,
    rating: 5,
    text: "I never thought Ireland was an option for me, but the counsellor explained everything — the courses, costs, part-time work rights, and career options after graduation. Got my visa in 4 weeks. Now I am living my dream in Dublin! United Immigration made it possible.",
    date: 'December 2025',
    flag: '🇮🇪',
    processingTime: '4 weeks',
    visaType: 'Study Visa',
    instagramUrl: 'https://www.instagram.com/unitedimmigrationservicespvt',
  },
  {
    id: 5,
    name: 'Pooja Mehta',
    role: 'Business Management Student',
    destination: 'New Zealand Study Visa',
    city: 'Now in Auckland 🇳🇿',
    image: indianPortraits.womanProfessional,
    rating: 5,
    text: "The team was transparent from day one — told me exactly what documents were needed and realistic timelines. No false promises. My New Zealand student visa was approved and now I am studying at a great institute in Auckland. Very thankful to the whole team!",
    date: 'November 2025',
    flag: '🇳🇿',
    processingTime: '5 weeks',
    visaType: 'Student Visa',
    instagramUrl: 'https://www.instagram.com/unitedimmigrationservicespvt',
  },
];

const miniGrid = [
  { name: 'Navneet K.', text: 'Got my Canada Study Permit in 6 weeks. The team helped with college selection and all documents. Very professional service!', flag: '🇨🇦', rating: 5, image: face(portraitIds.manCasual, 200), instagramUrl: 'https://www.instagram.com/unitedimmigrationservicespvt' },
  { name: 'Rupinder C.', text: 'Visitor visa for UK approved in just 5 days! Amazing team, zero stress, 100% transparent. Will recommend to everyone.', flag: '🇬🇧', rating: 5, image: face(portraitIds.womanSmiling, 200), instagramUrl: 'https://www.instagram.com/unitedimmigrationservicespvt' },
  { name: 'Arjun M.', text: 'From admission to visa grant in 7 weeks. Now studying engineering in Melbourne! Thank you United Immigration team.', flag: '🇦🇺', rating: 5, image: face(portraitIds.manYoung, 200), instagramUrl: 'https://www.instagram.com/unitedimmigrationservicespvt' },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const t = setInterval(() => setCurrentIndex((p) => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, [autoPlay]);

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-28 bg-[#FAF7F2] overflow-hidden relative">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D4A24C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#0B1F3A]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 bg-white text-[#D4A24C] rounded-full text-sm font-bold mb-5 shadow-sm border border-[#D4A24C]/20">
            Client Success Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4 leading-tight">
            Real People, <span className="text-[#D4A24C]">Real Results</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            50,000+ clients. 98% success rate. Read what they say about us.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div
          className="relative mb-10"
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(11,31,58,0.1)] border border-gray-100 overflow-hidden"
            >
              <div className="grid lg:grid-cols-5">
                {/* Left Panel */}
                <div className="lg:col-span-2 bg-gradient-to-br from-[#0B1F3A] to-[#1a3a5c] p-8 lg:p-12 flex flex-col justify-between">
                  <div>
                    <Quote className="w-10 h-10 text-[#D4A24C]/40 mb-6" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#D4A24C] text-[#D4A24C]" />
                      ))}
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed italic font-light">
                      "{current.text}"
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-white/40 text-sm">{current.date} · {current.destination}</p>
                    <a
                      href="https://wa.me/917710705551?text=Hi! I want to start my immigration journey like your clients."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 bg-[#D4A24C] hover:bg-[#B8892E] text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
                    >
                      I want this too! →
                    </a>
                  </div>
                </div>

                {/* Right Panel */}
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-start gap-6 mb-8">
                    <a
                      href={current.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex-shrink-0"
                    >
                      <div className="w-24 h-24 rounded-2xl overflow-hidden border-4 border-[#F5EFE6] shadow-lg">
                        <ImageWithFallback
                          src={current.image}
                          alt={current.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#E1306C]/80 via-[#833AB4]/80 to-[#F77737]/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                          <Instagram className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#E1306C] to-[#F77737] rounded-full flex items-center justify-center shadow-md">
                        <Instagram className="w-3.5 h-3.5 text-white" />
                      </div>
                    </a>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="text-2xl font-bold text-[#0B1F3A]">{current.name}</h4>
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      </div>
                      <p className="text-[#D4A24C] font-semibold">{current.role}</p>
                      <p className="text-gray-500 text-sm mt-1">{current.city}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#F5EFE6]">
                      <p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wide">Visa Type</p>
                      <p className="text-base font-bold text-[#0B1F3A]">{current.visaType}</p>
                    </div>
                    <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-[#F5EFE6]">
                      <p className="text-xs text-gray-400 font-medium mb-1 uppercase tracking-wide">Duration</p>
                      <p className="text-base font-bold text-[#0B1F3A]">{current.processingTime}</p>
                    </div>
                  </div>

                  <a
                    href={current.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#E1306C] to-[#F77737] text-white px-5 py-2.5 rounded-xl text-sm font-bold hover:shadow-lg hover:shadow-pink-200/50 transition-all w-fit"
                  >
                    <Instagram className="w-4 h-4" />
                    Connect on Instagram
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={() => setCurrentIndex((p) => (p - 1 + testimonials.length) % testimonials.length)}
              className="w-11 h-11 rounded-full border-2 border-[#D4A24C] text-[#D4A24C] hover:bg-[#D4A24C] hover:text-white transition-all flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`rounded-full transition-all duration-300 ${i === currentIndex ? 'bg-[#D4A24C] w-8 h-3' : 'bg-gray-300 hover:bg-[#D4A24C]/50 w-3 h-3'}`}
                />
              ))}
            </div>
            <button
              onClick={() => setCurrentIndex((p) => (p + 1) % testimonials.length)}
              className="w-11 h-11 rounded-full border-2 border-[#D4A24C] text-[#D4A24C] hover:bg-[#D4A24C] hover:text-white transition-all flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mini testimonial grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-10">
          {miniGrid.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_30px_-10px_rgba(11,31,58,0.12)] transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#D4A24C] text-[#D4A24C]" />
                  ))}
                </div>
                <span className="text-xl">{t.flag}</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center gap-3">
                  <a href={t.instagramUrl} target="_blank" rel="noopener noreferrer" className="group/img">
                    <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gray-100 group-hover/img:border-pink-400 transition-colors relative">
                      <ImageWithFallback src={t.image} alt={t.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/60 to-orange-500/60 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                        <Instagram className="w-3.5 h-3.5 text-white" />
                      </div>
                    </div>
                  </a>
                  <div>
                    <p className="font-bold text-[#0B1F3A] text-sm">{t.name}</p>
                    <p className="text-xs text-gray-400">Verified client</p>
                  </div>
                </div>
                <a href={t.instagramUrl} target="_blank" rel="noopener noreferrer"
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Instagram className="w-4 h-4 text-pink-500" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-5"
        >
          {/* Google Reviews */}
          <div className="bg-gradient-to-r from-[#0B1F3A] to-[#1a3a5c] rounded-2xl p-6 flex items-center gap-5">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
              <span className="text-2xl font-black text-[#4285F4]">G</span>
            </div>
            <div>
              <p className="text-white font-bold text-lg">Google Reviews</p>
              <div className="flex items-center gap-2 my-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#D4A24C] text-[#D4A24C]" />)}
                <span className="text-[#D4A24C] font-bold text-xl">4.9</span>
              </div>
              <p className="text-white/60 text-sm">12,000+ verified reviews</p>
            </div>
          </div>

          {/* Instagram CTA */}
          <a
            href="https://www.instagram.com/unitedimmigrationservicespvt"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-r from-[#E1306C] via-[#833AB4] to-[#F77737] rounded-2xl p-6 flex items-center gap-5 hover:shadow-2xl transition-all"
          >
            <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-lg">Follow on Instagram</p>
              <p className="text-white/80 text-sm">@unitedimmigrationservicespvt · 50K+ followers</p>
              <p className="text-white/70 text-xs mt-1">See real client stories, visa tips & updates</p>
            </div>
            <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
