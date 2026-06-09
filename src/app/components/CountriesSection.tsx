import { useState } from 'react';
import { motion } from 'motion/react';
import { Users, TrendingUp, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const countries = [
  {
    name: 'Canada',
    tagline: 'Express Entry & PR',
    description: 'Fast-track permanent residency through Express Entry, PNP, and family sponsorship programs. One of the easiest immigration destinations for skilled workers.',
    image: 'https://images.unsplash.com/photo-1586576782138-19304c43d0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    stats: '15,000+ Visas',
    flag: '🇨🇦',
    processingTime: '6–8 months',
    successRate: '99%',
    highlights: ['Express Entry', 'Provincial Nominee', 'Family Sponsorship'],
    gradient: 'from-red-600/80 to-red-900/80',
    accentColor: 'bg-red-500',
  },
  {
    name: 'Australia',
    tagline: 'Skilled Migration',
    description: 'Points-based skilled migration, employer sponsorship, and business innovation visas. Outstanding quality of life with excellent career opportunities.',
    image: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    stats: '12,000+ Visas',
    flag: '🇦🇺',
    processingTime: '3–6 months',
    successRate: '97%',
    highlights: ['Skilled Independent 189', 'State Nomination 190', 'Employer Sponsored'],
    gradient: 'from-blue-600/80 to-blue-900/80',
    accentColor: 'bg-blue-500',
  },
  {
    name: 'United Kingdom',
    tagline: 'Skilled Worker Visa',
    description: 'Work permits, student visas, and skilled worker routes with a clear pathway to indefinite leave to remain (ILR) and British citizenship.',
    image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    stats: '10,000+ Visas',
    flag: '🇬🇧',
    processingTime: '3–4 weeks',
    successRate: '98%',
    highlights: ['Skilled Worker', 'Global Talent', 'Student Visa'],
    gradient: 'from-indigo-600/80 to-indigo-900/80',
    accentColor: 'bg-indigo-500',
  },
  {
    name: 'United States',
    tagline: 'Work & Student Visas',
    description: 'H1B, L1, F1 student visas, and employment-based green card applications. The world\'s largest economy with limitless career growth.',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    stats: '8,000+ Visas',
    flag: '🇺🇸',
    processingTime: '3–6 months',
    successRate: '95%',
    highlights: ['H1B Work Visa', 'F1 Student Visa', 'EB Green Card'],
    gradient: 'from-purple-600/80 to-purple-900/80',
    accentColor: 'bg-purple-500',
  },
  {
    name: 'Germany',
    tagline: 'Opportunity Card',
    description: 'New Chancenkarte opportunity card, EU Blue Card, and job seeker visas for skilled professionals. Europe\'s strongest economy now more accessible than ever.',
    image: 'https://images.unsplash.com/photo-1587330979470-3595ac045ab0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    stats: '5,000+ Visas',
    flag: '🇩🇪',
    processingTime: '2–4 months',
    successRate: '96%',
    highlights: ['Opportunity Card', 'EU Blue Card', 'Job Seeker Visa'],
    gradient: 'from-yellow-600/80 to-yellow-900/80',
    accentColor: 'bg-yellow-500',
  },
];

export function CountriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="countries" className="py-32 bg-gradient-to-b from-white to-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#F5EFE6] blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-[150px] opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -12 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(11,31,58,0.15)] transition-all duration-500 border border-gray-100 hover:border-[#D4A24C]/30 cursor-pointer flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="relative h-56 xl:h-64 overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={country.image}
                  alt={country.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${country.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500 mix-blend-multiply`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/80 via-transparent to-transparent opacity-80" />

                {/* Flag + Country name overlay */}
                <div className="absolute top-5 left-5 flex items-center gap-4">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-3xl shadow-lg border border-white/30">
                    {country.flag}
                  </div>
                  <div>
                    <p className="text-white font-extrabold text-2xl leading-tight drop-shadow-md">{country.name}</p>
                    <p className="text-white/90 text-sm font-medium drop-shadow-sm">{country.tagline}</p>
                  </div>
                </div>

                {/* Stats badge */}
                <div className="absolute bottom-5 right-5 bg-white/20 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {country.stats}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex flex-col flex-grow bg-white relative">
                {/* Decorative fade effect inside content */}
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none" />

                <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
                  {country.description}
                </p>

                {/* Quick stats grid */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 bg-gray-50/80 group-hover:bg-[#F5EFE6]/50 transition-colors rounded-2xl p-4 border border-gray-100/50">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-4 h-4 text-[#D4A24C]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Success</p>
                      <p className="text-base font-extrabold text-[#0B1F3A]">{country.successRate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 bg-gray-50/80 group-hover:bg-[#F5EFE6]/50 transition-colors rounded-2xl p-4 border border-gray-100/50">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-[#D4A24C]" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold text-gray-500 uppercase tracking-wider">Approved</p>
                      <p className="text-base font-extrabold text-[#0B1F3A]">{country.stats.split('+')[0]}+</p>
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-3 mb-8 flex-grow">
                  {country.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      {h}
                    </div>
                  ))}
                </div>


              </div>

              {/* Animated Bottom Accent */}
              <div className={`absolute bottom-0 left-0 h-1.5 ${country.accentColor} w-0 group-hover:w-full transition-all duration-700 ease-in-out`} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
