import { useState } from 'react';
import { ContactDetailsWithReviews } from './SharedComponents';
import { Send, MessageSquare, CheckCircle2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';

export function ContactUsPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: '',
    visaType: 'Study Visa',
    callbackNeeded: false,
    message: '',
  });

  const countries = ['Canada', 'Australia', 'United Kingdom', 'United States', 'Ireland', 'New Zealand', 'Europe', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const action = formData.callbackNeeded ? 'callback request' : 'consultation assessment';
    toast.success(`Your ${action} has been received! Our team will contact you within 24 hours.`);
    setFormData({ fullName: '', phone: '', email: '', country: '', visaType: 'Study Visa', callbackNeeded: false, message: '' });
  };

  const inputClass =
    'w-full bg-[#FAF7F2] border border-gray-200 text-[#0B1F3A] placeholder:text-gray-400 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4A24C] focus:ring-2 focus:ring-[#D4A24C]/10 transition-all';

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0B1F3A] to-[#122e54] text-white pt-36 sm:pt-44 pb-16 sm:pb-20 px-4 sm:px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4A24C 2px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl w-full">
            <span className="inline-block px-4 py-1.5 bg-[#D4A24C]/20 text-[#D4A24C] border border-[#D4A24C]/30 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Contact Us</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">Contact United Immigration</h1>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed">
              Book a free face-to-face consultation at our Chandigarh Sector 35-C office or request a quick call-back from our study abroad counsellors.
            </p>
          </div>
          <div className="text-7xl sm:text-9xl opacity-80 select-none hidden sm:block">📞</div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid lg:grid-cols-5 gap-10 lg:gap-12">
        {/* Left — contact details + map + reviews */}
        <div className="lg:col-span-2 w-full">
          <ContactDetailsWithReviews />
        </div>

        {/* Right — form */}
        <div className="lg:col-span-3 w-full">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_-15px_rgba(11,31,58,0.08)] p-6 sm:p-8 lg:p-10">
            <h3 className="text-xl sm:text-2xl font-bold text-[#0B1F3A] mb-2">Request Free Assessment</h3>
            <p className="text-sm text-gray-500 mb-7">Fill out the form below. We'll evaluate your profile and suggest the best study options.</p>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Full Name *</label>
                <input
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              {/* Phone + Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Phone Number *</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 77107 05551"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Email Address *</label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="yourname@gmail.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Country + Visa */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Country of Interest *</label>
                  <Select value={formData.country} onValueChange={(v) => setFormData({ ...formData, country: v })}>
                    <SelectTrigger className="bg-[#FAF7F2] border-gray-200 rounded-xl h-[46px] text-sm">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Visa Category *</label>
                  <Select value={formData.visaType} onValueChange={(v) => setFormData({ ...formData, visaType: v })}>
                    <SelectTrigger className="bg-[#FAF7F2] border-gray-200 rounded-xl h-[46px] text-sm">
                      <SelectValue placeholder="Select Visa" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Study Visa">Study Visa</SelectItem>
                      <SelectItem value="Visitor Visa">Visitor Visa</SelectItem>
                      <SelectItem value="Spousal Visa">Spousal Visa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Callback checkbox */}
              <div className="bg-[#FAF7F2] p-4 rounded-2xl border border-gray-100 flex items-start gap-3">
                <input
                  type="checkbox"
                  id="callbackNeeded"
                  checked={formData.callbackNeeded}
                  onChange={(e) => setFormData({ ...formData, callbackNeeded: e.target.checked })}
                  className="mt-1 accent-[#D4A24C] w-4 h-4 rounded"
                />
                <div>
                  <label htmlFor="callbackNeeded" className="text-sm font-bold text-[#0B1F3A] cursor-pointer">
                    Request a Call Back Instead
                  </label>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Check this if you want our senior counsellor to call you directly at your convenience.
                  </p>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-[#0B1F3A] mb-1.5">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your qualifications, gaps, course choice or queries..."
                  rows={4}
                  className={inputClass + ' resize-none'}
                />
              </div>

              {/* Submit + WhatsApp */}
              <div className="flex flex-col sm:flex-row gap-3 pt-1">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#D4A24C] hover:bg-[#B8892E] text-white font-bold py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <Send className="w-4 h-4" />
                  {formData.callbackNeeded ? 'Request Call Back' : 'Submit Assessment'}
                </button>
                <button
                  type="button"
                  onClick={() => window.open('https://wa.me/917710705551?text=Hi!+I+want+to+apply+for+a+study+visa.', '_blank')}
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b558] text-white font-bold py-3.5 rounded-xl shadow-lg transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp Us
                </button>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center gap-4 pt-2 text-xs text-gray-500">
                {['Free Consultation', 'Fast Response', 'Secure Data'].map((badge) => (
                  <span key={badge} className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> {badge}
                  </span>
                ))}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
