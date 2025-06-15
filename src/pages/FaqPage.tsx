
import React from 'react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    id: 'what-is-webbiecorn',
    question: 'Wat doet Webbiecorn precies?',
    answer: 'Webbiecorn is een social media marketingbureau dat gespecialiseerd is in het creëren van "social media magie". We combineren creativiteit met datagestuurde strategieën om merken te helpen groeien, engageren en converteren op social media platformen.'
  },
  {
    id: 'which-platforms',
    question: 'Op welke social media platformen zijn jullie actief?',
    answer: 'Wij zijn experts op een breed scala aan platformen, waaronder Instagram, Facebook, TikTok, LinkedIn, Pinterest en X (voorheen Twitter). We adviseren welke platformen het beste passen bij uw doelgroep en bedrijfsdoelstellingen.'
  },
  {
    id: 'what-results',
    question: 'Wat voor resultaten kan ik verwachten?',
    answer: 'Resultaten variëren per klant en campagne, maar ons doel is altijd om meetbare impact te leveren. Dit kan zijn: verhoogde merkbekendheid, meer websiteverkeer, leadgeneratie, hogere engagement rates, community groei, en uiteindelijk, een stijging in omzet.'
  },
  {
    id: 'how-much-cost',
    question: 'Hoeveel kost social media marketing bij Webbiecorn?',
    answer: 'We bieden verschillende pakketten aan, beginnend vanaf €499/maand. Voor grotere projecten of specifieke behoeften bieden we maatwerkoplossingen. Bekijk onze <a href="/#/prijzen" class="text-[#A78BFA] hover:text-[#F472B6] underline">Prijzenpagina</a> voor meer details of neem contact op voor een offerte op maat.'
  },
  {
    id: 'how-long-see-results',
    question: 'Hoe lang duurt het voordat ik resultaten zie?',
    answer: 'Social media marketing is een marathon, geen sprint. Hoewel sommige tactieken snelle winst kunnen opleveren, streven we naar duurzame groei. Meestal zien klanten binnen 1-3 maanden significante verbeteringen, afhankelijk van de strategie en doelstellingen.'
  },
  {
    id: 'who-creates-content',
    question: 'Wie maakt de content?',
    answer: 'Ons getalenteerde team van content creators, copywriters, designers en videografen creëert alle content in nauwe samenwerking met u. We zorgen ervoor dat alle content perfect aansluit bij uw merkidentiteit en -stem.'
  },
];

const FaqPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-[#0F052B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Veelgestelde <span className="gradient-text">Vragen</span></h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#E0D9F7]/80">
            Antwoorden op uw meest brandende vragen over Webbiecorn en onze magische diensten.
          </p>
        </header>

        <div className="max-w-3xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <details 
              key={item.id} 
              className="glassmorphism p-5 rounded-lg shadow-lg group"
              data-aos="fade-up"
              data-aos-delay={`${index * 50}`}
            >
              <summary className="flex justify-between items-center font-semibold text-lg text-white cursor-pointer list-none">
                {item.question}
                <span className="transition-transform duration-300 transform group-open:rotate-180">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#A78BFA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div 
                className="mt-4 text-[#E0D9F7]/90 prose max-w-none prose-a:text-[#A78BFA] hover:prose-a:text-[#F472B6] prose-a:underline"
                dangerouslySetInnerHTML={{ __html: item.answer }}
              />
            </details>
          ))}
        </div>

        <div className="mt-16 text-center" data-aos="fade-up">
            <h3 className="text-2xl font-semibold text-white mb-4">Nog Steeds Vragen?</h3>
            <p className="text-lg max-w-xl mx-auto mb-6 text-[#E0D9F7]/80">
                Geen probleem! Ons team van magiërs staat klaar om al uw vragen te beantwoorden. Neem gerust contact met ons op.
            </p>
            <a href="/#/contact" className="px-8 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#60A5FA] hover:opacity-90 transition-opacity duration-300 shadow-lg">
                Stel Uw Vraag
            </a>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
