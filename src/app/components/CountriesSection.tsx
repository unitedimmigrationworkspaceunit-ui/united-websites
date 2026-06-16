import { useState } from 'react';
import { motion } from 'motion/react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const countries = [
  {
    name: 'Canada',
    tagline: 'Study & Settle',
    description: 'Canada offers world-class universities, post-study work rights, and a clear pathway to permanent residency. A top choice for Indian students seeking quality education and a bright future.',
    image: 'https://images.unsplash.com/photo-1586576782138-19304c43d0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    flag: '🇨🇦',
    dialCode: '+1',
    highlights: ['Study Permit Assistance', 'Post-Study Work Permit', 'University Admissions Help'],
    gradient: 'from-red-600/80 to-red-900/80',
    accentColor: 'bg-red-500',
  },
  {
    name: 'United Kingdom',
    tagline: 'Student Visa Experts',
    description: 'The UK\'s Student Visa (Tier 4) opens doors to Russell Group universities and world-renowned colleges. Graduate Route allows 2 years of post-study work after completion.',
    image: 'https://images.unsplash.com/photo-1486299267070-83823f5448dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    flag: '🇬🇧',
    dialCode: '+44',
    highlights: ['Student Visa (Tier 4)', 'Graduate Route Work Permit', 'CAS Assistance'],
    gradient: 'from-indigo-600/80 to-indigo-900/80',
    accentColor: 'bg-indigo-500',
  },
  {
    name: 'Australia',
    tagline: 'World-Class Education',
    description: 'Australia\'s Student Visa (Subclass 500) gives access to Group of Eight universities. Enjoy post-study work rights of up to 4 years and a high quality of life.',
    image: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    flag: '🇦🇺',
    dialCode: '+61',
    highlights: ['Student Visa (500)', 'Post-Study Work Rights', 'University Placement Support'],
    gradient: 'from-blue-600/80 to-blue-900/80',
    accentColor: 'bg-blue-500',
  },
  {
    name: 'United States',
    tagline: 'F1 Student Visa',
    description: 'Home to the world\'s top-ranked universities. The F1 Student Visa provides access to cutting-edge education with OPT/CPT work opportunities during and after studies.',
    image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    flag: '🇺🇸',
    dialCode: '+1',
    highlights: ['F1 Student Visa', 'OPT/CPT Guidance', 'University Admission Support'],
    gradient: 'from-purple-600/80 to-purple-900/80',
    accentColor: 'bg-purple-500',
  },
  {
    name: 'New Zealand',
    tagline: 'Safe & Scenic Education',
    description: 'New Zealand offers a safe, welcoming environment with globally recognized qualifications. Student Visa holders can work part-time and benefit from post-study work rights.',
    image: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    flag: '🇳🇿',
    dialCode: '+64',
    highlights: ['Student Visa Assistance', 'Work Rights Guidance', 'Post-Study Open Work Visa'],
    gradient: 'from-teal-600/80 to-teal-900/80',
    accentColor: 'bg-teal-500',
  },
  {
    name: 'Europe',
    tagline: 'Multiple Countries · One Destination',
    description: 'Study across Germany, France, Netherlands, Sweden, Italy, Spain & more. Many European universities offer English-taught programs with low or no tuition fees for international students.',
    image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    flag: '🇪🇺',
    dialCode: '+49/+33/+31',
    highlights: ['Germany · France · Netherlands', 'Sweden · Italy · Spain & More', 'Low-Tuition University Programs'],
    gradient: 'from-blue-700/80 to-indigo-900/80',
    accentColor: 'bg-blue-600',
  },
];

export function CountriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const getCountryHash = (name: string) => {
    switch (name.toLowerCase()) {
      case 'canada':
        return '#/study-visa/canada';
      case 'united kingdom':
      case 'uk':
        return '#/study-visa/uk';
      case 'australia':
        return '#/study-visa/australia';
      case 'united states':
      case 'usa':
        return '#/study-visa/usa';
      case 'europe':
        return '#/study-visa/europe';
      case 'new zealand':
        return '#/study-visa/new-zealand';
      default:
        return '#/contact';
    }
  };

  return (
    <section id="countries" className="py-32 bg-gradient-to-b from-white to-[#FAF7F2] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-[#F5EFE6] blur-[120px] opacity-60"></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-50/50 blur-[150px] opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 bg-[#F5EFE6] text-[#D4A24C] rounded-full text-sm font-bold mb-5">
            Study Abroad Destinations
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4 leading-tight">
            Your Dream University <span className="text-[#D4A24C]">Awaits</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            We provide expert guidance for study visas across all major international education destinations.
          </p>
        </motion.div>

        {/* Countries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
          {countries.map((country, index) => (
            <motion.div
              key={country.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -12 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => window.location.hash = getCountryHash(country.name)}
              className="group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_-15px_rgba(11,31,58,0.15)] transition-all duration-500 border border-gray-100 hover:border-[#D4A24C]/30 cursor-pointer flex flex-col h-full"
            >
              {/* Image Header */}
              <div className="relative h-52 xl:h-60 overflow-hidden flex-shrink-0">
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

                {/* Dial code badge */}
                <div className="absolute bottom-5 right-5 bg-white/20 backdrop-blur-md text-white border border-white/20 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {country.dialCode}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8 flex flex-col flex-grow bg-white relative">
                <div className="absolute top-0 left-0 right-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none" />

                <p className="text-gray-600 mb-6 leading-relaxed text-[15px]">
                  {country.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 flex-grow">
                  {country.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 text-green-500" />
                      </div>
                      {h}
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="mt-6 flex items-center gap-2 text-[#D4A24C] font-bold text-sm group-hover:gap-3 transition-all"
                >
                  <GraduationCap className="w-4 h-4" />
                  View Study Details →
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
