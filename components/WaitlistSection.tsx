
import React, { useState } from 'react';
import { CheckCircle2, ArrowRight, Heart, User, Check, Clock, ShieldCheck, ClipboardCheck, Users } from 'lucide-react';

const featureCards = [
  { 
    id: 0, 
    title: "VERIFIED & RIGHTEOUS", 
    desc: "Vetted for character and intent.",
  },
  { 
    id: 1, 
    title: "INTENT-BASED REGISTRATION", 
    desc: "Strictly for those ready for Nikah.",
  },
  { 
    id: 2, 
    title: "FAMILY ENABLED", 
    desc: "Invite guardians into the flow.",
  },
  { 
    id: 3, 
    title: "DEEN + DUNIYA MATCH", 
    desc: "Compatibility of both worlds.",
  }
];

const MockupScreen = ({ activeIndex }: { activeIndex: number }) => {
  const screens = [
    // 0: Verified Profile
    <div key="screen-0" className="flex-1 flex flex-col items-center justify-center px-8">
      <div className="relative mb-6">
        <div className="w-20 h-20 rounded-full bg-ns-warmgrey flex items-center justify-center shadow-sm border-4 border-ns-white">
          <User className="w-8 h-8 text-ns-plum" />
        </div>
        <div className="absolute bottom-1 right-1 bg-ns-plum text-ns-white p-1 rounded-full border-2 border-ns-white shadow-md">
          <Check className="w-3 h-3 stroke-[4]" />
        </div>
      </div>
      <div className="text-center w-full">
        <h4 className="text-base font-bold text-ns-plum mb-0.5">Ahmed Yusuf</h4>
        <p className="text-[9px] text-ns-dark/60 font-medium mb-4">32 • London, UK</p>
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6">
          <span className="text-[7px] text-ns-plum font-black uppercase tracking-widest bg-ns-sand/30 px-2 py-0.5 rounded-full">Athari</span>
          <span className="text-[7px] text-ns-plum font-black uppercase tracking-widest bg-ns-sand/30 px-2 py-0.5 rounded-full">Verified</span>
        </div>
        <div className="space-y-1.5 w-full max-w-[120px] mx-auto">
          <div className="h-0.5 w-full bg-ns-warmgrey rounded-full"></div>
          <div className="h-0.5 w-3/4 bg-ns-warmgrey rounded-full mx-auto"></div>
        </div>
      </div>
    </div>,

    // 1: Assessment
    <div key="screen-1" className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="w-10 h-10 bg-ns-plum/10 text-ns-plum rounded-xl flex items-center justify-center mb-4">
        <ClipboardCheck className="w-5 h-5" />
      </div>
      <h4 className="text-sm font-bold text-ns-plum mb-1">Intent Score</h4>
      <div className="w-full space-y-2">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-ns-warmgrey/50 p-2 rounded-lg flex items-center gap-2 border border-ns-warmgrey/60">
            <div className="w-3 h-3 rounded-full bg-ns-plum text-ns-white flex items-center justify-center">
              <Check className="w-2 h-2" />
            </div>
            <div className="h-1 bg-ns-plum/10 rounded-full flex-1"></div>
          </div>
        ))}
      </div>
    </div>,

    // 2: Guardian
    <div key="screen-2" className="flex-1 flex flex-col items-center justify-center p-8">
      <div className="w-full bg-ns-plum p-3 rounded-xl text-ns-white mb-4 shadow-lg shadow-ns-plum/20">
        <div className="flex items-center gap-2 mb-0.5">
          <ShieldCheck className="w-2.5 h-2.5 text-ns-sand" />
          <span className="text-[8px] font-bold uppercase tracking-widest">Wali Portal</span>
        </div>
        <p className="text-[8px] text-white/70 font-medium truncate">Monitoring introductions</p>
      </div>
      <div className="space-y-2 w-full">
        <div className="bg-ns-white border border-dashed border-ns-plum/20 p-2 rounded-xl flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-ns-warmgrey flex items-center justify-center">
            <Users className="w-3 h-3 text-ns-plum/20" />
          </div>
          <div className="flex-1 space-y-1">
            <div className="h-1 bg-ns-warmgrey rounded-full w-2/3"></div>
            <div className="h-0.5 bg-ns-warmgrey rounded-full w-1/2"></div>
          </div>
        </div>
      </div>
    </div>,

    // 3: Matching
    <div key="screen-3" className="flex-1 flex flex-col pt-10 px-6 overflow-hidden">
      <h4 className="text-sm font-bold text-ns-plum mb-4 px-2">Key Features</h4>
      <div className="space-y-2.5 px-2 overflow-y-auto max-h-full pb-4">
        {featureCards.map((card, idx) => (
          <div key={idx} className="flex items-start gap-2.5 bg-ns-warmgrey/40 p-3 rounded-xl border border-ns-warmgrey/60">
            <div className="w-6 h-6 rounded-lg bg-ns-plum/5 border border-ns-plum/10 flex items-center justify-center shrink-0 mt-0.5">
              {idx === 0 && <User className="w-3 h-3 text-ns-plum" />}
              {idx === 1 && <ClipboardCheck className="w-3 h-3 text-ns-plum" />}
              {idx === 2 && <Users className="w-3 h-3 text-ns-plum" />}
              {idx === 3 && <Heart className="w-3 h-3 text-ns-plum" />}
            </div>
            <div className="flex-1 min-w-0">
              <h5 className="text-[9px] font-black text-ns-plum leading-tight uppercase tracking-tight truncate">
                {card.title}
              </h5>
              <p className="text-[8px] text-ns-dark/60 font-medium leading-tight line-clamp-2">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  ];

  return (
    <div className="w-full h-full bg-ns-white flex flex-col relative overflow-hidden">
      <div className="pt-10 pb-4 px-6 flex justify-between items-center border-b border-ns-warmgrey bg-ns-white z-20 shrink-0">
        <span className="font-serif font-bold text-ns-plum text-xl">Nikah Salafi</span>
        <div className="w-8 h-8 rounded-full bg-ns-plum text-white flex items-center justify-center shadow-sm">
          <Heart className="w-4 h-4 fill-current" />
        </div>
      </div>

      <div className="flex-1 relative bg-ns-white overflow-hidden">
        {screens.map((screen, idx) => (
          <div 
            key={idx} 
            className={`absolute inset-0 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
              activeIndex === idx 
                ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto z-10' 
                : 'opacity-0 translate-y-4 scale-95 pointer-events-none z-0'
            }`}
          >
            {screen}
          </div>
        ))}
      </div>
      
      <div className="p-5 border-t border-ns-warmgrey mt-auto bg-ns-white z-20">
        <div className="w-full py-3 bg-ns-plum text-ns-white rounded-xl text-[10px] font-bold shadow-md uppercase tracking-widest text-center">
          {activeIndex === 2 ? 'Review Request' : 'Send Introduction'}
        </div>
      </div>
    </div>
  );
};

const WaitlistSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="the-app" className="relative py-24 md:py-32 bg-ns-warmgrey overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:items-start gap-12 lg:gap-24">
          
          <div className="order-1 lg:col-start-2 lg:row-start-1">
            <div className="text-center lg:text-left mb-4 lg:mb-8 -mt-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-ns-plum/10 text-ns-plum text-[10px] font-bold uppercase tracking-widest mb-6 border border-ns-plum/20">
                The App for Seekers
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-ns-plum mb-6 leading-tight text-balance">
                Your Path to Nikah, <br />
                <span className="text-ns-mauve italic">In Your Pocket.</span>
              </h2>
              <p className="text-lg text-ns-dark max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium opacity-90">
                Exclusive to those upon the path of the Salaf. No games, no swiping—just purposeful connections.
              </p>
            </div>
          </div>

          <div className="order-2 lg:col-start-1 lg:row-span-2 relative flex justify-start md:justify-center lg:justify-start">
            <div className="relative w-fit -ml-7 md:ml-0 lg:translate-x-8 transition-transform duration-500">
              <div className="absolute -inset-20 bg-ns-sand/20 blur-[100px] rounded-full"></div>
              
              <div className="relative z-10 w-[240px] h-[480px] md:w-[270px] md:h-[550px] bg-ns-plum rounded-[3rem] p-3 shadow-[0_60px_100px_-20px_rgba(99,37,84,0.3)] border-[6px] border-ns-plum ring-1 ring-white/10 overflow-hidden shrink-0">
                <div className="w-full h-full bg-ns-white rounded-[2.4rem] overflow-hidden relative z-20 shadow-inner">
                  <MockupScreen activeIndex={activeIndex} />
                </div>
              </div>

              <div className="absolute -right-[99px] md:-right-48 lg:-right-56 top-[115px] md:top-32 flex flex-col gap-3 md:gap-4 w-fit z-40 transition-all duration-500">
                {featureCards.map((card, idx) => (
                  <div 
                    key={idx} 
                    onMouseEnter={() => setActiveIndex(idx)}
                    className={`glass p-3 md:p-4 rounded-2xl transition-all duration-500 flex items-center gap-3 md:gap-4 cursor-pointer w-[201px] md:w-[240px] lg:w-[260px] border-2 border-transparent hover:border-ns-sand
                      ${activeIndex === idx 
                        ? 'translate-x-2 md:translate-x-4 shadow-[0_30px_60px_-15px_rgba(99,37,84,0.4)] opacity-100 border-ns-plum/40 bg-ns-white z-50 scale-105' 
                        : 'translate-x-0 opacity-85 hover:opacity-100 grayscale-[0.3] hover:grayscale-0'}
                    `}
                  >
                    <div className={`w-7 h-7 md:w-9 md:h-9 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500
                      ${activeIndex === idx ? 'bg-ns-plum text-ns-white shadow-lg rotate-3' : 'bg-ns-warmgrey text-ns-plum/40'}
                    `}>
                      {activeIndex === idx ? <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5" /> : <Clock className="w-4 h-4 md:w-5 md:h-5" />}
                    </div>
                    <div className="flex flex-col flex-1 overflow-hidden">
                      <h4 className={`text-[9px] md:text-[10px] font-black tracking-widest uppercase mb-0.5 transition-colors duration-500 whitespace-nowrap ${activeIndex === idx ? 'text-ns-plum' : 'text-ns-plum/60'}`}>
                        {card.title}
                      </h4>
                      <p className={`text-[10px] md:text-[11px] leading-tight font-medium transition-colors duration-500 line-clamp-2 ${activeIndex === idx ? 'text-ns-dark' : 'text-ns-plum/40'}`}>
                        {card.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-3 lg:col-start-2 lg:row-start-2">
            <div className="max-w-xl mx-auto lg:mx-0">
              <div className="bg-ns-white rounded-[2.5rem] p-6 md:p-8 shadow-2xl shadow-ns-plum/10 border border-ns-sand relative mt-6 lg:-mt-24 z-50">
                <div className="absolute -top-4 -right-4 bg-ns-sand text-ns-plum text-[11px] font-bold px-5 py-2.5 rounded-full shadow-xl z-20 border-2 border-ns-white animate-pulse">
                  2,400+ Joined Waitlist
                </div>

                <div className="flex gap-3 mb-6">
                  <div className="w-[130px] md:w-[150px] bg-ns-warmgrey/50 border border-ns-plum/5 rounded-2xl p-3 flex items-center gap-2.5 transition-transform hover:scale-105">
                    <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" 
                        alt="Apple Store" 
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-[7px] font-bold text-ns-plum/40 uppercase tracking-widest leading-none mb-0.5">Coming on</p>
                      <p className="text-[10px] font-bold text-ns-plum whitespace-nowrap leading-none">App Store</p>
                    </div>
                  </div>
                  <div className="w-[130px] md:w-[150px] bg-ns-warmgrey/50 border border-ns-plum/5 rounded-2xl p-3 flex items-center gap-2.5 transition-transform hover:scale-105">
                    <div className="w-8 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0 overflow-hidden">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Play_Arrow_logo.svg" 
                        alt="Play Store" 
                        className="w-4 h-4 object-contain"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-[7px] font-bold text-ns-plum/40 uppercase tracking-widest leading-none mb-0.5">Coming on</p>
                      <p className="text-[10px] font-bold text-ns-plum whitespace-nowrap leading-none">Play Store</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-ns-plum mb-1.5">Join the Waitlist</h3>
                <p className="text-ns-dark opacity-70 mb-5 text-sm font-medium">Be the first to access Nikah Salafi when we launch phase one.</p>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="flex-1 bg-ns-warmgrey border-2 border-ns-warmgrey rounded-xl px-5 py-3.5 focus:border-ns-sand focus:bg-white focus:ring-4 focus:ring-ns-sand/10 outline-none transition-all placeholder:text-ns-plum/40 text-ns-plum font-semibold text-sm"
                    required
                  />
                  <button 
                    disabled={status !== 'idle'}
                    className="whitespace-nowrap px-8 btn-primary-cta py-3.5 text-base flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg shadow-ns-plum/20 group relative z-10"
                  >
                    {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Reserve My Spot'}
                    {status === 'idle' && <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
