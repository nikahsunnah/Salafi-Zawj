
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Calendar, User, Share2, Bookmark } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-ns-warmgrey p-4">
        <h1 className="text-3xl font-serif font-bold text-ns-plum mb-4 text-center">Article Not Found</h1>
        <p className="text-ns-dark/60 mb-8 text-center">The article you are looking for does not exist or has been moved.</p>
        <Link to="/blog" className="btn-primary-cta px-8 py-3 rounded-full text-white font-bold">
          Return to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ns-white">
      <Header onOpenRegister={() => {}} />
      
      <main className="pt-32 pb-20">
        {/* Article Header */}
        <div className="container mx-auto px-4 md:px-8 max-w-4xl mb-12">
          <Link to="/blog" className="inline-flex items-center gap-2 text-ns-plum/60 hover:text-ns-plum transition-colors mb-12 text-sm font-medium">
            <ChevronLeft className="w-4 h-4" />
            Back to Insights
          </Link>

          <div className="space-y-6">
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border border-ns-plum/10 ${post.color}`}>
              {post.category}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-ns-plum leading-[1.1]">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-ns-warmgrey">
              <div className="flex items-center gap-2 text-ns-dark/60 text-sm">
                <User className="w-4 h-4 text-ns-sand" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-ns-dark/60 text-sm">
                <Calendar className="w-4 h-4 text-ns-sand" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-ns-dark/60 text-sm">
                <Clock className="w-4 h-4 text-ns-sand" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="container mx-auto px-4 md:px-8 max-w-6xl mb-16">
          <div className="aspect-[21/9] w-full rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 md:px-8 max-w-3xl">
          <div className="flex flex-col md:flex-row gap-12">
            {/* Sidebar Actions */}
            <div className="md:w-12 flex md:flex-col gap-4 order-2 md:order-1 sticky top-32 h-fit">
              <button className="w-12 h-12 rounded-full border border-ns-warmgrey flex items-center justify-center text-ns-plum/40 hover:text-ns-plum hover:border-ns-plum transition-all">
                <Share2 className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full border border-ns-warmgrey flex items-center justify-center text-ns-plum/40 hover:text-ns-plum hover:border-ns-plum transition-all">
                <Bookmark className="w-5 h-5" />
              </button>
            </div>

            {/* Content Body */}
            <div className="flex-grow order-1 md:order-2">
              <div 
                className="prose prose-lg prose-ns max-w-none text-ns-dark/80 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
              
              <div className="mt-16 pt-12 border-t border-ns-warmgrey">
                <div className="bg-ns-warmgrey/50 rounded-[2rem] p-8 md:p-12 text-center">
                  <h3 className="text-2xl font-serif font-bold text-ns-plum mb-4">Found this helpful?</h3>
                  <p className="text-ns-dark/60 mb-8 max-w-md mx-auto">
                    Join our exclusive community of Sunnah seekers and find your righteous match today.
                  </p>
                  <button className="btn-primary-cta px-10 py-4 rounded-xl text-white font-bold shadow-lg">
                    Find Your Match
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Articles */}
        <div className="container mx-auto px-4 md:px-8 max-w-7xl mt-32">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-serif font-bold text-ns-plum">Continue Reading</h2>
            <Link to="/blog" className="text-ns-plum font-bold text-sm hover:text-ns-mauve transition-colors">
              View All Articles
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.filter(p => p.id !== id).slice(0, 3).map((relatedPost) => (
              <Link to={`/blog/${relatedPost.id}`} key={relatedPost.id} className="group">
                <div className="space-y-4">
                  <div className="aspect-[16/10] rounded-3xl overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-ns-mauve">
                      {relatedPost.category}
                    </span>
                    <h4 className="text-xl font-serif font-bold text-ns-plum group-hover:text-ns-mauve transition-colors leading-tight">
                      {relatedPost.title}
                    </h4>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
