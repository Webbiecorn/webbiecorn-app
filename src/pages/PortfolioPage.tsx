
import React, { useState, useEffect } from 'react';
import { PortfolioItem } from '../types';
import Card from '../components/Card';
import Modal from '../components/Modal';

const initialPortfolioItems: PortfolioItem[] = [
  { id: 'zomerboost-2025', title: 'ZomerBoost 2025', category: 'Advertenties', imageUrl: '/assets/zomerboost-2025.jpg', description: 'Explosieve groei in online verkopen door een gerichte zomer campagne.' },
  { id: 'ugc-campagne', title: 'Authentieke UGC Campagne', category: 'Creatie', imageUrl: '/assets/jij-bent-onze-ambassadeur.jpg', description: 'Verhoogde merkbetrokkenheid met door gebruikers gegenereerde content.' },
  { id: 'brand-identity-launch', title: 'Brand Identity Lancering', category: 'Strategie', imageUrl: '/assets/brand-identity-creatie.jpg', description: 'Succesvolle social media introductie van een vernieuwde merkidentiteit.' },
  { id: 'foodie-fotoshoot', title: 'Foodie Fotoshoot & Content', category: 'Creatie', imageUrl: '/assets/instagram-coffee.jpg', description: 'Smakelijke content die de eetlust opwekt en reserveringen stimuleert.' },
  { id: 'techtalk-community-groei', title: 'TechTalk Community Groei', category: 'Beheer', imageUrl: '/assets/techtalk-community-management.jpg', description: 'Exponentiële groei van een online tech community door strategisch beheer.' },
  { id: 'online-groei-strategie', title: 'Online Groei Strategie', category: 'Strategie', imageUrl: '/assets/5-stappen-online-groei.jpg', description: 'Visuele weergave van een 5-stappenplan voor online groei.' },
  { id: 'tech-platform-showcase', title: 'Tech Platform Showcase', category: 'Strategie', imageUrl: '/assets/case-study-webdesign.jpg', description: 'Presentatie van een geavanceerd digitaal webplatform.' },
  { id: 'non-profit-awareness', title: 'Non-Profit Awareness Drive', category: 'Beheer', imageUrl: '/assets/phone-social-explosion.jpg', description: 'Vergrote zichtbaarheid en steun voor een goed doel.' },
];

const categories = ['Alles', 'Beheer', 'Advertenties', 'Creatie', 'Strategie'];

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('Alles');
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(initialPortfolioItems);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (activeFilter === 'Alles') {
      setFilteredItems(initialPortfolioItems);
    } else {
      setFilteredItems(initialPortfolioItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  const openLightbox = (imageUrl: string) => setSelectedImage(imageUrl);
  const closeLightbox = () => setSelectedImage(null);

  return (
    <div className="py-16 md:py-24 bg-[#0F052B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ons Betoverende <span className="gradient-text">Portfolio</span></h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#E0D9F7]/80">
            Duik in een wereld van succesverhalen en ontdek de magie die we voor onze klanten hebben gecreëerd.
          </p>
        </header>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12" data-aos="fade-up">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 md:px-6 md:py-2.5 text-sm md:text-base font-medium rounded-full transition-all duration-300
                ${activeFilter === category 
                  ? 'bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#60A5FA] text-white shadow-lg' 
                  : 'bg-white/10 text-[#E0D9F7] hover:bg-white/20 hover:text-white'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item, index) => (
            <Card 
              key={item.id} 
              className="overflow-hidden group cursor-pointer" 
              onClick={() => openLightbox(item.imageUrl)}
              dataAos="zoom-in-up"
              dataAosDelay={`${index * 50}`}
            >
              <div className="relative aspect-video">
                <img 
                    src={item.imageUrl} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                 </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-[#A78BFA] font-medium mb-2">{item.category}</p>
                {item.description && <p className="text-sm text-[#E0D9F7]/80 line-clamp-2">{item.description}</p>}
              </div>
            </Card>
          ))}
        </div>
        {filteredItems.length === 0 && (
            <p className="text-center text-xl text-[#E0D9F7]/70 col-span-full mt-12">
                Geen projecten gevonden voor de categorie "{activeFilter}". Probeer een andere filter!
            </p>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <Modal isOpen={!!selectedImage} onClose={closeLightbox} title="Project Afbeelding">
          <img src={selectedImage} alt="Portfolio item" className="w-full h-auto max-h-[70vh] object-contain rounded-lg" />
        </Modal>
      )}
    </div>
  );
};

export default PortfolioPage;
