
import React from 'react';
import { ChevronLeft, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
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
              <Shield className="w-3 h-3" />
              Transparency & Amanah
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ns-plum mb-8">Privacy Policy</h1>
            
            <div className="prose prose-ns max-w-none text-ns-dark/80 leading-relaxed space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">1. Our Commitment</h2>
                <p>
                  At Nikah Salafi, we treat your data as an Amanah (trust). Our mission is to facilitate marriages upon the Sunnah, and protecting your privacy is a fundamental part of that religious obligation. We only collect information necessary to help you find a compatible spouse within the bounds of the Sharia.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">2. Information We Collect</h2>
                <p>To provide our services, we collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Profile Information:</strong> Name, age, location, education, and profession.</li>
                  <li><strong>Religious Information:</strong> Aqeedah, Manhaj, level of practice, and commitment to the Sunnah.</li>
                  <li><strong>Wali Information:</strong> For sisters, we collect contact details for their Wali (guardian) as per the Prophetic requirement for Nikah.</li>
                  <li><strong>Vetting Data:</strong> Information provided during our manual vetting process to ensure sincerity and alignment.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">3. How We Use Your Information</h2>
                <p>Your information is used exclusively for:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Verifying your identity and sincerity.</li>
                  <li>Matching you with potentially compatible seekers.</li>
                  <li>Facilitating guided introductions under the supervision of Walis.</li>
                  <li>Maintaining the safety and integrity of the community.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">4. Data Sharing</h2>
                <p>
                  We do not sell or trade your data. Your profile details are only shared with potential matches who have also passed our vetting process. For sisters, contact is always facilitated through their Wali.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">5. Security</h2>
                <p>
                  We employ industry-standard encryption and security protocols to protect your data. Access to sensitive information is strictly limited to our vetting team who operate with the fear of Allah in their hearts.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">6. Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete your data at any time. If you find a match or wish to withdraw from the service, simply contact our support team to have your profile permanently removed.
                </p>
              </section>

              <div className="pt-12 border-t border-ns-warmgrey">
                <p className="text-sm text-ns-dark/40 italic">
                  Last updated: March 15, 2026. For any questions regarding your privacy, please contact us at privacy@nikahsalafi.com
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

export default PrivacyPolicy;
