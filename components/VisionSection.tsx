import React from 'react';
import { Heart } from 'lucide-react';

const VisionSection: React.FC = () => {
  return (
    <section id="why-nikah-salafi" className="pt-4 pb-20 md:pt-6 md:pb-28 bg-ns-warmgrey overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl text-center relative z-10">
        <div className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-ns-white border border-ns-sand mb-10 shadow-sm">
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-ns-plum">
            Adhering to the Athar
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-serif font-bold leading-[1.1] mb-10 text-ns-plum text-balance">
          Restoring Marriage to the <br className="hidden md:block" />
          <span className="text-ns-mauve italic">Salaf's Methodology.</span>
        </h2>

        <p className="text-lg md:text-xl text-ns-dark max-w-4xl mx-auto leading-relaxed mb-16 font-medium italic opacity-90">
          Marriage is more than a social contract; it is half of one's Deen. We facilitate unions based on the pure Tawheed and the path of the Pious Predecessors.
        </p>

        <div className="relative pt-8 max-w-2xl mx-auto">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-16 bg-ns-plum rounded-2xl flex items-center justify-center shadow-2xl z-20 border-4 border-ns-white">
            <Heart className="w-8 h-8 text-ns-sand fill-ns-sand" />
          </div>

          <div className="bg-ns-plum border border-ns-sand/30 rounded-[3rem] p-10 md:p-14 relative overflow-hidden group shadow-2xl shadow-ns-plum/30">
            <div className="absolute top-0 right-0 w-40 h-40 bg-ns-sand/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-40"></div>
            
            <h3 className="text-2xl md:text-4xl font-serif font-bold italic text-white leading-[1.4] tracking-tight relative z-10 pt-6">
              “Nikah Salafi was created to <br />
              unite those seeking a spouse <br />
              upon the sound Manhaj.”
            </h3>

            <div className="absolute inset-0 opacity-[0.08] pointer-events-none islamic-pattern mix-blend-overlay"></div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-ns-sand rounded-full shadow-sm"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;