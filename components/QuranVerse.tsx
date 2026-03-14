import React, { useEffect, useRef, useState } from 'react';

const QuranVerse: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const StarPath = "M100 0 L120 80 L200 100 L120 120 L100 200 L80 120 L0 100 L80 80 Z";

  return (
    <section 
      ref={sectionRef}
      className="relative py-12 md:py-20 overflow-hidden bg-white border-y border-ns-warmgrey"
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-ns-warmgrey/60 rounded-full blur-[80px] animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-ns-mauve/5 rounded-full blur-[60px] animate-pulse" style={{ animationDuration: '15s', animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-3xl relative z-10 text-center">
        <div 
          className={`transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
          }`}
        >
          <div className="mb-6">
             <div className="flex justify-center items-center gap-3 mb-6">
                <div className="w-8 h-px bg-ns-plum/20"></div>
                <span className="text-ns-plum text-[9px] md:text-xs font-bold uppercase tracking-[0.4em] block">Ar-Rum 30:21</span>
                <div className="w-8 h-px bg-ns-plum/20"></div>
             </div>
             
             <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-snug text-ns-plum mb-6 px-2 select-none tracking-wide">
               وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً
             </h3>
          </div>
          
          <div className="relative inline-block px-4">
            <p className="text-base md:text-xl font-light text-ns-dark/80 leading-relaxed italic max-w-2xl mx-auto">
              "And of His signs is that He created for you from yourselves mates that you may find tranquillity in them; and He placed between you affection and mercy."
            </p>
            
            <div className="mt-8 flex justify-center items-center gap-4">
              <div className="w-1.5 h-1.5 bg-ns-plum/20 rounded-full"></div>
              <svg viewBox="0 0 200 200" className="w-6 h-6 text-ns-plum/30 animate-pulse" fill="currentColor">
                <path d={StarPath} />
              </svg>
              <div className="w-1.5 h-1.5 bg-ns-plum/20 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuranVerse;