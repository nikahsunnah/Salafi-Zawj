
import React from 'react';

const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-ns-deepgreen text-ns-offwhite relative overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-10 leading-tight">
              Why Nikah <br /> Sunnah Exists
            </h2>
            <p className="text-ns-sand/80 text-lg mb-10 leading-relaxed max-w-lg">
              In a digital world that commodifies human connection, the sacred path to marriage has often been reduced to fleeting moments and superficial choices.
            </p>
            
            <div className="space-y-6">
              {[
                "The noise of swipe culture and endless browsing",
                "Platforms that prioritize growth over values",
                "A lack of meaningful family involvement",
                "Cultural filters overriding Islamic character"
              ].map((text, i) => (
                <div key={i} className="flex gap-4 items-start group">
                  <div className="mt-2 w-2 h-2 rounded-full bg-ns-accent shrink-0 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(236,72,153,0.5)]"></div>
                  <p className="text-ns-sand/70 text-lg font-light">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-ns-charcoal/50 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-16 border border-white/10 shadow-3xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-ns-accent/10 rounded-full blur-3xl group-hover:bg-ns-accent/20 transition-all"></div>
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8 italic text-ns-accent leading-snug">
              "Nikah Sunnah was created to restore the Islamic approach to marriage."
            </h3>
            <p className="text-ns-sand/80 leading-relaxed mb-10 text-xl font-light">
              We believe marriage is Ibadah (worship), not a mere transaction. We've built a sanctuary for those who seek spouses with Taqwa, dignity, and the blessing of their families. 
            </p>
            <div className="h-0.5 w-24 bg-gradient-to-r from-ns-accent to-transparent mb-6"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-ns-sand/30">Founded on Amanah</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;