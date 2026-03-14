
import React, { useEffect, useState, useRef } from 'react';
import { Users, ShieldCheck, Heart, ArrowRight, UserPlus } from 'lucide-react';

interface TrustMetricsProps {
  onOpenRegister: () => void;
}

const TrustMetrics: React.FC<TrustMetricsProps> = ({ onOpenRegister }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const metrics = [
    {
      icon: <Users className="w-10 h-10" />,
      value: "20,000+",
      label: "Strong Community",
      subLabel: "A growing, values-aligned Muslim community",
      animation: "animate-float-slow",
      bg: "bg-ns-plum/10",
      text: "text-ns-plum",
      border: "border-ns-plum/20"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      value: "5,500+",
      label: "Verified Profiles",
      subLabel: "Profiles reviewed with seriousness and intent",
      animation: "animate-float-medium",
      bg: "bg-ns-mauve/20",
      text: "text-ns-plum",
      border: "border-ns-mauve/30"
    },
    {
      icon: <Heart className="w-10 h-10" />,
      value: "600+",
      label: "Successful Marriages",
      subLabel: "Facilitated with dignity, privacy, and Sunnah",
      animation: "animate-float-fast",
      bg: "bg-ns-sand/30",
      text: "text-ns-plum",
      border: "border-ns-sand/50"
    }
  ];

  return (
    <section id="serving-the-ummah" ref={sectionRef} className="py-16 md:py-24 bg-ns-white relative overflow-hidden border-y border-ns-warmgrey">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex justify-center items-center gap-4 mb-4">
            <div className="w-12 h-px bg-ns-sand/30"></div>
            <span className="text-ns-plum text-xs font-bold uppercase tracking-[0.4em]">Serving the Ummah</span>
            <div className="w-12 h-px bg-ns-sand/30"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-ns-plum mb-4 leading-tight">
            Trusted by Thousands <br className="hidden md:block" /> 
            <span className="text-ns-mauve italic">for over 5 years.</span>
          </h2>
          
          <p className="text-ns-dark/60 text-lg max-w-2xl mx-auto leading-relaxed">
            By the permission of Allah, our work is reflected in the trust placed in us by thousands of families seeking a pure path to marriage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
          {metrics.map((metric, idx) => (
            <div 
              key={idx} 
              className={`text-center transition-all duration-1000 delay-${idx * 200} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className={`mx-auto w-24 h-24 ${metric.bg} rounded-[2rem] flex items-center justify-center ${metric.text} mb-6 shadow-sm border ${metric.border} ${metric.animation} transition-transform hover:scale-110 duration-500`}>
                {metric.icon}
              </div>
              <div className="mb-2">
                <span className="block text-4xl md:text-5xl font-serif font-bold text-ns-plum mb-1">{metric.value}</span>
                <h3 className="text-lg font-bold text-ns-dark">{metric.label}</h3>
              </div>
              <p className="text-ns-dark/50 text-xs leading-relaxed italic max-w-[240px] mx-auto font-medium">
                {metric.subLabel}
              </p>
            </div>
          ))}
        </div>

        <div className={`flex justify-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button 
            onClick={onOpenRegister}
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-ns-plum text-ns-white rounded-full font-bold text-lg shadow-2xl shadow-ns-plum/20 hover:bg-ns-plum/90 hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center gap-3">
              <UserPlus className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
              <span>Register My Profile</span>
            </div>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrustMetrics;
