import React from 'react';

const MatchSection: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599341642289-49f3e439241b?q=80&w=2070&auto=format&fit=crop" 
          alt="Islamic Marriage Couple" 
          className="w-full h-full object-cover"
        />
        {/* Dark sophisticated overlay for superior text readability and atmosphere */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 text-center relative z-10 max-w-5xl">
        {/* Main Heading from Screenshot */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] drop-shadow-2xl">
          Match by Deen, Manners <br className="hidden md:block" />
          Marry by Sunnah
        </h2>
        
        {/* Subheading/Description from Screenshot */}
        <p className="text-lg md:text-xl text-white/70 mb-12 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          A clean, secure, and faith-driven platform for Muslims who fear Allah in seeking a sincere, family-centered marriage rooted in Faith, Manners & Purpose!
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button className="w-full sm:w-auto px-14 py-6 bg-gradient-to-r from-[#A855F7] to-ns-accent text-white rounded-full font-bold text-lg shadow-[0_20px_50px_rgba(236,72,153,0.3)] hover:opacity-90 hover:-translate-y-1 transition-all active:scale-95">
            Find your Match
          </button>
          <button className="w-full sm:w-auto px-14 py-6 bg-white text-ns-charcoal rounded-full font-bold text-lg shadow-2xl hover:bg-ns-sand transition-all hover:-translate-y-1 active:scale-95">
            Join the Waitlist
          </button>
        </div>
      </div>

      {/* Decorative gradient fade at bottom to transition to next section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent opacity-20"></div>
    </section>
  );
};

export default MatchSection;