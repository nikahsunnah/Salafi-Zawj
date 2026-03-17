
import React from 'react';
import { ChevronLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfUse: React.FC = () => {
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
              <FileText className="w-3 h-3" />
              The Covenant
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ns-plum mb-8">Terms of Use</h1>
            
            <div className="prose prose-ns max-w-none text-ns-dark/80 leading-relaxed space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing Nikah Salafi, you agree to abide by these terms and our methodology. This platform is dedicated to facilitating marriages upon the Quran and Sunnah according to the understanding of the Salaf as-Salih.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">2. Eligibility</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You must be a practicing Muslim seeking marriage with sincere intent.</li>
                  <li>You must adhere to the Salafi methodology in Aqeedah and Manhaj.</li>
                  <li>Sisters must have a Wali (guardian) involved in the process.</li>
                  <li>You must be of legal marriageable age in your jurisdiction.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">3. User Conduct & Adab</h2>
                <p>
                  Users are expected to maintain the highest standards of Islamic character (Akhlaq) and manners (Adab). Any form of harassment, deception, or inappropriate behavior will result in immediate permanent ban.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">4. Vetting Process</h2>
                <p>
                  Nikah Salafi reserves the right to vet all applicants. Registration does not guarantee approval. We may request additional information or references to verify your commitment to the Sunnah.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">5. Wali Involvement</h2>
                <p>
                  In accordance with the Hadith "There is no Nikah except with a Wali," we mandate the involvement of a guardian for all sisters. Profiles without valid Wali contact information will not be processed.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">6. Account Termination</h2>
                <p>
                  We reserve the right to terminate any account that violates our standards, provides false information, or acts in a way that contradicts the methodology of the Salaf.
                </p>
              </section>

              <div className="pt-12 border-t border-ns-warmgrey">
                <p className="text-sm text-ns-dark/40 italic">
                  Last updated: March 15, 2026. By using this service, you acknowledge that marriage is a serious commitment and you seek it only for the sake of Allah.
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

export default TermsOfUse;
