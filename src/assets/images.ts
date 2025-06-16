// --- images.ts ---

// Importeer elke afbeelding uit de assets-map
import advertentieCampagnes from './advertentie-campagnes.jpg';
import brandIdentity from './brand-identity.jpg';
import caseStudyEcommerce from './case-study-ecommerce.jpg';
import caseStudyKoffiehoek from './case-study-koffiehoek.jpg';
import caseStudyWebdesign from './casestudy-webdesign.jpg'; // Correcte naam zonder streepje
import contentCreatie from './content-creatie.jpg';
import heroAfbeelding from './hero-afbeelding.png';
import socialMediaBeheer from './social-media-beheer.jpg';
import strategieWorkshop from './strategie-workshop.jpg';
import teamFoto from './team-foto.jpg';
import techtalkCommunity from './techtalk-community.jpg';
import ugcCampagne from './ugc-campagne.jpg'; // Correcte naam (ugc)
import zomerboost2025 from './zomerboost-2025.jpg';

// Maak een 'woordenboek' (of 'map') die een ID koppelt aan de geïmporteerde afbeelding.
// De namen links (de 'keys') moeten overeenkomen met de 'id' in je data-objecten.
export const serviceImages: { [key: string]: string } = {
  'case-study-koffiehoek': caseStudyKoffiehoek,
  'case-study-ecommerce': caseStudyEcommerce,
  'content-creatie': contentCreatie,
  'advertentie-campagnes': advertentieCampagnes,
  'social-media-beheer': socialMediaBeheer,
  'sgo-campagne': ugcCampagne, // Gebruikt de juiste variabele 'ugcCampagne'
  'strategie-workshop': strategieWorkshop,
  'brand-identity': brandIdentity,
  'case-study-webdesign': caseStudyWebdesign,
  'hottalk-community': techtalkCommunity, // Gebruikt de juiste variabele 'techtalkCommunity'
  'zomerboost-2025': zomerboost2025,
};

// Exporteer eventuele losse afbeeldingen die je direct nodig hebt
export {
  heroAfbeelding,
  teamFoto,
};