
import React from 'react';
import { ChevronLeft, Receipt } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RefundPolicy: React.FC = () => {
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
              <Receipt className="w-3 h-3" />
              Fairness & Integrity
            </div>
            
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-ns-plum mb-8">Refund & Cancellation Policy</h1>
            
            <div className="prose prose-ns max-w-none text-ns-dark/80 leading-relaxed space-y-8">
              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">1. Overview</h2>
                <p>
                  At Nikah Salafi, we strive to provide a service that is both effective and aligned with the Sunnah. Our registration fees are used to cover the costs of manual vetting, platform maintenance, and the dedicated time of our team who facilitate guided introductions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">2. Cancellation Policy</h2>
                <p>
                  You may cancel your registration or deactivate your profile at any time. To do so, please contact our support team or use the deactivation link in your profile settings. Once deactivated, your profile will no longer be visible to potential matches.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">3. Refund Eligibility</h2>
                <p>
                  Due to the nature of our service—specifically the immediate manual vetting process that begins upon registration—we generally do not offer refunds once the vetting process has commenced.
                </p>
                <p className="mt-4">However, refunds may be considered in the following circumstances:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Duplicate Payment:</strong> If you were accidentally charged twice for the same service.</li>
                  <li><strong>Service Unavailability:</strong> If we are unable to provide the service due to technical failures on our end for an extended period.</li>
                  <li><strong>Pre-Vetting Cancellation:</strong> If you request a refund within 24 hours of registration AND our team has not yet begun the manual vetting of your profile.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">4. Non-Refundable Scenarios</h2>
                <p>Refunds will not be issued in the following cases:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>You have successfully found a spouse through our platform or elsewhere.</li>
                  <li>You have changed your mind about seeking marriage at this time.</li>
                  <li>Your profile was suspended or removed due to a violation of our Salafi Standards or Terms of Use.</li>
                  <li>You are dissatisfied with the number or quality of matches, as compatibility is subject to many factors beyond our control.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif font-bold text-ns-plum mb-4">5. How to Request a Refund</h2>
                <p>
                  To request a refund, please email support@nikahsalafi.com with your registration details and the reason for your request. Our team will review your case within 5-7 business days and notify you of the decision.
                </p>
              </section>

              <div className="pt-12 border-t border-ns-warmgrey">
                <p className="text-sm text-ns-dark/40 italic">
                  Last updated: March 16, 2026. We reserve the right to modify this policy at any time to ensure fairness and the sustainability of the service.
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

export default RefundPolicy;
