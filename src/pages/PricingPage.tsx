
import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { addOns, faqItems, pricingPlans } from '../data/siteContent';

const PricingPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Investering</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Selecteer uw Webbiecorn squad</h1>
          <p className="text-white/70">Transparante pakketten voor sprints, partnerschappen en embedded teams.</p>
        </header>

        <div className="grid lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan) => (
            <Card key={plan.id} className={`flex flex-col h-full ${plan.isPopular ? 'border border-white' : ''}`}>
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{plan.id}</p>
              <h2 className="text-2xl text-white font-semibold">{plan.name}</h2>
              <p className="text-4xl text-white font-bold">{plan.price}<span className="text-base font-normal text-white/50"> {plan.priceSuffix}</span></p>
              <ul className="space-y-3 text-sm text-white/80 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-[#F472B6]">✦</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button asLink to={plan.ctaLink} size="lg" className="w-full mt-6" variant={plan.isPopular ? 'primary' : 'secondary'}>
                {plan.ctaText}
              </Button>
            </Card>
          ))}
        </div>

        <section className="grid md:grid-cols-2 gap-8">
          <Card className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Add-ons</p>
            <h3 className="text-2xl text-white font-semibold">Extra magie</h3>
            <ul className="space-y-3 text-white/70">
              {addOns.map((addOn) => (
                <li key={addOn.title}>
                  <p className="text-white font-semibold">{addOn.title}</p>
                  <p className="text-sm">{addOn.description}</p>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Veelgestelde vragen</p>
            <div className="space-y-4">
              {faqItems.slice(0, 3).map((faq) => (
                <div key={faq.id}>
                  <p className="text-white font-semibold">{faq.question}</p>
                  <p className="text-sm text-white/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <div className="text-center space-y-4">
          <h3 className="text-3xl text-white font-semibold">Niet zeker welk pakket past?</h3>
          <p className="text-white/70 max-w-2xl mx-auto">Plan een vrijblijvende intake van 30 minuten. We bekijken uw doelen, resources en bepalen het beste startpunt.</p>
          <Button asLink to="/contact" size="lg">Plan een intake</Button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
