
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
      <div className="flex flex-col min-h-screen bg-[#0F052B] text-[#E0D9F7] font-['Poppins']">
        <Header />
        <main className="flex-grow pt-20 md:pt-24"> {/* Adjust pt based on header height */}
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
