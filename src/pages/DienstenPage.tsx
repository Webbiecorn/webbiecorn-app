
import React from 'react';
import { Service } from '../types';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const servicesData: Service[] = [
  {
    id: 'social-media-beheer',
    title: 'Strategisch Social Media Beheer',
    description: 'Wij nemen het roer over van uw social media kanalen. Van contentplanning en creatie tot community management en rapportage, wij zorgen voor een consistente en engagerende aanwezigheid die uw merk versterkt.',
    longDescription: 'Ons team van social media magiërs ontwikkelt een strategie op maat, creëert boeiende content die resoneert met uw doelgroep, en beheert uw communities proactief. We monitoren prestaties, analyseren data en sturen bij waar nodig om maximale resultaten te behalen. Focus u op uw core business, terwijl wij uw online aanwezigheid transformeren.',
    image: '/assets/social-media-beheer.jpg',
  },
  {
    id: 'advertentie-campagnes',
    title: 'Resultaatgerichte Advertentie Campagnes',
    description: 'Maximaliseer uw bereik en conversies met datagestuurde advertentiecampagnes op platforms zoals Facebook, Instagram, LinkedIn en TikTok. Wij zorgen voor de magie achter de targeting en optimalisatie.',
    longDescription: 'Webbiecorn ontwerpt, implementeert en optimaliseert advertentiecampagnes die écht werken. We gebruiken geavanceerde targetingtechnieken, A/B-testen advertentiecreatives en optimaliseren budgetten continu voor de hoogste ROI. Of het nu gaat om merkbekendheid, leadgeneratie of directe verkoop, wij zetten uw advertentiebudget om in meetbaar succes.',
    image: '/assets/advertentie-campagnes.jpg',
  },
  {
    id: 'content-creatie',
    title: 'Betoverende Content Creatie',
    description: 'Van oogstrelende visuals en pakkende video’s tot overtuigende copy. Ons creatieve team produceert content die niet alleen mooi is, maar ook de juiste snaar raakt bij uw doelgroep.',
    longDescription: 'Content is koning, en bij Webbiecorn creëren we koninklijke content. We ontwikkelen een contentstrategie die aansluit bij uw merkidentiteit en doelstellingen. Ons team van copywriters, designers en videografen produceert unieke, hoogwaardige content die opvalt, engageert en inspireert. Laat ons uw merkverhaal vertellen op een manier die blijft hangen.',
    image: '/assets/content-creatie.jpg',
  },
];

const DienstenPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-[#0F052B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 md:mb-20" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Onze Magische <span className="gradient-text">Diensten</span></h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#E0D9F7]/80">
            Ontdek hoe Webbiecorn uw social media kan transformeren met onze gespecialiseerde diensten.
          </p>
        </header>

        <div className="space-y-16 md:space-y-24">
          {servicesData.map((service, index) => (
            <section
              key={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12 lg:gap-16`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="md:w-1/2">
                <img
                  src={service.image}
                  alt={service.title}
                  className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-video glassmorphism p-1"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl lg:text-4xl font-semibold mb-4 gradient-text">{service.title}</h2>
                <p className="text-lg text-[#E0D9F7]/90 mb-6">{service.description}</p>
                {service.longDescription && <p className="text-base text-[#E0D9F7]/70 mb-8">{service.longDescription}</p>}
                <Button asLink to="/contact" variant="primary">
                  Start Vandaag Nog
                </Button>
              </div>
            </section>
          ))}
        </div>
         <section className="mt-24 text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Klaar om de <span className="gradient-text">Volgende Stap</span> te Zetten?</h2>
            <p className="text-lg max-w-xl mx-auto mb-8 text-[#E0D9F7]/80">
                Elk merk heeft een uniek verhaal. Laten we samen ontdekken hoe we uw social media magie kunnen ontketenen.
            </p>
            <Button asLink to="/contact" size="lg" variant="primary">Vraag een Offerte Aan</Button>
            <Link to="/portfolio" className="block mt-6 text-[#A78BFA] hover:text-[#F472B6] font-medium">
                Of bekijk eerst ons werk →
            </Link>
        </section>
      </div>
    </div>
  );
};

export default DienstenPage;
