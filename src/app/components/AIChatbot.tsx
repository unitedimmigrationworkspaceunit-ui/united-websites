import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Send, Bot, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card } from './ui/card';

// ─── Dynamic Response Engine ───────────────────────────────────────────────────

interface BotResponse {
  text: string;
  followUp?: string[];
}

function getBotResponse(input: string): BotResponse {
  const msg = input.toLowerCase().trim();

  // ── Yes / Affirmative ──────────────────────────────────────
  if (/^(yes|yeah|sure|okay|ok|yep|please|haan|ha|ji|bilkul|of course|go ahead|proceed)$/i.test(msg)) {
    const replies = [
      { text: "Great! You can book a FREE consultation call with our senior consultant right now. 📞 Call us at +91 77107 05551 or click below to WhatsApp us — we usually respond within 5 minutes!", followUp: ['Book via WhatsApp', 'Call Now', 'Tell me more'] },
      { text: "Perfect! Our team is available Mon–Sat 9AM–7PM. You can reach us at:\n📞 +91 77107 05551\n📧 team@unitedimmigration-services.com\n\nWould you like me to explain the process first?", followUp: ['Explain the process', 'WhatsApp Us', 'Fee Structure'] },
      { text: "Wonderful! I'll connect you with an expert. 🙌 Our consultations are 100% free and no-obligation. Want to schedule for today?", followUp: ['Schedule Today', 'Check my Eligibility', 'View Fee Structure'] },
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  }

  // ── No / Negative ──────────────────────────────────────────
  if (/^(no|nope|nahi|nah|not now|later|maybe later|not interested)$/i.test(msg)) {
    return {
      text: "No problem at all! 😊 I'm here whenever you're ready. In the meantime, can I help you with something else? You can ask about visa costs, processing times, or eligibility.",
      followUp: ['Check Visa Fees', 'Am I eligible for Canada PR?', 'How long does an Australia visa take?'],
    };
  }

  // ── Canada PR / Express Entry ──────────────────────────────
  if (/canada|express entry|crs|pnp|provincial|pr.*canada|canadian/i.test(msg)) {
    return {
      text: "🇨🇦 Canada PR via Express Entry is one of our most popular services!\n\n You may be eligible if you have:\n• 1+ year skilled work experience\n• A valid language test (IELTS/CELPIP)\n• Educational credentials (ECA)\n• CRS score ideally 400+\n\nOur consultants have helped 10,000+ clients achieve Canada PR with a 99% success rate. Would you like a FREE eligibility check?",
      followUp: ['Yes, check my eligibility', 'What is CRS score?', 'View Canada PR fees'],
    };
  }

  // ── Australia ──────────────────────────────────────────────
  if (/australia|aus|skilled.*aus|189|190|491|subclass/i.test(msg)) {
    return {
      text: "🇦🇺 Australia Skilled Migration timelines vary by visa subclass:\n\n• Subclass 189 (Independent): 6–12 months\n• Subclass 190 (State Nominated): 3–6 months\n• Subclass 491 (Regional): 3–6 months\n• Student Visa: 4–8 weeks\n• Tourist Visa: 2–4 weeks\n\nProcessing times depend on occupation and skills assessment. Want to know if your occupation is on the skills list?",
      followUp: ['Check my occupation', 'View Australia fees', 'Book free consultation'],
    };
  }

  // ── UK ────────────────────────────────────────────────────
  if (/uk|united kingdom|britain|skilled worker|ukvi|tier/i.test(msg)) {
    return {
      text: "🇬🇧 UK Skilled Worker Visa is one of the fastest routes! Processing can be as quick as 3 weeks.\n\n Requirements:\n• Job offer from a UK-licensed sponsor\n• Minimum salary threshold\n• English language proof\n\nWe help with employer matching, CoS arrangement, and ILR planning. Shall we check if you qualify?",
      followUp: ['Check UK eligibility', 'View UK visa fees', 'Book consultation'],
    };
  }

  // ── USA ────────────────────────────────────────────────────
  if (/usa|united states|america|h1b|f1|green card|eb[- ]*[123]/i.test(msg)) {
    return {
      text: "🇺🇸 USA Visa Options we assist with:\n\n• 🎓 F1 Student Visa — 2–6 weeks\n• 💼 H1B Work Visa — filed annually in April (lottery)\n• 🌿 L1 Intracompany Transfer — 3–6 months\n• 🏠 EB Green Card — 12–36 months\n\nWhich category are you interested in?",
      followUp: ['F1 Student Visa', 'H1B Work Visa', 'EB Green Card', 'View fees'],
    };
  }

  // ── Germany ────────────────────────────────────────────────
  if (/germany|deutsch|berlin|munich|chancenkarte|opportunity card|eu blue/i.test(msg)) {
    return {
      text: "🇩🇪 Germany is a top destination for skilled professionals!\n\n🔑 Popular pathways:\n• Chancenkarte (Opportunity Card) — 2–4 months\n• EU Blue Card — for high earners\n• Job Seeker Visa — 6 months to find work\n• Student Visa — 4–8 weeks\n\nGermany recognises qualifications from most countries. Want to know your chances?",
      followUp: ['Check Germany eligibility', 'View Germany fees', 'Book free call'],
    };
  }

  // ── Fees / Cost ────────────────────────────────────────────
  if (/fee|cost|price|charges|how much|kitna|rupee|inr|money|expensive|budget/i.test(msg)) {
    return {
      text: "💰 Our fees are fully transparent — no hidden charges ever!\n\nHere's a quick overview:\n• Canada PR: ₹1,85,000 consultancy + govt fees\n• Australia PR: ₹2,20,000 consultancy + govt fees\n• UK Skilled Worker: ₹1,00,000 consultancy\n• Germany Opportunity Card: ₹95,000 consultancy\n\nUse our Fee Calculator on the website for a full breakdown, or shall I guide you?",
      followUp: ['View Fee Calculator', 'Get exact quote free', 'Book consultation'],
    };
  }

  // ── Processing Time ────────────────────────────────────────
  if (/how long|processing time|kitne din|kitna time|duration|time.*take|take.*time/i.test(msg)) {
    return {
      text: "⏱️ Visa processing times vary by country:\n\n🇨🇦 Canada PR — 6–8 months\n🇦🇺 Australia PR — 6–12 months\n🇬🇧 UK Skilled Worker — 3–4 weeks\n🇩🇪 Germany — 2–4 months\n🇺🇸 USA H1B — 3–6 months\n✈️ Tourist Visas — 1–3 weeks\n\nWant to know the exact timeline for your specific visa?",
      followUp: ['Check my specific visa', 'Book free consultation', 'View fees'],
    };
  }

  // ── Eligibility ────────────────────────────────────────────
  if (/eligible|eligibility|qualify|qualification|am i|can i|kya mai|suits me/i.test(msg)) {
    return {
      text: "🎯 To check your eligibility, our experts look at:\n\n1. 📋 Your work experience & occupation\n2. 🎓 Educational qualifications\n3. 🗣️ Language test scores (IELTS/PTE)\n4. 💼 Job offer (if applicable)\n5. 👪 Family situation\n\nThe best way is a FREE 30-minute assessment call with our senior consultant. It's completely free — no obligation!",
      followUp: ['Book free assessment', 'Check Canada eligibility', 'Check Australia eligibility'],
    };
  }

  // ── Documents ──────────────────────────────────────────────
  if (/document|paperwork|attestation|apostille|translation|pcc|police clearance/i.test(msg)) {
    return {
      text: "📋 Document requirements depend on your visa type, but typically include:\n\n Passport (valid 6+ months)\n Educational certificates (attested)\n Work experience letters\n Language test results\n Police Clearance Certificate\n Medical examination (for PR)\n\nWe assist with certified translations in 40+ languages and MEA attestation. Need a complete checklist?",
      followUp: ['Get document checklist', 'Book consultation', 'Translation services'],
    };
  }

  // ── Book Consultation / Appointment ───────────────────────
  if (/book|consult|appointment|call|schedule|meeting|talk.*expert|expert.*talk/i.test(msg)) {
    return {
      text: "📅 Book your FREE consultation now!\n\n🕒 Available: Mon–Sat, 9AM–7PM IST\n📞 Call: +91 77107 05551\n📧 Email: team@unitedimmigration-services.com\n💬 WhatsApp: Click the button below for instant response!\n\nOur senior consultants have 15+ years of experience. No obligation, 100% free!",
      followUp: ['WhatsApp Us Now', 'Fill Contact Form', 'Know about fees first'],
    };
  }

  // ── Student Visa ───────────────────────────────────────────
  if (/student|study|university|college|mbbs|masters|bachelor|education|admission/i.test(msg)) {
    return {
      text: "🎓 We help students get admitted to top universities worldwide!\n\nOur Student Visa services include:\n University shortlisting & application\n SOP & LOR writing support\n Proof of funds guidance\n Visa interview preparation\n Pre-departure briefing\n\nWe serve Canada, UK, Australia, USA, Germany & more. 98% student visa success rate! Which country interests you?",
      followUp: ['Canada Student Visa', 'UK Student Visa', 'Australia Student Visa', 'Germany Study'],
    };
  }

  // ── WhatsApp ───────────────────────────────────────────────
  if (/whatsapp|wa|chat/i.test(msg)) {
    return {
      text: "💬 You can reach us instantly on WhatsApp! We typically respond within 5 minutes during office hours.\n\n📱 Click here to open WhatsApp:\nhttps://wa.me/917710705551\n\nOr tap the 'WhatsApp Us Now' button below 👇",
      followUp: ['WhatsApp Us Now', 'Book consultation', 'Check eligibility'],
    };
  }

  // ── Greetings ──────────────────────────────────────────────
  if (/^(hi|hello|hey|namaste|namaskar|good morning|good evening|good afternoon|hii|helo)$/i.test(msg)) {
    const greets = [
      { text: "Namaste! 🙏 Welcome to United Immigration Services. I'm Veda, your personal visa guide. I can help you with:\n\n• Visa eligibility checks\n• Processing times\n• Fee estimates\n• Booking free consultations\n\nWhat would you like to know?", followUp: ['Am I eligible for Canada PR?', 'How long does an Australia visa take?', 'Book Free Consultation'] },
      { text: "Hello! 👋 Great to have you here. I'm Veda 🌐 — think of me as your immigration GPS! I'll help navigate your visa journey step by step. What's your destination dream?", followUp: ['🇨🇦 Canada', '🇦🇺 Australia', '🇬🇧 UK', '🇩🇪 Germany'] },
    ];
    return greets[Math.floor(Math.random() * greets.length)];
  }

  // ── Thank You ──────────────────────────────────────────────
  if (/thank|thanks|dhanyawad|shukriya|great|awesome|helpful/i.test(msg)) {
    return {
      text: "You're most welcome! 😊 We're here to make your immigration journey smooth and stress-free. Anything else I can help you with?\n\n📞 +91 77107 05551 | team@unitedimmigration-services.com",
      followUp: ['Check fees', 'Book consultation', 'Something else'],
    };
  }

  // ── Default / Fallback ─────────────────────────────────────
  const fallbacks = [
    { text: "That's a great question! For accurate, personalised guidance on your situation, I'd recommend speaking directly with one of our senior consultants — it's completely FREE.\n\n📞 +91 77107 05551\n📧 team@unitedimmigration-services.com\n\nOr shall I help you with something specific?", followUp: ['Check visa eligibility', 'View fee structure', 'Book free consultation'] },
    { text: "I want to give you the most accurate answer! Our senior consultants are immigration experts with 15+ years of experience and can address this precisely. Book a FREE call — takes just 2 minutes to schedule!\n\nIn the meantime, what else can I help you with?", followUp: ['Am I eligible for Canada PR?', 'Visa processing times', 'Book consultation'] },
    { text: "Good question! 🤔 Immigration rules can be complex and depend on your unique profile. For the most accurate guidance, our consultants offer a FREE 30-minute assessment. Would you like to book one?", followUp: ['Yes, book now', 'Tell me about eligibility', 'Check visa fees'] },
  ];
  return fallbacks[Math.floor(Math.random() * fallbacks.length)];
}

// ─── Component ──────────────────────────────────────────────────────────────

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  followUp?: string[];
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Namaste! I'm Veda 🌐, your personal visa guide. How can I help you today?",
      sender: 'bot',
      followUp: ['Am I eligible for Canada PR?', 'How long does an Australia visa take?', 'View Fee Structure', 'Book Free Consultation'],
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (text?: string) => {
    const messageText = (text || inputMessage).trim();
    if (!messageText) return;

    // Handle special action buttons
    if (messageText === 'WhatsApp Us Now') {
      window.open('https://wa.me/917710705551?text=Hi!+I+want+to+enquire+about+visa+services.', '_blank');
      return;
    }
    if (messageText === 'Call Now') {
      window.location.href = 'tel:+917710705551';
      return;
    }
    if (messageText === 'Fill Contact Form') {
      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      return;
    }
    if (messageText === 'View Fee Calculator') {
      document.querySelector('#fees')?.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
      return;
    }

    const userMsg: Message = { id: Date.now(), text: messageText, sender: 'user' };
    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate realistic typing delay
    const delay = 800 + Math.random() * 800;
    setTimeout(() => {
      const response = getBotResponse(messageText);
      const botMsg: Message = {
        id: Date.now() + 1,
        text: response.text,
        sender: 'bot',
        followUp: response.followUp,
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, delay);
  };

  const lastBotMessage = [...messages].reverse().find((m) => m.sender === 'bot');

  return (
    <>
      {/* Floating Button */}
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4A24C] to-[#B8892E] hover:from-[#B8892E] hover:to-[#D4A24C] shadow-2xl"
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
        </Button>
        {!isOpen && (
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center"
          >
            <span className="text-white text-[10px] font-bold">1</span>
          </motion.div>
        )}
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[450px] max-w-[calc(100vw-32px)] z-50"
          >
            <Card className="overflow-hidden shadow-2xl border-[#D4A24C]/20 flex flex-col h-[650px] max-h-[85vh]">
              {/* Header */}
              <div className="bg-gradient-to-br from-[#D4A24C] to-[#B8892E] p-4 flex-shrink-0">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <Bot className="w-5 h-5 text-[#D4A24C]" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-sm">Veda — Visa Guide</h3>
                    <p className="text-[11px] text-white/90">Online · Typically replies instantly</p>
                  </div>
                  <div className="flex gap-1">
                    <a href="tel:+917710705551" className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <Phone className="w-4 h-4 text-white" />
                    </a>
                    <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="text-white hover:bg-white/20 w-8 h-8 p-0 rounded-full">
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-br from-[#FAF7F2] to-white space-y-3" style={{ minHeight: 0 }}>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line leading-relaxed ${
                      message.sender === 'user'
                        ? 'bg-[#D4A24C] text-white rounded-br-sm'
                        : 'bg-white border border-gray-200 text-[#1E1E1E] shadow-sm rounded-bl-sm'
                    }`}>
                      {message.text}
                    </div>
                  </motion.div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                      <div className="flex space-x-1.5">
                        {[0, 0.2, 0.4].map((delay, i) => (
                          <motion.div key={i} animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay }} className="w-2 h-2 bg-[#D4A24C] rounded-full" />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Quick Reply Suggestions — from last bot message */}
                {!isTyping && lastBotMessage?.followUp && (
                  <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap gap-2 pt-1">
                    {lastBotMessage.followUp.map((reply) => (
                      <button
                        key={reply}
                        onClick={() => handleSendMessage(reply)}
                        className="text-xs bg-white border border-[#D4A24C]/40 hover:border-[#D4A24C] hover:bg-[#D4A24C]/10 text-[#0B1F3A] font-semibold px-3 py-1.5 rounded-full transition-all shadow-sm"
                      >
                        {reply}
                      </button>
                    ))}
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-gray-100 bg-white flex-shrink-0">
                <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex gap-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask anything about visas..."
                    className="flex-1 border-[#D4A24C]/30 focus:border-[#D4A24C] text-sm h-9"
                  />
                  <Button type="submit" className="bg-[#D4A24C] hover:bg-[#B8892E] text-white h-9 w-9 p-0 flex-shrink-0">
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
                <p className="text-[10px] text-gray-400 mt-1.5 text-center">Veda AI · Available 24/7 · Human experts Mon–Sat 9AM–7PM</p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
