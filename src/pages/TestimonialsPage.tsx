
import React from 'react';
import { Testimonial } from '../types';
import FlipCard from '../components/FlipCard';

const testimonials: Testimonial[] = [
  {
    id: 'eco-bloom',
    quote: "Webbiecorn heeft onze social media aanwezigheid getransformeerd! Hun creatieve campagnes en strategische aanpak hebben onze online community exponentieel laten groeien. Pure magie!",
    author: 'Iris Groen',
    company: 'EcoBloom Organics',
    imageUrl: 'https://picsum.photos/seed/iris-groen/100/100',
  },
  {
    id: 'tech-solutions',
    quote: "Dankzij Webbiecorn's datagestuurde advertenties hebben we onze leadgeneratie verdrievoudigd. Ze begrijpen onze B2B-markt perfect en leveren resultaten die tellen.",
    author: 'Mark de Vries',
    company: 'Innovatech Solutions',
    imageUrl: 'https://picsum.photos/seed/mark-de-vries/100/100',
  },
  {
    id: 'koffie-corner',
    quote: "De content die Webbiecorn voor ons creëert is altijd on-point en super engaging. Onze klanten zijn er dol op en we zien een duidelijke stijging in winkelbezoek. Een top team!",
    author: 'Sara de Bakker',
    company: 'De Gezellige Koffiehoek',
    imageUrl: 'https://picsum.photos/seed/sara-de-bakker/100/100',
  },
   {
    id: 'startup-boost',
    quote: "Als startup hadden we hulp nodig om onze naam te vestigen. Webbiecorn's strategie was briljant en heeft ons geholpen een vliegende start te maken. Onmisbaar!",
    author: 'Tom Innovator',
    company: 'AlphaGadgets Inc.',
    imageUrl: 'https://picsum.photos/seed/tom-innovator/100/100',
  },
];

const trustedBrandsLogos = [
  { id: 'brand1', name: 'EcoBloom Organics', logoUrl: 'https://picsum.photos/seed/logo-ecobloom/150/80?grayscale', colorLogoUrl: 'https://picsum.photos/seed/logo-ecobloom/150/80' },
  { id: 'brand2', name: 'Innovatech Solutions', logoUrl: 'https://picsum.photos/seed/logo-innovatech/150/80?grayscale', colorLogoUrl: 'https://picsum.photos/seed/logo-innovatech/150/80' },
  { id: 'brand3', name: 'De Gezellige Koffiehoek', logoUrl: 'https://picsum.photos/seed/logo-koffiehoek/150/80?grayscale', colorLogoUrl: 'https://picsum.photos/seed/logo-koffiehoek/150/80' },
  { id: 'brand4', name: 'AlphaGadgets Inc.', logoUrl: 'https://picsum.photos/seed/logo-alphagadgets/150/80?grayscale', colorLogoUrl: 'https://picsum.photos/seed/logo-alphagadgets/150/80' },
  { id: 'brand5', name: 'ModeMaven Boutique', logoUrl: 'https://picsum.photos/seed/logo-modemaven/150/80?grayscale', colorLogoUrl: 'https://picsum.photos/seed/logo-modemaven/150/80' },
  { id: 'brand6', name: 'FitLife Gyms', logoUrl: 'https://picsum.photos/seed/logo-fitlife/150/80?grayscale', colorLogoUrl: 'https://picsum.photos/seed/logo-fitlife/150/80' },
];

const TestimonialsPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-[#0F052B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Klanten <span className="gradient-text">Getuigenissen</span></h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#E0D9F7]/80">
            Hoor rechtstreeks van onze klanten hoe Webbiecorn's magie hun bedrijf heeft getransformeerd.
          </p>
        </header>

        {/* Testimonial Flip Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="h-[22rem] md:h-[20rem]" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
                 <FlipCard
                    frontContent={
                        <div className="flex flex-col items-center">
                            {testimonial.imageUrl && <img src={testimonial.imageUrl} alt={testimonial.author} className="w-24 h-24 rounded-full mb-4 border-2 border-[#A78BFA]" />}
                            <h3 className="text-xl font-semibold text-white">{testimonial.author}</h3>
                            <p className="text-sm gradient-text font-medium">{testimonial.company}</p>
                            <p className="mt-4 text-xs text-[#E0D9F7]/70">(Klik voor testimonial)</p>
                        </div>
                    }
                    backContent={
                        <div className="flex flex-col items-center justify-center h-full">
                            <p className="text-md lg:text-lg italic text-[#E0D9F7]/95 mb-4">"{testimonial.quote}"</p>
                            <div className="mt-auto pt-2">
                                <h4 className="text-md font-semibold text-white">{testimonial.author}</h4>
                                <p className="text-sm text-[#A78BFA]">{testimonial.company}</p>
                            </div>
                        </div>
                    }
                 />
            </div>
          ))}
        </div>

        {/* Logo Wall Section */}
        <section className="mt-20 md:mt-28" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Vertrouwd door <span className="gradient-text">Magische Merken</span></h2>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-10 md:gap-x-12 lg:gap-x-16">
            {trustedBrandsLogos.map((brand, index) => (
              <div 
                key={brand.id} 
                className="group"
                data-aos="zoom-in"
                data-aos-delay={`${index * 50}`}
              >
                <img 
                  src={brand.logoUrl} 
                  alt={brand.name} 
                  className="h-12 md:h-16 opacity-70 group-hover:opacity-0 transition-opacity duration-300 ease-in-out" 
                  onMouseOver={e => (e.currentTarget.src = brand.colorLogoUrl)}
                  onMouseOut={e => (e.currentTarget.src = brand.logoUrl)}
                />
                 <img 
                  src={brand.colorLogoUrl} 
                  alt={`${brand.name} color`}
                  className="h-12 md:h-16 opacity-0 group-hover:opacity-100 absolute top-0 left-0 transition-opacity duration-300 ease-in-out" // Positioned absolutely to overlay
                  style={{ pointerEvents: 'none' }} // Make sure it doesn't interfere with hover state of the grayscale one
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialsPage;
