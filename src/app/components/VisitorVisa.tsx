import { QuickEnquiryForm } from './SharedComponents';
import { CheckCircle2 } from 'lucide-react';

export function VisitorVisa() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#0B1F3A] to-[#122e54] text-white pt-36 sm:pt-44 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4A24C 2px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl w-full">
            <span className="inline-block px-4 py-1.5 bg-[#D4A24C]/20 text-[#D4A24C] border border-[#D4A24C]/30 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Visitor &amp; Tourist Visa</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">Visitor Visa Services</h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">Travel the world for tourism, business, or visiting family. Meticulous document preparation to maximize visa approval rates.</p>
            <div className="flex items-center gap-6 flex-wrap">
              <div><span className="text-2xl sm:text-3xl font-extrabold text-[#D4A24C]">99%</span><p className="text-xs text-white/50">Success Rate</p></div>
              <div className="w-px h-10 bg-white/20" />
              <div><span className="text-2xl sm:text-3xl font-extrabold text-[#D4A24C]">2 Weeks</span><p className="text-xs text-white/50">Avg. Processing</p></div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-xs h-48 sm:h-56 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=600&q=80"
              alt="Airplane in sunset sky visitor visa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-sm font-bold tracking-wide">✈️ Visitor Visa</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid lg:grid-cols-3 gap-10 lg:gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-4">Tour the World with Peace of Mind</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">Our team provides complete visitor visa processing for top destinations, including Canada (V-1), UK (Standard Visitor), USA (B1/B2), and Schengen countries. We handle all elements of profile building, financial presentation, and covering letter drafting.</p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#0B1F3A] mb-2">Detailed Document Review</h3>
                <p className="text-gray-500 text-sm leading-relaxed">We double-check your financial proofs, income tax filings, property valuations, and job/business letters to show strong home country ties.</p>
              </div>
              <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#0B1F3A] mb-2">Professional SOP / Cover Letters</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Our experts write high-convincing cover letters outlining your itinerary, purpose of visit, and ties returning to India.</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">Key Visitor Visa Documents</h2>
            <ul className="space-y-3">
              {["Passport with minimum 6 months validity.", "Proof of income (6 months bank statements, 3 years ITRs, salary slips).", "Employment status proof (NOC from employer or Business Registration certificates).", "Detailed travel itinerary and hotel bookings.", "Invitation letter and inviter's status documents (if visiting friends/family).", "Property valuation and other strong financial tie-ups."].map((req, i) => (
                <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />{req}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full"><QuickEnquiryForm defaultVisaType="Visitor Visa" title="Visitor Visa Consultation" /></div>
      </div>
    </div>
  );
}
