import { QuickEnquiryForm } from './SharedComponents';
import { CheckCircle2 } from 'lucide-react';

export function NewZealandStudyVisa() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#0B1F3A] to-[#122e54] text-white pt-36 sm:pt-44 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4A24C 2px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
          <div className="w-full space-y-8">
            <div>
              <span className="inline-block px-4 py-1.5 bg-[#D4A24C]/20 text-[#D4A24C] border border-[#D4A24C]/30 rounded-full text-xs font-bold mb-4 uppercase tracking-widest backdrop-blur-sm shadow-lg shadow-[#D4A24C]/10">New Zealand Student Visa</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight flex flex-wrap items-center gap-x-3">
                <span>Study in</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A24C] to-[#F3E5AB]">New Zealand</span>
              </h1>
            </div>
            <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-xl font-light">Experience exceptional education standards, high quality of life, and generous post-study work opportunities in a peaceful and beautiful country.</p>
            <div className="flex items-center gap-8 pt-4">
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#D4A24C] drop-shadow-[0_0_15px_rgba(212,162,76,0.3)]">97%</span>
                <span className="text-sm text-white/60 font-medium tracking-wide mt-1 uppercase">Success Rate</span>
              </div>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
              <div className="flex flex-col">
                <span className="text-4xl font-black text-[#D4A24C] drop-shadow-[0_0_15px_rgba(212,162,76,0.3)]">4-6 Wks</span>
                <span className="text-sm text-white/60 font-medium tracking-wide mt-1 uppercase">Avg. Processing</span>
              </div>
            </div>
          </div>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#0B1F3A]/50 w-full aspect-[4/3] lg:aspect-[5/4] group border border-white/10">
            <div className="absolute inset-0 bg-[#D4A24C]/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <img
              src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=1200&q=80"
              alt="New Zealand landscape"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/20 to-transparent z-20" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center justify-between">
                <span className="text-white font-bold text-lg tracking-wide flex items-center gap-3">
                  <span className="text-2xl drop-shadow-md">🇳🇿</span> New Zealand
                </span>
                <span className="text-[#D4A24C] bg-[#D4A24C]/10 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border border-[#D4A24C]/30 shadow-[0_0_10px_rgba(212,162,76,0.2)]">
                  Top Choice
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid lg:grid-cols-3 gap-10 lg:gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-4">Why Study in New Zealand?</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">New Zealand's educational institutions are globally ranked, and qualifications are highly sought after by global employers. Known for its safety, natural beauty, and welcoming culture, it offers an incredible environment for learning and personal growth.</p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#0B1F3A] mb-2">Globally Recognized Degrees</h3>
                <p className="text-gray-500 text-sm leading-relaxed">All eight New Zealand universities rank within the QS world top 500, offering world-class research facilities.</p>
              </div>
              <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#0B1F3A] mb-2">Post-Study Work Visa</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Work full-time in New Zealand for up to 3 years after completion of your eligible qualification.</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">Required Documents for New Zealand Student Visa</h2>
            <ul className="space-y-3">
              {["Offer of Place from an NZQA-approved educational provider.", "Receipt showing payment of first-year tuition fees.", "Proof of funds (NZD $20,000 per year for living expenses).", "A valid passport and two recent visa photographs.", "Academic transcripts and certificate qualifications.", "Medical certificates and police clearance reports."].map((req, i) => (
                <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />{req}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full"><QuickEnquiryForm defaultVisaType="New Zealand Study Visa" title="New Zealand Visa Consultation" /></div>
      </div>
    </div>
  );
}
