import React from 'react';
import Card from '../components/Card';
import { testimonials } from '../data/siteContent';

const TestimonialsPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Social proof</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Wat klanten over ons zeggen</h1>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="space-y-4">
              <p className="text-white text-lg">“{testimonial.quote}”</p>
              <p className="text-white/60 text-sm">{testimonial.author} — {testimonial.company}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
