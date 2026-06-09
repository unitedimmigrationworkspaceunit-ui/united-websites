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
    question: "How long does the immigration process typically take?",
    answer:
      "Processing times vary by country and visa type. Canada PR typically takes 6-8 months, Australia skilled migration 3-6 months, UK skilled worker 3-4 months, and USA varies by visa category. We provide realistic timelines during your consultation.",
  },
  {
    question: "What are your service fees?",
    answer:
      "Our fees are transparent and competitive. They vary based on the visa type and complexity. We provide a detailed fee breakdown during your free consultation. There are no hidden charges - what we quote is what you pay.",
  },
  {
    question: "Do you guarantee visa approval?",
    answer:
      "While no consultant can guarantee visa approval (beware of those who do!), our 98% success rate speaks for itself. We only accept cases where we believe there's a strong chance of success and prepare applications meticulously to maximize approval chances.",
  },
  {
    question: "What documents do I need to start the process?",
    answer:
      "Basic documents include: valid passport, educational certificates, work experience letters, language test results (IELTS/PTE), and financial proof. We'll provide a detailed checklist specific to your visa category during consultation.",
  },
  {
    question: "Can I track my application status?",
    answer:
      "Yes! We provide real-time tracking through our client portal. You can monitor both our internal processing status and embassy/immigration department status at any time.",
  },
  {
    question: "What if my visa application is rejected?",
    answer:
      "In the rare event of rejection, we offer free reapplication assistance if the rejection is due to our error. We also provide appeal services and help you understand the rejection reasons and next steps.",
  },
  {
    question: "Do you help with job search after visa approval?",
    answer:
      "Yes! We provide post-landing support including job search assistance, resume building, networking tips, and settlement guidance. Our global network helps connect you with opportunities in your destination country.",
  },
  {
    question: "Can my family accompany me?",
    answer:
      "Most work and PR visas allow dependent family members (spouse and children) to accompany you. We handle all family member applications as part of our comprehensive service.",
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
              Our immigration experts are here to help. Book a free consultation
              or chat with us directly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
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
