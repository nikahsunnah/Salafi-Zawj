
export interface BlogPost {
  id: string;
  category: string;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  color: string;
  bgColor: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "wali-guide",
    category: "Practical Guide",
    title: "How to Involve Your Wali from Day One",
    excerpt: "Practical steps for sisters to introduce a potential match to their guardians with adab and clarity.",
    content: `
      <p>Involving your wali (guardian) from the very beginning of the marriage process is not just a legal requirement in Islam; it is a profound protection for the sister and a means of bringing barakah (blessing) into the union. Many sisters feel hesitant or unsure of how to approach this conversation, but doing so with adab (etiquette) and clarity sets a strong foundation for a Sunnah-based marriage.</p>
      
      <h3>Why Involve the Wali Early?</h3>
      <p>The Prophet (peace and blessings of Allah be upon him) said: "There is no marriage without a wali." (Abu Dawood). Beyond the legal aspect, your wali provides a second set of eyes, emotional support, and the wisdom of experience. By involving him early, you avoid the pitfalls of emotional attachment before the suitability of the match is established.</p>
      
      <h3>Practical Steps for Sisters</h3>
      <ul>
        <li><strong>Prepare Your Thoughts:</strong> Before speaking to your wali, be clear about why you are interested in a particular individual. Is it his deen? His character? His stability?</li>
        <li><strong>Choose the Right Time:</strong> Approach your wali when he is relaxed and not preoccupied with work or other stresses.</li>
        <li><strong>Be Direct but Respectful:</strong> "Father/Brother, I have been approached by/found someone who seems to be upon the Sunnah and of good character. I would like for you to look into him for me."</li>
      </ul>
      
      <h3>What if the Wali is Difficult?</h3>
      <p>If your wali is hesitant or has cultural objections that contradict the deen, seek the counsel of a local Imam or a person of knowledge who can mediate. Remember, the goal is to follow the path that is most pleasing to Allah.</p>
    `,
    readTime: "6 min read",
    date: "March 10, 2026",
    author: "Umm Abdullah",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800&auto=format&fit=crop",
    color: "text-ns-plum",
    bgColor: "bg-ns-warmgrey"
  },
  {
    id: "sunnah-an-nazar",
    category: "Fiqh of Marriage",
    title: "Understanding the Sunnah of An-Nazar",
    excerpt: "A deep dive into the prophetic guidance on looking at a potential spouse and the boundaries of haya.",
    content: `
      <p>An-Nazar, or the act of looking at a potential spouse, is a beautiful Sunnah that helps in making an informed decision. However, it must be done within the boundaries of Shariah and with the utmost haya (modesty).</p>
      
      <h3>The Purpose of An-Nazar</h3>
      <p>The Prophet (peace and blessings of Allah be upon him) encouraged Al-Mughirah ibn Shu’bah to look at the woman he intended to marry, saying: "Look at her, for it is more likely to create love between you." (At-Tirmidhi). The purpose is to establish a basic level of physical attraction and comfort, which is essential for a successful marriage.</p>
      
      <h3>The Boundaries</h3>
      <ul>
        <li><strong>Presence of a Mahram:</strong> This is non-negotiable. The meeting must take place in the presence of her mahram (unmarriageable relative).</li>
        <li><strong>Lowering the Gaze:</strong> While looking is permitted for the purpose of marriage, it should not be a lustful gaze. It is a purposeful look to see what attracts one to the other.</li>
        <li><strong>What can be seen?</strong> The majority of scholars agree that the face and hands can be seen, as they indicate beauty and the state of the body.</li>
      </ul>
      
      <p>By following these guidelines, we ensure that the process remains pure and focused on the ultimate goal: a marriage built on the pleasure of Allah.</p>
    `,
    readTime: "8 min read",
    date: "March 5, 2026",
    author: "Ustadh Abu Maryam",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800&auto=format&fit=crop",
    color: "text-ns-mauve",
    bgColor: "bg-ns-warmgrey"
  },
  {
    id: "deen-over-culture",
    category: "Character",
    title: "Deen over Culture: Navigating Tribalism",
    excerpt: "How to prioritize Islamic values when cultural expectations clash with the Sunnah path to marriage.",
    content: `
      <p>Tribalism and cultural preferences often become barriers to marriage in our communities. While culture is not inherently bad, it must always be secondary to the Deen. When cultural expectations contradict Islamic principles, the believer must choose the Deen.</p>
      
      <h3>The Prophetic Standard</h3>
      <p>The Prophet (peace and blessings of Allah be upon him) said: "If there comes to you one whose religious commitment and character you are pleased with, then marry your daughter to him." (At-Tirmidhi). He did not mention tribe, nationality, or social status as the primary criteria.</p>
      
      <h3>Common Cultural Barriers</h3>
      <ul>
        <li><strong>Inter-ethnic Marriage:</strong> Many families refuse matches solely based on ethnicity, which has no basis in Islam.</li>
        <li><strong>Excessive Mahr:</strong> Cultural demands for high mahr can delay marriage and cause unnecessary hardship.</li>
        <li><strong>Extravagant Weddings:</strong> The pressure to have a "big" wedding often leads to debt and haram practices.</li>
      </ul>
      
      <p>Choosing Deen over culture requires courage and a firm belief that Allah's way is best. It is about building a home on the foundations of Taqwa rather than the shifting sands of societal approval.</p>
    `,
    readTime: "5 min read",
    date: "February 28, 2026",
    author: "Sheikh Ibrahim",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop",
    color: "text-ns-plum",
    bgColor: "bg-ns-warmgrey"
  }
];
