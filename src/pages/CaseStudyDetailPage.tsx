
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CaseStudy } from '../types';
import { caseStudiesData } from './CaseStudiesPage'; // Import mock data
import BarChart from '../components/BarChart';
import Button from '../components/Button';
import { ChartData } from 'chart.js';

const CaseStudyDetailPage: React.FC = () => {
  const { studyId } = useParams<{ studyId: string }>();
  const [study, setStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const foundStudy = caseStudiesData.find(s => s.id === studyId);
    setStudy(foundStudy || null);
  }, [studyId]);

  if (!study) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold gradient-text">Oeps! Case Study niet gevonden.</h1>
        <p className="text-lg mt-4 text-[#E0D9F7]/80">Deze magische successtory lijkt nog niet te bestaan.</p>
        <Link to="/case-studies" className="mt-8 inline-block px-6 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#60A5FA] hover:opacity-90">
          Terug naar Alle Case Studies
        </Link>
      </div>
    );
  }

  // Prepare data for the chart (example: first result with chartData)
  const chartResult = study.results.find(r => r.chartData);
  const chartData: ChartData<'bar', number[], string> | null = chartResult && chartResult.chartData ? {
    labels: chartResult.chartData.labels,
    datasets: [
      {
        label: chartResult.keyMetric,
        data: chartResult.chartData.data,
        backgroundColor: 'rgba(167, 139, 250, 0.6)', // Purple with opacity
        borderColor: '#A78BFA', // Purple
        borderWidth: 1,
        borderRadius: 5,
        barThickness: 'flex' as any, // Using 'flex' for responsive bar thickness
        maxBarThickness: 50,
      }
    ]
  } : null;


  return (
    <div className="py-16 md:py-20 bg-[#0F052B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <article data-aos="fade-up">
          <header className="mb-8 md:mb-12">
            <Link to="/case-studies" className="text-sm text-[#A78BFA] hover:text-[#F472B6] font-medium mb-4 inline-block">
              &larr; Terug naar Case Studies
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 leading-tight gradient-text">{study.title}</h1>
            <p className="text-xl text-[#E0D9F7]/80 font-semibold">{study.clientName}</p>
          </header>

          <img 
            src={study.imageUrl} 
            alt={study.title} 
            className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-2xl mb-8 md:mb-12 glassmorphism p-1" 
          />

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
            <div className="md:col-span-2 space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">De Uitdaging</h2>
                <p className="text-lg text-[#E0D9F7]/90 leading-relaxed">{study.challenge}</p>
              </section>
              <section>
                <h2 className="text-2xl font-semibold mb-3 text-white">Onze Magische Aanpak</h2>
                <p className="text-lg text-[#E0D9F7]/90 leading-relaxed">{study.approach}</p>
              </section>
            </div>
            <aside className="md:col-span-1 space-y-6">
              <div className="glassmorphism p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-white">Kernresultaten</h3>
                <ul className="space-y-3">
                  {study.results.map(result => (
                    <li key={result.keyMetric} className="text-[#E0D9F7]/90">
                      <strong className="text-[#A78BFA] block">{result.keyMetric}:</strong>
                      <span className="text-2xl font-bold text-white">{result.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {study.testimonial && (
                <div className="glassmorphism p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-3 text-white">Klantgetuigenis</h3>
                  <blockquote className="italic text-[#E0D9F7]/90">
                    "{study.testimonial.text}"
                    <footer className="mt-2 not-italic text-sm text-[#A78BFA]">- {study.testimonial.author}</footer>
                  </blockquote>
                </div>
              )}
            </aside>
          </div>
          
          {chartData && (
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 text-center text-white">Visuele Resultaten</h2>
              <BarChart data={chartData} title={chartResult?.keyMetric || 'Resultaat Visualisatie'} />
            </section>
          )}

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <h2 className="text-2xl font-semibold mb-4 text-white">Klaar voor uw eigen succesverhaal?</h2>
            <p className="text-lg max-w-xl mx-auto mb-6 text-[#E0D9F7]/80">
                Laat Webbiecorn de magie voor uw merk ontketenen. Neem vandaag nog contact op.
            </p>
            <Button asLink to="/contact" variant="primary" size="lg">
              Start Uw Project
            </Button>
          </div>

        </article>
      </div>
    </div>
  );
};

export default CaseStudyDetailPage;
