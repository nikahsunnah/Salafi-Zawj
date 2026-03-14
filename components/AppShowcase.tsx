import React, { useState } from 'react';
import { Heart, Filter, ShieldCheck, ArrowRight, UserCheck, MessageSquare } from 'lucide-react';

const features = [
  {
    id: 0,
    title: "Spiritual Alignment",
    description: "Match with those who share your deen level, aqeedah, and commitment to the Sunnah.",
    icon: <Heart className="w-5 h-5" />,
    bgColor: "bg-ns-plum/5",
    activeColor: "bg-ns-plum",
    accentBorder: "border-ns-plum/20",
    screenTitle: "Compatibility"
  },
  {
    id: 1,
    title: "Guided Introductions",
    description: "Our platform ensures every conversation starts with clear intent and respectful adab.",
    icon: <MessageSquare className="w-5 h-5" />,
    bgColor: "bg-ns-mauve/5",
    activeColor: "bg-ns-mauve",
    accentBorder: "border-ns-mauve/20",
    screenTitle: "Refine Search"
  },
  {
    id: 2,
    title: "Wali Access Portal",
    description: "A dedicated portal for guardians to oversee introductions, ensuring safety and barakah.",
    icon: <ShieldCheck className="w-5 h-5" />,
    bgColor: "bg-ns-sand/10",
    activeColor: "bg-ns-plum",
    accentBorder: "border-ns-sand/40",
    screenTitle: "Wali Access"
  }
];

const PhoneScreenContent = ({ activeIndex }: { activeIndex: number }) => {
  const current = features[activeIndex];
  
  return (
    <div className="w-full h-full bg-white flex flex-col relative overflow-hidden transition-colors duration-500">
      <div className="bg-ns-plum text-white pt-10 pb-4 px-5 flex justify-between items-center shrink-0">
        <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M15 18l-6-6 6-6"/></svg>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest">{current.screenTitle}</span>
        <div className="w-6 h-6 flex items-center justify-end opacity-50">
           <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col items-center overflow-y-auto bg-ns-warmgrey/20">
        {activeIndex === 2 ? (
          <div key="wali" className="w-full h-full animate-in fade-in slide-in-from-right-4 duration-500">
             <div className="bg-ns-plum text-white rounded-2xl p-4 mb-4 shadow-lg">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-ns-sand flex items-center justify-center text-ns-plum text-xs font-bold">W</div>
                  <div>
                    <p className="text-[10px] font-bold">Guardian Access</p>
                    <p className="text-[8px] opacity-70">Overseeingintroductions</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full w-3/4 bg-ns-sand"></div>
                  </div>
                  <p className="text-[7px] font-medium opacity-80 italic">Monitoring: <span className="font-bold">Sister Amina</span></p>
                </div>
             </div>
             <div className="space-y-2">
               {[1, 2].map(i => (
                 <div key={i} className="p-3 bg-white border border-ns-plum/5 rounded-xl shadow-sm flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-ns-warmgrey flex items-center justify-center">
                      <ShieldCheck className="w-3 h-3 text-ns-plum/20" />
                    </div>
                    <div className="flex-1">
                      <div className="h-1.5 w-16 bg-ns-warmgrey rounded mb-1"></div>
                      <div className="h-1 w-24 bg-ns-warmgrey/50 rounded"></div>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        ) : activeIndex === 1 ? (
          <div key="filters" className="w-full h-full animate-in fade-in slide-in-from-right-4 duration-500">
            <h4 className="text-[11px] font-bold text-ns-plum mb-4 uppercase tracking-wider">Sound Vetting</h4>
            <div className="space-y-4">
              {['Location', 'Deen Commitment', 'Sincere Intent'].map((label, i) => (
                <div key={label} className="space-y-1.5">
                  <div className="flex justify-between text-[8px] font-bold text-ns-plum/60">
                    <span>{label}</span>
                    <span className="text-ns-mauve">Verified</span>
                  </div>
                  <div className="h-8 bg-white rounded-lg border border-ns-plum/10 flex items-center px-3 justify-between shadow-sm">
                    <div className="h-2 w-20 bg-ns-warmgrey rounded-full"></div>
                    <ArrowRight className="w-2 h-2 text-ns-mauve" />
                  </div>
                </div>
              ))}
              <div className="pt-2">
                 <div className="w-full py-3 bg-ns-plum rounded-xl flex items-center justify-center text-[10px] font-bold text-white shadow-lg">
                   Find My Match
                 </div>
              </div>
            </div>
          </div>
        ) : (
          <div key="profile" className="w-full h-full animate-in fade-in slide-in-from-right-4 duration-500 flex flex-col items-center">
            <div className="relative mb-6">
               <div className="w-28 h-28 rounded-full border-4 border-ns-sand p-1 relative shadow-xl">
                  <div className="w-full h-full rounded-full bg-ns-plum/10 flex items-end justify-center overflow-hidden">
                     <svg viewBox="0 0 100 100" className="w-24 h-24">
                        <circle cx="50" cy="40" r="16" fill="#F3F1EE" />
                        <path d="M30 30 Q50 10 70 30 L70 100 L30 100 Z" fill="#4B2E5D" />
                     </svg>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-ns-mauve text-white text-[9px] font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                    98% Sincerity
                  </div>
               </div>
            </div>
            <h3 className="text-lg font-serif font-bold text-ns-plum mb-1">Maryam B.</h3>
            <p className="text-[8px] text-ns-dark/40 uppercase tracking-[0.2em] mb-4">London, United Kingdom</p>
            <div className="grid grid-cols-2 gap-2 w-full">
              {['Athari Creed', 'Family-first', 'Modest'].map(tag => (
                <div key={tag} className="px-2 py-2 bg-white border border-ns-plum/5 rounded-lg text-center text-[7px] font-bold text-ns-plum shadow-sm">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const AppShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="the-app" className="py-24 md:py-32 bg-ns-white overflow-hidden relative border-t border-ns-warmgrey">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ns-sand/10 rounded-full blur-[100px] -z-10"></div>
      
      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ns-plum/5 text-ns-plum text-[9px] font-bold uppercase tracking-[0.2em] mb-4 border border-ns-plum/10">
            Digital Sanctuary
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-ns-plum mb-6 leading-tight">
            Designed for <br />
            <span className="text-ns-mauve italic">Sound Introduction.</span>
          </h2>
          <p className="text-lg text-ns-dark/60 leading-relaxed font-medium">
            No endless swiping. No marketplace mindset. Just a refined interface designed for the seeker of truth.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center justify-center">
          <div className="w-full lg:w-[45%] space-y-4">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className={`group p-8 rounded-[2.5rem] border transition-all duration-500 ease-out cursor-pointer relative overflow-hidden
                  ${activeIndex === idx 
                    ? 'bg-white border-ns-plum shadow-2xl shadow-ns-plum/10 -translate-y-1 scale-[1.02]' 
                    : 'bg-ns-warmgrey/30 border-ns-plum/5 hover:border-ns-plum/20 shadow-sm'}
                `}
              >
                <div className="flex gap-6 items-center relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 ${activeIndex === idx ? 'scale-110 shadow-lg bg-ns-plum text-white' : 'bg-white text-ns-plum/40 border border-ns-plum/5'}`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold mb-1 transition-colors ${activeIndex === idx ? 'text-ns-plum' : 'text-ns-plum/60'}`}>
                      {feature.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-opacity duration-300 ${activeIndex === idx ? 'text-ns-dark/80' : 'text-ns-dark/40'}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="w-full lg:w-[45%] flex justify-center items-center">
             <div className="relative w-full max-w-[340px] flex items-center justify-center">
                <div className="absolute -inset-10 bg-ns-sand/20 blur-[80px] rounded-full"></div>
                
                <div className="relative z-10 w-[280px] h-[580px] bg-ns-plum rounded-[3.5rem] p-3 shadow-[0_60px_120px_-20px_rgba(75,46,93,0.3)] border-[8px] border-ns-plum ring-1 ring-white/10 overflow-hidden">
                   <div className="w-full h-full rounded-[2.8rem] overflow-hidden bg-white shadow-inner relative z-20">
                      <PhoneScreenContent activeIndex={activeIndex} />
                   </div>
                   {/* Reflection effect */}
                   <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-30"></div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;