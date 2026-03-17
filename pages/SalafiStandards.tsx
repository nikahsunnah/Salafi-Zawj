
import React from 'react';
import { ChevronLeft, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const SalafiStandards: React.FC = () => {
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
              <Scale className="w-3 h-3" />
              The Scale of Truth
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ns-plum mb-8">Salafi Standards</h1>
            
            <div className="prose prose-ns max-w-none text-ns-dark/80 leading-relaxed space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">1. Pure Aqeedah (Creed)</h2>
                <p>
                  We prioritize seekers who adhere to the Aqeedah of the Salaf as-Salih—affirming what Allah and His Messenger ﷺ affirmed regarding His Names and Attributes without distortion, denial, or likeness to creation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">2. Sound Manhaj (Methodology)</h2>
                <p>
                  Our platform is for those who follow the Sunnah in their worship, character, and social interactions. We look for commitment to the Jama'ah and distance from innovations (Bid'ah) and sectarianism.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">3. Vetting Criteria</h2>
                <p>During our vetting process, we assess:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Knowledge:</strong> Basic understanding of the rights and responsibilities of marriage in Islam.</li>
                  <li><strong>Practice:</strong> Consistency in the five daily prayers and other obligatory acts.</li>
                  <li><strong>Character:</strong> Reputation within the local Salafi community (where applicable).</li>
                  <li><strong>Intent:</strong> Sincerity in seeking a spouse for the sake of building a home upon the Sunnah.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">4. The Role of the Wali</h2>
                <p>
                  We uphold the Prophetic standard regarding guardianship. A Wali is not just a formality but a protector and advisor. We facilitate communication that respects the boundaries of the Sharia, ensuring no "khulwah" (seclusion) occurs during the introduction phase.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">5. Modesty & Haya</h2>
                <p>
                  From profile pictures to communication styles, we enforce standards of Haya (modesty). We do not allow public display of photos; images are only shared privately between vetted parties and their Walis.
                </p>
              </section>

              <div className="pt-12 border-t border-ns-warmgrey">
                <p className="text-sm text-ns-dark/40 italic">
                  "Stick to the path of the Salaf, even if the people reject you. And beware of the opinions of men, even if they beautify them with speech." — Imam al-Awza'i
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

export default SalafiStandards;
