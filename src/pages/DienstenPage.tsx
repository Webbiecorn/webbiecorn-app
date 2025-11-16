import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import { processSteps, serviceShowcase } from '../data/siteContent';

const DienstenPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Diensten</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Een squad voor elke groeivraag</h1>
          <p className="text-lg text-white/70">
            Kies de bouwstenen die bij uw merk passen. Elk traject start met een sprint en groeit uit tot een geïntegreerd team.
          </p>
        </header>

        <div className="space-y-12">
          {serviceShowcase.map((service, index) => (
            <div key={service.id} className="grid lg:grid-cols-2 gap-10 items-center">
              <div className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <Card className="space-y-5" dataAos="fade-up">
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">{service.id}</p>
                  <h2 className="text-3xl font-semibold text-white">{service.title}</h2>
                  <p className="text-white/80">{service.description}</p>
                  <p className="text-white/60 text-sm">{service.longDescription}</p>
                </Card>
              </div>
              <div className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="space-y-3" dataAos="fade-up" dataAosDelay="100">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">Deliverables</p>
                    <ul className="space-y-2 text-sm text-white/80">
                      {service.deliverables?.map((item) => (
                        <li key={item}>✺ {item}</li>
                      ))}
                    </ul>
                  </Card>
                  <Card className="space-y-3" dataAos="fade-up" dataAosDelay="150">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/50">Impact</p>
                    <ul className="space-y-2 text-sm text-white/80">
                      {service.outcomes?.map((item) => (
                        <li key={item}>➤ {item}</li>
                      ))}
                    </ul>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>

        <section className="grid md:grid-cols-2 gap-8">
          <Card className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Werkwijze</p>
            <h3 className="text-2xl font-semibold text-white">Zo werken we samen</h3>
            <ul className="space-y-4 text-white/70">
              {processSteps.map((step) => (
                <li key={step.id}>
                  <p className="text-white font-semibold">{step.title}</p>
                  <p className="text-sm">{step.description}</p>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="space-y-4" dataAos="fade-up" dataAosDelay="100">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Stap aan boord</p>
            <h3 className="text-2xl font-semibold text-white">Elke samenwerking start met een sprint</h3>
            <p className="text-white/70">
              In zes weken brengen we kansen in kaart, zetten we campagnes live en leggen we dashboards vast. Daarna kiezen we voor verlenging, overdracht of opschaling.
            </p>
            <Button asLink to="/contact" size="lg">Plan een intake</Button>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default DienstenPage;