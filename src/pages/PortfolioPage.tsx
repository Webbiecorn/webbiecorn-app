import React, { useState, useMemo } from 'react';
import { PortfolioItem } from '../types';
import Card from '../components/Card';
import Modal from '../components/Modal';
import { caseStudies } from '../data/siteContent';

import zomerboostImg from '../assets/zomerboost-2025.jpg';
import ugcCampagneImg from '../assets/Influencer_Marketing.jpg';
import brandIdentityImg from '../assets/brand-identity.jpg';
import foodieFotoshootImg from '../assets/case-study-koffiehoek.jpg';
import techtalkCommunityImg from '../assets/techtalk-community.jpg';
import onlineGroeiImg from '../assets/case-study-ecommerce.jpg';
import techPlatformImg from '../assets/casestudy-webdesign.jpg';
import nonProfitImg from '../assets/ugc-campagne2.jpg';

const initialPortfolioItems: PortfolioItem[] = [
  { id: 'zomerboost-2025', title: 'ZomerBoost 2025', category: 'Advertenties', imageUrl: zomerboostImg, description: 'Retail activatie met lokale creators en always-on ads.' },
  { id: 'ugc-campagne', title: 'UGC programma', category: 'Creatie', imageUrl: ugcCampagneImg, description: 'Creator kits en rights management voor scale-ups.' },
  { id: 'brand-identity', title: 'Brand relaunch', category: 'Strategie', imageUrl: brandIdentityImg, description: 'Nieuwe tone-of-voice en visuele identiteit voor een fintech.' },
  { id: 'foodie-shoot', title: 'Hospitality content', category: 'Creatie', imageUrl: foodieFotoshootImg, description: 'Reels en fotografie voor horeca keten.' },
  { id: 'community-growth', title: 'Community ops', category: 'Beheer', imageUrl: techtalkCommunityImg, description: 'Slack en LinkedIn community management.' },
  { id: 'ecom-scale', title: 'E-commerce groei', category: 'Strategie', imageUrl: onlineGroeiImg, description: 'Dashboards en growth loops voor D2C brand.' },
  { id: 'platform-launch', title: 'Platform launch', category: 'Strategie', imageUrl: techPlatformImg, description: 'Product storytelling en thought leadership.' },
  { id: 'impact-drive', title: 'Impact campagne', category: 'Beheer', imageUrl: nonProfitImg, description: 'Omnichannel awareness voor NGO.' },
];

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Alles');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = useMemo(
    () => ['Alles', ...new Set(initialPortfolioItems.map((item) => item.category))],
    []
  );

  const filteredItems = useMemo(() => {
    if (activeFilter === 'Alles') return initialPortfolioItems;
    return initialPortfolioItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Werk</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Een kijkje in onze labs</h1>
          <p className="text-white/70">Cases waarin content, community en performance samenkomen.</p>
        </header>

        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                activeFilter === category ? 'bg-white text-[#050014]' : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden p-0 cursor-pointer" onClick={() => setSelectedImage(item.imageUrl)}>
              <div className="relative aspect-[4/3]">
                <img src={item.imageUrl} alt={item.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">{item.category}</p>
                  <h3 className="text-xl text-white font-semibold">{item.title}</h3>
                  <p className="text-sm text-white/70">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Verdieping</p>
              <h2 className="text-3xl text-white font-semibold">Uitgelichte case studies</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <Card key={study.id} className="p-0 overflow-hidden">
                <img src={study.imageUrl} alt={study.title} className="w-full h-48 object-cover" />
                <div className="p-6 space-y-2">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">{study.category}</p>
                  <h3 className="text-xl text-white font-semibold">{study.title}</h3>
                  <p className="text-white/70 text-sm">{study.summary}</p>
                  <p className="text-sm text-white/50">Key metric: {study.results[0]?.value}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {selectedImage && (
        <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} title="Project visual">
          <img src={selectedImage} alt="Project" className="w-full h-auto max-h-[70vh] object-contain rounded-xl" />
        </Modal>
      )}
    </div>
  );
};

export default PortfolioPage;
