
import React from 'react';
import { Send, Check, CheckCheck, ChevronLeft, MoreVertical, Search } from 'lucide-react';

const telegramReviews = [
  { name: "Fatima S.", initials: "FS", color: "bg-ns-plum", time: "14:22", message: "Assalamu'alaikum! I just wanted to say barakallahu feekum for this platform. My wali was so impressed with how the brother approached him. We are now in the next stage of introductions. Please keep us in your du'as!", status: "read" },
  { name: "Ahmed L.", initials: "AL", color: "bg-ns-sand", time: "10:05", message: "Alhamdulillah, I found my spouse here. We are getting married next month! The verification process really filters out the time-wasters. Sincerity is everything. Recommended to all my friends.", status: "delivered" },
  { name: "Zaynab MCR", initials: "ZM", color: "bg-ns-mauve", time: "21:45", message: "Honestly, the best thing is no 'swiping'. You actually have to read the profile and think about the deen. Finally a platform that respects our values. May Allah reward the team.", status: "read" },
  { name: "Omar K.", initials: "OK", color: "bg-ns-plum", time: "09:30", message: "The Wali portal is a game changer. My sister's process was so smooth because I could see everything. Dignified and Islamic. JazakAllah Khayr.", status: "read" },
  { name: "Maryam B.", initials: "MB", color: "bg-ns-sand", time: "18:12", message: "I was hesitant about 'apps' but Nikah Salafi feels like a community. The profiles are so detailed, you really get to know someone's character before even talking.", status: "delivered" },
  { name: "Ibrahim T.", initials: "IT", color: "bg-ns-plum", time: "11:55", message: "Found my better half on here. The support team is amazing, they actually answer questions and help with the verification. 10/10 platform for serious brothers.", status: "read" },
  { name: "Sara H.", initials: "SH", color: "bg-ns-sand", time: "22:04", message: "The assisted matching is worth it. They found someone who matched my deen requirements perfectly. We just had our first family meeting yesterday!", status: "read" },
  { name: "Yusuf London", initials: "YL", color: "bg-ns-mauve", time: "15:40", message: "Clean interface, no ads, no nonsense. Just pure intention for Nikah. The way it should be. BarakAllahu feekum for this service to the Ummah.", status: "read" },
  { name: "Aisha G.", initials: "AG", color: "bg-ns-plum", time: "12:20", message: "My father was actually happy with this app. He liked that he was involved from day one. It made the whole 'meeting a stranger' part feel very safe.", status: "delivered" },
  { name: "Kareem A.", initials: "KA", color: "bg-ns-sand", time: "08:15", message: "Alhamdulillah for Nikah Salafi. I've been searching for 2 years on other apps and found only drama. Here, people are actually serious about marriage.", status: "read" }
];

const TelegramLogo = () => (
  <svg viewBox="0 0 24 24" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#24A1DE"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.39999 11.9L17.5 7.19999C18.1 6.99999 18.6 7.39999 18.4 8.09999L16.4 17.6C16.3 18.1 15.9 18.2 15.5 17.9L12.4 15.6L10.9 17.1C10.7 17.3 10.6 17.4 10.4 17.4L10.6 14.2L16.5 8.89999C16.8 8.59999 16.4 8.39999 16.1 8.59999L8.69999 13.2L5.59999 12.2C4.89999 12 4.89999 11.5 5.39999 11.3V11.9Z" fill="white"/>
  </svg>
);

const TelegramPhoneMockup: React.FC<{ review: typeof telegramReviews[0] }> = ({ review }) => {
  const isDarkInitial = review.color === 'ns-sand';
  
  const messages = [
    { type: 'in', text: review.message, time: review.time },
    { type: 'out', text: "Alhamdulillah! May Allah bless your journey. 🤲", time: "14:45", status: review.status },
    { type: 'in', text: "Jazakallahu khairan! We are so happy.", time: "14:50" },
    { type: 'out', text: "Wa iyyakum. Please keep the community in your du'as.", time: "15:00", status: 'read' },
    { type: 'in', text: review.message, time: review.time },
    { type: 'out', text: "Alhamdulillah! May Allah bless your journey. 🤲", time: "14:45", status: review.status },
  ];

  return (
    <div className="relative group perspective-1000 shrink-0">
      <div className="relative w-[210px] h-[380px] bg-ns-dark rounded-[2.5rem] p-2.5 shadow-2xl border-[5px] border-ns-dark/5 overflow-hidden transition-all duration-500 group-hover:shadow-ns-plum/20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-ns-dark rounded-b-2xl z-50"></div>
        <div className="w-full h-full bg-white rounded-[1.8rem] overflow-hidden flex flex-col relative">
          
          {/* Header */}
          <div className="bg-white pt-8 pb-2 px-3 flex items-center gap-2.5 border-b border-ns-warmgrey z-20 shrink-0">
            <ChevronLeft className="w-4 h-4 text-ns-plum shrink-0" />
            <div className={`w-8 h-8 rounded-full ${review.color} flex items-center justify-center ${isDarkInitial ? 'text-ns-plum' : 'text-white'} font-bold text-xs shrink-0 shadow-sm border border-ns-plum/5`}>
              {review.initials}
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-[11px] font-bold text-ns-dark truncate leading-tight">{review.name}</h4>
              <p className="text-[9px] text-ns-plum/40 font-medium">online</p>
            </div>
            <div className="flex gap-1.5 text-ns-plum/30 shrink-0">
              <Search className="w-3.5 h-3.5" />
              <MoreVertical className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Chat Area with Vertical Auto-Scroll */}
          <div className="flex-1 overflow-hidden relative z-10 bg-ns-warmgrey/30">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none islamic-pattern scale-75"></div>
            
            <div className="animate-vertical-scroll group-hover:[animation-play-state:paused] active:[animation-play-state:paused] flex flex-col gap-3 p-3">
              {messages.map((msg, idx) => (
                <div 
                  key={idx}
                  className={`max-w-[85%] relative ${msg.type === 'in' ? 'self-start' : 'self-end'}`}
                >
                  <div className={`${msg.type === 'in' ? 'bg-white rounded-tl-sm' : 'bg-ns-plum text-white rounded-tr-sm'} p-2.5 rounded-xl shadow-sm border border-ns-warmgrey/50`}>
                    <p className="text-[10px] leading-relaxed font-medium">
                      {msg.text}
                    </p>
                    <div className="flex items-center justify-end gap-1 mt-1">
                      <span className={`text-[7px] ${msg.type === 'in' ? 'text-ns-dark/30' : 'text-white/50'} font-bold`}>{msg.time}</span>
                      {msg.type === 'out' && (
                        msg.status === 'read' ? (
                          <CheckCheck className="w-2.5 h-2.5 text-ns-sand" />
                        ) : (
                          <Check className="w-2.5 h-2.5 text-white/40" />
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer/Input */}
          <div className="h-12 bg-white border-t border-ns-warmgrey px-3 flex items-center gap-3 shrink-0 z-20">
             <div className="w-4 h-4 text-ns-plum/30"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg></div>
             <div className="flex-1 h-7 bg-ns-warmgrey/50 rounded-full flex items-center px-3 text-ns-plum/30 text-[9px] font-medium">Message</div>
             <div className="w-4 h-4 text-ns-plum"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="feedback" className="py-16 md:py-24 success-pattern relative overflow-hidden border-y border-ns-warmgrey">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-ns-plum/10 to-transparent"></div>
      
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-ns-plum/5 blur-[100px] rounded-full -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ns-sand/10 blur-[100px] rounded-full -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-6 md:px-8 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ns-plum/10 text-ns-plum text-[11px] font-bold uppercase tracking-[0.3em] mb-5 border border-ns-plum/10">
            <Send className="w-4 h-4" />
            Success Stories
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-ns-plum mb-4 leading-tight">
            Raw Community <br />
            <span className="text-ns-mauve italic">Conversations.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-ns-dark/70 max-w-2xl leading-relaxed mb-8 font-medium">
            Authentic feedback from brothers and sisters in our community. We maintain a transparent journey where sincerity leads to union.
          </p>

          <div className="mb-12">
            <a 
              href="#" 
              className="inline-flex items-center gap-4 bg-white px-6 py-3.5 md:px-8 md:py-4 rounded-2xl border border-ns-plum/10 shadow-[0_15px_30px_-10px_rgba(75,46,93,0.1)] hover:shadow-[0_20px_40px_-10px_rgba(75,46,93,0.15)] hover:-translate-y-1 transition-all group"
            >
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-xl overflow-hidden shrink-0 group-hover:scale-110 transition-transform shadow-md">
                <TelegramLogo />
              </div>
              <div className="text-left">
                <p className="text-sm md:text-base font-bold text-ns-plum leading-tight">Join our Telegram Group</p>
                <p className="text-[10px] text-ns-plum/50 font-black uppercase tracking-widest leading-none mt-0.5">500+ Verified Stories</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className="marquee-container relative py-4 group">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] active:[animation-play-state:paused] gap-6 md:gap-12 px-8">
            {[...telegramReviews, ...telegramReviews].map((review, idx) => (
              <TelegramPhoneMockup key={`${idx}`} review={review} />
            ))}
          </div>
        </div>
        
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-ns-warmgrey via-ns-warmgrey/10 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-ns-warmgrey via-ns-warmgrey/10 to-transparent z-20 pointer-events-none"></div>
      </div>

      <div className="text-center mt-6 pb-6">
        <p className="text-[10px] font-bold text-ns-plum/30 uppercase tracking-[0.4em]">Propelled by Allah's Grace</p>
      </div>
    </section>
  );
};

export default Testimonials;
