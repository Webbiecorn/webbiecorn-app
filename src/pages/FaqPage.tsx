import React, { useState } from 'react';
import Card from '../components/Card';
import { faqItems } from '../data/siteContent';

const FaqPage: React.FC = () => {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <header className="text-center space-y-4 max-w-2xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">FAQ</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Vragen die we vaak krijgen</h1>
        </header>
        <Card className="space-y-4">
          {faqItems.map((faq) => (
            <div key={faq.id}>
              <button onClick={() => setOpen(open === faq.id ? null : faq.id)} className="w-full flex items-center justify-between text-left">
                <span className="text-white font-semibold">{faq.question}</span>
                <span>{open === faq.id ? '-' : '+'}</span>
              </button>
              {open === faq.id && <p className="text-white/70 text-sm mt-2">{faq.answer}</p>}
            </div>
          ))}
        </Card>
      </div>
    </div>
  );
};

export default FaqPage;
