
import React from 'react';
import { Heart, EyeOff, Users, CheckCircle, Scale, Sparkles } from 'lucide-react';

const Approach: React.FC = () => {
  const pillars = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Intent-driven only",
      desc: "Every registration is vetted for sincerity and readiness for marriage.",
      color: "from-ns-plum to-ns-plum/50",
      lightColor: "bg-ns-plum/10",
      accent: "text-ns-plum"
    },
    {
      icon: <Scale className="w-8 h-8" />,
      title: "Deen First",
      desc: "Matches guided by Deen, character, and life compatibility.",
      color: "from-ns-plum to-ns-mauve",
      lightColor: "bg-ns-plum/10",
      accent: "text-ns-plum"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Family Involvement",
      desc: "We encourage Mahrams and families to be involved from Day 1.",
      color: "from-ns-sand to-ns-sand/50",
      lightColor: "bg-ns-sand/30",
      accent: "text-ns-plum"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Privacy & Adab",
      desc: "Highest standards of data security and respectful interaction.",
      color: "from-ns-mauve to-ns-sand",
      lightColor: "bg-ns-mauve/15",
      accent: "text-ns-plum"
    }
  ];

  return (
    <section id="our-approach" className="pt-12 pb-24 md:pt-20 md:pb-32 -mt-4 md:-mt-8 bg-ns-warmgrey relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none islamic-pattern"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ns-white text-ns-mauve text-[11px] font-bold uppercase tracking-[0.3em] mb-6 border border-ns-mauve/20 shadow-sm">
            <Sparkles className="w-4 h-4" />
            Our Foundation
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-ns-plum mb-6 leading-[1.1]">
            Built on <span className="text-ns-mauve italic">Amanah.</span>
          </h2>
          <p className="text-ns-plum text-lg leading-relaxed max-w-2xl mx-auto opacity-80 font-medium">
            We move away from the 'marketplace' mindset. Our process is designed to protect the hearts and dignity of every believer.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-[2.5rem] p-8 md:p-10 border border-ns-plum/5 shadow-[0_15px_40px_-15px_rgba(75,46,93,0.15)] hover:shadow-[0_25px_60px_-20px_rgba(75,46,93,0.2)] hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center overflow-hidden"
            >
              <div className="absolute inset-0 opacity-[0.05] pointer-events-none islamic-pattern scale-50 origin-top-left"></div>
              <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${pillar.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              <div className={`w-20 h-20 ${pillar.lightColor} rounded-3xl flex items-center justify-center ${pillar.accent} mb-8 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-inner border border-white`}>
                {pillar.icon}
              </div>

              <h3 className="text-xl font-bold mb-4 text-ns-plum group-hover:text-ns-mauve transition-colors">
                {pillar.title}
              </h3>

              <p className="text-sm text-ns-dark leading-relaxed italic relative z-10 font-medium opacity-70">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
