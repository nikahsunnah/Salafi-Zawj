
import React from 'react';
import { UserCircle, ShieldCheck, HeartHandshake, Users, Sparkles, Quote, ArrowRight, UserPlus } from 'lucide-react';

interface StepProcessProps {
  onOpenRegister: () => void;
}

const StepProcess: React.FC<StepProcessProps> = ({ onOpenRegister }) => {
  const steps = [
    {
      step: "STEP 1",
      title: "Create Your Profile",
      description: "Share your values, deen level, background, and what you seek in a spouse. Be thorough and sincere.",
      icon: <UserCircle className="w-6 h-6 md:w-8 md:h-8" />,
      bgColor: "bg-ns-plum",
      borderColor: "border-ns-plum",
      textColor: "text-ns-white",
      descColor: "text-ns-white/70"
    },
    {
      step: "STEP 2",
      title: "Get Verified",
      description: "Every profile is verified by admins for safety, with privacy-focused design and real-time moderation.",
      icon: <ShieldCheck className="w-6 h-6 md:w-8 md:h-8" />,
      bgColor: "bg-ns-sand",
      borderColor: "border-ns-sand",
      textColor: "text-ns-plum",
      descColor: "text-ns-plum/70"
    },
    {
      step: "STEP 3",
      title: "Send Interest",
      description: "Connect with serious intent—early wali introduction, no casual chatting to keep the process pure.",
      icon: <HeartHandshake className="w-6 h-6 md:w-8 md:h-8" />,
      bgColor: "bg-ns-mauve",
      borderColor: "border-ns-mauve",
      textColor: "text-ns-plum",
      descColor: "text-ns-plum/70"
    },
    {
      step: "STEP 4",
      title: "Family Involvement",
      description: "Involve your guardians early. We facilitate a transparent process where families interact respectfully.",
      icon: <Users className="w-6 h-6 md:w-8 md:h-8" />,
      bgColor: "bg-ns-warmgrey",
      borderColor: "border-ns-plum/10",
      textColor: "text-ns-plum",
      descColor: "text-ns-plum/70"
    },
    {
      step: "STEP 5",
      title: "Blessed Nikah",
      description: "Finalize your journey with clarity. Move forward with the blessing of Allah and dua of your families.",
      icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8" />,
      bgColor: "bg-ns-white",
      borderColor: "border-ns-sand",
      textColor: "text-ns-plum",
      descColor: "text-ns-plum/70"
    }
  ];

  return (
    <section id="the-journey" className="pt-16 pb-16 md:pt-24 md:pb-24 bg-ns-warmgrey relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          
          <div className="lg:w-1/2 lg:sticky lg:top-32 h-fit">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 mb-4">
                <div className="w-10 h-px bg-ns-plum/30"></div>
                <span className="text-ns-plum text-[10px] font-bold uppercase tracking-[0.4em]">The Journey</span>
              </div>
              
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-ns-plum mb-6 leading-[1.1]">
                The Journey of <br />
                <span className="text-ns-mauve italic">Sincerity.</span>
              </h2>
              
              <p className="text-lg text-ns-plum/70 mb-8 leading-relaxed font-medium">
                We've simplified the path to marriage while maintaining the highest standards of modesty and Shariah compliance.
              </p>
              
              <div className="hidden lg:block relative p-8 rounded-[2rem] bg-ns-white border-l-4 border-ns-plum shadow-lg group max-w-lg">
                <Quote className="absolute -top-3 -left-3 w-8 h-8 text-ns-plum/20 transition-transform group-hover:rotate-12" />
                <p className="text-base md:text-xl font-serif italic text-ns-plum leading-relaxed relative z-10">
                  "Our process ensures that every interaction is <span className="text-ns-mauve not-italic font-bold">purposeful</span>, protected, and aligned with our shared values."
                </p>
                <div className="mt-4 w-12 h-1 bg-ns-plum/10 rounded-full"></div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative space-y-4 pb-20">
            {steps.map((item, index) => (
              <div 
                key={index}
                className="sticky w-full"
                style={{ 
                  top: `calc(100px + ${index * 80}px)`,
                  zIndex: index + 1
                }}
              >
                <div className={`${item.bgColor} ${item.borderColor} border-2 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_50px_-15px_rgba(75,46,93,0.15)] h-auto min-h-[220px] flex flex-col relative overflow-hidden group`}>
                  <div className="absolute inset-0 opacity-[0.04] pointer-events-none islamic-pattern"></div>
                  
                  <div className="flex justify-between items-start relative z-10 mb-2 h-[54px]">
                    <div>
                      <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${item.textColor} opacity-60 mb-0.5 block`}>
                        {item.step}
                      </span>
                      <h3 className={`text-xl md:text-2xl font-serif font-bold ${item.textColor} leading-tight`}>
                        {item.title}
                      </h3>
                    </div>
                    <div className={`${item.textColor} opacity-30 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110`}>
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="mt-1 relative z-10">
                    <p className={`${item.descColor} text-sm md:text-lg leading-relaxed max-w-sm font-medium`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-12 flex justify-center">
          <button 
            onClick={onOpenRegister}
            className="btn-primary-cta w-full sm:w-auto px-12 py-5 text-lg flex items-center justify-center gap-3 group relative z-10 shadow-2xl hover:scale-105 active:scale-95 transition-all"
          >
            <UserPlus className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            <span>Create your profile</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StepProcess;
