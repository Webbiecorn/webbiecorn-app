import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';
import { caseStudies } from '../data/siteContent';

const CaseStudyDetailPage: React.FC = () => {
  const { studyId } = useParams<{ studyId: string }>();
  const study = useMemo(() => caseStudies.find((item) => item.id === studyId) || null, [studyId]);

  if (!study) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold gradient-text">Oeps! Case Study niet gevonden.</h1>
        <Link to="/case-studies" className="mt-8 inline-block px-6 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#60A5FA] hover:opacity-90">
          Terug naar Alle Case Studies
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8">
        <header className="space-y-2">
          <Link to="/case-studies" className="text-sm text-[#A78BFA]">&larr; Terug</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white">{study.title}</h1>
          <p className="text-white/70">{study.clientName}</p>
        </header>
        <img src={study.imageUrl} alt={study.title} className="w-full h-auto rounded-2xl" />
        <section className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div>
              <h2 className="text-2xl text-white font-semibold">Uitdaging</h2>
              <p className="text-white/70">{study.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl text-white font-semibold">Aanpak</h2>
              <p className="text-white/70">{study.approach}</p>
            </div>
          </div>
          <div className="space-y-3">
            {study.results.map((result) => (
              <div key={result.keyMetric} className="border border-white/10 rounded-xl p-4">
                <p className="text-xs uppercase tracking-[0.3em] text-white/50">{result.keyMetric}</p>
                <p className="text-2xl text-white font-semibold">{result.value}</p>
              </div>
            ))}
          </div>
        </section>
        {study.testimonial && (
          <blockquote className="border-l-2 border-[#F472B6] pl-4 text-white/80">
            “{study.testimonial.text}” — {study.testimonial.author}
          </blockquote>
        )}
        <div className="text-center border-t border-white/10 pt-8">
          <h2 className="text-2xl text-white font-semibold mb-4">Klaar voor uw eigen succesverhaal?</h2>
          <Button asLink to="/contact">Plan een call</Button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;
