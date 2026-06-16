import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

const faqs = [
  {
    question: "How long does the study visa process typically take?",
    answer:
      "Processing times vary by destination. Canada study permits usually take 4-8 weeks, UK student visas 3-4 weeks, Australian student visas 4-6 weeks, and USA F1 visas 2-3 weeks. We advise applying at least 3-4 months before your intake starts.",
  },
  {
    question: "What are your service fees?",
    answer:
      "Our consultation and admission guidance fee details are fully transparent and shared during your first counselling session. There are no hidden charges at any stage of your application process.",
  },
  {
    question: "Do you guarantee visa approval?",
    answer:
      "No consultant can guarantee visa approval as the final decision rests solely with the respective embassies. However, our meticulously prepared applications and 98% visa success rate ensure your profile is presented in the best possible way.",
  },
  {
    question: "What documents do I need to start the study visa process?",
    answer:
      "You will need academic transcripts (10th, 12th, and Graduation if applicable), passport copy, English proficiency test scores (IELTS/PTE/TOEFL), Letter of Recommendation (LOR), Statement of Purpose (SOP), and proof of sufficient funds to cover tuition and living expenses.",
  },
  {
    question: "How will I track my application status?",
    answer:
      "Our team provides regular updates via WhatsApp, phone calls, and email at every step of your application — from university admission submission to visa lodging and approval.",
  },
  {
    question: "Do you assist with university scholarships?",
    answer:
      "Yes! We identify and apply for merit-based scholarships and bursaries offered by partner colleges and universities, helping you reduce the overall cost of your education abroad.",
  },
  {
    question: "Can my spouse accompany me on a study visa?",
    answer:
      "Yes, many destinations like Canada, Australia, and New Zealand offer spousal open work permits or dependent visas, allowing your spouse to accompany you and work while you study.",
  },
];

export function FAQ() {
  return (
    <section className="py-20 bg-gradient-to-b from-[#F5EFE6] to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-[#0B1F3A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#1E1E1E]/70 max-w-3xl mx-auto">
            Got questions? We've got answers.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-white rounded-2xl border-2 border-[#F5EFE6] hover:border-[#D4A24C]/30 transition-colors px-6 shadow-lg"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-[#D4A24C] rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="font-semibold text-[#0B1F3A] pr-8">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-[#1E1E1E]/70 leading-relaxed pb-6 pl-12">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-3xl p-8 border-2 border-[#D4A24C]/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#0B1F3A] mb-3">
              Still Have Questions?
            </h3>
            <p className="text-[#1E1E1E]/70 mb-6">
              Our education counsellors are here to help. Book a free consultation
              or chat with us directly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => window.location.hash = '#/contact'}
                className="px-8 py-3 bg-[#D4A24C] text-white rounded-full font-semibold hover:bg-[#B8892E] transition-colors shadow-lg"
              >
                Book Free Consultation
              </button>
              <button
                onClick={() => window.open("https://wa.me/917710705551", "_blank")}
                className="px-8 py-3 bg-[#25D366] text-white rounded-full font-semibold hover:bg-[#25D366]/90 transition-colors shadow-lg"
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
