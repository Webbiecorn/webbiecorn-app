
import React from 'react';
import { Link } from 'react-router-dom';
import { IconProps } from '../types';

// Placeholder SVGs for social icons, replace with actual SVGs or an icon library
const InstagramIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.786.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.02-.058 1.351-.058 3.807v.468c0 2.456.011 2.786.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.02.047 1.351.058 3.807.058h.468c2.456 0 2.786-.011 3.807-.058.975-.045 1.504-.207 1.857-.344.467-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.047-1.02.058-1.351.058-3.807v-.468c0-2.456-.011-2.786-.058-3.807-.045-.975-.207-1.504-.344-1.857-.182-.467-.399-.8-.748-1.15-.35-.35-.683-.566-1.15-.748-.353-.137-.882-.3-1.857-.344-1.02-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 1.802a3.333 3.333 0 110 6.666 3.333 3.333 0 010-6.666zm5.338-3.205a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" clipRule="evenodd" />
  </svg>
);
const LinkedInIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);
const TikTokIcon: React.FC<IconProps> = ({ className }) => (
 <svg className={className} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 0 .17.01.24.05.66.33 1.15.79 1.49 1.4.17.31.25.65.25.99v10.38c0 .9-.37 1.72-1.02 2.32-.61.57-1.38.93-2.22 1.03-.85.1-1.7.02-2.53-.21-.69-.19-1.33-.51-1.88-.95-.61-.5-1.08-1.11-1.38-1.81-.13-.3-.2-.63-.2-.96v-3.32c0-.07-.01-.13-.02-.2-.01-.06-.01-.13-.02-.19-.02-.15-.04-.3-.07-.44-.03-.15-.06-.29-.1-.44-.02-.09-.05-.18-.08-.26-.16-.48-.4-.91-.73-1.29-.41-.48-.92-.85-1.5-1.1-.51-.22-1.06-.35-1.62-.42-.45-.06-.89-.08-1.34-.08H6.84c-.07 0-.13.01-.19.02-.61.12-1.16.39-1.61.77-.49.42-.87.96-1.09 1.58-.21.57-.27 1.19-.21 1.79.06.6.28 1.17.62 1.66.42.61.98 1.08 1.63 1.39.61.28 1.25.41 1.89.41H6.84c.08 0 .15.01.22.02.57.06 1.11.23 1.58.52.41.26.75.61.99.99.21.34.34.72.41 1.11.08.43.1 1.05.1 1.88V19.4c0 .91-.37 1.73-1.02 2.33-.61.57-1.38.93-2.22 1.03-.85.1-1.7.02-2.53-.21-.69-.19-1.33-.51-1.88-.95-.61-.5-1.08-1.11-1.38-1.81-.13-.3-.2-.63-.2-.96v-3.32c0-.07-.01-.13-.02-.2-.01-.06-.01-.13-.02-.19-.02-.15-.04-.3-.07-.44-.03-.15-.06-.29-.1-.44-.02-.09-.05-.18-.08-.26-.16-.48-.4-.91-.73-1.29C.51 11.05.1 10.48 0 9.8V6.63c0-.91.37-1.73 1.02-2.33.61-.57 1.38-.93 2.22-1.03C4.09 3.17 4.94 3.1 5.77 3.3c.69.19 1.33.51 1.88.95.61.5 1.08 1.11 1.38 1.81.13.3.2.63.2.96v3.32c0 .07.01.13.02.2.01.06.01.13.02.19.02.15.04.3.07.44.03.15.06.29.1.44.02.09.05.18.08.26.16.48.4.91.73 1.29.41.48.92.85 1.5 1.1.51.22 1.06.35 1.62.42.45.06.89.08 1.34.08h.18c.07 0 .13-.01.19-.02.61-.12 1.16-.39 1.61-.77.49-.42.87-.96 1.09-1.58.21-.57.27-1.19.21-1.79-.06-.6-.28-1.17-.62-1.66-.42-.61-.98-1.08-1.63-1.39-.61-.28-1.25-.41-1.89-.41h-.18c-.08 0-.15-.01-.22-.02-.57-.06-1.11-.23-1.58-.52-.41-.26-.75-.61-.99-.99-.21-.34-.34-.72-.41-1.11-.08-.43-.1-1.05-.1-1.88V.97c0-.4.14-.75.38-1.01.2-.21.46-.33.74-.36.07-.01.14-.01.21-.02z"/>
 </svg>
);

const MailIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
);

const PhoneIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.034 11.034 0 005.37 5.37l1.154-2.308a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
  </svg>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0320] text-[#E0D9F7]/80 py-12 lg:py-16 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Logo & Bio */}
          <div>
            <Link to="/" className="text-3xl font-bold gradient-text mb-4 inline-block">
              Webbiecorn
            </Link>
            <p className="text-sm mb-4">
              Webbiecorn brengt magie in jouw social media. Creativiteit ontmoet data voor betoverende resultaten.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F472B6] transition-colors"><InstagramIcon className="w-6 h-6" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F472B6] transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#F472B6] transition-colors"><TikTokIcon className="w-6 h-6" /></a>
            </div>
          </div>

          {/* Column 2: Ontdek */}
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Ontdek</h5>
            <ul className="space-y-2">
              <li><Link to="/diensten" className="hover:text-[#F472B6] transition-colors">Diensten</Link></li>
              <li><Link to="/case-studies" className="hover:text-[#F472B6] transition-colors">Case Studies</Link></li>
              <li><Link to="/prijzen" className="hover:text-[#F472B6] transition-colors">Prijzen</Link></li>
              <li><Link to="/blog" className="hover:text-[#F472B6] transition-colors">Blog</Link></li>
              <li><Link to="/resources" className="hover:text-[#F472B6] transition-colors">Resources</Link></li>
            </ul>
          </div>

          {/* Column 3: Bedrijf */}
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Bedrijf</h5>
            <ul className="space-y-2">
              <li><Link to="/over-ons" className="hover:text-[#F472B6] transition-colors">Over Ons</Link></li>
              <li><Link to="/testimonials" className="hover:text-[#F472B6] transition-colors">Testimonials</Link></li>
              <li><Link to="/faq" className="hover:text-[#F472B6] transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h5 className="text-xl font-semibold text-white mb-4">Contact</h5>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MailIcon className="w-5 h-5 text-[#A78BFA]" />
                <a href="mailto:info@webbiecorn.nl" className="hover:text-[#F472B6] transition-colors">info@webbiecorn.nl</a>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-[#A78BFA]" />
                <a href="tel:+31612345678" className="hover:text-[#F472B6] transition-colors">+31 6 1234 5678</a>
              </li>
               <li className="mt-2">
                <Link to="/contact" className="hover:text-[#F472B6] transition-colors font-semibold">Neem contact op</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Webbiecorn. Alle rechten voorbehouden. Social Media Magie die Werkt.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
