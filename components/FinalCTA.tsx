
import React from 'react';
import { Sparkles, Moon, Star } from 'lucide-react';

interface FinalCTAProps {
  onOpenRegister: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenRegister }) => {
  return (
    <section className="py-20 md:py-32 bg-ns-plum relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-ns-dark/40 to-transparent"></div>
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none islamic-pattern"></div>
      <div className="absolute -bottom-20 -right-20 w-[30rem] h-[30rem] bg-ns-sand/15 rounded-full blur-[120px]"></div>
      
      {/* Floating Sparkles & More Glitter */}
      <Sparkles className="absolute top-[20%] left-[10%] text-ns-sand opacity-30 animate-twinkle" />
      <Sparkles className="absolute top-[40%] right-[10%] text-ns-mauve opacity-20 animate-twinkle" style={{ animationDelay: '0.8s' }} />
      <Sparkles className="absolute bottom-[20%] right-[15%] text-ns-sand opacity-40 animate-twinkle" style={{ animationDelay: '1.5s' }} />
      <Star className="absolute top-[30%] left-[5%] text-ns-sand/10 animate-pulse w-10 h-10" />
      
      <div className="container mx-auto px-4 md:px-8 text-center relative z-10 max-w-5xl">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif font-bold text-ns-white mb-8 leading-tight">
          Establish Your Home <br className="hidden md:block" /> 
          <span className="relative inline-block text-ns-mauve italic">
            the Sunnah Way.
            <svg className="absolute -bottom-3 left-0 w-full h-4 text-ns-mauve/40" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path d="M0,10 Q50,20 100,10" stroke="currentColor" strokeWidth="5" fill="transparent" />
            </svg>
          </span>
        </h2>
        
        <p className="text-ns-warmgrey text-lg md:text-2xl font-light mb-14 max-w-3xl mx-auto leading-relaxed opacity-90 italic">
          Join a sincere and premium community of seekers, where sound creed and prophetic manners are the only criteria for entry.
        </p>

        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button 
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-16 py-6 bg-ns-sand text-ns-plum rounded-2xl font-bold text-xl shadow-2xl shadow-ns-plum/40 hover:-translate-y-1 active:scale-95 transition-all"
          >
            Find Your Match
          </button>
          <button className="w-full sm:w-auto px-12 py-5 bg-ns-white/10 backdrop-blur-md text-ns-white border-2 border-ns-warmgrey/30 rounded-2xl font-bold text-lg hover:bg-ns-white/20 transition-all">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
