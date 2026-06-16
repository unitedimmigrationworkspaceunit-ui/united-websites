import { useState } from 'react';
import { MapPin, Phone, Clock, Send, Star, Compass, CheckCircle2 } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner';

// Enquiry form — single column always (used in a narrow sidebar)
export function QuickEnquiryForm({ defaultVisaType, title = "Request Free Consultation" }: { defaultVisaType: string; title?: string }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    country: '',
    visaType: defaultVisaType,
    callbackPref: 'anytime',
    message: '',
  });

  const countries = ['Canada', 'Australia', 'United Kingdom', 'United States', 'Ireland', 'New Zealand', 'Europe', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your callback request has been received! Our senior counsellor will call you shortly.');
    setFormData({ fullName: '', phone: '', email: '', country: '', visaType: defaultVisaType, callbackPref: 'anytime', message: '' });
  };

  const inputClass =
    'w-full bg-[#FAF7F2] border border-gray-200 text-[#0B1F3A] placeholder:text-gray-400 text-sm rounded-xl px-4 py-3 focus:outline-none focus:border-[#D4A24C] focus:ring-2 focus:ring-[#D4A24C]/10 transition-all';
  const labelClass = 'block text-xs font-bold uppercase text-[#0B1F3A] tracking-wide mb-1.5';

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_20px_60px_-15px_rgba(11,31,58,0.08)] p-6">
      <h3 className="text-xl font-bold text-[#0B1F3A] mb-1">{title}</h3>
      <p className="text-xs text-gray-400 mb-5">Fill in your details — we'll call you back.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Full Name */}
        <div>
          <label className={labelClass}>Full Name *</label>
          <input
            required
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="Your full name"
            className={inputClass}
          />
        </div>

        {/* Phone */}
        <div>
          <label className={labelClass}>Phone Number *</label>
          <input
            required
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 77107 05551"
            className={inputClass}
          />
        </div>

        {/* Preferred call time */}
        <div>
          <label className={labelClass}>Best Time to Call</label>
          <Select value={formData.callbackPref} onValueChange={(v) => setFormData({ ...formData, callbackPref: v })}>
            <SelectTrigger className="w-full bg-[#FAF7F2] border-gray-200 rounded-xl h-[44px] text-sm">
              <SelectValue placeholder="Select preferred time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="anytime">Anytime (9 AM – 6 PM)</SelectItem>
              <SelectItem value="morning">Morning (9 AM – 12 PM)</SelectItem>
              <SelectItem value="afternoon">Afternoon (12 PM – 3 PM)</SelectItem>
              <SelectItem value="evening">Evening (3 PM – 6 PM)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Destination */}
        <div>
          <label className={labelClass}>Study Destination *</label>
          <Select value={formData.country} onValueChange={(v) => setFormData({ ...formData, country: v })}>
            <SelectTrigger className="w-full bg-[#FAF7F2] border-gray-200 rounded-xl h-[44px] text-sm">
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>

        {/* Visa Type (readonly) */}
        <div>
          <label className={labelClass}>Visa Type</label>
          <input
            disabled
            value={formData.visaType}
            className="w-full bg-gray-100 border border-gray-200 text-[#0B1F3A] text-sm rounded-xl px-4 py-3 cursor-not-allowed"
          />
        </div>

        {/* Message */}
        <div>
          <label className={labelClass}>Message (Optional)</label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="IELTS score, course preference, queries..."
            rows={3}
            className={inputClass + ' resize-none'}
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-[#D4A24C] hover:bg-[#B8892E] text-white font-bold py-4 rounded-xl shadow-lg transition-all mt-2"
        >
          <Send className="w-4 h-4" />
          Request Call Back
        </button>

        {/* WhatsApp shortcut */}
        <button
          type="button"
          onClick={() => window.open('https://wa.me/917710705551', '_blank')}
          className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20b558] text-white font-bold py-3 rounded-xl shadow-md transition-all text-sm"
        >
          <span>💬</span> Chat on WhatsApp
        </button>
      </form>
    </div>
  );
}

// Contact info + map + reviews widget
export function ContactDetailsWithReviews() {
  const reviews = [
    { name: 'Sukhwinder Singh', rating: 5, text: 'Excellent and honest study visa consulting in Chandigarh. Got my Canada study visa approved in 20 days. Best team!', date: '2 weeks ago' },
    { name: 'Kiranpreet Kaur', rating: 5, text: 'They helped me secure admission to a top UK university and handled the CAS process very fast. Recommend 100%!', date: '1 month ago' },
    { name: 'Rahul Sharma', rating: 5, text: 'Very professional staff. Special thanks for guiding me through the complex Australian subclass 500 visa requirements.', date: '1 month ago' },
  ];

  return (
    <div className="space-y-6">
      {/* Contact Info */}
      <div className="bg-[#FAF7F2] rounded-3xl p-6 sm:p-8 border border-gray-100">
        <h3 className="text-lg font-bold text-[#0B1F3A] mb-5 flex items-center gap-2">
          <Compass className="w-5 h-5 text-[#D4A24C]" /> Chandigarh Head Office
        </h3>
        <div className="space-y-5">
          {[
            { icon: MapPin, label: 'Our Address', detail: 'SCO 495-496, 2nd Floor, Sector 35-C\nChandigarh, 160022', href: null },
            { icon: Phone, label: 'Call / WhatsApp', detail: '+91 77107 05551', href: 'tel:+917710705551' },
            { icon: Clock, label: 'Working Hours', detail: 'Mon – Sat: 9:00 AM – 6:00 PM\nSunday: Closed', href: null },
          ].map(({ icon: Icon, label, detail, href }) => (
            <div key={label} className="flex gap-3">
              <div className="w-9 h-9 bg-[#D4A24C]/10 rounded-xl flex items-center justify-center flex-shrink-0 text-[#D4A24C]">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-[#0B1F3A] text-xs uppercase tracking-wide">{label}</p>
                {href ? (
                  <a href={href} className="text-gray-600 text-sm mt-0.5 hover:text-[#D4A24C] transition-colors whitespace-pre-line">{detail}</a>
                ) : (
                  <p className="text-gray-600 text-sm mt-0.5 whitespace-pre-line">{detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Google Map */}
      <div className="rounded-3xl overflow-hidden border border-gray-100 shadow-md h-64 sm:h-72">
        <iframe
          src="https://maps.google.com/maps?q=SCO%20495-496,%202nd%20Floor,%20Sector%2035-C,%20Chandigarh&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="United Immigration Chandigarh Office"
        />
      </div>

      {/* Client Reviews */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm">
        <h3 className="text-lg font-bold text-[#0B1F3A] mb-5 flex items-center gap-2">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" /> What Our Clients Say
        </h3>
        <div className="space-y-4">
          {reviews.map((r, i) => (
            <div key={i} className="border-b border-gray-100 last:border-0 pb-4 last:pb-0">
              <div className="flex justify-between items-center mb-1">
                <p className="font-bold text-[#0B1F3A] text-sm">{r.name}</p>
                <span className="text-gray-400 text-xs">{r.date}</span>
              </div>
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, idx) => <Star key={idx} className="w-3 h-3 text-yellow-500 fill-yellow-500" />)}
              </div>
              <p className="text-gray-500 text-xs leading-relaxed">"{r.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
