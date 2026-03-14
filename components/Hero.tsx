
import React from 'react';
import { ShieldCheck, Users, UserCheck, ArrowRight, Shield, Star, Moon } from 'lucide-react';

interface HeroProps {
  onOpenRegister: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenRegister }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-ns-warmgrey">
      {/* Subtle Scattered Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <Star 
          className="absolute top-[15%] left-[8%] text-ns-sand animate-twinkle opacity-30 w-4 h-4" 
          strokeWidth={1}
          fill="currentColor"
        />
        <Moon 
          className="absolute top-[12%] right-[10%] text-ns-mauve animate-twinkle opacity-20 w-8 h-8 rotate-[15deg]" 
          style={{ animationDelay: '1.5s' }}
          strokeWidth={1.5}
        />
        <Star 
          className="absolute bottom-[25%] left-[12%] text-ns-sand animate-twinkle opacity-30 w-3 h-3" 
          style={{ animationDelay: '2.5s' }}
          strokeWidth={1}
          fill="currentColor"
        />
        <Star 
          className="absolute top-[45%] right-[15%] text-ns-sand animate-twinkle opacity-30 w-5 h-5" 
          style={{ animationDelay: '0.8s' }}
          strokeWidth={1}
          fill="currentColor"
        />
      </div>

      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ns-plum/5 text-ns-plum text-[10px] font-bold uppercase tracking-[0.2em] mb-8 animate-reveal border border-ns-plum/10 shadow-sm">
            <Shield className="w-3.5 h-3.5 text-ns-mauve" />
            For Seekers upon the Salafi Manhaj
          </div>
          
          <h1 className="text-5xl md:text-8xl font-serif font-bold leading-[1.05] mb-8 text-ns-plum text-balance animate-reveal [animation-delay:100ms]">
            Marriage Upon <br />
            <span className="text-ns-mauve italic underline decoration-ns-sand/60 underline-offset-8">the Sunnah!</span>
          </h1>
          
          <p className="text-lg md:text-xl text-ns-dark mb-12 max-w-2xl mx-auto leading-relaxed animate-reveal [animation-delay:200ms] font-medium opacity-80">
            A clean, technology-forward platform for finding your spouse <br className="hidden md:block" /> with sound methodology and family-first vetting.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center mb-16 animate-reveal [animation-delay:300ms]">
            <button 
              onClick={onOpenRegister}
              className="btn-primary-cta w-full sm:w-auto px-12 py-5 text-lg flex items-center justify-center gap-3 group relative z-10"
            >
              <span>Explore Profiles</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('the-journey')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-12 py-5 text-lg border-2 border-ns-sand/40 bg-white/40 backdrop-blur-sm text-ns-plum font-bold rounded-xl hover:bg-ns-sand hover:text-white transition-all shadow-sm"
            >
              How it Works
            </button>
          </div>

          {/* Custom Decorative Divider from Image */}
          <div className="flex items-center justify-center gap-4 mb-12 animate-reveal [animation-delay:350ms]">
            <div className="h-px w-16 md:w-32 bg-gradient-to-l from-ns-plum/20 to-transparent"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-ns-mauve/40"></div>
            <div className="text-ns-mauve/60">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
              </svg>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-ns-mauve/40"></div>
            <div className="h-px w-16 md:w-32 bg-gradient-to-r from-ns-plum/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-4 animate-reveal [animation-delay:400ms] max-w-2xl mx-auto">
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-ns-plum text-white flex items-center justify-center border border-ns-plum/10 shadow-sm transition-transform hover:scale-110 duration-500">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-ns-plum/70">Sahih Aqeedah</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-ns-mauve text-white flex items-center justify-center border border-ns-mauve/10 shadow-sm transition-transform hover:scale-110 duration-500">
                <Users className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-ns-plum/70">Family Involved</span>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-ns-sand text-ns-plum flex items-center justify-center border border-ns-sand/10 shadow-sm transition-transform hover:scale-110 duration-500">
                <UserCheck className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-ns-plum/70">Verified Only</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Minimal background gradients */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-ns-sand opacity-[0.08] rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-ns-plum opacity-[0.04] rounded-full blur-[120px] pointer-events-none"></div>
    </section>
  );
};

export default Hero;
