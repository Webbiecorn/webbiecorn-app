import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import {
  caseStudies,
  differentiators,
  growthSignals,
  heroMetrics,
  heroVisual,
  processSteps,
  serviceShowcase,
  testimonials,
  toolkit,
} from '../data/siteContent';

const HomePage: React.FC = () => {
  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-sm uppercase tracking-[0.3em] text-white/60">Social studio & growth squad</p>
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight text-white">
              Social media <span className="gradient-text">zonder ruis</span> maar met meetbare impact.
            </h1>
            <p className="text-lg text-white/70 max-w-xl">
              Webbiecorn bouwt strategieën, content en campagnes die het tempo van online cultuur volgen. We koppelen creatie, community en performance in één team.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asLink to="/contact" size="lg">Plan een call</Button>
              <Button asLink to="/case-studies" variant="outline" size="lg">Bekijk cases</Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {heroMetrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 p-4">
                  <p className="text-2xl font-semibold text-white">{metric.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">{metric.label}</p>
                  <p className="text-xs text-white/50">{metric.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 blur-3xl bg-gradient-to-tr from-[#F472B6]/30 via-transparent to-[#60A5FA]/40" />
            <img src={heroVisual} alt="Webbiecorn team" className="relative w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Onze speelvelden</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white">Van strategie tot always-on uitvoer</h2>
          </div>
          <Link to="/diensten" className="text-sm font-semibold text-[#A78BFA] hover:text-white">Bekijk alle diensten →</Link>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {serviceShowcase.map((service) => (
            <Card key={service.id} className="space-y-4">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">{service.id.replace('-', ' ')}</p>
              <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              <p className="text-white/70">{service.description}</p>
              <p className="text-sm text-white/60">{service.longDescription}</p>
              <Button asLink to="/diensten" variant="secondary" size="sm">Ontdek meer</Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <Card className="space-y-6" dataAos="fade-up">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Aanpak</p>
            <h2 className="text-3xl font-semibold text-white">Een playbook dat we samen invullen</h2>
            <div className="space-y-4">
              {processSteps.map((step) => (
                <div key={step.id} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70">
                    {step.title.substring(0, 1)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{step.title}</p>
                    <p className="text-white/70 text-sm">{step.description}</p>
                    <p className="text-white/50 text-xs mt-1">Resultaat: {step.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <Card className="space-y-6" dataAos="fade-up" dataAosDelay="150">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">Tooling</p>
            <h2 className="text-3xl font-semibold text-white">Wat u meekrijgt</h2>
            <ul className="space-y-3 text-white/80">
              {toolkit.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-[#F472B6]">✹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {growthSignals.map((signal) => (
                <div key={signal.label} className="border border-white/10 rounded-xl p-4">
                  <p className="text-2xl font-semibold text-white">{signal.value}</p>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">{signal.label}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">Resultaten</p>
            <h2 className="text-3xl font-semibold text-white">Cases uit retail, hospitality en SaaS</h2>
          </div>
          <Button asLink to="/case-studies" variant="outline">Alle cases</Button>
        </header>
        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.slice(0, 3).map((study) => (
            <Card key={study.id} className="overflow-hidden p-0">
              <img src={study.imageUrl} alt={study.title} className="w-full h-48 object-cover" />
              <div className="p-6 space-y-3">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">{study.clientName}</p>
                <h3 className="text-xl text-white font-semibold">{study.title}</h3>
                <p className="text-white/70 text-sm">{study.summary}</p>
                <Link to={`/case-studies/${study.id}`} className="text-sm font-semibold text-[#F472B6]">Lees case →</Link>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
        <Card className="space-y-6" dataAos="fade-up">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Waarom merken voor ons kiezen</p>
          <ul className="space-y-4">
            {differentiators.map((item) => (
              <li key={item.title}>
                <p className="text-white font-semibold">{item.title}</p>
                <p className="text-white/70 text-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </Card>
        <Card className="space-y-6" dataAos="fade-up" dataAosDelay="150">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Wat klanten zeggen</p>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.id} className="border-l-2 border-[#F472B6] pl-4">
                <p className="text-white text-lg">“{testimonial.quote}”</p>
                <p className="text-sm text-white/60 mt-2">{testimonial.author} — {testimonial.company}</p>
              </blockquote>
            ))}
          </div>
        </Card>
      </section>

      <section className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="border border-white/10 rounded-[32px] p-10 space-y-6">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Klaar voor de volgende stap?</p>
          <h2 className="text-4xl font-semibold text-white">Bouw uw eigen Webbiecorn squad</h2>
          <p className="text-white/70 max-w-3xl mx-auto">
            Binnen drie weken staat er een multidisciplinair team klaar met duidelijke doelen, formats en dashboards. Geen losse freelancers, maar een bewezen workflow.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asLink to="/contact" size="lg">Vraag een voorstel</Button>
            <Button asLink to="/prijzen" variant="outline" size="lg">Bekijk pakketten</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;