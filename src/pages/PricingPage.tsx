
import React from 'react';
import { PricingPlan } from '../types';
import Card from '../components/Card';
import Button from '../components/Button';

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Spark',
    price: '€499',
    priceSuffix: '/mnd',
    features: [
      '2 Social Media Kanalen Beheer',
      '8 Posts per Maand',
      'Basis Content Creatie',
      'Maandelijkse Rapportage',
      'Community Interactie',
    ],
    ctaText: 'Start met Spark',
    ctaLink: '/contact?plan=starter',
  },
  {
    id: 'growth',
    name: 'Growth Galaxy',
    price: '€999',
    priceSuffix: '/mnd',
    features: [
      'Tot 4 Social Media Kanalen',
      '16 Posts per Maand',
      'Geavanceerde Content Creatie (incl. video snippets)',
      'Advertentie Budget Beheer (tot €500)',
      'Gedetailleerde Rapportage & Analyse',
      'Strategische Consultaties',
    ],
    isPopular: true,
    ctaText: 'Groei met Galaxy',
    ctaLink: '/contact?plan=growth',
  },
  {
    id: 'enterprise',
    name: 'Enterprise Enchantment',
    price: 'Maatwerk',
    priceSuffix: '',
    features: [
      'Ongelimiteerd Kanalenbeheer',
      'Custom Content Strategie & Volume',
      'Volledig Advertentie Management',
      'Influencer Marketing Integratie',
      'Diepgaande Analytics & BI',
      'Dedicated Account Manager',
      'Workshops & Training',
    ],
    ctaText: 'Ontwerp Jouw Magie',
    ctaLink: '/contact?plan=enterprise',
  },
];

const CheckIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className || 'text-[#60A5FA]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);


const PricingPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-[#0F052B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investering in <span className="gradient-text">Magie</span></h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#E0D9F7]/80">
            Transparante prijzen voor betoverende resultaten. Kies het pakket dat bij uw ambities past.
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.id}
              className={`flex flex-col h-full ${plan.isPopular ? 'border-2 border-[#F472B6] shadow-[0_0_40px_rgba(244,114,182,0.5)]' : ''}`}
              dataAos="zoom-in-up"
              dataAosDelay={`${index * 100}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#F472B6] to-[#A78BFA] text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-md">
                  Meest Populair
                </div>
              )}
              <div className="p-6 flex-grow">
                <h2 className="text-2xl font-bold text-center mb-2 gradient-text">{plan.name}</h2>
                <p className="text-4xl font-extrabold text-center text-white mb-1">
                  {plan.price}
                  {plan.priceSuffix && <span className="text-base font-normal text-[#E0D9F7]/70">{plan.priceSuffix}</span>}
                </p>
                { plan.name === 'Enterprise Enchantment' && <p className="text-sm text-center text-[#E0D9F7]/70 mb-6">Prijs op aanvraag</p> }
                { plan.name !== 'Enterprise Enchantment' && <p className="text-sm text-center text-transparent mb-6">.</p> }


                <ul className="space-y-3 mb-8 text-[#E0D9F7]/90 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckIcon className="w-5 h-5 mr-2 mt-1 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 pt-0">
                <Button asLink to={plan.ctaLink} variant={plan.isPopular ? 'primary' : 'secondary'} size="lg" className="w-full">
                  {plan.ctaText}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center text-[#E0D9F7]/80" data-aos="fade-up">
          <h3 className="text-2xl font-semibold mb-4 text-white">Speciale Wensen?</h3>
          <p className="max-w-xl mx-auto mb-6">
            Heeft u een uniek project of specifieke behoeften? Neem contact met ons op voor een oplossing op maat.
            Bij Webbiecorn geloven we dat elke klant uniek is, en we passen onze magie graag aan uw visie aan.
          </p>
          <Button asLink to="/contact?plan=custom" variant="outline" size="lg">
            Vraag Maatwerk Offerte
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
