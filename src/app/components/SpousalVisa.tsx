import { QuickEnquiryForm } from './SharedComponents';
import { CheckCircle2 } from 'lucide-react';

export function SpousalVisa() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#0B1F3A] to-[#122e54] text-white pt-36 sm:pt-44 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4A24C 2px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl w-full">
            <span className="inline-block px-4 py-1.5 bg-[#D4A24C]/20 text-[#D4A24C] border border-[#D4A24C]/30 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Spousal Open Work Permit</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">Spousal &amp; Dependent Visas</h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">Reunite with your spouse abroad. Dedicated assistance for Spouse Open Work Permits (SOWP) for Canada and Australia dependent visas.</p>
            <div className="flex items-center gap-6 flex-wrap">
              <div><span className="text-2xl sm:text-3xl font-extrabold text-[#D4A24C]">97%</span><p className="text-xs text-white/50">Success Rate</p></div>
              <div className="w-px h-10 bg-white/20" />
              <div><span className="text-2xl sm:text-3xl font-extrabold text-[#D4A24C]">8 Weeks</span><p className="text-xs text-white/50">Avg. Processing</p></div>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-xs h-48 sm:h-56 flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&q=80"
              alt="Happy couple travelling spousal visa"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-sm font-bold tracking-wide">💑 Spousal Visa</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid lg:grid-cols-3 gap-10 lg:gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-4">Stay Together Abroad</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">If your husband or wife is currently studying or working in Canada or Australia, you may be eligible to join them on a full-time work permit or dependent visa. We specialize in compiling genuine relationship proofs, financial requirements, and handling complex filings.</p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#0B1F3A] mb-2">Spouse Open Work Permit</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Enables spouses of qualifying international students and skilled workers to work full-time with any employer in Canada or Australia.</p>
              </div>
              <div className="p-5 bg-[#FAF7F2] rounded-2xl border border-gray-100">
                <h3 className="font-bold text-[#0B1F3A] mb-2">Relationship Verification</h3>
                <p className="text-gray-500 text-sm leading-relaxed">We assist you in building strong evidence (chat history, joint assets, marriage certificates) to satisfy immigration officers of a genuine relationship.</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">Essential Spousal Visa Requirements</h2>
            <ul className="space-y-3">
              {["Government-issued Marriage Registration Certificate.", "Proof of spouse's status abroad (Valid Study Permit, Work Permit, or Enrolment Letter).", "Spouse's employment proof, pay stubs, and tax documents (if working).", "Joint financial assets, tenancy agreements, and photographs showing a genuine marriage.", "Police Clearance Certificate (PCC) and medical examinations.", "Detailed Statement of Purpose outlining the marriage history and future goals."].map((req, i) => (
                <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />{req}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full"><QuickEnquiryForm defaultVisaType="Spousal Visa" title="Spousal Visa Consultation" /></div>
      </div>
    </div>
  );
}
