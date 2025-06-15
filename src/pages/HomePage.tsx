
import React from 'react';
import { Link } from 'react-router-dom';
import { Service, PortfolioItem } from '../types';
import ParticleHero from '../components/ParticleHero';
import Card from '../components/Card';
import FlipCard from '../components/FlipCard';
import Button from '../components/Button';

// Placeholder icons - replace with actual SVGs or an icon library
const MagicWandIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 gradient-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V9.75a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25v8.25A2.25 2.25 0 006 20.25zM12 12V3.75" /></svg>;
const TargetIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 gradient-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 2.25c-5.52 0-10.24.88-13.48 2.25L9.63 18l5.96-3.63z" /></svg>;
const BrushIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 gradient-text" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" /></svg>;


const services: Service[] = [
  { id: 'beheer', title: 'Social Media Beheer', description: 'Strategisch beheer van uw kanalen voor maximale impact.', image: '/assets/social-media-beheer.jpg', icon: <MagicWandIcon /> },
  { id: 'advertenties', title: 'Advertentie Campagnes', description: 'Doelgerichte campagnes die converteren en engageren.', image: '/assets/advertentie-campagnes.jpg', icon: <TargetIcon /> },
  { id: 'creatie', title: 'Content Creatie', description: 'Betoverende content die uw merkverhaal vertelt.', image: '/assets/content-creatie.jpg', icon: <BrushIcon /> },
];

const processSteps = [
  { id: 1, title: 'De Vonk', description: 'We duiken diep in uw merk, doelen en doelgroep om de perfecte strategie te ontsteken.', icon: '✨' },
  { id: 2, title: 'Het Brouwsel', description: 'Creativiteit en data worden gemengd tot een krachtige social media mix op maat.', icon: '🧪' },
  { id: 3, title: 'De Betovering', description: 'We lanceren, monitoren en optimaliseren voor magische, meetbare resultaten.', icon: '🌟' },
];

const portfolioPreview: PortfolioItem[] = [
  { id: 'zomerboost', title: 'ZomerBoost 2025 Campagne', category: 'Advertenties', imageUrl: '/assets/zomerboost-2025.jpg', description: 'Een spetterende zomer campagne die de verkoop een boost gaf.' },
  { id: 'brand-id', title: 'Nieuwe Brand Identity Lancering', category: 'Strategie', imageUrl: '/assets/brand-identity-creatie.jpg', description: 'Volledige social media strategie voor een frisse merkidentiteit.' },
  { id: 'techtalk', title: 'TechTalk Community Groei', category: 'Beheer', imageUrl: '/assets/techtalk-community-management.jpg', description: 'Organische groei en engagement voor een tech community.' },
];

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32 pb-16">
      <ParticleHero />

      {/* Dienstenoverzicht */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Onze Magische <span className="gradient-text">Diensten</span></h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12 md:mb-16 text-[#E0D9F7]/80">
          Van dagelijks beheer tot knallende campagnes, wij hebben de toverformule voor uw social media succes.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="h-80 md:h-96" data-aos="zoom-in" data-aos-delay={services.indexOf(service) * 100}>
                 <FlipCard
                    frontContent={
                        <>
                            {service.icon}
                            <h3 className="text-2xl font-semibold mt-4 mb-2 text-white">{service.title}</h3>
                            <p className="text-[#E0D9F7]/80">{service.description}</p>
                        </>
                    }
                    backContent={
                        <>
                            <h3 className="text-2xl font-semibold mb-3 text-white">{service.title}</h3>
                            <p className="text-sm text-[#E0D9F7]/90 mb-6">Ontdek hoe onze expertise in {service.title.toLowerCase()} uw merk kan transformeren.</p>
                            <Button asLink to="/diensten" variant="secondary" size="sm">Meer Details</Button>
                        </>
                    }
                 />
            </div>
          ))}
        </div>
      </section>

      {/* Proces Sectie */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Onze <span className="gradient-text">Toverformule</span></h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12 md:mb-16 text-[#E0D9F7]/80">
          Een beproefd proces dat strategie, creativiteit en resultaten naadloos combineert.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {processSteps.map((step, index) => (
            <Card key={step.id} className="h-full" dataAos="fade-up" dataAosDelay={`${index * 150}`}>
              <div className="text-5xl mb-6">{step.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-white">{step.title}</h3>
              <p className="text-[#E0D9F7]/80">{step.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Portfolio Sectie */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Recent <span className="gradient-text">Werk</span></h2>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12 md:mb-16 text-[#E0D9F7]/80">
          Een glimp van de magie die we voor onze klanten hebben gecreëerd.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {portfolioPreview.map((item, index) => (
            <Card key={item.id} className="overflow-hidden group" dataAos="zoom-in-up" dataAosDelay={`${index * 150}`}>
              <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-[#A78BFA] font-medium mb-2">{item.category}</p>
                <p className="text-sm text-[#E0D9F7]/80 mb-4">{item.description}</p>
                <Link to={`/portfolio#${item.id}`} className="font-semibold text-[#F472B6] hover:underline">Bekijk case →</Link>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asLink to="/portfolio" variant="primary" size="lg">
            Ontdek Meer Projecten
          </Button>
        </div>
      </section>

      {/* CTA Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center" data-aos="fade-up">
            <div className="glassmorphism rounded-xl p-8 md:p-12 lg:p-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Klaar om <span className="gradient-text">Social Media Magie</span> te Ervaren?</h2>
                <p className="text-lg max-w-xl mx-auto mb-8 text-[#E0D9F7]/90">
                    Laten we samenwerken om uw merk online te laten schitteren. Neem vandaag nog contact op voor een vrijblijvend gesprek.
                </p>
                <Button asLink to="/contact" variant="primary" size="lg">
                    Start Jouw Magische Reis
                </Button>
            </div>
        </section>
    </div>
  );
};

export default HomePage;
