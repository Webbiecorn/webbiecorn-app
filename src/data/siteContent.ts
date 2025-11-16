import heroImage from '../assets/hero-afbeelding.png';
import socialMediaBeheer from '../assets/social-media-beheer.jpg';
import advertentieCampagnes from '../assets/advertentie-campagnes.jpg';
import contentCreatie from '../assets/content-creatie.jpg';
import zomerboost from '../assets/zomerboost-2025.jpg';
import koffiehoek from '../assets/case-study-koffiehoek.jpg';
import b2bWebdesign from '../assets/casestudy-webdesign.jpg';
import dataAnalyse from '../assets/Magie-van-Data-Analyse.jpg';
import contentKalender from '../assets/Effectieve-Content-Kalender.jpg';
import influencerMarketing from '../assets/Influencer_Marketing.jpg';
import strategieWorkshop from '../assets/strategie-workshop.jpg';
import ugcCampagne from '../assets/ugc-campagne.jpg';

import type {
  BlogPost,
  CaseStudy,
  FaqItem,
  PricingPlan,
  Resource,
  Service,
  TeamMember,
  Testimonial,
} from '../types';

export const heroVisual = heroImage;

export const heroMetrics = [
  { label: 'Campagnes gelanceerd', value: '180+', detail: 'per jaar' },
  { label: 'Gem. ROAS', value: '4,7x', detail: 'over onze ads' },
  { label: 'Community replies', value: '12k', detail: 'per kwartaal' },
  { label: 'Doorlooptijd', value: '3 weken', detail: 'van audit tot activatie' },
];

export const serviceShowcase: Service[] = [
  {
    id: 'strategie-lab',
    title: 'Strategie & Positionering',
    description: 'Workshops, audits en messaging frameworks die richting geven aan al uw kanalen.',
    longDescription:
      'We brengen doelgroepen, proposities en journeys haarscherp in kaart. Elk programma start met een co-creatiesessie waarin we prioriteiten bepalen en groeihypothesen vastleggen.',
    image: socialMediaBeheer,
    deliverables: ['Strategie workshop', 'Audience & messaging map', 'Roadmap met prioriteiten'],
    outcomes: ['Heldere positionering', 'Sprints met focus', 'Meetbare doelen'],
  },
  {
    id: 'creatie-studio',
    title: 'Content & Creatie Studio',
    description: 'Snelle producties van foto, video en copy voor socials, blogs en ads.',
    longDescription:
      'Ons team bouwt systematische content sprints. We ontwikkelen formats, templates en AI-assisted workflows zodat elke boodschap on-brand én on-time live gaat.',
    image: contentCreatie,
    deliverables: ['Format bibliotheek', 'Producties per sprint', 'AI prompts & templates'],
    outcomes: ['Consistente content', 'Snellere productie', 'Betrokken community'],
  },
  {
    id: 'growth-ops',
    title: 'Growth & Performance',
    description: 'Volledig advertentie- en communitybeheer inclusief rapportage en optimalisatie.',
    longDescription:
      'Campagnes draaien nooit op autopilot. We monitoren live, voeren experimenten uit en koppelen resultaten terug in duidelijke dashboards.',
    image: advertentieCampagnes,
    deliverables: ['Campagne set-up', 'Always-on monitoring', 'Realtime dashboards'],
    outcomes: ['Efficiënte budgetten', 'Snelle learnings', 'Groei van omzet & leads'],
  },
];

export const differentiators = [
  { title: 'Co-creatie boven deliverables', description: 'Elke sprint start met een gezamenlijke werkplaats. Geen black box, wel transparante roadmaps.' },
  { title: 'Tooling op maat', description: 'Wij combineren AI, automatisering en no-code dashboards om tijd te winnen én beter te meten.' },
  { title: 'Hybride team', description: 'Strategen, designers, copywriters en paid specialisten werken als één geïntegreerd squad.' },
];

export const growthSignals = [
  { label: 'Stories uitgewerkt per maand', value: '240' },
  { label: 'Campagnes met incrementality-test', value: '62%' },
  { label: 'Gemiddelde responstijd community', value: '45 min' },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'zomerboost',
    title: 'ZomerBoost voor retail',
    clientName: 'Sunrise Collective',
    category: 'Retail',
    summary: 'Full-funnel zomeractivering met lokale creators en slimme retargeting flows.',
    imageUrl: zomerboost,
    challenge: 'Een seizoenspiek benutten terwijl concurrenten hetzelfde doen.',
    approach:
      'We lanceerden een creatief thema, bouwden creator kits en combineerden TikTok Spark Ads met Meta Advantage+ om aandacht te vangen én vast te houden.',
    results: [
      { keyMetric: 'Omzet tijdens campagne', value: '+132%' },
      { keyMetric: 'Nieuwe nieuwsbriefleden', value: '+7.400' },
      {
        keyMetric: 'Campagnefases',
        value: 'See → Think → Do',
        chartData: {
          labels: ['See', 'Think', 'Do'],
          data: [420, 280, 120],
        },
      },
    ],
    testimonial: { text: 'Het team dacht werkelijk overal twee stappen vooruit.', author: 'Maxime van Leeuwen, Marketing Lead' },
  },
  {
    id: 'koffiehoek',
    title: 'Lokale community voor De Koffiehoek',
    clientName: 'De Gezellige Koffiehoek',
    category: 'Hospitality',
    summary: 'Hyperlokale verhalen zorgden voor 40% meer winkelbezoek.',
    imageUrl: koffiehoek,
    challenge: 'Een buurtfavoriet uitbouwen tot stedelijke hotspot.',
    approach:
      'Met een mix van Reels, klantverhalen en loyalty-acties volgden we de dagelijkse ritmes van bezoekers. Een community manager antwoordde in realtime en verzamelde feedback.',
    results: [
      { keyMetric: 'Winkelbezoek', value: '+40%' },
      { keyMetric: 'Instagram mentions', value: '+320%' },
      { keyMetric: 'Gem. ticketwaarde', value: '+18%' },
    ],
    testimonial: { text: 'Onze barista’s voelen zich onderdeel van de storytelling.', author: 'Kees, eigenaar' },
  },
  {
    id: 'b2b-saas',
    title: 'LinkedIn growth voor B2B SaaS',
    clientName: 'Innovatech',
    category: 'B2B',
    summary: 'Thought leadership + ABM zorgde voor 150% meer demo’s.',
    imageUrl: b2bWebdesign,
    challenge: 'Beslissers bereiken in een druk B2B-landschap.',
    approach:
      'We ontwikkelden een contentserie rondom product releases, koppelden dit aan whitepapers en nurture flows en activeerden decision-makers via Conversation Ads.',
    results: [
      { keyMetric: 'Demo aanvragen', value: '+150%' },
      { keyMetric: 'Cost per lead', value: '-32%' },
      { keyMetric: 'Sales pipeline', value: '+€1,2M' },
    ],
    testimonial: { text: 'Webbiecorn bouwde een schaalbaar playbook dat ons team zelf kan blijven draaien.', author: 'Linda Mensink, VP Marketing' },
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'sunrise',
    quote: 'Ze leveren niet alleen content, maar een team dat meedenkt als interne collega’s.',
    author: 'Maxime van Leeuwen',
    company: 'Sunrise Collective',
  },
  {
    id: 'koffiehoek',
    quote: 'Onze community groeide van losse volgers naar vaste gasten. Dat is pure magie.',
    author: 'Kees',
    company: 'De Gezellige Koffiehoek',
  },
  {
    id: 'innovatech',
    quote: 'De dashboards en workflows geven ons eindelijk rust én overzicht.',
    author: 'Linda Mensink',
    company: 'Innovatech',
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: 'pilot',
    name: 'Pilot Sprint',
    price: '€3.200',
    priceSuffix: '/6 weken',
    features: [
      'Audit + strategie workshop',
      'Content formats + 12 assets',
      'Campagne set-up & learning report',
    ],
    ctaText: 'Plan een sprint',
    ctaLink: '/contact?plan=pilot',
  },
  {
    id: 'partnership',
    name: 'Partnership',
    price: '€5.900',
    priceSuffix: '/mnd',
    features: [
      'Volledig social beheer (4 kanalen)',
      'Paid media management',
      'Kwartaalroadmap & live dashboards',
      'Community management',
    ],
    isPopular: true,
    ctaText: 'Start samenwerking',
    ctaLink: '/contact?plan=partnership',
  },
  {
    id: 'scale',
    name: 'Scale Squad',
    price: 'Op aanvraag',
    priceSuffix: '',
    features: [
      'In-house squad (4-6 specialisten)',
      'Always-on experimenten',
      'On-site workshops & enablement',
      'Custom automation & tooling',
    ],
    ctaText: 'Ontdek de squad',
    ctaLink: '/contact?plan=scale',
  },
];

export const addOns = [
  { title: 'Influencer activatie', description: 'Selectie, briefing en rapportage van micro-influencers.' },
  { title: 'Campagne fotografie', description: 'Eendaagse shoot inclusief editing en usage rights.' },
  { title: 'AI content enablement', description: 'Training en prompts zodat uw team sneller produceert.' },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'social-media-trends-2024',
    title: 'Social media trends die écht relevant zijn',
    date: '15 maart 2024',
    category: 'Trends',
    imageUrl: dataAnalyse,
    summary: 'Van AI content workflows tot communities: dit zijn de bewegingen die we bij klanten zien.',
    author: 'Webbiecorn Studio',
  },
  {
    id: 'ugc-framework',
    title: 'Een schaalbaar UGC-framework bouwen',
    date: '02 mei 2024',
    category: 'Creatie',
    imageUrl: ugcCampagne,
    summary: 'Zo combineer je creator kits, rechten en repurposing in één proces.',
    author: 'Stella Creator',
  },
  {
    id: 'tiktok-b2b',
    title: 'TikTok voor B2B? Jazeker.',
    date: '18 mei 2024',
    category: 'Platformen',
    imageUrl: influencerMarketing,
    summary: 'Thought leadership formats die verder gaan dan dansjes.',
    author: 'Finn Strateeg',
  },
  {
    id: 'content-calendar',
    title: 'Een ritme vinden in contentproductie',
    date: '27 juni 2024',
    category: 'Proces',
    imageUrl: contentKalender,
    summary: 'Gebruik deze templates om vooruit te plannen zonder creativiteit te verliezen.',
    author: 'Luna Eenhoorn',
  },
  {
    id: 'dashboarding',
    title: 'Van spreadsheets naar realtime dashboards',
    date: '12 juli 2024',
    category: 'Data',
    imageUrl: dataAnalyse,
    summary: 'Stap-voor-stap inzicht in wat werkt en wat niet.',
    author: 'Finn Strateeg',
  },
];

export const blogContent = {
  hero: {
    title: 'Het Webbiecorn speelboek',
    description: 'Inzichten, frameworks en experimenten direct van het team dat ze uitvoert.',
  },
};

export const faqItems: FaqItem[] = [
  {
    id: 'werkwijze',
    question: 'Hoe start een traject met Webbiecorn?',
    answer: 'We beginnen met een digitale intake en een gezamenlijke workshop. Binnen vijf werkdagen ontvangt u een roadmap met deliverables, metrics en het team dat het uitvoert.',
  },
  {
    id: 'tooling',
    question: 'Werken jullie met onze tooling?',
    answer: 'Ja. We koppelen ons team aan uw bestaande tools of richten een stack in met Notion, Figma, Later, Meta of GA4 dashboards.',
  },
  {
    id: 'looptijd',
    question: 'Wat is de minimale looptijd?',
    answer: 'Een sprint duurt zes weken. Voor partnerships hanteren we een minimale looptijd van drie maanden zodat we kunnen testen en optimaliseren.',
  },
  {
    id: 'rapportage',
    question: 'Hoe rapporteren jullie resultaten?',
    answer: 'Elke sprint sluiten we af met een live sessie en gedeeld dashboard. Daarin staan learnings, next steps en benodigde input.',
  },
];

export const resources: Resource[] = [
  {
    id: 'strategie-kit',
    title: 'Social Strategy Kit',
    description: 'Frameworks en canvassen om binnen één dag uw messaging scherp te krijgen.',
    imageUrl: strategieWorkshop,
    downloadLink: '/resources/strategie-kit.pdf',
  },
  {
    id: 'content-sprint',
    title: 'Content Sprint Planner',
    description: 'Een template voor contentproductie in sprints van twee weken.',
    imageUrl: contentKalender,
    downloadLink: '/resources/content-sprint.pdf',
  },
  {
    id: 'data-dashboard',
    title: 'Dashboard blueprint',
    description: 'Een handleiding om social en salesdata te combineren in Looker of Datastudio.',
    imageUrl: dataAnalyse,
    downloadLink: '/resources/dashboard-blueprint.pdf',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'luna',
    name: 'Luna Eenhoorn',
    role: 'Founder & Strategist',
    imageUrl: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    bio: 'Combineert merkstrategie met growth marketing en geeft de richting aan binnen elk traject.',
  },
  {
    id: 'finn',
    name: 'Finn Strateeg',
    role: 'Head of Data',
    imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=400&q=80',
    bio: 'Bouwt dashboards, testplannen en incrementality-analyses.',
  },
  {
    id: 'stella',
    name: 'Stella Creator',
    role: 'Creative Lead',
    imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Stuurt de studio met copywriters, videomakers en designers aan.',
  },
  {
    id: 'amir',
    name: 'Amir Koen',
    role: 'Paid Media Specialist',
    imageUrl: 'https://images.unsplash.com/photo-1544723795-432537f8b88b?auto=format&fit=crop&w=400&q=80',
    bio: 'Optimaliseert dagelijkse advertentiebudgetten op Meta, TikTok en LinkedIn.',
  },
];

export const contactChannels = [
  {
    label: 'Direct bellen',
    value: '+31 (0)20 123 45 67',
    description: 'Ma-vr van 09:00 - 18:00',
    href: 'tel:+31201234567',
  },
  {
    label: 'Mail het team',
    value: 'hello@webbiecorn.nl',
    description: 'Reactie binnen één werkdag',
    href: 'mailto:hello@webbiecorn.nl',
  },
  {
    label: 'Studio bezoeken',
    value: 'A Lab, Amsterdam Noord',
    description: 'Op afspraak of tijdens open studio vrijdag',
  },
];

export const cultureValues = [
  { title: 'Radicale transparantie', detail: 'Iedere klant kan meekijken in boards, kanalen en analyses.' },
  { title: 'Tempo + rust', detail: 'We bouwen systemen zodat snelheid niet ten koste gaat van kwaliteit.' },
  { title: 'Experiment mindset', detail: 'Elke sprint bevat hypothesen, testen en learnings.' },
];

export const labTimeline = [
  { year: '2019', title: 'Start van Webbiecorn', description: 'Gestart als boutique social studio met focus op creatieve formats.' },
  { year: '2021', title: 'Growth Lab', description: 'Uitbreiding met performance team en eigen data stack.' },
  { year: '2023', title: 'Creator collectief', description: 'We koppelen een netwerk van 60 creators aan klanten.' },
];

export const processSteps = [
  { id: 'discover', title: 'Discover', description: 'Audit van kanalen, data en merkverhaal.', result: 'Roadmap met heldere prioriteiten.' },
  { id: 'design', title: 'Design', description: 'Formats, campagnes en journeys ontwerpen.', result: 'Creatieve concepten + contentkalender.' },
  { id: 'deploy', title: 'Deploy', description: 'Productie, distributie en community management.', result: 'Altijd-on resultaten en learnings.' },
  { id: 'scale', title: 'Scale', description: 'Experimenten, advertising en enablement.', result: 'Opschalen wat werkt met duidelijke KPI’s.' },
];

export const toolkit = [
  'AI assisted scripting',
  'Creator kits & brand portals',
  'Realtime dashboards',
  'Automated community alerts',
];

export const testimonialHighlights = testimonials.map(({ quote, author, company }) => ({ quote, author, company }));

