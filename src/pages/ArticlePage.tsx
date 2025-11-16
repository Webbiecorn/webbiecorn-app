import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import Button from '../components/Button';
import { blogPosts } from '../data/siteContent';

const articleBodies: Record<string, string> = {
  'social-media-trends-2024': '<p>Social media beweegt sneller dan ooit. Wij bundelden vijf signalen die we in onze studio het vaakst zien: AI-ondersteunde productie, short-form storytelling, communities, social commerce en creators als kanaal.</p><p>Begin met een <strong>trend-audit</strong>: welke formats werken nu al voor uw merk? Vervolgens definieert u experimenten per trend, bijvoorbeeld AI-scripts voor Reels of een community pilot. Meet de impact na elke sprint.</p>',
  'ugc-framework': '<p>Een goed UGC-programma bestaat uit duidelijke briefings, snelle feedbackloops en gestroomlijnde rechten. Bouw creator kits met voorbeeldshots, tone-of-voice en praktische tips. Automatiseer reviews en incentives zodat creators terug blijven komen.</p>',
  'tiktok-b2b': '<p>TikTok draait om snelheid. Voor B2B betekent dit behind-the-scenes, productbetekenis en persoonlijkheid laten zien. Denk aan CEO updates, live product demovideo’s en micro-educatie in maximaal 45 seconden.</p>',
  'content-calendar': '<p>Werk met tweewekelijkse sprints. In week één plant u de thema’s, in week twee produceert u. Een centrale kalender in Notion of Airtable houdt iedereen op één lijn.</p>',
  'dashboarding': '<p>Dashboards geven rust. Combineer paid, organic en salesdata in één omgeving en focus op actionable metrics: conversies, betrokkenheid en share-of-voice.</p>',
};

const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = useMemo(() => blogPosts.find((post) => post.id === articleId) || null, [articleId]);

  if (!article) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold gradient-text">Oeps! Artikel niet gevonden.</h1>
        <p className="text-lg mt-4 text-[#E0D9F7]/80">Dit verhaal lijkt nog niet geschreven. Ga terug naar de blog om meer te lezen.</p>
        <Link to="/blog" className="mt-8 inline-block px-6 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#60A5FA] hover:opacity-90">
          Terug naar de Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article>
          <header className="mb-8 md:mb-12">
            <Link to="/blog" className="text-sm text-[#A78BFA] hover:text-[#F472B6] font-medium mb-4 inline-block">
              &larr; Terug naar Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight gradient-text">{article.title}</h1>
            <p className="text-md text-white/70">
              Gepubliceerd op {article.date} • {article.author || 'Webbiecorn'}
            </p>
          </header>

          {article.imageUrl && (
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-2xl mb-8 md:mb-12"
            />
          )}

          <div
            className="prose prose-lg lg:prose-xl max-w-none text-white/90 prose-headings:gradient-text prose-strong:text-white"
            dangerouslySetInnerHTML={{ __html: articleBodies[article.id] || '<p>Dit artikel krijgt binnenkort een update.</p>' }}
          />

          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <h2 className="text-2xl font-semibold mb-4">Meer <span className="gradient-text">inspiratie?</span></h2>
            <p className="max-w-xl mx-auto mb-6 text-white/70">
              Blader door onze andere artikelen of plan direct een gesprek met het team.
            </p>
            <Button asLink to="/blog" variant="primary">Terug naar blog</Button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticlePage;
