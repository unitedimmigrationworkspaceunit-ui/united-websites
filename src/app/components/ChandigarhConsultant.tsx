import { ContactDetailsWithReviews } from './SharedComponents';
import { CheckCircle2, MapPin, Phone, Award } from 'lucide-react';

export function ChandigarhConsultant() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-[#0B1F3A] to-[#122e54] text-white pt-36 sm:pt-44 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4A24C 2px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl w-full">
            <span className="inline-block px-4 py-1.5 bg-[#D4A24C]/20 text-[#D4A24C] border border-[#D4A24C]/30 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Chandigarh Sector 35-C Office</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">Study Visa Consultant Chandigarh</h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6">Looking for Chandigarh's most trusted Study Visa and Student Visa advisor? Head directly to United Immigration in Sector 35-C for honest, transparent, and high-success visa guidance.</p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
              <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-[#D4A24C]" /> Sector 35-C, Chandigarh</span>
              <span className="flex items-center gap-1.5"><Phone className="w-4 h-4 text-[#D4A24C]" />
                <a href="tel:+917710705551">+91 77107 05551</a>
              </span>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full max-w-xs h-48 sm:h-56 flex-shrink-0 hidden sm:block">
            <img
              src="https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=600&q=80"
              alt="Chandigarh city India office"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 to-transparent" />
            <span className="absolute bottom-3 left-3 text-white text-sm font-bold tracking-wide">📍 Chandigarh, Sector 35-C</span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid lg:grid-cols-3 gap-10 lg:gap-12">
        <div className="lg:col-span-2 space-y-10">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-4">Chandigarh's Premier Study Visa Agency</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">At United Immigration, located in SCO 495-496, Sector 35-C, Chandigarh, we specialize in offering honest, transparent, and student-focused admission and visa support. We guide students from Chandigarh, Mohali, Panchkula, and Punjab to achieve their dream of studying in Canada, UK, Australia, USA, and Europe.</p>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-5 sm:p-6 bg-[#FAF7F2] rounded-3xl border border-gray-100">
                <div className="w-10 h-10 bg-[#D4A24C]/10 rounded-xl flex items-center justify-center text-[#D4A24C] mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B1F3A] text-base sm:text-lg mb-2">No False Promises</h3>
                <p className="text-gray-500 text-sm leading-relaxed">We strictly check your academic files, IELTS scores, and financials to give you realistic options. We never take up files where success chances are low.</p>
              </div>
              <div className="p-5 sm:p-6 bg-[#FAF7F2] rounded-3xl border border-gray-100">
                <div className="w-10 h-10 bg-[#D4A24C]/10 rounded-xl flex items-center justify-center text-[#D4A24C] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-[#0B1F3A] text-base sm:text-lg mb-2">Authorised Admission Partner</h3>
                <p className="text-gray-500 text-sm leading-relaxed">We hold direct partnerships and affiliations with top colleges and universities across Canada, UK, and Australia for faster offers.</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-4">Why Punjab &amp; Chandigarh Students Choose Us?</h2>
            <ul className="space-y-3">
              {["Centrally located in Chandigarh, Sector 35-C with a professional, experienced counselling team.", "Customized SOP and LOR writing assistance matching high embassy approval criteria.", "Comprehensive pre-departure briefings and post-landing settlement guidance.", "Specialized visa filing for SDS, Non-SDS, and English waiver cases.", "One-on-one expert profile review by senior study visa experts."].map((item, i) => (
                <li key={i} className="flex gap-3 text-gray-600 text-sm leading-relaxed">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full"><ContactDetailsWithReviews /></div>
      </div>
    </div>
  );
}
