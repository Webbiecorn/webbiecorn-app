import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { blogContent, blogPosts } from '../data/siteContent';

const BlogPage: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('Alles');

  const categories = useMemo(() => ['Alles', ...new Set(blogPosts.map((post) => post.category))], []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = category === 'Alles' || post.category === category;
      const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.summary.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Blog</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">{blogContent.hero.title}</h1>
          <p className="text-white/70">{blogContent.hero.description}</p>
        </header>

        <div className="flex flex-col md:flex-row gap-4 items-center">
          <input
            type="text"
            placeholder="Zoek in artikelen"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-1/2 px-4 py-3 rounded-full bg-white/10 border border-white/10 text-white placeholder-white/50"
          />
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold ${cat === category ? 'bg-white text-[#050014]' : 'bg-white/10 text-white/60 hover:bg-white/20'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden p-0 flex flex-col">
              <Link to={`/blog/${post.id}`} className="block aspect-[4/3] overflow-hidden">
                <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover" />
              </Link>
              <div className="p-6 space-y-3 flex flex-col flex-grow">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{post.category} · {post.date}</p>
                <h3 className="text-xl text-white font-semibold flex-grow">
                  <Link to={`/blog/${post.id}`} className="hover:text-[#F472B6]">{post.title}</Link>
                </h3>
                <p className="text-white/70 text-sm">{post.summary}</p>
                <Link to={`/blog/${post.id}`} className="text-sm font-semibold text-[#F472B6]">Lees artikel →</Link>
              </div>
            </Card>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-white/60">Geen artikelen gevonden, probeer een andere zoekterm.</p>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
