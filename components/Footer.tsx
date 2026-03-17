
import React from 'react';
import { Moon, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-ns-dark py-16 relative overflow-hidden text-ns-warmgrey">
      <div className="absolute top-10 right-[15%] opacity-[0.05] text-ns-plum animate-pulse-slow pointer-events-none">
        <Star className="w-14 h-14 fill-current" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-ns-plum rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-ns-white font-serif font-bold text-sm">NS</span>
              </div>
              <span className="text-xl font-serif font-bold text-ns-white tracking-tight">Nikah Salafi</span>
            </div>
            <p className="text-ns-warmgrey/60 text-sm leading-relaxed mb-6 italic">
              Uniting the seekers of half their Deen upon the methodology of the Salaf as-Salih.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-ns-mauve mb-6 uppercase tracking-widest text-xs"> Quick Links</h4>
            <ul className="space-y-4 text-sm text-ns-warmgrey/60">
              <li><a href="/#why-nikah-salafi" className="hover:text-ns-mauve transition-colors">Our Methodology</a></li>
              <li><a href="/#the-journey" className="hover:text-ns-mauve transition-colors">The Vetting</a></li>
              <li><a href="/#success-stories" className="hover:text-ns-mauve transition-colors">Amanah & Vision</a></li>
              <li><a href="mailto:support@nikahsalafi.com" className="hover:text-ns-mauve transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-ns-mauve mb-6 uppercase tracking-widest text-xs">Transparency</h4>
            <ul className="space-y-4 text-sm text-ns-warmgrey/60">
              <li><Link to="/privacy-policy" className="hover:text-ns-mauve transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-use" className="hover:text-ns-mauve transition-colors">Terms of Use</Link></li>
              <li><Link to="/salafi-standards" className="hover:text-ns-mauve transition-colors">Salafi Standards</Link></li>
              <li><Link to="/safety-tips" className="hover:text-ns-mauve transition-colors">Safety Tips</Link></li>
              <li><Link to="/refund-policy" className="hover:text-ns-mauve transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-ns-mauve mb-6 uppercase tracking-widest text-xs">Prophetic Sunnah</h4>
            <p className="text-sm text-ns-warmgrey/60 italic leading-relaxed">
              "When a person marries, he has fulfilled half of his Deen, so let him fear Allah regarding the remaining half."
              <br />
              <span className="block mt-2 font-semibold text-ns-mauve">— Al-Baihaqi</span>
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-ns-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-ns-warmgrey/30">
            © {new Date().getFullYear()} Nikah Salafi. Ahlus Sunnah wal Jama'ah. Built with Amanah for the Ummah.
          </p>
          <div className="flex gap-6 text-ns-warmgrey/30">
            <a href="#" className="hover:text-ns-mauve transition-colors"><span className="text-xs uppercase font-bold">Instagram</span></a>
            <a href="#" className="hover:text-ns-mauve transition-colors"><span className="text-xs uppercase font-bold">Twitter</span></a>
            <a href="#" className="hover:text-ns-mauve transition-colors"><span className="text-xs uppercase font-bold">Telegram</span></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
