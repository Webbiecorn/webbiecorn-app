import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BlogPost } from '../types';

// STAP 1: Importeer alle afbeeldingen voor de blogposts
import socialTrendsImg from '../assets/Social-Media-Trends.jpg';
import ugcImg from '../assets/ugc-campagne.jpg';
import tiktokImg from '../assets/tiktok-voor-bedrijven.jpg';
import dataAnalysisImg from '../assets/Magie-van-Data-Analyse.jpg'; // Hergebruikt, al in de map
import contentCalendarImg from '../assets/Effectieve-Content-Kalender.jpg'; // Waarschijnlijk een nieuwe afbeelding
import influencerMarketingImg from '../assets/Influencer_Marketing.jpg'; // Waarschijnlijk een nieuwe afbeelding

// STAP 2: Vervang de statische links door de geïmporteerde variabelen
const allPosts: BlogPost[] = [
  { id: 'social-media-trends-2024', title: 'Top 5 Social Media Trends in 2024', date: '15 Augustus 2024', category: 'Trends', imageUrl: socialTrendsImg, summary: 'Ontdek de belangrijkste trends die social media marketing dit jaar vormgeven.', content: '<p>De wereld van social media is constant in beweging. Nieuwe platformen, functies en gebruikersgedrag dagen marketeers uit om alert te blijven en strategieÃ«n aan te passen. In 2024 zien we een aantal duidelijke trends die de toon zetten:</p><h3 class="text-xl font-semibold my-3 gradient-text">1. De Opkomst van AI-Gedreven Content Creatie</h3><p>Kunstmatige intelligentie is niet langer toekomstmuziek. Tools voor het genereren van tekst, afbeeldingen en zelfs video worden steeds toegankelijker. Dit biedt kansen voor snellere contentproductie, maar de menselijke touch blijft cruciaal voor authenticiteit.</p><h3 class="text-xl font-semibold my-3 gradient-text">2. Short-Form Video Blijft Domineren</h3><p>TikTok, Instagram Reels, YouTube Shorts â€“ korte, pakkende video\\\'s zijn dÃ© manier om de aandacht van de consument te grijpen. Merken die hierop inzetten met creatieve en authentieke content, plukken de vruchten.</p><h3 class="text-xl font-semibold my-3 gradient-text">3. Authenticiteit en User-Generated Content (UGC)</h3><p>Consumenten zijn steeds kritischer en verlangen authenticiteit. User-Generated Content, waarbij gebruikers zelf content over een merk creÃ«ren, wordt hierdoor steeds waardevoller. Het bouwt vertrouwen en geloofwaardigheid op.</p><h3 class="text-xl font-semibold my-3 gradient-text">4. Social Commerce Wordt Mainstream</h3><p>Direct shoppen via social media platformen wordt steeds eenvoudiger en populairder. Het verkort de customer journey en biedt merken nieuwe verkoopkanalen.</p><h3 class="text-xl font-semibold my-3 gradient-text">5. Community Building en Engagement</h3><p>Het opbouwen van een loyale community rondom je merk is belangrijker dan ooit. Focus op interactie, het bieden van waarde en het creÃ«ren van een gevoel van saamhorigheid.</p><p class="mt-4">Door deze trends te omarmen en slim te integreren in uw social media strategie, kan uw merk ook in 2024 magische resultaten behalen. Webbiecorn helpt u graag om deze trends te vertalen naar concrete acties.</p>', author: 'Het Webbiecorn Team'},
  { id: 'waarom-ugc-koning-is', title: 'Waarom User-Generated Content Koning Is', date: '01 Augustus 2024', category: 'Strategie', imageUrl: ugcImg, summary: 'Leer hoe u de kracht van authentieke content van uw gebruikers kunt benutten.', content: '<p>User-Generated Content (UGC) is een krachtig wapen in het arsenaal van elke marketeer. Het is content die vrijwillig door gebruikers wordt gemaakt â€“ denk aan reviews, social media posts, video\\\'s, etc. â€“ en het heeft een enorme impact op merkperceptie en aankoopbeslissingen. Waarom is UGC zo effectief?</p><p><strong>Authenticiteit:</strong> UGC voelt Ã©cht. Het komt van echte mensen, niet van een marketingafdeling. Dit schept vertrouwen.</p><p><strong>Social Proof:</strong> Mensen kijken naar anderen om te bepalen wat ze moeten denken of doen. UGC levert dit sociale bewijs.</p><p><strong>Kosteneffectief:</strong> Vaak is UGC gratis of veel goedkoper dan professioneel geproduceerde content.</p><p><strong>Hogere Engagement:</strong> Content van peers leidt vaak tot meer interactie.</p><p>Webbiecorn helpt merken om UGC strategieÃ«n te ontwikkelen en campagnes op te zetten die de kracht van hun community benutten.</p>', author: 'Eva de MagiÃ«r'},
  { id: 'tiktok-voor-bedrijven', title: 'TikTok voor Bedrijven: Meer dan Dansjes', date: '20 Juli 2024', category: 'Platformen', imageUrl: tiktokImg, summary: 'Is TikTok geschikt voor uw bedrijf? Ontdek de mogelijkheden en best practices voor dit populaire platform.', content: '<p>Content for TikTok for companies...</p>', author: 'Team Webbiecorn'},
  { id: 'data-analyse-social-media', title: 'De Magie van Data-Analyse in Social Media', date: '05 Juli 2024', category: 'Data', imageUrl: dataAnalysisImg, summary: 'Hoe u data kunt gebruiken om uw social media strategie te optimaliseren en betere resultaten te behalen.', content: '<p>Content for data analysis...</p>', author: 'Finn Strateeg'},
  { id: 'content-kalender-maken', title: 'Een Effectieve Content Kalender Maken', date: '18 Juni 2024', category: 'Creatie', imageUrl: contentCalendarImg, summary: 'Tips en tools voor het plannen van uw social media content als een pro.', content: '<p>Content for content calendar...</p>', author: 'Stella Creator'},
  { id: 'influencer-marketing-doen', title: 'Influencer Marketing: Zo Doet U Het Goed', date: '02 Juni 2024', category: 'Strategie', imageUrl: influencerMarketingImg, summary: 'Een gids voor succesvolle samenwerkingen met influencers die passen bij uw merk.', content: '<p>Content for influencer marketing...</p>', author: 'Luna Eenhoorn'},
];


const ArticlePage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const [article, setArticle] = useState<BlogPost | null>(null);

  useEffect(() => {
    // Simulate fetching article data
    const foundArticle = allPosts.find(post => post.id === articleId);
    setArticle(foundArticle || null);
  }, [articleId]);

  if (!article) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold gradient-text">Oeps! Artikel niet gevonden.</h1>
        <p className="text-lg mt-4 text-[#E0D9F7]/80">Het lijkt erop dat dit magische verhaal nog geschreven moet worden (of de link is betoverd).</p>
        <Link to="/blog" className="mt-8 inline-block px-6 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#60A5FA] hover:opacity-90">
          Terug naar de Blog
        </Link>
      </div>
    );
  }

  // Basic share functionality (replace with actual share links/SDKs if needed)
  const shareUrl = window.location.href;
  const shareTitle = article.title;
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`,
  };

  return (
    <div className="py-16 md:py-20 bg-[#0F052B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <article data-aos="fade-up">
          <header className="mb-8 md:mb-12">
            <Link to="/blog" className="text-sm text-[#A78BFA] hover:text-[#F472B6] font-medium mb-4 inline-block">
              &larr; Terug naar Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight gradient-text">{article.title}</h1>
            <p className="text-md text-[#E0D9F7]/70">
              Gepubliceerd op {article.date} door {article.author || 'Webbiecorn'} in <Link to={`/blog?category=${article.category}`} className="text-[#A78BFA] hover:underline">{article.category}</Link>
            </p>
          </header>

          {article.imageUrl && (
            <img 
              src={article.imageUrl} 
              alt={article.title} 
              className="w-full h-auto max-h-[500px] object-cover rounded-xl shadow-2xl mb-8 md:mb-12 glassmorphism p-1" 
            />
          )}

          <div 
            className="prose prose-lg lg:prose-xl max-w-none text-[#E0D9F7]/90 prose-headings:gradient-text prose-strong:text-white prose-a:text-[#A78BFA] hover:prose-a:text-[#F472B6] prose-blockquote:border-[#A78BFA] prose-blockquote:text-[#E0D9F7]/80"
            dangerouslySetInnerHTML={{ __html: article.content || '<p>Dit artikel heeft nog geen content. Kom snel terug!</p>' }}
          />
          
          {/* Social Share Buttons */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-xl font-semibold mb-4 text-white">Deel deze Magie:</h3>
            <div className="flex space-x-4">
              <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors" aria-label="Share on Facebook">
                <svg className="w-5 h-5 text-[#E0D9F7]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors" aria-label="Share on Twitter">
                <svg className="w-5 h-5 text-[#E0D9F7]" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.422.724-.665 1.56-.665 2.455 0 1.61.823 3.027 2.072 3.858-.764-.024-1.482-.234-2.11-.583v.06c0 2.247 1.594 4.123 3.702 4.557-.386.104-.794.16-1.21.16-.298 0-.588-.028-.87-.082.588 1.843 2.293 3.182 4.316 3.22-1.582 1.238-3.578 1.975-5.753 1.975-.374 0-.743-.022-1.107-.064 2.042 1.307 4.473 2.067 7.098 2.067 8.514 0 13.167-7.054 13.167-13.167 0-.201 0-.402-.013-.602a9.406 9.406 0 002.308-2.392z"/></svg>
              </a>
              <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors" aria-label="Share on LinkedIn">
                <svg className="w-5 h-5 text-[#E0D9F7]" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-4.498 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.594-11.018-3.714v-2.155z"/></svg>
              </a>
            </div>
          </div>

           {/* Related Posts or CTA */}
          <div className="mt-16 text-center" data-aos="fade-up">
            <h2 className="text-2xl font-semibold mb-4">Meer <span className="gradient-text">Inspiratie?</span></h2>
            <p className="max-w-xl mx-auto mb-6 text-[#E0D9F7]/80">
              Blader door onze andere artikelen of neem contact op om te zien hoe we uw merk kunnen helpen.
            </p>
            <Link to="/blog" className="px-6 py-3 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-[#F472B6] via-[#A78BFA] to-[#60A5FA] hover:opacity-90">
              Terug naar Blog
            </Link>
          </div>

        </article>
      </div>
    </div>
  );
};

export default ArticlePage;
