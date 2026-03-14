
import React from 'react';
import { CheckCheck, Heart, ShieldCheck, Sparkles, ArrowRight, Stars } from 'lucide-react';

const reviews = [
  {
    type: 'long',
    author: 'Brother Khalil',
    msg: "Assalamu'alaikum. I wanted to share that after 3 months on Nikah Salafi, I've found my spouse. What I loved most was the Wali involvement. It made the brother-to-family transition so natural.",
    time: '14:02',
    color: 'bg-ns-plum',
    tilt: 'rotate-0'
  },
  {
    type: 'short',
    author: 'Sister S.',
    msg: "Alhamdulillah! Just had our Nikah. Truly the most dignified experience I've had online.",
    time: '09:15',
    color: 'bg-ns-sand',
    tilt: 'rotate-0'
  },
  {
    type: 'medium',
    author: 'Abu Yusuf (Wali)',
    msg: "As a guardian, I appreciate the oversight. I could see the conversations and the profile details clearly.",
    time: '18:45',
    color: 'bg-ns-mauve',
    tilt: 'rotate-0'
  },
  {
    type: 'short',
    author: 'Fatima Z.',
    msg: "The personality assessment is so accurate. It saved me so much time filtering for values.",
    time: '21:30',
    color: 'bg-ns-plum',
    tilt: 'rotate-0'
  }
];

const ScreenshotCard: React.FC<{ review: typeof reviews[0] }> = ({ review }) => {
  return (
    <div className={`group relative transition-all duration-500 hover:z-30 hover:scale-[1.02] mb-8`}>
      <div className="bg-ns-white rounded-2xl p-6 shadow-[0_10px_40px_-15px_rgba(75,46,93,0.08)] border border-ns-warmgrey relative overflow-hidden">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-ns-warmgrey">
          <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-ns-white font-bold text-sm shadow-inner`}>
            {review.author[0]}
          </div>
          <div>
            <h4 className="text-xs font-bold text-ns-plum">{review.author}</h4>
            <p className="text-[10px] text-ns-plum/40 uppercase tracking-wider">Verified User</p>
          </div>
        </div>
        <div className="relative">
          <p className="text-sm text-ns-plum leading-relaxed relative z-10 italic font-medium">
            "{review.msg}"
          </p>
        </div>
        <div className="mt-4 flex items-center justify-end gap-1.5">
          <span className="text-[9px] font-bold text-ns-plum/30">{review.time}</span>
          <CheckCheck className="w-3.5 h-3.5 text-ns-plum" />
        </div>
      </div>
    </div>
  );
};

interface SuccessGalleryProps {
  onOpenRegister: () => void;
}

const SuccessGallery: React.FC<SuccessGalleryProps> = ({ onOpenRegister }) => {
  // Distribution as per requested layout:
  // Column 1: Brother Khalil, Sister S.
  const col1 = [reviews[0], reviews[1]];
  // Column 2: Abu Yusuf, Fatima Z.
  const col2 = [reviews[2], reviews[3]];
  // Column 3: Large Plum CTA
  const col3 = ['cta'];

  return (
    <section id="success-stories" className="py-24 md:py-32 success-pattern relative overflow-hidden border-y border-ns-warmgrey">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ns-plum/10 text-ns-plum text-[10px] font-bold uppercase tracking-widest mb-6 border border-ns-plum/20">
              Proof of Impact
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-ns-plum mb-6 leading-tight text-balance">
              A Wall of <br />
              <span className="text-ns-mauve italic">Answered Du'as.</span>
            </h2>
            <p className="text-lg text-ns-plum/70 leading-relaxed mb-8">
              We collect every "Alhamdulillah" we receive. These aren't just testimonials; they are the growing evidence that a Sunnah-aligned approach to marriage works.
            </p>
            <div className="flex items-center gap-12">
               <div>
                  <p className="text-4xl font-bold text-ns-plum">600+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ns-plum/50">Couples Married</p>
               </div>
               <div className="w-px h-10 bg-ns-plum/10"></div>
               <div>
                  <p className="text-4xl font-bold text-ns-plum">20k+</p>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-ns-plum/50">Community Members</p>
               </div>
            </div>
          </div>

          <div className="lg:w-1/2">
             <div className="bg-ns-plum rounded-3xl p-10 md:p-12 text-ns-white relative overflow-hidden shadow-2xl group border border-ns-white/5">
                <Heart className="w-10 h-10 text-ns-sand mb-6 fill-ns-sand animate-pulse" />
                <h3 className="text-xl md:text-2xl font-serif font-bold mb-8 italic leading-snug text-ns-white">
                  "We found each other through the assisted matching. The facilitators were like family to us."
                </h3>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ns-white/10 flex items-center justify-center border border-ns-white/20">
                    <ShieldCheck className="w-6 h-6 text-ns-sand" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-ns-white">Brother Haroon & Sister Layla</p>
                    <p className="text-[10px] text-ns-white/60 uppercase tracking-widest font-bold">Married October 2024</p>
                  </div>
                </div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none islamic-pattern"></div>
             </div>
          </div>
        </div>

        {/* Distributed Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {/* Column 1 */}
          <div className="flex flex-col">
            {col1.map((review, idx) => (
              typeof review !== 'string' && <ScreenshotCard key={`c1-${idx}`} review={review} />
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col">
            {col2.map((review, idx) => (
              typeof review !== 'string' && <ScreenshotCard key={`c2-${idx}`} review={review} />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col md:hidden lg:flex">
            {col3.map((item, idx) => (
              item === 'cta' ? (
                <div key="cta-card" className="mb-8 h-full">
                  <div className="relative group overflow-hidden rounded-[2.5rem] shadow-[0_20px_40px_-10px_rgba(75,46,93,0.3)] bg-ns-plum border border-ns-white/10 h-[calc(100%-32px)]">
                    <div className="p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden h-full justify-center">
                      <div className="absolute -top-10 -right-10 w-48 h-48 bg-ns-sand opacity-10 blur-[60px] rounded-full"></div>
                      
                      <div className="relative z-10 w-16 h-16 bg-ns-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-ns-white/20 mb-6 group-hover:scale-110 transition-all shadow-2xl">
                        <Stars className="w-8 h-8 text-ns-sand animate-pulse" />
                      </div>

                      <h4 className="text-2xl md:text-4xl font-serif font-bold text-ns-white mb-4 relative z-10 leading-tight">
                        The Next Success <br />
                        <span className="text-ns-sand italic">Could be Yours.</span>
                      </h4>

                      <p className="text-sm md:text-base text-ns-white/80 mb-8 italic font-medium relative z-10 leading-relaxed px-4">
                        Join 600+ blessed couples who chose the Salafi way. Your journey to half your deen is just one sincere step away.
                      </p>

                      <button 
                        onClick={onOpenRegister} 
                        className="w-full bg-ns-sand text-ns-plum font-bold rounded-xl py-4 text-lg flex items-center justify-center gap-2 hover:bg-ns-sand/90 transition-all shadow-xl group/btn relative z-10"
                      >
                        Begin Your Journey
                        <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1.5 transition-transform" />
                      </button>

                      <div className="absolute inset-0 opacity-[0.05] pointer-events-none islamic-pattern mix-blend-overlay"></div>
                    </div>
                  </div>
                </div>
              ) : (
                typeof item !== 'string' && <ScreenshotCard key={`c3-${idx}`} review={item} />
              )
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessGallery;
