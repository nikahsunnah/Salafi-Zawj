
import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenRegister: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenRegister }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Why Nikah Salafi', href: '#why-nikah-salafi' },
    { name: 'How it works', href: '#the-journey' },
    { name: 'Success Stories', href: '#success-stories' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <header className="fixed top-0 z-[60] w-full px-4 md:px-8 py-4">
      <div className="container mx-auto">
        <nav className="glass rounded-xl px-6 md:px-8 py-3 flex justify-between items-center shadow-sm">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 group cursor-pointer" 
            onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
          >
            <div className="w-9 h-9 bg-ns-plum rounded-xl flex items-center justify-center shadow-md transition-transform group-hover:scale-105">
              <span className="text-white font-serif font-bold text-sm">NS</span>
            </div>
            <span className="text-lg font-serif font-bold tracking-tight text-ns-plum">Nikah Salafi</span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-[10px] font-bold uppercase tracking-widest text-ns-dark/60 hover:text-ns-plum transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={onOpenRegister}
              className="btn-accent-cta hidden sm:block px-8 py-2.5 text-xs tracking-wider"
            >
              Register Profile
            </button>

            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-ns-plum hover:bg-ns-warmgrey rounded-lg transition-all"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-x-4 top-24 transition-all duration-500 transform ${
          isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="glass rounded-2xl p-8 shadow-2xl flex flex-col gap-6 border border-ns-sand/30">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-widest text-ns-plum flex items-center justify-between"
            >
              {link.name}
              <ArrowRight className="w-4 h-4 opacity-30 text-ns-plum" />
            </a>
          ))}
          <button 
            onClick={() => {
              onOpenRegister();
              setIsMobileMenuOpen(false);
            }}
            className="btn-primary-cta w-full py-4 mt-4"
          >
            Register My Profile
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
