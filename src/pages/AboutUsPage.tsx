
import React, { useState } from 'react';
import { TeamMember } from '../types';
import Card from '../components/Card';
import Button from '../components/Button';

const teamMembers: TeamMember[] = [
  {
    id: 'luna-eenhoorn',
    name: 'Luna Eenhoorn',
    role: 'Chief Magical Officer & Oprichter',
    imageUrl: 'https://picsum.photos/seed/luna-eenhoorn-new/400/400', // Using a new placeholder for uniqueness
    bio: 'Luna is de visionaire kracht achter Webbiecorn. Met een passie voor creativiteit en een scherp oog voor data, gelooft ze dat elk merk een uniek magisch verhaal te vertellen heeft. Haar missie is om die magie te ontketenen en te vertalen naar meetbaar online succes. Ze heeft jarenlange ervaring in de digitale marketingwereld en inspireert het team dagelijks met haar innovatieve ideeën.'
  },
  {
    id: 'finn-strateeg',
    name: 'Finn Strateeg',
    role: 'Head of Data & Strategy',
    imageUrl: 'https://picsum.photos/seed/finn-strateeg-new/400/400', // Using a new placeholder for uniqueness
    bio: 'Finn is het analytische brein van Webbiecorn. Hij duikt diep in de data om inzichten te vinden die de basis vormen voor succesvolle campagnes. Finn gelooft sterk in de kracht van A/B-testen en continue optimalisatie. Zijn strategische aanpak zorgt ervoor dat elke marketingeuro maximaal rendeert en onze klanten hun doelen overtreffen.'
  },
  {
    id: 'stella-creator',
    name: 'Stella Creator',
    role: 'Lead Content Alchemist',
    imageUrl: '/assets/content-creatie.jpg',
    bio: 'Stella is de meesteres van betoverende content. Met haar creatieve flair en expertise in storytelling transformeert ze merkverhalen in onweerstaanbare posts, video’s en campagnes. Ze heeft een feilloos gevoel voor esthetiek en weet precies hoe ze de juiste snaar bij de doelgroep moet raken. Stella zorgt ervoor dat uw merk opvalt en herinnerd wordt.'
  },
];

interface TeamMemberCardProps {
  member: TeamMember;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="text-center" dataAos="fade-up">
      <img src={member.imageUrl} alt={member.name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white/20" />
      <h3 className="text-xl font-semibold text-white">{member.name}</h3>
      <p className="gradient-text font-medium mb-3">{member.role}</p>
      <div className={`text-sm text-[#E0D9F7]/80 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-96' : 'max-h-0'}`}>
        <p className="mb-3">{member.bio}</p>
      </div>
      <button 
        onClick={() => setIsExpanded(!isExpanded)} 
        className="text-sm font-medium text-[#A78BFA] hover:text-[#F472B6] transition-colors"
      >
        {isExpanded ? 'Lees minder...' : 'Lees meer...'}
      </button>
    </Card>
  );
};


const AboutUsPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-[#0F052B]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12 md:mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Over <span className="gradient-text">Webbiecorn</span></h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#E0D9F7]/80">
            Wij zijn een team van gepassioneerde social media magiërs, toegewijd aan het creëren van betoverende resultaten voor uw merk.
          </p>
        </header>

        {/* Introduction Section */}
        <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 mb-16 md:mb-24" data-aos="fade-up">
          <div className="md:w-1/2">
            <img 
              src="/assets/foto-team.jpg" 
              alt="Het Webbiecorn Team" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover glassmorphism p-1"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6 gradient-text">Onze Missie: Social Media Magie die Werkt</h2>
            <div className="space-y-4 text-lg text-[#E0D9F7]/90">
              <p>
                Bij Webbiecorn geloven we dat social media meer is dan alleen posten. Het is een krachtig platform om authentieke connecties te bouwen, merkloyaliteit te kweken en meetbare groei te realiseren. Onze "magie" ligt in de perfecte mix van data-gedreven strategieën en sprankelende creativiteit.
              </p>
              <p>
                We zijn opgericht met het idee dat elk bedrijf, groot of klein, toegang verdient tot social media marketing die écht impact maakt. We zijn niet zomaar een bureau; we zijn uw partners in online succes, uw gidsen in het steeds veranderende social media landschap, en uw persoonlijke tovenaars als het gaat om het creëren van engagement.
              </p>
              <p>
                Ons team bestaat uit experts op het gebied van strategie, content creatie, community management, en advertenties. Samen werken we aan één doel: uw merk laten stralen en uw bedrijfsdoelstellingen overtreffen.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ontmoet Onze <span className="gradient-text">Tovenaars</span></h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>

        {/* Values/Culture Section - Optional */}
        <section className="mt-16 md:mt-24 text-center" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Onze <span className="gradient-text">Kernwaarden</span></h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card dataAos="zoom-in" dataAosDelay="0">
                    <h3 className="text-2xl font-semibold text-white mb-2">Creativiteit ✨</h3>
                    <p className="text-[#E0D9F7]/80">We omarmen innovatie en out-of-the-box denken om unieke campagnes te creëren.</p>
                </Card>
                <Card dataAos="zoom-in" dataAosDelay="100">
                    <h3 className="text-2xl font-semibold text-white mb-2">Resultaatgericht 🎯</h3>
                    <p className="text-[#E0D9F7]/80">Data stuurt onze beslissingen. We streven naar meetbaar succes voor onze klanten.</p>
                </Card>
                <Card dataAos="zoom-in" dataAosDelay="200">
                    <h3 className="text-2xl font-semibold text-white mb-2">Partnerschap 🤝</h3>
                    <p className="text-[#E0D9F7]/80">We werken nauw samen met onze klanten, als een verlengstuk van hun team.</p>
                </Card>
            </div>
             <div className="mt-12">
                <Button asLink to="/contact" variant="primary" size="lg">
                    Werk met Ons Samen
                </Button>
            </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUsPage;
