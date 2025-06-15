
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../types';
import Card from '../components/Card';

// Lunr is loaded via CDN
declare global {
  interface Window { lunr: any; }
}

const initialBlogPosts: BlogPost[] = [
  { id: 'social-media-trends-2024', title: 'Top 5 Social Media Trends in 2024', date: '15 Augustus 2024', category: 'Trends', imageUrl: '/assets/phone-social-explosion.jpg', summary: 'Ontdek de belangrijkste trends die social media marketing dit jaar vormgeven en hoe uw merk voorop kan blijven lopen.' },
  { id: 'waarom-ugc-koning-is', title: 'Waarom User-Generated Content Koning Is', date: '01 Augustus 2024', category: 'Strategie', imageUrl: '/assets/jij-bent-onze-ambassadeur.jpg', summary: 'Leer hoe u de kracht van authentieke content van uw gebruikers kunt benutten voor maximale impact.' },
  { id: 'tiktok-voor-bedrijven', title: 'TikTok voor Bedrijven: Meer dan Dansjes', date: '20 Juli 2024', category: 'Platformen', imageUrl: '/assets/instagram-coffee.jpg', summary: 'Is TikTok geschikt voor uw bedrijf? Ontdek de mogelijkheden en best practices voor dit populaire platform.' },
  { id: 'data-analyse-social-media', title: 'De Magie van Data-Analyse in Social Media', date: '05 Juli 2024', category: 'Data', imageUrl: '/assets/advertentie-campagnes.jpg', summary: 'Hoe u data kunt gebruiken om uw social media strategie te optimaliseren en betere resultaten te behalen.' },
  { id: 'content-kalender-maken', title: 'Een Effectieve Content Kalender Maken', date: '18 Juni 2024', category: 'Creatie', imageUrl: '/assets/brand-identity-creatie.jpg', summary: 'Tips en tools voor het plannen van uw social media content als een pro.' },
  { id: 'influencer-marketing-doen', title: 'Influencer Marketing: Zo Doet U Het Goed', date: '02 Juni 2024', category: 'Strategie', imageUrl: '/assets/5-stappen-online-groei.jpg', summary: 'Een gids voor succesvolle samenwerkingen met influencers die passen bij uw merk.' },
];

const blogCategories = ['Alles', ...new Set(initialBlogPosts.map(post => post.category))];

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Alles');
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>(initialBlogPosts);

  const lunrIndex = useMemo(() => {
    if (typeof window === 'undefined' || !window.lunr || !window.lunr.nl) {
        // lunr or lunr.nl might not be loaded yet or an error occurred
        console.warn("Lunr.js or Dutch language pack not available.");
        return null;
    }
    // window.lunr.use(window.lunr.nl); // This line was incorrect and caused the error.
    
    return window.lunr(function (this: any) { // Use 'any' for 'this' in Lunr builder
      this.use(window.lunr.nl); // Use Dutch stemmer - This is the correct way.
      this.ref('id');
      this.field('title', { boost: 10 });
      this.field('summary');
      this.field('category');

      initialBlogPosts.forEach(post => {
        this.add(post);
      });
    });
  }, []);

  const filterAndSearchPosts = useCallback(() => {
    let posts = initialBlogPosts;

    // Category filter
    if (activeCategory !== 'Alles') {
      posts = posts.filter(post => post.category === activeCategory);
    }

    // Search filter
    if (searchTerm.trim() !== '' && lunrIndex) {
      try {
        const searchResults = lunrIndex.search(searchTerm + '*'); // Add wildcard for partial matches
        const resultIds = searchResults.map((result: { ref: string }) => result.ref);
        posts = posts.filter(post => resultIds.includes(post.id));
      } catch (e) {
        console.warn("Lunr search error:", e); // Handle potential errors if index is not ready or search term is problematic
        // posts = []; // Optionally clear posts on error or keep current category filter
      }
    }
    setDisplayedPosts(posts);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm, activeCategory, lunrIndex, initialBlogPosts]); // initialBlogPosts is stable

  useEffect(() => {
    filterAndSearchPosts();
  }, [filterAndSearchPosts]);

  return (
    <div className="py-16 md:py-24 bg-[#0F052B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Webbiecorn's <span className="gradient-text">Blog</span></h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#E0D9F7]/80">
            De laatste inzichten, tips en magische formules uit de wereld van social media marketing.
          </p>
        </header>

        {/* Search and Filters */}
        <div className="mb-12 flex flex-col md:flex-row gap-4 items-center" data-aos="fade-up">
          <input
            type="text"
            placeholder="Zoek artikelen..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full md:w-1/2 p-3 rounded-lg bg-white/10 border border-white/20 text-[#E0D9F7] placeholder-[#E0D9F7]/60 focus:ring-2 focus:ring-[#A78BFA] focus:outline-none transition-all"
          />
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {blogCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                  ${activeCategory === category 
                    ? 'bg-gradient-to-r from-[#F472B6] to-[#A78BFA] text-white shadow-md' 
                    : 'bg-white/10 text-[#E0D9F7] hover:bg-white/20'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        {displayedPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayedPosts.map((post, index) => (
              <Card key={post.id} className="overflow-hidden group flex flex-col h-full" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                <Link to={`/blog/${post.id}`} className="block aspect-video overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                </Link>
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-xs text-[#A78BFA] font-semibold mb-1">{post.category.toUpperCase()} • {post.date}</p>
                  <h3 className="text-xl font-semibold text-white mb-2 flex-grow">
                    <Link to={`/blog/${post.id}`} className="hover:text-[#F472B6] transition-colors">{post.title}</Link>
                  </h3>
                  <p className="text-sm text-[#E0D9F7]/80 mb-4 line-clamp-3">{post.summary}</p>
                  <Link to={`/blog/${post.id}`} className="font-semibold text-[#F472B6] hover:underline self-start">
                    Lees Meer →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-xl text-[#E0D9F7]/70 py-12">
            Geen blogposts gevonden die voldoen aan uw criteria. Probeer uw zoekterm of filter aan te passen!
          </p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
