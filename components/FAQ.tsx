
import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

const FAQItem: React.FC<{ 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void 
}> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div 
      className={`group mb-4 last:mb-0 transition-all duration-500 rounded-2xl border ${
        isOpen 
          ? 'bg-ns-white border-ns-mauve shadow-xl shadow-ns-plum/5 -translate-y-1' 
          : 'bg-ns-white/40 border-ns-plum/10 hover:border-ns-mauve/20 hover:bg-ns-white/80'
      }`}
    >
      <button 
        onClick={onClick}
        className="w-full py-6 px-8 flex justify-between items-center text-left transition-all"
      >
        <div className="flex items-center gap-4">
          <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-all ${
            isOpen ? 'bg-ns-plum text-ns-white shadow-md' : 'bg-ns-warmgrey text-ns-plum/30 group-hover:text-ns-plum'
          }`}>
            <HelpCircle className="w-4 h-4" />
          </div>
          <span className={`text-base font-bold transition-colors ${
            isOpen ? 'text-ns-plum' : 'text-ns-dark/70 group-hover:text-ns-plum'
          }`}>
            {question}
          </span>
        </div>
        <div className={`transition-transform duration-500 ease-out ${isOpen ? 'rotate-180 text-ns-mauve' : 'text-ns-plum/20'}`}>
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>
      <div className={`transition-all duration-500 ease-in-out px-8 overflow-hidden ${
          isOpen ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="pl-12 border-l-2 border-ns-warmgrey">
          <p className="text-ns-plum/60 leading-relaxed text-sm font-medium">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    {
      question: "What does 'Nikah Salafi' mean?",
      answer: "Nikah Salafi indicates that our platform is exclusively for those upon the Salafi Manhaj—seeking spouses who adhere to the Quran and Sunnah according to the understanding of the Salaf as-Salih."
    },
    {
      question: "How do you verify the Manhaj of members?",
      answer: "Our verification process includes questions regarding creed, methodology, and the scholars the individual benefits from. We aim to ensure that all members are upon the sound way to maintain the integrity of our community."
    },
    {
      question: "Is the Wali's involvement required for sisters?",
      answer: "Absolutely. In accordance with the Prophetic statement 'There is no Nikah except with a Wali', we facilitate a process where the guardian is involved from the very beginning of the introduction."
    },
    {
      question: "Do you allow blurred photos for Haya?",
      answer: "Yes. In fact, we encourage modesty. Photos are only visible to those who have been verified and meet your specific criteria, and sisters have the option to keep photos blurred until a formal introduction is requested."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 star-pattern relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-8 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ns-mauve/10 text-ns-plum text-[10px] font-bold uppercase tracking-widest mb-6 border border-ns-mauve/20">
            <Sparkles className="w-3.5 h-3.5 text-ns-plum" />
            Seeking Clarity
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-ns-plum mb-6 leading-tight">
            Commonly <span className="text-ns-mauve italic">Asked.</span>
          </h2>
          <p className="text-ns-plum/60 text-lg leading-relaxed max-w-xl mx-auto">
            Addressing inquiries about our methodology and commitment to the Salafi way with transparency.
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem 
              key={idx} 
              question={faq.question} 
              answer={faq.answer} 
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
