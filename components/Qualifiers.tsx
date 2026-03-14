import React from 'react';
import { Check, X, ShieldAlert, Sparkles, Heart, Users, Compass, Lock } from 'lucide-react';

const Qualifiers: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-ns-warmgrey/50 rounded-full blur-[120px] -z-10"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ns-warmgrey text-ns-plum text-[10px] font-bold uppercase tracking-[0.3em] mb-4 border border-ns-plum/20">
            Vetting for Soundness
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-ns-plum mb-6 leading-tight">
            Finding the <br className="hidden md:block" />
            <span className="text-ns-mauve italic">Right Fit.</span>
          </h2>
          <p className="text-lg text-ns-dark/60 leading-relaxed max-w-2xl mx-auto">
            Nikah Salafi is not for everyone. We serve a specific segment of the Ummah that prioritizes the sound Salafi Manhaj above all else.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-[3rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(75,46,93,0.1)] border border-ns-warmgrey">
          
          <div className="bg-ns-white p-8 md:p-14 relative group">
            <div className="absolute top-6 right-6 text-ns-sand/20">
              <Sparkles className="w-12 h-12" />
            </div>
            
            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-ns-warmgrey flex items-center justify-center text-ns-plum shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 border border-ns-plum/10">
                <Heart className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-ns-plum">The Sincere Seeker</h3>
                <p className="text-[10px] text-ns-mauve font-bold uppercase tracking-widest mt-1">Ahlus Sunnah wal Jama'ah</p>
              </div>
            </div>

            <ul className="space-y-8">
              {[
                { 
                  icon: <Compass className="w-5 h-5" />, 
                  title: "Salafi Methodology", 
                  desc: "You adhere to the Quran and Sunnah according to the understanding of the Salaf." 
                },
                { 
                  icon: <Sparkles className="w-5 h-5" />, 
                  title: "Clear from Bid'ah", 
                  desc: "You distance yourself from innovations and those who propagate them." 
                },
                { 
                  icon: <Users className="w-5 h-5" />, 
                  title: "Wali-Led Process", 
                  desc: "You understand that for a sister, the Wali's involvement is non-negotiable from the start." 
                },
                { 
                  icon: <Lock className="w-5 h-5" />, 
                  title: "Haya & Modesty", 
                  desc: "You value strict segregation and the preservation of haya in the matchmaking process." 
                }
              ].map((item, i) => (
                <li key={i} className="flex gap-5 group/item">
                  <div className="mt-1 w-10 h-10 rounded-full bg-ns-warmgrey border border-ns-plum/10 flex items-center justify-center shrink-0 group-hover/item:bg-ns-plum group-hover/item:text-ns-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-ns-dark mb-1">{item.title}</h4>
                    <p className="text-sm text-ns-dark/60 leading-relaxed italic">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ns-plum p-8 md:p-14 relative text-ns-white group">
            <div className="absolute top-6 right-6 text-ns-white/5">
              <ShieldAlert className="w-12 h-12" />
            </div>

            <div className="flex items-center gap-5 mb-10">
              <div className="w-14 h-14 rounded-2xl bg-ns-white/10 border border-ns-white/10 flex items-center justify-center text-ns-sand shadow-sm group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500">
                <X className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-ns-white">The Filtered Out</h3>
                <p className="text-[10px] text-ns-white/40 font-bold uppercase tracking-widest mt-1">Incompatible users</p>
              </div>
            </div>

            <ul className="space-y-8">
              {[
                { 
                  title: "Different Manhaj", 
                  desc: "Individuals who follow methodologies or groups that differ from the Salaf-us-Salih." 
                },
                { 
                  title: "Innovation (Bid'ah)", 
                  desc: "We do not accommodate those who practice or promote matters clearly opposing the Sunnah." 
                },
                { 
                  title: "Non-Serious Behavior", 
                  desc: "Those looking to browse profiles without a clear timeline for Nikah or family involvement." 
                },
                { 
                  title: "Modernist Views", 
                  desc: "Those seeking to 'reform' or bypass the clear Shariah boundaries regarding marriage." 
                }
              ].map((item, i) => (
                <li key={i} className="flex gap-5 group/item transition-opacity">
                  <div className="mt-1.5 w-6 h-6 rounded-full bg-ns-sand flex items-center justify-center shrink-0 shadow-lg shadow-ns-sand/20">
                    <X className="w-3.5 h-3.5 text-ns-plum stroke-[3]" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-ns-white mb-1">{item.title}</h4>
                    <p className="text-sm text-ns-white/70 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 rounded-[2rem] bg-ns-white/5 border border-ns-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-ns-sand mb-2">
                <ShieldAlert className="w-5 h-5" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Manhaj Integrity</span>
              </div>
              <p className="text-xs text-ns-white/60 leading-relaxed italic">
                Our verification includes checks on manhaj and associations to ensure the community remains upon the sound truth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualifiers;