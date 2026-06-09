import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, IndianRupee, FileText, Fingerprint, Building2, MessageSquare, Info, TrendingDown } from 'lucide-react';
import { Card } from './ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Button } from './ui/button';

type CountryKey = 'canada' | 'australia' | 'uk' | 'usa' | 'germany';
type VisaKey = 'student' | 'work' | 'pr' | 'tourist' | 'family';

interface FeeEntry { govt: number; consultancy: number; translation: number; biometrics: number; vfs: number; }

const feeData: Record<CountryKey, Record<VisaKey, FeeEntry>> = {
  canada: {
    student:  { govt: 12400,  consultancy: 55000,  translation: 4500,  biometrics: 6800,  vfs: 2800  },
    work:     { govt: 12800,  consultancy: 80000,  translation: 7500,  biometrics: 6800,  vfs: 4500  },
    pr:       { govt: 109000, consultancy: 185000, translation: 12000, biometrics: 6800,  vfs: 7500  },
    tourist:  { govt: 8200,   consultancy: 25000,  translation: 3000,  biometrics: 6800,  vfs: 2200  },
    family:   { govt: 86000,  consultancy: 120000, translation: 9500,  biometrics: 6800,  vfs: 4800  },
  },
  australia: {
    student:  { govt: 51200,  consultancy: 65000,  translation: 5000,  biometrics: 0,     vfs: 4500  },
    work:     { govt: 34600,  consultancy: 110000, translation: 8000,  biometrics: 0,     vfs: 6500  },
    pr:       { govt: 333700, consultancy: 220000, translation: 14000, biometrics: 0,     vfs: 9000  },
    tourist:  { govt: 11900,  consultancy: 35000,  translation: 3500,  biometrics: 0,     vfs: 3200  },
    family:   { govt: 148500, consultancy: 160000, translation: 11000, biometrics: 0,     vfs: 7000  },
  },
  uk: {
    student:  { govt: 28700,  consultancy: 60000,  translation: 4500,  biometrics: 0,     vfs: 5500  },
    work:     { govt: 50300,  consultancy: 100000, translation: 7500,  biometrics: 0,     vfs: 7500  },
    pr:       { govt: 198200, consultancy: 195000, translation: 12000, biometrics: 0,     vfs: 10000 },
    tourist:  { govt: 7800,   consultancy: 28000,  translation: 2800,  biometrics: 0,     vfs: 3800  },
    family:   { govt: 125600, consultancy: 145000, translation: 10000, biometrics: 0,     vfs: 7000  },
  },
  usa: {
    student:  { govt: 13200,  consultancy: 72000,  translation: 6000,  biometrics: 0,     vfs: 7500  },
    work:     { govt: 15700,  consultancy: 118000, translation: 9500,  biometrics: 0,     vfs: 9000  },
    pr:       { govt: 57800,  consultancy: 258000, translation: 15000, biometrics: 0,     vfs: 12000 },
    tourist:  { govt: 13200,  consultancy: 35000,  translation: 4000,  biometrics: 0,     vfs: 5500  },
    family:   { govt: 44200,  consultancy: 162000, translation: 11000, biometrics: 0,     vfs: 8500  },
  },
  germany: {
    student:  { govt: 6200,   consultancy: 55000,  translation: 5500,  biometrics: 0,     vfs: 3800  },
    work:     { govt: 8300,   consultancy: 95000,  translation: 8000,  biometrics: 0,     vfs: 5500  },
    pr:       { govt: 9300,   consultancy: 175000, translation: 12000, biometrics: 0,     vfs: 7500  },
    tourist:  { govt: 6600,   consultancy: 22000,  translation: 3000,  biometrics: 0,     vfs: 2800  },
    family:   { govt: 9100,   consultancy: 125000, translation: 9500,  biometrics: 0,     vfs: 5000  },
  },
};

const countries = [
  { value: 'canada',    label: '🇨🇦 Canada' },
  { value: 'australia', label: '🦘 Australia' },
  { value: 'uk',        label: '🇬🇧 United Kingdom' },
  { value: 'usa',       label: '🇺🇸 United States' },
  { value: 'germany',   label: '🇩🇪 Germany' },
];

const visaTypes = [
  { value: 'student', label: '🎓 Student Visa' },
  { value: 'work',    label: '💼 Work Visa' },
  { value: 'pr',      label: '🏠 PR / Immigration' },
  { value: 'tourist', label: '✈️ Tourist Visa' },
  { value: 'family',  label: '👨‍👩‍👧 Family Visa' },
];

const feeRows: Array<{ label: string; key: keyof FeeEntry; icon: React.ElementType; color: string; note: string }> = [
  { label: 'Government Filing Fee', key: 'govt', icon: Building2, color: '#3b82f6', note: 'Paid directly to immigration authority' },
  { label: 'Consultancy Fee (United Immigration)', key: 'consultancy', icon: Calculator, color: '#D4A24C', note: 'All-inclusive — no hidden charges' },
  { label: 'Document Translation', key: 'translation', icon: FileText, color: '#a855f7', note: 'Certified translation if required' },
  { label: 'Biometrics Fee', key: 'biometrics', icon: Fingerprint, color: '#22c55e', note: 'At designated centre (Canada only)' },
  { label: 'VFS / Embassy Appointment', key: 'vfs', icon: Building2, color: '#f97316', note: 'Visa application service centre fee' },
];

function fmt(n: number) {
  return n === 0 ? '—' : '₹' + n.toLocaleString('en-IN');
}

export function CostCalculator() {
  const [country, setCountry] = useState<CountryKey | ''>('canada');
  const [visa, setVisa] = useState<VisaKey | ''>('pr');
  const fees = (country && visa) ? feeData[country][visa] : null;
  const total = fees ? Object.values(fees).reduce((a, b) => a + b, 0) : 0;

  return (
    <section id="fees" className="py-24 bg-gradient-to-br from-[#FAF7F2] via-white to-[#F5EFE6] relative overflow-hidden">
      <div className="absolute top-20 right-0 w-72 h-72 bg-[#D4A24C]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-20 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-2 bg-white text-[#D4A24C] rounded-full text-sm font-semibold mb-4 shadow-sm border border-[#D4A24C]/20">
            Fee Structure
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0B1F3A] mb-4">
            Transparent Cost Estimator
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            No hidden fees, no surprises. Full breakdown before you commit — all in ₹ INR.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden shadow-2xl border-[#D4A24C]/20 rounded-3xl">
            {/* Top Control Bar */}
            <div className="bg-white p-6 lg:p-8 border-b border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#D4A24C]/10 rounded-xl flex items-center justify-center">
                  <IndianRupee className="w-5 h-5 text-[#D4A24C]" />
                </div>
                <div>
                  <h3 className="text-[#0B1F3A] font-bold text-lg">Visa Cost Calculator</h3>
                  <p className="text-gray-500 text-xs">All amounts in Indian Rupees (₹ INR)</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#0B1F3A] text-sm font-semibold mb-2">Destination Country</label>
                  <Select value={country} onValueChange={(v) => setCountry(v as CountryKey)}>
                    <SelectTrigger className="bg-gray-50 border-gray-200 text-[#0B1F3A] focus:border-[#D4A24C]">
                      <SelectValue placeholder="Choose a country..." />
                    </SelectTrigger>
                    <SelectContent>
                      {countries.map((c) => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-[#0B1F3A] text-sm font-semibold mb-2">Visa Type</label>
                  <Select value={visa} onValueChange={(v) => setVisa(v as VisaKey)}>
                    <SelectTrigger className="bg-gray-50 border-gray-200 text-[#0B1F3A] focus:border-[#D4A24C]">
                      <SelectValue placeholder="Choose visa type..." />
                    </SelectTrigger>
                    <SelectContent>
                      {visaTypes.map((v) => <SelectItem key={v.value} value={v.value}>{v.label}</SelectItem>)}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Fee Breakdown */}
            <div className="p-6 lg:p-8 bg-white">
              <AnimatePresence mode="wait">
                {fees ? (
                  <motion.div
                    key={`${country}-${visa}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    {/* Table header */}
                    <div className="grid grid-cols-3 text-xs font-bold text-gray-400 uppercase tracking-wider pb-3 border-b border-gray-100 mb-3">
                      <span>Fee Component</span>
                      <span className="text-center">Amount (INR)</span>
                      <span className="text-right hidden sm:block">Note</span>
                    </div>

                    {/* Fee rows */}
                    <div className="space-y-2">
                      {feeRows.map(({ label, key, icon: Icon, color, note }, i) => {
                        const amount = fees[key];
                        return (
                          <motion.div
                            key={label}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 }}
                            className={`grid grid-cols-3 items-center p-3.5 rounded-xl ${amount === 0 ? 'opacity-40 bg-gray-50' : 'bg-gradient-to-r from-gray-50/80 to-white hover:from-gray-100 hover:to-gray-50 transition-colors'}`}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-white shadow-sm flex items-center justify-center border border-gray-100 flex-shrink-0">
                                <Icon className="w-4 h-4" style={{ color }} />
                              </div>
                              <span className="text-sm font-semibold text-[#1E1E1E] leading-tight">{label}</span>
                            </div>
                            <div className="text-center">
                              <span className={`text-base font-bold ${amount > 0 ? 'text-[#0B1F3A]' : 'text-gray-400'}`}>
                                {fmt(amount)}
                              </span>
                            </div>
                            <div className="text-right hidden sm:block">
                              <span className="text-xs text-gray-400 leading-tight">{amount === 0 ? 'Not applicable' : note}</span>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>

                    {/* Total */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.97 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 }}
                      className="mt-6 bg-[#F5EFE6] border border-[#D4A24C]/30 rounded-2xl p-6 shadow-sm"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            <IndianRupee className="w-6 h-6 text-[#D4A24C]" />
                          </div>
                          <div>
                            <p className="text-[#0B1F3A] font-bold text-sm">Total Estimated Cost</p>
                            <p className="text-gray-500 text-xs">All components included</p>
                          </div>
                        </div>
                        <motion.p
                          key={total}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          className="text-3xl lg:text-4xl font-black text-[#D4A24C]"
                        >
                          {fmt(total)}
                        </motion.p>
                      </div>
                    </motion.div>

                    {/* Disclaimer + CTAs */}
                    <div className="mt-5 space-y-4">
                      <div className="flex items-start gap-3 bg-amber-50 border border-amber-200/80 rounded-xl p-4">
                        <Info className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-700 leading-relaxed">
                          <strong>Fees are indicative.</strong> Final fees are confirmed after your free assessment. Exchange rates and government fees may vary at the time of filing. We ensure complete transparency — no hidden charges, ever.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button
                          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                          className="flex-1 bg-[#D4A24C] hover:bg-[#B8892E] text-white py-6 text-base gap-2 shadow-lg"
                        >
                          <TrendingDown className="w-4 h-4" /> Get Exact Quote — Free
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 border-green-500 text-green-600 hover:bg-green-50 py-6 text-base gap-2"
                          onClick={() => window.open(`https://wa.me/917710705551?text=Hi! I want to know the exact visa fees for ${country} ${visa} visa.`, '_blank')}
                        >
                          <MessageSquare className="w-4 h-4" /> Ask on WhatsApp
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16">
                    <motion.div animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3 }}>
                      <Calculator className="w-20 h-20 text-[#D4A24C]/30 mx-auto mb-5" />
                    </motion.div>
                    <p className="text-gray-500 text-lg font-medium mb-2">Select a country and visa type above</p>
                    <p className="text-gray-400 text-sm">Instant fee breakdown will appear here</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
