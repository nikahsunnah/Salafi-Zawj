
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';

const ArticleCard: React.FC<{ article: typeof blogPosts[0] }> = ({ article }) => {
  return (
    <Link to={`/blog/${article.id}`} className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-[2rem] bg-white border border-ns-warmgrey shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
        <div className="h-56 w-full overflow-hidden relative">
          <img 
            src={article.image} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ns-plum/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="absolute top-4 left-4">
            <span className={`px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg backdrop-blur-md bg-white/90 ${article.color}`}>
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-6 flex-grow flex flex-col">
          <div className="flex items-center gap-3 mb-3 text-ns-plum/40">
            <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </div>
            <div className="w-1 h-1 rounded-full bg-ns-sand"></div>
            <div className="flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider">
              <BookOpen className="w-3 h-3" />
              Article
            </div>
          </div>
          <h3 className="text-xl font-serif font-bold text-ns-plum mb-3 group-hover:text-ns-mauve transition-colors leading-tight">
            {article.title}
          </h3>
          <p className="text-ns-dark/60 text-xs leading-relaxed mb-6 line-clamp-2">
            {article.excerpt}
          </p>
          <div className="mt-auto flex items-center gap-2 text-ns-plum font-bold text-xs group-hover:gap-4 transition-all">
            Read Full Article
            <ArrowRight className="w-4 h-4 text-ns-sand" />
          </div>
        </div>
      </div>
    </Link>
  );
};

const Articles: React.FC = () => {
  return (
    <section id="articles" className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-ns-warmgrey text-ns-plum text-[10px] font-bold uppercase tracking-[0.3em] mb-4 border border-ns-plum/20">
              <BookOpen className="w-3 h-3" />
              Intellectual Sanctuary
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-ns-plum mb-4 leading-tight">
              Knowledge for <br />
              <span className="text-ns-mauve italic">The Journey.</span>
            </h2>
            <p className="text-base text-ns-dark/60 leading-relaxed">
              Equip yourself with wisdom rooted in the Sunnah. We believe an informed seeker is a successful seeker.
            </p>
          </div>
          <Link to="/blog" className="px-8 py-3 bg-ns-warmgrey text-ns-plum rounded-full font-bold text-sm hover:bg-ns-plum hover:text-white transition-all shadow-sm">
            View All Insights
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
