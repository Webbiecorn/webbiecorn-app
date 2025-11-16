
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import AOS from 'aos';
// Pages
import HomePage from './pages/HomePage';
import DienstenPage from './pages/DienstenPage';
import PortfolioPage from './pages/PortfolioPage';
import PricingPage from './pages/PricingPage';
import BlogPage from './pages/BlogPage';
import ArticlePage from './pages/ArticlePage';
import AboutUsPage from './pages/AboutUsPage';
import TestimonialsPage from './pages/TestimonialsPage';
import FaqPage from './pages/FaqPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import CaseStudyDetailPage from './pages/CaseStudyDetailPage';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
    });
     // Refresh AOS on route change if needed, though `once:true` might make this less necessary.
    AOS.refresh();
  }, []);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="relative flex flex-col min-h-screen bg-[#050015] text-[#E0D9F7] font-['Poppins']">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_top,_rgba(96,165,250,0.15),_transparent_50%),radial-gradient(circle_at_bottom,_rgba(244,114,182,0.1),_transparent_40%)] pointer-events-none" />
        <div className="absolute inset-x-0 top-24 h-72 blur-3xl bg-gradient-to-r from-[#A78BFA]/30 via-transparent to-[#60A5FA]/30 pointer-events-none" />
        <Header />
        <main className="relative flex-grow pt-24 md:pt-28">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/diensten" element={<DienstenPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/prijzen" element={<PricingPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:articleId" element={<ArticlePage />} />
            <Route path="/over-ons" element={<AboutUsPage />} />
            <Route path="/testimonials" element={<TestimonialsPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            <Route path="/case-studies/:studyId" element={<CaseStudyDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
