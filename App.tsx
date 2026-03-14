
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VisionSection from './components/VisionSection';
import Approach from './components/Approach';
import TrustMetrics from './components/TrustMetrics';
import StepProcess from './components/StepProcess';
import SuccessGallery from './components/SuccessGallery';
import Testimonials from './components/Testimonials';
import Qualifiers from './components/Qualifiers';
import Articles from './components/Articles';
import FreeGuidebook from './components/FreeGuidebook';
import WaitlistSection from './components/WaitlistSection';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import RegistrationModal from './components/RegistrationModal';

const AtmosphericBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-20">
      {/* Soft moving atmospheric orbs for a premium depth look */}
      <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-ns-sand/15 rounded-full blur-[120px] animate-aura"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-ns-plum/10 rounded-full blur-[120px] animate-aura" style={{ animationDelay: '-5s' }}></div>
      <div className="absolute top-[20%] right-[-5%] w-[45%] h-[45%] bg-ns-mauve/15 rounded-full blur-[100px] animate-aura" style={{ animationDelay: '-10s' }}></div>
      <div className="absolute bottom-[20%] left-[5%] w-[35%] h-[35%] bg-ns-sand/10 rounded-full blur-[80px] animate-aura" style={{ animationDelay: '-15s' }}></div>
      
      {/* Texture Layer */}
      <div className="absolute inset-0 opacity-[0.04] islamic-pattern"></div>
    </div>
  );
};

const App: React.FC = () => {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 600);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative">
      <AtmosphericBackground />
      <Header onOpenRegister={openModal} />
      
      <main>
        <Hero onOpenRegister={openModal} />
        <VisionSection />
        <WaitlistSection />
        <StepProcess onOpenRegister={openModal} />
        <Approach />
        <TrustMetrics onOpenRegister={openModal} />
        <Testimonials />
        <SuccessGallery onOpenRegister={openModal} />
        <Qualifiers />
        <Articles />
        <FreeGuidebook />
        <FAQ />
        <FinalCTA onOpenRegister={openModal} />
      </main>

      <Footer />

      <div 
        className={`fixed bottom-0 left-0 right-0 p-4 bg-ns-white/90 backdrop-blur-md border-t border-ns-warmgrey z-50 transition-all duration-300 transform md:hidden ${
          showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      >
        <button 
          onClick={openModal}
          className="btn-primary-cta w-full py-4 text-white rounded-xl font-bold text-lg shadow-lg"
        >
          Find Your Match
        </button>
      </div>

      <RegistrationModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default App;
