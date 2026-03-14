
import React from 'react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Register with Intention",
      desc: "Sign up and complete our values-based assessment designed to reveal your Deen and personality."
    },
    {
      number: "02",
      title: "Detailed Halal Profile",
      desc: "Our team reviews every profile manually. We ensure photos are modest and intentions are clear."
    },
    {
      number: "03",
      title: "Guided Compatibility",
      desc: "We present potential spouses based on deep compatibility and shared Islamic values."
    },
    {
      number: "04",
      title: "Family & Nikah",
      desc: "Transition into formal family introductions with our support, leading to a blessed union."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-ns-sand relative overflow-hidden">
      {/* Decorative SVG Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none islamic-pattern"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 text-ns-deepgreen">How It Works</h2>
          <p className="text-ns-charcoal/70 text-lg">A simple yet profound journey toward marriage.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 relative">
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-ns-deepgreen/10 -z-0"></div>
          
          {steps.map((step, idx) => (
            <div key={idx} className="relative bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-white/40 shadow-sm z-10 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-ns-deepgreen text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-md shadow-ns-deepgreen/20">
                {step.number}
              </div>
              <h3 className="text-xl font-bold mb-4 text-ns-deepgreen">{step.title}</h3>
              <p className="text-ns-charcoal/70 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
