import React from 'react';
import { Link } from 'react-router-dom';
import { CaseStudy } from '../types';
import Card from '../components/Card';
import Button from '../components/Button';

// STAP 1: Importeer de lokale afbeeldingen
import koffiehoekImage from "../assets/case-study-koffiehoek.jpg";
import b2bLeadgenImage from '../assets/casestudy-webdesign.jpg';


const caseStudiesData: CaseStudy[] = [
  {
    id: 'ecommerce-fashion-boost',
    title: 'E-commerce Fashion Boost',
    clientName: 'ModeMaven Boutique',
    summary: 'Verdubbeling van online omzet in 6 maanden door een gerichte social media en influencer strategie.',
    imageUrl: 'https://picsum.photos/seed/case-study-modemaven-new/600/400', // Externe URL, OK!
    challenge: 'Stagnerende online verkopen en lage merkbekendheid ondanks een kwaliteitsproduct.',
    approach: 'Combinatie van betaalde advertenties op Instagram & Pinterest, samenwerking met micro-influencers, en UGC campagnes.',
    results: [
      { keyMetric: 'Online Omzet Groei', value: '+120%' },
      { keyMetric: 'ROAS (Return on Ad Spend)', value: '4.5x' },
      { keyMetric: 'Website Verkeer', value: '+85%' }
    ],
    testimonial: { text: "Webbiecorn's aanpak was revolutionair voor ons! We zagen direct resultaat.", author: "Anna Stijl, CEO ModeMaven" }
  },
  {
    id: 'koffiehoek-community',
    title: 'Lokale Koffiehoek Community Groei',
    clientName: 'De Gezellige Koffiehoek',
    summary: 'Opbouw van een loyale lokale community en significante toename in winkelbezoek door hyperlokale content en engagement.',
    // STAP 2: Gebruik de geïmporteerde variabele
    imageUrl: koffiehoekImage,
    challenge: 'Beperkte naamsbekendheid buiten de directe omgeving en lage klantloyaliteit.',
    approach: 'Focus op Instagram & Facebook met lokale evenementpromotie, klantverhalen, en interactieve content (polls, Q&A\'s).',
    results: [
      { keyMetric: 'Toename Winkelbezoek', value: '+40%' },
      { keyMetric: 'Instagram Volgers Groei', value: '+300%' },
      { keyMetric: 'Online Bestellingen (Nieuw)', value: '+25%' }
    ],
    testimonial: { text: "Dankzij Webbiecorn is onze koffiehoek een echte hotspot geworden, online en offline!", author: "Kees Barista, Eigenaar" }
  },
  {
    id: 'b2b-leadgen-tech',
    title: 'B2B Leadgeneratie voor Tech SaaS',
    clientName: 'Innovatech Solutions',
    summary: 'Genereren van hoogwaardige B2B leads via LinkedIn, resulterend in een aanzienlijke pijplijngroei.',
    // STAP 3: Gebruik de geïmporteerde variabele
    imageUrl: b2bLeadgenImage,
    challenge: 'Moeite met het bereiken van de juiste decision-makers en het genereren van gekwalificeerde leads.',
    approach: 'Gerichte LinkedIn advertentiecampagnes, content marketing (whitepapers, webinars), en lead nurturing via e-mail automation.',
    results: [
      { keyMetric: 'Gekwalificeerde Leads per Maand', value: '+150%' },
      { keyMetric: 'Cost Per Lead (CPL)', value: '-30%' },
      { keyMetric: 'Conversieratio (Lead to Demo)', value: '+20%' }
    ],
    testimonial: { text: "Webbiecorn heeft onze B2B leadgeneratie naar een professioneel niveau getild. De resultaten spreken voor zich.", author: "Linda Manager, Marketing Director" }
  }
];

const CaseStudiesPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-[#0F052B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Onze <span className="gradient-text">Succesverhalen</span></h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#E0D9F7]/80">
            Ontdek hoe we concrete, magische resultaten hebben geleverd voor diverse klanten.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudiesData.map((study, index) => (
            <Card key={study.id} className="flex flex-col h-full overflow-hidden group" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <Link to={`/case-studies/${study.id}`} className="block aspect-video overflow-hidden">
                <img 
                    src={study.imageUrl} 
                    alt={study.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" 
                />
              </Link>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-1">
                    <Link to={`/case-studies/${study.id}`} className="hover:text-[#F472B6] transition-colors">{study.title}</Link>
                </h3>
                <p className="text-sm text-[#A78BFA] font-medium mb-2">{study.clientName}</p>
                <p className="text-sm text-[#E0D9F7]/80 mb-4 line-clamp-3 flex-grow">{study.summary}</p>
                <div className="mt-auto">
                    <Link to={`/case-studies/${study.id}`} className="font-semibold text-[#F472B6] hover:underline self-start">
                        Lees Case Study â†’
                    </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center" data-aos="fade-up">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Klaar om Uw Eigen <span className="gradient-text">Succesverhaal</span> te Schrijven?</h2>
            <p className="text-lg max-w-xl mx-auto mb-8 text-[#E0D9F7]/80">
                Laten we samenwerken om uw merk naar nieuwe hoogten te tillen. Neem contact op voor een vrijblijvend gesprek.
            </p>
            <Button asLink to="/contact" variant="primary" size="lg">
                Start Jouw Magie
            </Button>
        </div>

      </div>
    </div>
  );
};

export { caseStudiesData }; // Export for detail page
export default CaseStudiesPage;