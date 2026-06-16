import { useState, useEffect } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CountriesSection } from './components/CountriesSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { TrustSection } from './components/TrustSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { Footer } from './components/Footer';
import { AIChatbot } from './components/AIChatbot';

import { CanadaStudyVisa } from './components/CanadaStudyVisa';
import { UkStudyVisa } from './components/UkStudyVisa';
import { AustraliaStudyVisa } from './components/AustraliaStudyVisa';
import { UsaStudyVisa } from './components/UsaStudyVisa';
import { EuropeStudyVisa } from './components/EuropeStudyVisa';
import { VisitorVisa } from './components/VisitorVisa';
import { SpousalVisa } from './components/SpousalVisa';
import { AboutUs } from './components/AboutUs';
import { Blog } from './components/Blog';
import { ContactUsPage } from './components/ContactUsPage';
import { NewZealandStudyVisa } from './components/NewZealandStudyVisa';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const renderContent = () => {
    switch (currentHash) {
      case '#/study-visa/canada':
        return <CanadaStudyVisa />;
      case '#/study-visa/uk':
        return <UkStudyVisa />;
      case '#/study-visa/australia':
        return <AustraliaStudyVisa />;
      case '#/study-visa/usa':
        return <UsaStudyVisa />;
      case '#/study-visa/europe':
        return <EuropeStudyVisa />;
      case '#/study-visa/new-zealand':
        return <NewZealandStudyVisa />;
      case '#/visitor-visa':
        return <VisitorVisa />;
      case '#/spousal-visa':
        return <SpousalVisa />;
      case '#/about':
        return <AboutUs />;
      case '#/blog':
        return <Blog />;
      case '#/contact':
        return <ContactUsPage />;
      default:
        // Main Home Landing Page
        return (
          <>
            {/* Hero Section */}
            <HeroSection />

            {/* Countries Section */}
            <CountriesSection />

            {/* Services Section */}
            <ServicesSection />

            {/* How It Works - Process Section */}
            <ProcessSection />

            {/* Why Choose Us */}
            <WhyChooseUs />

            {/* Trust & Credibility Section */}
            <TrustSection />

            {/* Testimonials Section */}
            <TestimonialsSection />

            {/* FAQ Section */}
            <FAQ />

            {/* Contact Section */}
            <ContactSection />

            {/* Social Media Section */}
            <SocialMediaSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

      {/* Main Page Routing Content */}
      {renderContent()}

      {/* Footer */}
      <Footer />

      {/* AI Chatbot */}
      <AIChatbot />

      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </div>
  );
}
