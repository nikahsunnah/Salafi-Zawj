
import React from 'react';
import { ChevronLeft, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SafetyTips: React.FC = () => {
  return (
    <div className="min-h-screen bg-ns-warmgrey">
      <Header onOpenRegister={() => {}} />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <Link to="/" className="inline-flex items-center gap-2 text-ns-plum/60 hover:text-ns-plum transition-colors mb-12 text-sm font-medium">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-ns-plum/5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ns-plum/5 text-ns-plum text-[10px] font-bold uppercase tracking-[0.3em] mb-8 border border-ns-plum/10">
              <HeartHandshake className="w-3 h-3" />
              Preserving Honor
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ns-plum mb-8">Safety Tips</h1>
            
            <div className="prose prose-ns max-w-none text-ns-dark/80 leading-relaxed space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">1. Involve Your Wali Early</h2>
                <p>
                  The greatest safety feature in Islam is the Wali. Sisters should never engage in private conversations without their guardian's knowledge and oversight. This prevents emotional manipulation and ensures the process remains blessed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">2. Protect Your Personal Information</h2>
                <p>
                  While sincerity is key, be cautious about sharing sensitive details like your home address, financial information, or private photos too early. Wait until a level of trust and serious intent has been established through the proper channels.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">3. Verify Claims</h2>
                <p>
                  Don't be afraid to ask for references. A sincere person will have no issue providing the name of their local Imam or a known brother/sister in the community who can vouch for their character and Deen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">4. Meeting in Person</h2>
                <p>
                  When the time comes for a "Muqabalah" (meeting), it must always take place in a public setting or a family home with a Mahram present. Never agree to meet alone or in a secluded place.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">5. Trust Your Instincts</h2>
                <p>
                  If something feels "off" or if a person is pressuring you to bypass the Sunnah (e.g., asking to speak without a Wali), take it as a red flag. Sincerity always aligns with the Sharia.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">6. Report Concerns</h2>
                <p>
                  If you encounter any suspicious activity, harassment, or individuals who do not seem to be upon the Salafi methodology, please report them to our team immediately. We take the safety of our community very seriously.
                </p>
              </section>

              <div className="pt-12 border-t border-ns-warmgrey">
                <p className="text-sm text-ns-dark/40 italic">
                  "The believer is not stung from the same hole twice." — Prophet Muhammad ﷺ
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default SafetyTips;
