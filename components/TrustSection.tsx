
import React from 'react';
import { Shield, BookOpen, Lock } from 'lucide-react';

const TrustSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-ns-offwhite border-t border-ns-sand">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-ns-deepgreen mb-4">Foundation of Amanah</h2>
          <p className="text-ns-charcoal/60">Built on values, verified by scholars, trusted by families.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-ns-sand rounded-2xl flex items-center justify-center text-ns-deepgreen mb-6">
              <BookOpen className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Islamic Values</h4>
            <p className="text-sm text-ns-charcoal/60 leading-relaxed italic">
              Our process is designed in consultation with people of knowledge to ensure it remains Shariah-compliant.
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-ns-sand rounded-2xl flex items-center justify-center text-ns-deepgreen mb-6">
              <Lock className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Absolute Privacy</h4>
            <p className="text-sm text-ns-charcoal/60 leading-relaxed italic">
              Your data is a trust (Amanah). We do not sell your information or use tracking for ads.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-ns-sand rounded-2xl flex items-center justify-center text-ns-deepgreen mb-6">
              <Shield className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold">Zero Tolerance</h4>
            <p className="text-sm text-ns-charcoal/60 leading-relaxed italic">
              We do not operate like dating apps. Malicious or casual users are immediately removed.
            </p>
          </div>
        </div>

        <div className="bg-ns-sand/20 rounded-3xl p-8 md:p-12 border border-ns-sand text-center max-w-4xl mx-auto italic text-ns-deepgreen/80">
          <p className="text-lg md:text-xl font-serif leading-relaxed mb-6">
            "We were hesitant about online platforms, but Nikah Sunnah felt different. The focus was on character and Deen, and our families were involved from the start. We are now happily married, Alhamdulillah."
          </p>
          <span className="text-sm font-bold uppercase tracking-widest text-ns-olive">— A Couple from London</span>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
