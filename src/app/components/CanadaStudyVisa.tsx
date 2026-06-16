import { QuickEnquiryForm } from './SharedComponents';
import { CheckCircle2 } from 'lucide-react';

export function CanadaStudyVisa() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero — pushes below fixed nav + announcement bar */}
      <div className="bg-gradient-to-br from-[#0B1F3A] to-[#122e54] text-white pt-36 sm:pt-44 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4A24C 2px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
          <div className="max-w-xl w-full">
            <span className="inline-block px-4 py-1.5 bg-[#D4A24C]/20 text-[#D4A24C] border border-[#D4A24C]/30 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Canada Student Visa</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">Study in Canada</h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">Get top-quality education at world-renowned institutions. Canada study permits, SDS vs non-SDS channels, admission timelines, and PGWP work pathways.</p>
            <div className="flex items-center gap-6 flex-wrap">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#D4A24C]">98%</span>
                <p className="text-xs text-white/50">Success Rate</p>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-[#D4A24C]">6 Weeks</span>
                <p className="text-xs text-white/50">Avg. Processing</p>
              </div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-xs h-48 sm:h-56 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1586576782138-19304c43d0e1?auto=format&fit=crop&w=600&q=80"
              alt="Toronto Canada skyline"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-sm font-bold tracking-wide">🇨🇦 Canada</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid lg:grid-cols-3 gap-10 lg:gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-4">Why Study in Canada?</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">Canada is globally celebrated for offering safe, friendly, and world-class educational spaces. It consistently ranks as one of the best countries in the world for international students because of high-academic quality, budget-friendly costs, and post-study opportunities.</p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#0B1F3A] mb-2">Post-Graduation Work Permit</h3>
                <p className="text-gray-500 text-sm leading-relaxed">International graduates can obtain a PGWP to stay and work in Canada for up to 3 years, opening direct doors to permanent residency.</p>
              </div>
              <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#0B1F3A] mb-2">Affordable Education</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Compared to the US or UK, tuition fees and living costs in Canada are significantly more affordable for Indian students.</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">Study Visa Requirements (SDS Stream)</h2>
            <ul className="space-y-3">
              {[
                "Letter of Acceptance (LOA) from a Designated Learning Institution (DLI).",
                "Minimum IELTS score of 6.0 overall with no band less than 6.0 (or equivalent PTE/TOEFL score).",
                "Guaranteed Investment Certificate (GIC) from a participating Canadian financial institution.",
                "Receipt of payment for the first year's tuition fee.",
                "Up-to-date medical exam report.",
                "Certificates and transcripts of recent academic qualifications."
              ].map((req, i) => (
                <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  {req}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full">
          <QuickEnquiryForm defaultVisaType="Canada Study Visa" title="Canada Visa Consultation" />
        </div>
      </div>
    </div>
  );
}
