
import React, { useState } from 'react';
import { BookOpen, Download, CheckCircle2, Star, Sparkles, ArrowRight, X, User, Phone, Mail, Globe, MapPin } from 'lucide-react';

const FreeGuidebook: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    country: '',
    state: '',
    city: ''
  });

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    // Simulate API submission
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        setIsModalOpen(false);
        setStatus('idle');
        setFormData({ name: '', email: '', mobile: '', country: '', state: '', city: '' });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="free-guidebook" className="py-12 md:py-16 bg-ns-warmgrey relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none islamic-pattern"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ns-plum/10 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-8 max-w-6xl relative z-10">
        <div className="bg-ns-plum rounded-[2.5rem] overflow-hidden shadow-xl shadow-ns-plum/20 border border-ns-white/5 flex flex-col lg:flex-row items-stretch">
          
          {/* Left Side: Content */}
          <div className="flex-1 p-8 md:p-12 lg:p-14 relative text-ns-white">
            <div className="absolute top-0 right-0 w-48 h-48 bg-ns-sand opacity-10 blur-[80px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ns-white/10 text-ns-sand text-[9px] font-bold uppercase tracking-[0.3em] mb-4 border border-ns-white/10">
                <Sparkles className="w-3.5 h-3.5" />
                Essential Resource
              </div>
              
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 leading-tight">
                The 40 Questions for <br />
                <span className="text-ns-sand italic underline decoration-ns-sand/30 underline-offset-8">Serious Seekers.</span>
              </h2>
              
              <p className="text-base md:text-lg text-ns-white/80 mb-6 leading-relaxed font-medium italic opacity-90 max-w-xl">
                "Our exclusive guidebook helps you navigate the critical topics of compatibility before Nikah."
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  "Creed & Methodology",
                  "Financial Expectations",
                  "Family Dynamics",
                  "Daily Lifestyle & Adab"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-ns-sand flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-2.5 h-2.5 text-ns-plum" />
                    </div>
                    <span className="text-xs font-bold tracking-wide text-ns-white/90">{item}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="bg-ns-sand text-ns-plum font-bold rounded-xl px-8 py-4 text-base flex items-center justify-center gap-2 hover:bg-ns-sand/90 transition-all shadow-lg shadow-black/20 group"
              >
                Download Guidebook
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none islamic-pattern mix-blend-overlay"></div>
          </div>

          {/* Right Side: Visual Mockup */}
          <div className="lg:w-[35%] bg-ns-sand/5 flex items-center justify-center p-8 lg:p-0 relative">
            <div className="relative group transition-transform duration-700 hover:scale-105">
              <Star className="absolute -top-6 -left-6 text-ns-sand opacity-40 animate-twinkle w-5 h-5" />
              <Star className="absolute bottom-6 -right-2 text-ns-sand opacity-20 animate-twinkle w-3 h-3" />
              
              <div className="relative w-44 h-64 md:w-52 md:h-72 bg-ns-white rounded-r-2xl shadow-[15px_30px_60px_-15px_rgba(0,0,0,0.4)] border-l-[10px] border-ns-plum/20 overflow-hidden flex flex-col">
                <div className="absolute inset-0 opacity-5 islamic-pattern scale-50"></div>
                <div className="flex-1 p-5 md:p-6 flex flex-col items-center justify-center text-center border-b-[6px] border-ns-plum">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-ns-plum rounded-xl flex items-center justify-center mb-4 shadow-lg">
                    <BookOpen className="text-ns-sand w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h4 className="font-serif font-black text-ns-plum text-xl md:text-2xl leading-tight mb-3">
                    40 <br />
                    <span className="text-base md:text-lg">Questions</span>
                  </h4>
                  <div className="h-0.5 w-10 bg-ns-sand mb-3"></div>
                  <p className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] text-ns-plum/40">
                    A Guide for Serious <br /> Salafi Seekers
                  </p>
                </div>
                <div className="p-3 bg-ns-plum text-ns-white flex justify-center items-center gap-1.5">
                   <div className="w-4 h-px bg-ns-white/20"></div>
                   <span className="text-[6px] font-black tracking-widest uppercase">Nikah Salafi</span>
                   <div className="w-4 h-px bg-ns-white/20"></div>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none rounded-r-2xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* LEAD CAPTURE MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ns-plum/80 backdrop-blur-md animate-in fade-in duration-300">
          <div 
            className="relative w-full max-w-xl bg-ns-white rounded-[2rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-500 max-h-[90vh] flex flex-col"
          >
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-ns-warmgrey text-ns-plum hover:text-white hover:bg-ns-plum transition-all z-20"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8 md:p-10 overflow-y-auto">
              {status === 'success' ? (
                <div className="text-center py-6 animate-in zoom-in duration-500">
                  <div className="w-16 h-16 bg-ns-plum text-ns-sand rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h2 className="text-2xl font-serif font-bold text-ns-plum mb-3">Success!</h2>
                  <p className="text-ns-dark text-base leading-relaxed font-medium mb-1">
                    Jazakallahu Khairan. 
                  </p>
                  <p className="text-ns-plum/60 italic text-xs">
                    The guidebook is being sent to your inbox.
                  </p>
                </div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ns-plum/10 text-ns-plum text-[9px] font-black uppercase tracking-[0.3em] mb-3 border border-ns-plum/20">
                      <Download className="w-3 h-3" />
                      Download Guidebook
                    </div>
                    <h2 className="text-2xl font-serif font-bold text-ns-plum">Unlock the Guide</h2>
                    <p className="text-xs text-ns-dark font-medium opacity-70">Tell us where to send your copy.</p>
                  </div>

                  <form onSubmit={handleDownload} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-ns-plum/50 ml-2">Full Name</label>
                        <div className="relative group">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ns-plum/30 group-focus-within:text-ns-plum transition-colors" />
                          <input 
                            required
                            type="text"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            className="w-full bg-ns-warmgrey border-2 border-ns-warmgrey rounded-lg py-3 pl-12 pr-4 focus:border-ns-sand focus:bg-white outline-none transition-all placeholder:text-ns-plum/30 font-bold text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-ns-plum/50 ml-2">Email</label>
                        <div className="relative group">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ns-plum/30 group-focus-within:text-ns-plum transition-colors" />
                          <input 
                            required
                            type="email"
                            placeholder="email@example.com"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full bg-ns-warmgrey border-2 border-ns-warmgrey rounded-lg py-3 pl-12 pr-4 focus:border-ns-sand focus:bg-white outline-none transition-all placeholder:text-ns-plum/30 font-bold text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-ns-plum/50 ml-2">Mobile / WhatsApp</label>
                      <div className="relative group">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ns-plum/30 group-focus-within:text-ns-plum transition-colors" />
                        <input 
                          required
                          type="tel"
                          placeholder="+1 234 567 890"
                          value={formData.mobile}
                          onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                          className="w-full bg-ns-warmgrey border-2 border-ns-warmgrey rounded-lg py-3 pl-12 pr-4 focus:border-ns-sand focus:bg-white outline-none transition-all placeholder:text-ns-plum/30 font-bold text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-ns-plum/50 ml-2">Country</label>
                        <div className="relative group">
                          <Globe className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ns-plum/30 group-focus-within:text-ns-plum transition-colors" />
                          <input 
                            required
                            type="text"
                            placeholder="Country"
                            value={formData.country}
                            onChange={(e) => setFormData({...formData, country: e.target.value})}
                            className="w-full bg-ns-warmgrey border-2 border-ns-warmgrey rounded-lg py-3 pl-10 pr-3 focus:border-ns-sand focus:bg-white outline-none transition-all placeholder:text-ns-plum/30 font-bold text-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-ns-plum/50 ml-2">State</label>
                        <div className="relative group">
                          <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ns-plum/30 group-focus-within:text-ns-plum transition-colors" />
                          <input 
                            required
                            type="text"
                            placeholder="State"
                            value={formData.state}
                            onChange={(e) => setFormData({...formData, state: e.target.value})}
                            className="w-full bg-ns-warmgrey border-2 border-ns-warmgrey rounded-lg py-3 pl-10 pr-3 focus:border-ns-sand focus:bg-white outline-none transition-all placeholder:text-ns-plum/30 font-bold text-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-[9px] font-black uppercase tracking-widest text-ns-plum/50 ml-2">City</label>
                        <div className="relative group">
                          <MapPin className="absolute left-3.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-ns-plum/30 group-focus-within:text-ns-plum transition-colors" />
                          <input 
                            required
                            type="text"
                            placeholder="City"
                            value={formData.city}
                            onChange={(e) => setFormData({...formData, city: e.target.value})}
                            className="w-full bg-ns-warmgrey border-2 border-ns-warmgrey rounded-lg py-3 pl-10 pr-3 focus:border-ns-sand focus:bg-white outline-none transition-all placeholder:text-ns-plum/30 font-bold text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <button 
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full btn-primary-cta py-3.5 text-base flex items-center justify-center gap-2 disabled:opacity-50 mt-2"
                    >
                      {status === 'loading' ? 'Sending...' : 'Download Guidebook'}
                      <Download className="w-4 h-4" />
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default FreeGuidebook;
