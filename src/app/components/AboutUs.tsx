import { Shield, Award, Users } from 'lucide-react';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-[#FAF7F2]">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0B1F3A] to-[#122e54] text-white pt-36 sm:pt-44 pb-16 sm:pb-20 px-4 sm:px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #D4A24C 2px, transparent 0)', backgroundSize: '32px 32px' }} />
        <div className="max-w-3xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1.5 bg-[#D4A24C]/20 text-[#D4A24C] border border-[#D4A24C]/30 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">Our Story</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">About United Immigration</h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">Empowering students to achieve their international education dreams with honest counselling, ethical procedures, and transparent visa support.</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 space-y-16 bg-white rounded-t-[2rem] sm:rounded-t-[3rem] -mt-8 relative z-10 shadow-xl">
        {/* Mission */}
        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 items-center">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-4">Our Mission &amp; Purpose</h2>
            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">At United Immigration Services, our core mission is simple: to make study visa processes smooth, stress-free, and highly successful for international students. We believe in providing transparent, reliable advice based purely on official immigration guidelines and university rules.</p>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">We guide students through the complex process of university admission, document checklist completion, application filings, financial proof structuring, and visa lodge protocols. Your success is our ultimate focus.</p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[
              { value: '98%', label: 'Visa Approvals' },
              { value: '10K+', label: 'Students Placed' },
              { value: '9/10', label: 'Client Referrals' },
              { value: '100%', label: 'Transparency' },
            ].map((stat) => (
              <div key={stat.label} className="p-4 sm:p-6 bg-[#FAF7F2] rounded-2xl text-center">
                <span className="text-2xl sm:text-4xl font-extrabold text-[#D4A24C]">{stat.value}</span>
                <p className="text-xs sm:text-sm font-bold text-[#0B1F3A] mt-1.5">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="pt-8 border-t border-gray-100">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1F3A] mb-10 sm:mb-12 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { icon: Shield, title: 'Uncompromising Honesty', text: 'We provide realistic, honest assessments of your profiles. If a visa path has low approval chances, we tell you immediately.' },
              { icon: Award, title: 'Professional Expertise', text: 'Our counsellors keep up to date with the latest changing study permit rules, financial updates, and admission caps.' },
              { icon: Users, title: 'Student-First Focus', text: 'We understand that studying abroad is a major life decision. We treat every application with maximum attention and care.' },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-[#FAF7F2] p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm text-center">
                  <div className="w-11 h-11 bg-[#D4A24C]/10 rounded-xl flex items-center justify-center text-[#D4A24C] mx-auto mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-[#0B1F3A] text-base sm:text-lg mb-3">{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
