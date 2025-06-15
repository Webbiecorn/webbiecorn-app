
import React, { useState } from 'react';
import Button from '../components/Button';

const servicesOptions = [
  'Strategisch Social Media Beheer',
  'Resultaatgerichte Advertentie Campagnes',
  'Betoverende Content Creatie',
  'Volledige Social Media Strategie',
  'Influencer Marketing',
  'Anders (specificeer in bericht)',
];

interface FormData {
  name: string;
  email: string;
  service: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (currentStep === 1 && (!formData.name || !formData.email)) {
        alert("Vul alstublieft uw naam en e-mailadres in.");
        return;
    }
     if (currentStep === 2 && !formData.service) {
        alert("Kies alstublieft een dienst.");
        return;
    }
    setCurrentStep(prev => prev + 1);
  };
  const prevStep = () => setCurrentStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.message) {
        alert("Vergeet uw bericht niet!");
        return;
    }
    // Handle form submission logic (e.g., send to API)
    console.log('Form data submitted:', formData);
    setIsSubmitted(true);
    // Reset form or redirect after submission if needed
  };

  if (isSubmitted) {
    return (
      <div className="py-16 md:py-24 bg-[#0F052B] flex items-center justify-center min-h-[calc(100vh-10rem)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center glassmorphism p-8 md:p-12 rounded-xl max-w-lg">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Bedankt voor uw bericht!</h1>
          <p className="text-lg text-[#E0D9F7]/90 mb-8">
            Uw aanvraag is succesvol verzonden. Een van onze social media magiërs neemt zo spoedig mogelijk contact met u op.
          </p>
          <span className="text-6xl mb-8 block">✨</span>
          <Button onClick={() => { setIsSubmitted(false); setCurrentStep(1); setFormData({name: '', email: '', service: '', message: ''});}} variant="primary">
            Nog een bericht sturen?
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 md:py-24 bg-[#0F052B] min-h-[calc(100vh-10rem)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Neem <span className="gradient-text">Contact</span> Op</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-[#E0D9F7]/80">
            Klaar om de magie te starten? Vul het formulier in of neem direct contact met ons op.
          </p>
        </header>

        <div className="max-w-2xl mx-auto glassmorphism p-6 md:p-10 rounded-xl shadow-2xl" data-aos="fade-up" data-aos-delay="100">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Progress Indicator */}
            <div className="flex justify-between items-center mb-8">
                {[1,2,3].map(stepNum => (
                    <React.Fragment key={stepNum}>
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                            ${currentStep >= stepNum ? 'bg-gradient-to-r from-[#F472B6] to-[#A78BFA] border-[#A78BFA] text-white' : 'border-white/30 text-[#E0D9F7]/70'}`}>
                            {stepNum}
                        </div>
                        {stepNum < 3 && <div className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${currentStep > stepNum ? 'bg-[#A78BFA]' : 'bg-white/20'}`}></div>}
                    </React.Fragment>
                ))}
            </div>


            {currentStep === 1 && (
              <div data-aos="fade-in">
                <h2 className="text-xl font-semibold text-white mb-4">Stap 1: Uw Gegevens</h2>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#E0D9F7] mb-1">Volledige Naam</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-[#E0D9F7] placeholder-[#E0D9F7]/60 focus:ring-2 focus:ring-[#A78BFA] focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#E0D9F7] mb-1 mt-4">E-mailadres</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-[#E0D9F7] placeholder-[#E0D9F7]/60 focus:ring-2 focus:ring-[#A78BFA] focus:outline-none" />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div data-aos="fade-in">
                <h2 className="text-xl font-semibold text-white mb-4">Stap 2: Kies een Dienst</h2>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-[#E0D9F7] mb-1">Interesse in</label>
                  <select name="service" id="service" value={formData.service} onChange={handleChange} required className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-[#E0D9F7] focus:ring-2 focus:ring-[#A78BFA] focus:outline-none appearance-none bg-no-repeat bg-right pr-8" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23E0D9F7'%3E%3Cpath fill-rule='evenodd' d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E")`, backgroundSize: '1.5em', backgroundPosition: 'right 0.5rem center'}}>
                    <option value="" disabled>Selecteer een dienst...</option>
                    {servicesOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                  </select>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div data-aos="fade-in">
                <h2 className="text-xl font-semibold text-white mb-4">Stap 3: Uw Bericht</h2>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#E0D9F7] mb-1">Bericht</label>
                  <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className="w-full p-3 rounded-md bg-white/5 border border-white/20 text-[#E0D9F7] placeholder-[#E0D9F7]/60 focus:ring-2 focus:ring-[#A78BFA] focus:outline-none"></textarea>
                </div>
              </div>
            )}

            <div className="flex justify-between items-center pt-4">
              {currentStep > 1 && (
                <Button type="button" onClick={prevStep} variant="secondary">
                  Vorige
                </Button>
              )}
              {currentStep < 3 && (
                <Button type="button" onClick={nextStep} variant="primary" className={currentStep === 1 ? 'ml-auto' : ''}>
                  Volgende
                </Button>
              )}
              {currentStep === 3 && (
                <Button type="submit" variant="primary">
                  Verstuur Magie ✨
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
