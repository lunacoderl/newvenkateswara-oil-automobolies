import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingContactActions from './components/FloatingContactActions';
import Home from './pages/Home';
import ServiceDetails from './pages/ServiceDetails';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import NotFound from './pages/NotFound';

import './styles/tokens.css';
import './styles/global.css';
import './styles/home.css';
import './styles/service-details.css';
import './styles/legal.css';
import './styles/not-found.css';

// Helper component to handle route change scrolling and anchor navigation
function ScrollHandler() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Allow DOM to settle, then scroll to section
      setTimeout(() => {
        const elem = document.querySelector(hash);
        if (elem) {
          elem.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollHandler />
      {/* Shared Accessible Navigation Header */}
      <Navbar />

      {/* Routes */}
      <div className="site-main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:slug" element={<ServiceDetails />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Persistent Floating Controls (Desktop Rail & Mobile Bottom Bar) */}
      <FloatingContactActions />

      {/* Shared Footer */}
      <Footer />
    </Router>
  );
}
