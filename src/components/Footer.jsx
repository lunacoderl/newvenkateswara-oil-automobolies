import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, MapPin, Navigation, ArrowUp } from 'lucide-react';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Shop by Vehicle', to: isHomePage ? '#shop-by-vehicle' : '/#shop-by-vehicle' },
    { label: 'Shop by Product', to: isHomePage ? '#shop-by-product' : '/#shop-by-product' },
    { label: 'Verified Brands', to: isHomePage ? '#brands' : '/#brands' },
    { label: 'Part Enquiry', to: isHomePage ? '#part-enquiry' : '/#part-enquiry' },
    { label: 'About Store', to: isHomePage ? '#about' : '/#about' },
    { label: 'Location & Map', to: isHomePage ? '#contact' : '/#contact' },
  ];

  const serviceLinks = [
    { label: 'Commercial Vehicle Spare Parts', to: '/services/commercial-vehicle-spare-parts' },
    { label: 'Automotive Engine Oil', to: '/services/engine-oil' },
    { label: 'Gear & Transmission Oil', to: '/services/gear-oil' },
    { label: 'Industrial Hydraulic Oil', to: '/services/hydraulic-oil' },
    { label: 'Lubricating Grease', to: '/services/lubricating-grease' },
  ];

  const vehicleLinks = [
    { label: 'Bikes & Scooters (4T/2T Oils)', to: isHomePage ? '#shop-by-vehicle' : '/#shop-by-vehicle' },
    { label: 'Passenger Cars (Synthetic & Mineral)', to: isHomePage ? '#shop-by-vehicle' : '/#shop-by-vehicle' },
    { label: 'Lorries & Trucks (LEYPARTS + Heavy Oils)', to: isHomePage ? '#shop-by-vehicle' : '/#shop-by-vehicle' },
    { label: 'Tractors & Farm Equipment (UTTO & Fluids)', to: isHomePage ? '#shop-by-vehicle' : '/#shop-by-vehicle' },
  ];

  const handleAnchorClick = (e, to) => {
    if (to.startsWith('#') && isHomePage) {
      e.preventDefault();
      const target = document.querySelector(to);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const whatsappFooterUrl = buildWhatsAppEnquiryUrl({
    category: 'Footer Quick Link Enquiry',
    notes: 'Hello New Venkateswara Oil & Automobiles, I am visiting your website and have a product question.',
  });

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-top-container">
        <div className="footer-grid">
          {/* Brand Info Col */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <span className="footer-badge-symbol">
                <span>NV</span>
              </span>
              <div className="footer-brand-text">
                <span className="footer-brand-name">{BUSINESS.name}</span>
                <span className="footer-brand-sub">Auto Nagar, Nellore</span>
              </div>
            </div>

            <p className="footer-description">
              A single automotive enterprise in Auto Nagar, Nellore, operating an <strong>Ashok Leyland Retail Parts Store</strong> (LEYPARTS &amp; VALUEPARTS) alongside official <strong>ENI Lubricants Distributors for Nellore</strong>, stocking all major company lubricants (Castrol, Gulf, Shell, Mobil, Servo, MAK, Veedol, and more).
            </p>

            <div className="footer-contact-summary">
              <div className="contact-summary-line">
                <MapPin size={16} aria-hidden="true" />
                <span>{BUSINESS.address.plot}, {BUSINESS.address.landmark}, {BUSINESS.address.area}, {BUSINESS.address.city}, {BUSINESS.address.state}</span>
              </div>
              <div className="contact-summary-line">
                <Phone size={16} aria-hidden="true" />
                <a href={BUSINESS.phoneHref} className="summary-link">
                  {BUSINESS.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="footer-fast-actions">
              <a
                href={BUSINESS.phoneHref}
                className="btn-footer-call"
                aria-label={`Call ${BUSINESS.phone}`}
              >
                <Phone size={14} aria-hidden="true" />
                <span>Call Store</span>
              </a>
              <a
                href={whatsappFooterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-footer-whatsapp"
                aria-label="Message on WhatsApp"
              >
                <MessageSquare size={14} aria-hidden="true" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Vehicle Navigation Col */}
          <div className="footer-col">
            <h3 className="footer-heading">Shop by Vehicle</h3>
            <ul className="footer-links-list">
              {vehicleLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.to}
                    className="footer-nav-link"
                    onClick={(e) => handleAnchorClick(e, item.to)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories Col */}
          <div className="footer-col">
            <h3 className="footer-heading">Product Divisions</h3>
            <ul className="footer-links-list">
              {serviceLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="footer-nav-link">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation & Store Info Col */}
          <div className="footer-col">
            <h3 className="footer-heading">Store &amp; Location</h3>
            <ul className="footer-links-list">
              {navLinks.map((item) => (
                <li key={item.label}>
                  {item.to.startsWith('#') && isHomePage ? (
                    <a
                      href={item.to}
                      className="footer-nav-link"
                      onClick={(e) => handleAnchorClick(e, item.to)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link to={item.to} className="footer-nav-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-nav-link external"
                >
                  <span>Google Maps Directions</span>
                  <Navigation size={12} aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal & Copyright Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <div className="footer-copy-text">
            &copy; {CURRENT_YEAR} {BUSINESS.name}. All rights reserved. Plot No. 167, Near Ayyappa Temple, Auto Nagar, Nellore, Andhra Pradesh.
          </div>

          <div className="footer-legal-links">
            <Link to="/privacy-policy" className="legal-link">
              Privacy Policy
            </Link>
            <span className="legal-divider" aria-hidden="true">•</span>
            <Link to="/terms-conditions" className="legal-link">
              Terms &amp; Conditions
            </Link>
          </div>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp size={14} aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
