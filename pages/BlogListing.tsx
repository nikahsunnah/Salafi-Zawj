
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, ChevronLeft, Search, X, Filter } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogListing: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(blogPosts.map(post => post.category));
    return Array.from(cats);
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                           post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory ? post.category === selectedCategory : true;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="min-h-screen bg-ns-warmgrey">
      <Header onOpenRegister={() => {}} />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {/* Breadcrumb */}
          <Link to="/" className="inline-flex items-center gap-2 text-ns-plum/60 hover:text-ns-plum transition-colors mb-12 text-sm font-medium">
            <ChevronLeft className="w-4 h-4" />
            Back to Home
          </Link>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-ns-plum text-[10px] font-bold uppercase tracking-[0.3em] mb-6 border border-ns-plum/10 shadow-sm">
                <BookOpen className="w-3 h-3" />
                Intellectual Sanctuary
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-ns-plum mb-6 leading-tight">
                Insights for the <br />
                <span className="text-ns-mauve italic">Sunnah Seeker.</span>
              </h1>
              <p className="text-lg text-ns-dark/60 leading-relaxed">
                A collection of articles, guides, and reflections designed to help you navigate the journey of marriage upon the Quran and Sunnah.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative w-full lg:w-96 group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-ns-plum/30 group-focus-within:text-ns-plum transition-colors" />
              </div>
              <input 
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-ns-plum/10 rounded-2xl py-4 pl-14 pr-12 text-ns-plum placeholder:text-ns-plum/30 focus:outline-none focus:ring-2 focus:ring-ns-plum/5 focus:border-ns-plum/20 transition-all shadow-sm"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-4 flex items-center text-ns-plum/30 hover:text-ns-plum transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Filters/Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-12">
            <div className="flex items-center gap-2 text-ns-plum/40 mr-2">
              <Filter className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Filter by:</span>
            </div>
            <button 
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                selectedCategory === null 
                ? 'bg-ns-plum text-white shadow-lg' 
                : 'bg-white text-ns-plum/60 border border-ns-plum/5 hover:border-ns-plum/20'
              }`}
            >
              All Topics
            </button>
            {categories.map(category => (
              <button 
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                  selectedCategory === category 
                  ? 'bg-ns-plum text-white shadow-lg' 
                  : 'bg-white text-ns-plum/60 border border-ns-plum/5 hover:border-ns-plum/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="group">
                  <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-ns-plum/5 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 h-full flex flex-col">
                    <div className="h-64 w-full overflow-hidden relative">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ns-plum/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-6 left-6">
                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg backdrop-blur-md bg-white/90 ${post.color}`}>
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-8 flex-grow flex flex-col">
                      <div className="flex items-center gap-3 mb-4 text-ns-plum/40">
                        <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider">
                          <Clock className="w-3.5 h-3.5" />
                          {post.readTime}
                        </div>
                        <div className="w-1.5 h-1.5 rounded-full bg-ns-sand"></div>
                        <div className="text-[10px] font-bold uppercase tracking-wider">
                          {post.date}
                        </div>
                      </div>
                      <h3 className="text-2xl font-serif font-bold text-ns-plum mb-4 group-hover:text-ns-mauve transition-colors leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-ns-dark/60 text-sm leading-relaxed mb-8 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-auto flex items-center gap-2 text-ns-plum font-bold text-sm group-hover:gap-4 transition-all">
                        Read Full Article
                        <ArrowRight className="w-5 h-5 text-ns-sand" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="py-32 text-center bg-white rounded-[3rem] border border-ns-plum/5 shadow-sm">
              <div className="w-20 h-20 bg-ns-warmgrey rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-ns-plum/20" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-ns-plum mb-2">No articles found</h3>
              <p className="text-ns-dark/60 max-w-md mx-auto mb-8">
                We couldn't find any articles matching your search criteria. Try adjusting your filters or search terms.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory(null);
                }}
                className="text-ns-plum font-bold text-sm underline underline-offset-8 hover:text-ns-mauve transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogListing;
