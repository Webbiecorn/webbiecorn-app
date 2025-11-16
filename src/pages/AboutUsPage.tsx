import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { cultureValues, labTimeline, teamMembers } from '../data/siteContent';

const AboutUsPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <header className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-white/50">Studio</p>
          <h1 className="text-4xl md:text-5xl font-semibold text-white">Het squad achter Webbiecorn</h1>
          <p className="text-white/70">We combineren strategie, creatie en operations in één team dat naast u werkt.</p>
        </header>

        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl text-white font-semibold">Van boutique studio naar growth lab</h2>
            <p className="text-white/70">Wat begon als een creatief duo groeide uit tot een team van strategen, storytellers en data-specialisten. We werken als een verlengstuk van marketingteams die tempo willen maken.</p>
            <Button asLink to="/contact">Plan een koffie</Button>
          </div>
          <Card className="space-y-4">
            {labTimeline.map((item) => (
              <div key={item.year}>
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">{item.year}</p>
                <h3 className="text-xl text-white font-semibold">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            ))}
          </Card>
        </section>

        <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <Card key={member.id} className="space-y-3">
              <img src={member.imageUrl} alt={member.name} className="w-20 h-20 rounded-full object-cover" />
              <div>
                <p className="text-white font-semibold">{member.name}</p>
                <p className="text-white/60 text-sm">{member.role}</p>
              </div>
              <p className="text-white/70 text-sm">{member.bio}</p>
            </Card>
          ))}
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {cultureValues.map((value) => (
            <Card key={value.title}>
              <h3 className="text-xl text-white font-semibold">{value.title}</h3>
              <p className="text-white/70 text-sm">{value.detail}</p>
            </Card>
          ))}
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
