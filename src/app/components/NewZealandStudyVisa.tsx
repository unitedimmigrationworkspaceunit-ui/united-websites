import { QuickEnquiryForm } from './SharedComponents';
import { CheckCircle2 } from 'lucide-react';

export function NewZealandStudyVisa() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#0B1F3A] to-[#122e54] text-white pt-36 sm:pt-44 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4A24C 2px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl w-full">
            <span className="inline-block px-4 py-1.5 bg-[#D4A24C]/20 text-[#D4A24C] border border-[#D4A24C]/30 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">New Zealand Student Visa</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">Study in New Zealand</h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">Experience exceptional education standards, high quality of life, and generous post-study work opportunities in a peaceful and beautiful country.</p>
            <div className="flex items-center gap-6 flex-wrap">
              <div><span className="text-2xl sm:text-3xl font-extrabold text-[#D4A24C]">97%</span><p className="text-xs text-white/50">Success Rate</p></div>
              <div className="w-px h-10 bg-white/20" />
              <div><span className="text-2xl sm:text-3xl font-extrabold text-[#D4A24C]">4-6 Weeks</span><p className="text-xs text-white/50">Avg. Processing</p></div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-xs h-48 sm:h-56 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?auto=format&fit=crop&w=600&q=80"
              alt="New Zealand landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-sm font-bold tracking-wide">🇳🇿 New Zealand</span>
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
