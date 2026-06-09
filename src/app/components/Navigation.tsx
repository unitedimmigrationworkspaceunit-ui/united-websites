import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    {
      label: 'Countries',
      href: '#countries',
      dropdown: ['🇨🇦 Canada', '🇦🇺 Australia', '🇬🇧 United Kingdom', '🇺🇸 USA', '🇩🇪 Germany'],
    },
    {
      label: 'Services',
      href: '#services',
      dropdown: ['Student Visa', 'Work Visa', 'PR / Immigration', 'Family Sponsorship', 'Tourist Visa', 'Document Help'],
    },
    { label: 'Fee Structure', href: '#fees' },
    { label: 'Track Application', href: '#tracker' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <AnimatePresence>
        {showAnnouncement && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="fixed top-0 left-0 right-0 z-[60] bg-[#0B1F3A] text-[#D4A24C] text-[11px] sm:text-xs font-semibold border-b border-white/5"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center relative">
              <div className="flex items-center gap-3 sm:gap-4 tracking-wide">
                <span>Free Consultation Available — Limited Slots</span>
                <span className="w-1.5 h-1.5 bg-[#D4A24C] rounded-full animate-pulse shadow-[0_0_8px_rgba(212,162,76,0.6)]" />
                <a href="tel:+917710705551" className="flex items-center gap-1.5 hover:text-white transition-colors duration-300">
                  <Phone className="w-3 h-3" />
                  +91 77107 05551
                </a>
              </div>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="absolute right-4 text-[#D4A24C]/60 hover:text-white p-1 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Nav */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          showAnnouncement ? 'top-8' : 'top-0'
        } ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-2.5'
            : 'bg-white/80 backdrop-blur-md border-b border-[#0B1F3A]/6 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 xl:gap-6 h-14">
            {/* Logo */}
            <motion.a
              href="#home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2.5 flex-shrink-0 group min-w-0"
            >
              <Logo
                size="md"
                variant="light"
                className="group-hover:scale-105 transition-transform duration-300"
              />
              <div className="hidden sm:flex flex-col justify-center min-w-0">
                <span className="font-extrabold text-sm lg:text-base leading-none tracking-tight text-[#0B1F3A] truncate">
                  United Immigration
                </span>
                <span className="text-[9px] font-bold tracking-[0.22em] mt-0.5 text-[#D4A24C]">SERVICES</span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-0.5 xl:gap-1 min-w-0">
              {navLinks.map((link, index) => (
                <div
                  key={link.href}
                  className="relative flex-shrink-0"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <motion.a
                    href={link.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="flex items-center gap-1 px-2.5 xl:px-3.5 py-2 rounded-full text-[13px] xl:text-sm font-bold text-[#0B1F3A]/80 hover:text-[#0B1F3A] transition-all duration-300 relative group whitespace-nowrap"
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    )}
                    <span className="absolute bottom-0.5 left-2.5 right-2.5 xl:left-3.5 xl:right-3.5 h-[2px] bg-[#D4A24C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
                  </motion.a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 12, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100/50 py-2 z-50 overflow-hidden"
                      >
                        {link.dropdown.map((item) => (
                          <a
                            key={item}
                            href={link.href}
                            className="block px-5 py-2.5 text-sm text-gray-700 hover:bg-[#F5EFE6] hover:text-[#0B1F3A] font-semibold transition-colors relative overflow-hidden group/item"
                          >
                            <span className="relative z-10">{item}</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#D4A24C]/10 to-transparent translate-x-[-100%] group-hover/item:translate-x-0 transition-transform duration-300 ease-out" />
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0 ml-auto">
              {!showAnnouncement && (
                <a
                  href="tel:+917710705551"
                  className="hidden xl:flex items-center gap-2 text-sm font-bold text-[#0B1F3A] hover:text-[#D4A24C] transition-colors group whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-[#D4A24C] group-hover:scale-110 transition-transform" />
                  <span>+91 77107 05551</span>
                </a>
              )}
              <Button
                className="bg-gradient-to-r from-[#D4A24C] to-[#B8892E] hover:from-[#B8892E] hover:to-[#D4A24C] text-white px-4 xl:px-6 h-10 xl:h-11 text-sm font-bold shadow-[0_8px_20px_-6px_rgba(212,162,76,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(212,162,76,0.6)] rounded-full transition-all duration-300 whitespace-nowrap hover:-translate-y-0.5"
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <span className="hidden xl:inline">Book Free Consultation</span>
                <span className="xl:hidden">Free Consult</span>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors text-[#0B1F3A]"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/98 backdrop-blur-2xl border-t border-gray-100 shadow-2xl absolute w-full left-0 top-full"
            >
              <div className="px-6 py-6 space-y-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-4 py-3.5 rounded-xl text-gray-800 hover:text-[#0B1F3A] hover:bg-[#F5EFE6] transition-all font-bold text-lg"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-6 mt-2 border-t border-gray-100 space-y-4">
                  <a
                    href="tel:+917710705551"
                    className="flex items-center justify-center space-x-2 px-4 py-3.5 bg-[#F5EFE6] rounded-xl text-[#0B1F3A] font-bold"
                  >
                    <Phone className="w-5 h-5 text-[#D4A24C]" />
                    <span>+91 77107 05551</span>
                  </a>
                  <Button
                    className="w-full bg-gradient-to-r from-[#D4A24C] to-[#B8892E] text-white py-6 text-lg font-bold rounded-xl shadow-lg"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Book Free Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
