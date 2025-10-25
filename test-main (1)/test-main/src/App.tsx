import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ModulesGrid from './components/ModulesGrid';
import BrandElevationSlider from './components/BrandElevationSlider';
import ClientsCarousel from './components/ClientsCarousel';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Service Pages
import SEOOptimization from './pages/services/SEOOptimization';
import SocialMediaManagement from './pages/services/SocialMediaManagement';
import ContentMarketing from './pages/services/ContentMarketing';
import Analytics from './pages/services/Analytics';
import PPCAdvertising from './pages/services/PPCAdvertising';
import BrandManagement from './pages/services/BrandManagement';
import MobileMarketing from './pages/services/MobileMarketing';
import EmailMarketing from './pages/services/EmailMarketing';
import EcommerceOptimization from './pages/services/EcommerceOptimization';
import CustomerExperience from './pages/services/CustomerExperience';
import DigitalStrategy from './pages/services/DigitalStrategy';
import GrowthMarketing from './pages/services/GrowthMarketing';
import InternationalMarketing from './pages/services/InternationalMarketing';
import MarketingAutomation from './pages/services/MarketingAutomation';
import CustomerLoyalty from './pages/services/CustomerLoyalty';
import YeniUye from './pages/services/YeniUye';


// Corporate Pages
import About from './pages/corporate/About';
import Careers from './pages/corporate/Careers';
import Blog from './pages/corporate/Blog';

// Home Page Component
const HomePage = () => (
  <>
    <Hero />
    <ModulesGrid />
    <BrandElevationSlider />
    <ClientsCarousel />
    <Pricing />
    <Testimonials />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Service Routes */}
          <Route path="/services/seo" element={<SEOOptimization />} />
          <Route path="/services/social-media" element={<SocialMediaManagement />} />
          <Route path="/services/content-marketing" element={<ContentMarketing />} />
          <Route path="/services/analytics" element={<Analytics />} />
          <Route path="/services/ppc" element={<PPCAdvertising />} />
          <Route path="/services/branding" element={<BrandManagement />} />
          <Route path="/services/mobile-marketing" element={<MobileMarketing />} />
          <Route path="/services/email-marketing" element={<EmailMarketing />} />
          <Route path="/services/ecommerce" element={<EcommerceOptimization />} />
          <Route path="/services/customer-experience" element={<CustomerExperience />} />
          <Route path="/services/digital-strategy" element={<DigitalStrategy />} />
          <Route path="/services/growth-marketing" element={<GrowthMarketing />} />
          <Route path="/services/international-marketing" element={<InternationalMarketing />} />
          <Route path="/services/marketing-automation" element={<MarketingAutomation />} />
          <Route path="/services/customer-loyalty" element={<CustomerLoyalty />} />
          <Route path="/services/yeni-uye" element={<YeniUye />} />


          {/* Corporate Routes */}
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
