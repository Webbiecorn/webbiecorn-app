import React from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import { resources } from '../data/siteContent';

const ResourcesPage: React.FC = () => (
  <div className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Toolkit</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-white">Gidsen & templates</h1>
        <p className="text-white/70">Download frameworks die we dagelijks gebruiken in de studio.</p>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Card key={resource.id} className="space-y-4">
            <img src={resource.imageUrl} alt={resource.title} className="w-full h-40 object-cover rounded-lg" />
            <h3 className="text-xl text-white font-semibold">{resource.title}</h3>
            <p className="text-white/70 text-sm">{resource.description}</p>
            <Button asLink to={resource.downloadLink || '/contact'} size="sm">Download</Button>
          </Card>
        ))}
      </div>
    </div>
  </div>
);

export default ResourcesPage;
