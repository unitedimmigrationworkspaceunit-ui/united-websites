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

  // Compact nav: Visitor/Spousal/Chandigarh grouped under "Services"
  const navLinks = [
    { label: 'Home', href: '#/' },
    { label: 'About Us', href: '#/about' },
    {
      label: 'Study Visa',
      href: '#/study-visa/canada',
      dropdown: [
        { label: '🇨🇦 Canada Study Visa', href: '#/study-visa/canada' },
        { label: '🇬🇧 UK Study Visa', href: '#/study-visa/uk' },
        { label: '🇦🇺 Australia Study Visa', href: '#/study-visa/australia' },
        { label: '🇺🇸 USA Study Visa', href: '#/study-visa/usa' },
        { label: '🌍 Europe Study Visa', href: '#/study-visa/europe' },
        { label: '🇳🇿 New Zealand Study Visa', href: '#/study-visa/new-zealand' },
      ],
    },
    {
      label: 'Services',
      href: '#/visitor-visa',
      dropdown: [
        { label: '✈️ Visitor Visa', href: '#/visitor-visa' },
        { label: '💑 Spousal Visa', href: '#/spousal-visa' },
      ],
    },
    { label: 'Blog', href: '#/blog' },
    { label: 'Contact Us', href: '#/contact' },
  ];

  const announcementH = showAnnouncement ? 32 : 0;

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
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center relative">
              <div className="flex items-center gap-2 sm:gap-4 tracking-wide text-center">
                <span className="hidden sm:inline">Free Consultation Available — Limited Slots</span>
                <span className="sm:hidden">Free Consultation — Limited Slots</span>
                <span className="w-1.5 h-1.5 bg-[#D4A24C] rounded-full animate-pulse" />
                <a href="tel:+917710705551" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Phone className="w-3 h-3" />
                  +91 77107 05551
                </a>
              </div>
              <button
                onClick={() => setShowAnnouncement(false)}
                className="absolute right-3 text-[#D4A24C]/60 hover:text-white p-1 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Nav */}
      <nav
        style={{ top: `${announcementH}px` }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/97 backdrop-blur-xl border-b border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-2'
            : 'bg-white/85 backdrop-blur-md border-b border-gray-200/50 py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-14">
            {/* Logo */}
            <a
              href="#/"
              className="flex items-center gap-2.5 flex-shrink-0 group mr-4"
            >
              <Logo size="md" variant="light" className="group-hover:scale-105 transition-transform duration-300" />
              <div className="hidden sm:flex flex-col justify-center">
                <span className="font-extrabold text-sm lg:text-[15px] leading-none tracking-tight text-[#0B1F3A]">
                  United Immigration
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] mt-0.5 text-[#D4A24C]">SERVICES</span>
              </div>
            </a>

            {/* Desktop Nav Links — centered */}
            <div className="hidden lg:flex flex-1 items-center justify-center gap-1">
              {navLinks.map((link, index) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <a
                    href={link.href}
                    className="flex items-center gap-1 px-3 py-2 rounded-full text-[13px] font-bold text-[#0B1F3A]/75 hover:text-[#0B1F3A] transition-all duration-200 relative group whitespace-nowrap"
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === link.label ? 'rotate-180 text-[#D4A24C]' : ''}`} />
                    )}
                    <span className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-[#D4A24C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-full" />
                  </a>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.96 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.12)] border border-gray-100 py-2 z-50"
                      >
                        {link.dropdown.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="flex items-center px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F5EFE6] hover:text-[#0B1F3A] font-semibold transition-colors gap-2"
                          >
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right side — phone + CTA */}
            <div className="hidden lg:flex items-center gap-3 ml-auto flex-shrink-0">
              <a
                href="tel:+917710705551"
                className="hidden xl:flex items-center gap-1.5 text-sm font-bold text-[#0B1F3A] hover:text-[#D4A24C] transition-colors whitespace-nowrap"
              >
                <Phone className="w-4 h-4 text-[#D4A24C]" />
                +91 77107 05551
              </a>
              <Button
                className="bg-gradient-to-r from-[#D4A24C] to-[#B8892E] hover:from-[#B8892E] hover:to-[#D4A24C] text-white px-5 h-10 text-sm font-bold rounded-full shadow-lg transition-all whitespace-nowrap"
                onClick={() => (window.location.hash = '#/contact')}
              >
                Book Free Consultation
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden ml-auto p-2.5 rounded-xl hover:bg-gray-100 transition-colors text-[#0B1F3A]"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
              className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 top-full max-h-[80vh] overflow-y-auto"
            >
              <div className="px-5 py-5 space-y-1">
                {navLinks.map((link) => (
                  <div key={link.label}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-[#0B1F3A] hover:bg-[#F5EFE6] font-bold text-[15px] transition-all"
                    >
                      {link.label}
                      {link.dropdown && <ChevronDown className="w-4 h-4 text-gray-400" />}
                    </a>
                    {link.dropdown && (
                      <div className="pl-5 pb-1 space-y-0.5 border-l-2 border-[#D4A24C]/20 ml-4 mt-0.5">
                        {link.dropdown.map((sub) => (
                          <a
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-[#F5EFE6] hover:text-[#0B1F3A] font-semibold text-sm transition-all"
                          >
                            {sub.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-4 mt-2 border-t border-gray-100 space-y-3">
                  <a
                    href="tel:+917710705551"
                    className="flex items-center justify-center gap-2 px-4 py-3.5 bg-[#FAF7F2] rounded-xl text-[#0B1F3A] font-bold"
                  >
                    <Phone className="w-4 h-4 text-[#D4A24C]" />
                    +91 77107 05551
                  </a>
                  <Button
                    className="w-full bg-gradient-to-r from-[#D4A24C] to-[#B8892E] text-white py-4 text-base font-bold rounded-xl shadow-lg"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.hash = '#/contact';
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
