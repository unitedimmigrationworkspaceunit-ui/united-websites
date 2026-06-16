import { Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function Blog() {
  const posts = [
    {
      title: 'Latest Canada Study Visa Regulations for 2026',
      desc: 'Learn about the new study permit caps, provincial attestation letters (PALs), and updated proof of funds requirements for Canada SDS stream.',
      date: 'June 12, 2026',
      category: 'Canada',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      title: 'UK Graduate Route Work Visa: Post-Study Opportunities',
      desc: 'Comprehensive guide to the UK Graduate Route. Find out how you can work, live and search for career opportunities for 2 years after graduating.',
      date: 'May 28, 2026',
      category: 'United Kingdom',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=600&q=80',
    },
    {
      title: 'How to Clear Australia GST (Genuine Student) Check',
      desc: 'Australia has replaced GTE with the Genuine Student (GS) assessment. Learn key tips to answer visa questions successfully to secure your visa.',
      date: 'May 15, 2026',
      category: 'Australia',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0B1F3A] to-[#122e54] text-white pt-36 sm:pt-44 pb-16 sm:pb-20 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4A24C 2px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[#D4A24C]/20 text-[#D4A24C] border border-[#D4A24C]/30 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Blog &amp; News Updates</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">Study Abroad News</h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">Stay updated with official visa rule updates, university intakes, scholarship details, and guidelines for international students.</p>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {posts.map((p, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all flex flex-col cursor-pointer"
            >
              <div className="h-44 sm:h-48 overflow-hidden relative">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy" />
                <span className="absolute top-4 left-4 bg-[#D4A24C] text-white text-xs font-bold px-3 py-1.5 rounded-full">{p.category}</span>
              </div>
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{p.date}</span>
                </div>
                <h3 className="font-bold text-[#0B1F3A] text-base sm:text-lg mb-2 leading-tight">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-grow">{p.desc}</p>
                <span className="text-[#D4A24C] text-sm font-bold mt-4 inline-block">Read Article →</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
