import React, { useState } from 'react';
import { Resource } from '../types';
import Card from '../components/Card';
import Modal from '../components/Modal';
import Button from '../components/Button';

// STAP 1: Importeer de afbeeldingen voor de resources
import checklistImg from '../assets/strategie-workshop.jpg';
import contentGuideImg from '../assets/content-creatie.jpg';
import tiktokEbookImg from '../assets/techtalk-community.jpg'; // Aangepast naar de bestandsnaam die we kennen
import influencerTemplateImg from '../assets/ugc-campagne.jpg';


// STAP 2: Vervang de statische links door de geïmporteerde variabelen
const resourcesData: Resource[] = [
  {
    id: 'social-media-checklist-2024',
    title: 'De Ultieme Social Media Checklist 2024',
    description: 'Een complete checklist om ervoor te zorgen dat uw social media strategie op alle fronten scoort. Van profieloptimalisatie tot contentplanning.',
    imageUrl: checklistImg,
  },
  {
    id: 'content-creation-guide',
    title: 'Gids voor Betoverende Content Creatie',
    description: 'Praktische tips en inspiratie voor het creÃ«ren van content die uw doelgroep boeit en engageert. Inclusief tools en technieken.',
    imageUrl: contentGuideImg,
  },
  {
    id: 'tiktok-marketing-ebook',
    title: 'eBook: TikTok Marketing voor Beginners',
    description: 'Een uitgebreide gids om succesvol te starten met TikTok marketing. Van het begrijpen van het algoritme tot het creÃ«ren van virale content.',
    imageUrl: tiktokEbookImg,
  },
  {
    id: 'influencer-collaboration-template',
    title: 'Template: Influencer Samenwerkingsovereenkomst',
    description: 'Een handig template voor het opstellen van duidelijke afspraken met influencers. Bespaar tijd en voorkom misverstanden.',
    imageUrl: influencerTemplateImg,
  },
];

const ResourcesPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const openModal = (resource: Resource) => {
    setSelectedResource(resource);
    setIsModalOpen(true);
    setFormSubmitted(false);
    setEmail('');
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedResource(null);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to a backend or mailing list service
    console.log(`Email submitted for ${selectedResource?.title}: ${email}`);
    setFormSubmitted(true);
    // Optionally, trigger actual download here if available, or just show success message
  };

  return (
    <div className="py-16 md:py-24 bg-[#0F052B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Magische <span className="gradient-text">Resources</span></h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#E0D9F7]/80">
            Gratis gidsen, checklists en templates om uw social media marketing naar een hoger niveau te tillen.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resourcesData.map((resource, index) => (
            <Card key={resource.id} className="flex flex-col h-full" data-aos="fade-up" data-aos-delay={`${index * 100}`}>
              <img src={resource.imageUrl} alt={resource.title} className="w-full h-48 object-cover rounded-t-xl" />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2 flex-grow">{resource.title}</h3>
                <p className="text-sm text-[#E0D9F7]/80 mb-4 line-clamp-3">{resource.description}</p>
                <Button onClick={() => openModal(resource)} variant="primary" className="mt-auto w-full">
                  Download Nu
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {selectedResource && (
        <Modal isOpen={isModalOpen} onClose={closeModal} title={`Download ${selectedResource.title}`}>
          {!formSubmitted ? (
            <form onSubmit={handleEmailSubmit} className="space-y-6">
              <p className="text-[#E0D9F7]/80">Voer uw e-mailadres in om de downloadlink te ontvangen en toegang te krijgen tot deze magische resource.</p>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#E0D9F7] mb-1">E-mailadres</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-[#E0D9F7] placeholder-[#E0D9F7]/60 focus:ring-2 focus:ring-[#A78BFA] focus:outline-none"
                />
              </div>
              <Button type="submit" variant="primary" className="w-full">
                Verstuur & Download
              </Button>
            </form>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-semibold gradient-text mb-4">Bedankt!</h3>
              <p className="text-[#E0D9F7]/90 mb-2">Uw aanvraag is verzonden. De downloadlink voor "{selectedResource.title}" wordt binnen enkele ogenblikken naar <strong>{email}</strong> gestuurd.</p>
              <p className="text-sm text-[#E0D9F7]/70">(Dit is een demo; er wordt geen echte e-mail verzonden of download gestart.)</p>
              <Button onClick={closeModal} variant="secondary" className="mt-6">
                Sluiten
              </Button>
            </div>
          )}
        </Modal>
      )}
    </div>
  );
};

export default ResourcesPage;
