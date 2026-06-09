import { motion } from 'motion/react';
import { ClipboardList, UserCheck, FileText, Send, PartyPopper } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Free Assessment',
    description: 'Book a free 30-minute consultation. Our experts evaluate your profile, eligibility, and best immigration pathways.',
    color: 'from-[#D4A24C] to-[#B8892E]',
    bg: 'bg-amber-50',
  },
  {
    number: '02',
    icon: UserCheck,
    title: 'Profile Building',
    description: 'We enhance your profile — from language scores and credential evaluations to skills assessments and job offers.',
    color: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Document Preparation',
    description: 'Our team prepares a bulletproof application package with verified documents, translated certificates, and a cover letter.',
    color: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
  },
  {
    number: '04',
    icon: Send,
    title: 'Application Submission',
    description: 'We submit your application on your behalf and liaise directly with embassies and immigration authorities.',
    color: 'from-green-500 to-green-600',
    bg: 'bg-green-50',
  },
  {
    number: '05',
    icon: PartyPopper,
    title: 'Visa Approval & Landing',
    description: 'Celebrate your approval! We provide post-landing support — settlement advice, job search help, and more.',
    color: 'from-rose-500 to-rose-600',
    bg: 'bg-rose-50',
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#D4A24C]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#0B1F3A]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-2 bg-[#F5EFE6] text-[#D4A24C] rounded-full text-sm font-semibold mb-4">
            How It Works
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4">
            Your Journey to a New Country,{' '}
            <span className="text-[#D4A24C]">Step by Step</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From initial assessment to visa approval — a proven 5-step process with your dedicated consultant every step of the way.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Premium Connecting line */}
          <div className="hidden lg:block absolute left-[8%] right-[8%] z-0 h-[2px] overflow-hidden rounded-full" style={{ top: '4.5rem' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#D4A24C]/40 to-transparent"></div>
            <motion.div
              animate={{ x: ['-200%', '800%'] }}
              transition={{ repeat: Infinity, duration: 4.5, ease: "linear" }}
              className="absolute top-1/2 -translate-y-1/2 w-24 h-[2px] bg-gradient-to-r from-transparent via-[#D4A24C] to-transparent shadow-[0_0_15px_3px_rgba(212,162,76,0.5)]"
            />
          </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10 items-stretch">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.12 }}
                  whileHover={{ y: -8 }}
                  className="group text-center flex flex-col h-full"
                >
                  {/* Icon Circle */}
                  <div className="relative mb-6 flex justify-center flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-xl mx-auto relative z-10`}
                    >
                      <Icon className="w-9 h-9 text-white" />
                      {/* Step number badge */}
                      <div className="absolute -top-2 -right-2 w-7 h-7 bg-[#0B1F3A] text-white rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </div>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <div className={`${step.bg} rounded-2xl p-6 border-2 border-transparent group-hover:border-[#D4A24C]/30 transition-all duration-300 shadow-md group-hover:shadow-xl flex-grow flex flex-col`}>
                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

