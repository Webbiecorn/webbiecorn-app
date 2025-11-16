import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { caseStudies } from '../data/siteContent';

const CaseStudiesPage: React.FC = () => (
  <div className="py-16 md:py-24">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">Cases</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-white">Resultaten uit verschillende sectoren</h1>
      </header>
      <div className="grid md:grid-cols-3 gap-6">
        {caseStudies.map((study) => (
          <Card key={study.id} className="p-0 overflow-hidden">
            <Link to={`/case-studies/${study.id}`}>
              <img src={study.imageUrl} alt={study.title} className="w-full h-48 object-cover" />
            </Link>
            <div className="p-6 space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">{study.category}</p>
              <h3 className="text-xl text-white font-semibold">{study.title}</h3>
              <p className="text-white/70 text-sm">{study.summary}</p>
              <p className="text-white/50 text-xs uppercase tracking-[0.3em]">{study.results[0]?.keyMetric}: {study.results[0]?.value}</p>
              <Link to={`/case-studies/${study.id}`} className="text-sm font-semibold text-[#F472B6]">Lees case →</Link>
            </div>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <Button asLink to="/contact">Start uw eigen case</Button>
      </div>
    </div>
  </div>
);

export default CaseStudiesPage;
