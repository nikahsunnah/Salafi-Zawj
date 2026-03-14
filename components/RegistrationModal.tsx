
import React, { useState } from 'react';
import { X, Phone, Mail, CheckCircle2, Heart, ArrowRight, ChevronDown, UserCheck } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    profileCreatedBy: '',
    lookingFor: '',
    countryCode: '+44',
    whatsapp: '',
    cityState: '',
    email: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ 
        profileCreatedBy: '',
        lookingFor: '',
        countryCode: '+44',
        whatsapp: '',
        cityState: '',
        email: '' 
      });
    }, 1500);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const countryCodes = [
    { code: '+44', label: 'UK' },
    { code: '+1', label: 'USA/CAN' },
    { code: '+91', label: 'IND' },
    { code: '+92', label: 'PAK' },
    { code: '+971', label: 'UAE' },
    { code: '+966', label: 'KSA' },
    { code: '+61', label: 'AUS' },
    { code: '+27', label: 'RSA' },
  ];

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ns-plum/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      <div 
        className="relative w-full max-w-lg bg-ns-white rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-500 max-h-[90vh] overflow-y-auto"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-3 rounded-2xl bg-ns-warmgrey text-ns-plum hover:text-white hover:bg-ns-plum transition-all z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-10 md:p-14">
          {status === 'success' ? (
            <div className="text-center py-10 animate-in zoom-in duration-500">
              <div className="w-24 h-24 bg-ns-plum text-ns-sand rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl">
                <CheckCircle2 className="w-12 h-12" />
              </div>
              <h2 className="text-4xl font-serif font-bold text-ns-plum mb-6">BarakAllahu Feek!</h2>
              <p className="text-ns-dark text-lg mb-10 leading-relaxed font-medium">
                Your request for Nikah Salafi has been received. Our vetting team will contact you on WhatsApp to discuss your manhaj and finish verification.
              </p>
              <button 
                onClick={onClose}
                className="w-full btn-primary-cta py-5 text-xl shadow-xl"
              >
                Close Window
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-10">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ns-sand/30 text-ns-plum text-[11px] font-black uppercase tracking-[0.3em] mb-6 border border-ns-sand">
                  <Heart className="w-4 h-4 fill-ns-plum" />
                  Sound Introduction
                </div>
                <h2 className="text-4xl font-serif font-bold text-ns-plum mb-3">Nikah Salafi Entry</h2>
                <p className="text-base text-ns-dark font-medium opacity-80">Join an elegant community committed to the path of the Salaf.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-ns-plum/60 ml-5">Profile Created by</label>
                  <div className="relative group">
                    <UserCheck className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-ns-plum/30 group-focus-within:text-ns-plum transition-colors" />
                    <select 
                      required
                      value={formData.profileCreatedBy}
                      onChange={(e) => setFormData({...formData, profileCreatedBy: e.target.value})}
                      className="w-full bg-ns-warmgrey border-2 border-ns-warmgrey rounded-2xl py-5 pl-16 pr-12 focus:border-ns-sand focus:bg-white outline-none transition-all appearance-none text-ns-plum font-bold"
                    >
                      <option value="" disabled>Select option</option>
                      <option value="Self">Self</option>
                      <option value="Parent">Parent</option>
                      <option value="Wali/Guardian">Wali/Guardian</option>
                      <option value="Brother/Sister">Brother/Sister</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-ns-plum/30 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-ns-plum/60 ml-5">Seeking</label>
                  <div className="relative group">
                    <Heart className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-ns-plum/30 group-focus-within:text-ns-plum transition-colors" />
                    <select 
                      required
                      value={formData.lookingFor}
                      onChange={(e) => setFormData({...formData, lookingFor: e.target.value})}
                      className="w-full bg-ns-warmgrey border-2 border-ns-warmgrey rounded-2xl py-5 pl-16 pr-12 focus:border-ns-sand focus:bg-white outline-none transition-all appearance-none text-ns-plum font-bold"
                    >
                      <option value="" disabled>Select option</option>
                      <option value="A Groom">A Groom</option>
                      <option value="A Bride">A Bride</option>
                    </select>
                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-ns-plum/30 pointer-events-none" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-ns-plum/60 ml-5">WhatsApp Contact</label>
                  <div className="flex gap-3">
                    <div className="relative w-36 shrink-0">
                      <select 
                        required
                        value={formData.countryCode}
                        onChange={(e) => setFormData({...formData, countryCode: e.target.value})}
                        className="w-full bg-ns-warmgrey border-2 border-ns-warmgrey rounded-2xl py-5 pl-5 pr-10 focus:border-ns-sand focus:bg-white outline-none transition-all appearance-none text-ns-plum text-sm font-black"
                      >
                        {countryCodes.map(c => (
                          <option key={c.code} value={c.code}>{c.label} ({c.code})</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ns-plum/30 pointer-events-none" />
                    </div>
                    <div className="relative flex-1 group">
                      <Phone className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-ns-plum/30 group-focus-within:text-ns-plum transition-colors" />
                      <input 
                        required
                        type="tel"
                        placeholder="7123 456789"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                        className="w-full bg-ns-warmgrey border-2 border-ns-warmgrey rounded-2xl py-5 pl-16 pr-6 focus:border-ns-sand focus:bg-white outline-none transition-all placeholder:text-ns-plum/30 font-bold"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-ns-plum/60 ml-5">Email Address</label>
                  <div className="relative group">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-ns-plum/30 group-focus-within:text-ns-plum transition-colors" />
                    <input 
                      required
                      type="email"
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-ns-warmgrey border-2 border-ns-warmgrey rounded-2xl py-5 pl-16 pr-6 focus:border-ns-sand focus:bg-white outline-none transition-all placeholder:text-ns-plum/30 font-bold"
                    />
                  </div>
                </div>

                <div className="pt-6">
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full btn-accent-cta py-6 text-xl flex items-center justify-center gap-4 disabled:opacity-50 group shadow-2xl shadow-ns-sand/20"
                  >
                    {status === 'submitting' ? 'Vetting...' : "Proceed Upon the Sunnah"}
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
