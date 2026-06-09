import { Toaster } from './components/ui/sonner';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { CountriesSection } from './components/CountriesSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { CostCalculator } from './components/CostCalculator';
import { TrustSection } from './components/TrustSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ApplicationTracker } from './components/ApplicationTracker';
import { FAQ } from './components/FAQ';
import { ContactSection } from './components/ContactSection';
import { SocialMediaSection } from './components/SocialMediaSection';
import { Footer } from './components/Footer';
import { AIChatbot } from './components/AIChatbot';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF7F2] overflow-x-hidden">
      {/* Navigation */}
      <Navigation />

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

      {/* Cost Calculator */}
      <CostCalculator />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Track Application */}
      <ApplicationTracker />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Section */}
      <ContactSection />

      {/* Social Media Section */}
      <SocialMediaSection />

      {/* Footer */}
      <Footer />

      {/* AI Chatbot */}
      <AIChatbot />

      {/* Toast Notifications */}
      <Toaster position="top-right" />
    </div>
  );
}
