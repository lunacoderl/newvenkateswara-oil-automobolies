import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowUpRight, MessageSquare } from 'lucide-react';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Shop by Vehicle', to: isHomePage ? '#shop-by-vehicle' : '/#shop-by-vehicle' },
    { label: 'Products & Spares', to: isHomePage ? '#shop-by-product' : '/#shop-by-product' },
    { label: 'Verified Brands', to: isHomePage ? '#brands' : '/#brands' },
    { label: 'Part Enquiry', to: isHomePage ? '#part-enquiry' : '/#part-enquiry' },
    { label: 'About Store', to: isHomePage ? '#about' : '/#about' },
    { label: 'Location & Contact', to: isHomePage ? '#contact' : '/#contact' },
  ];

  const handleLinkClick = (e, to) => {
    setIsMobileMenuOpen(false);
    if (to.startsWith('#') && isHomePage) {
      e.preventDefault();
      const target = document.querySelector(to);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const whatsappQuickUrl = buildWhatsAppEnquiryUrl({
    category: 'Header Quick Enquiry',
    notes: 'Hello New Venkateswara Oil & Automobiles, I would like to check product availability.',
  });

  return (
    <header
      className={`site-header ${isScrolled ? 'scrolled' : ''}`}
      role="banner"
    >
      <div className="container header-container">
        {/* Brand Logo & Name */}
        <Link
          to="/"
          className="brand-logo-link"
          aria-label={`${BUSINESS.name} - Home`}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div className="brand-badge-symbol">
            <span className="symbol-letter">NV</span>
          </div>
          <div className="brand-text-block">
            <span className="brand-name">NEW VENKATESWARA</span>
            <span className="brand-sub">OIL &amp; AUTOMOBILES</span>
            <span className="brand-loc">AUTO NAGAR · NELLORE</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((item) => (
              <li key={item.label} className="nav-item">
                {item.to.startsWith('#') && isHomePage ? (
                  <a
                    href={item.to}
                    className="nav-link"
                    onClick={(e) => handleLinkClick(e, item.to)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    className="nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Quick Header Actions */}
        <div className="header-actions">
          <a
            href={BUSINESS.phoneHref}
            className="btn-header-call"
            aria-label={`Call New Venkateswara Oil & Automobiles directly at ${BUSINESS.phone}`}
          >
            <Phone size={16} aria-hidden="true" />
            <span className="call-text">
              <span className="call-sub">Call Counter</span>
              <span className="call-num">{BUSINESS.phone}</span>
            </span>
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-drawer"
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X size={26} aria-hidden="true" />
            ) : (
              <Menu size={26} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-drawer"
        className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-drawer-header">
          <div className="drawer-brand">
            <span className="drawer-badge">NV</span>
            <div className="drawer-brand-text">
              <span className="drawer-brand-name">New Venkateswara</span>
              <span className="drawer-brand-sub">Auto Nagar, Nellore</span>
            </div>
          </div>
          <button
            type="button"
            className="drawer-close-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <nav className="mobile-nav" aria-label="Mobile Navigation">
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <Link
                to="/"
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>Home Page</span>
              </Link>
            </li>
            {navLinks.map((item) => (
              <li key={item.label} className="mobile-nav-item">
                {item.to.startsWith('#') && isHomePage ? (
                  <a
                    href={item.to}
                    className="mobile-nav-link"
                    onClick={(e) => handleLinkClick(e, item.to)}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <Link
                    to={item.to}
                    className="mobile-nav-link"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Drawer Direct Contact Buttons */}
        <div className="mobile-drawer-footer">
          <div className="drawer-divisions-note">
            <strong>Two Core Divisions:</strong>
            <p>1. Ashok Leyland Commercial Vehicle Spare Parts</p>
            <p>2. Automotive Oils &amp; Lubricants (Gulf, Veedol, MAK, Eni)</p>
          </div>

          <a
            href={BUSINESS.phoneHref}
            className="btn-primary mobile-drawer-call-btn"
          >
            <Phone size={18} aria-hidden="true" />
            <span>Call: {BUSINESS.phone}</span>
          </a>

          <a
            href={whatsappQuickUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp mobile-drawer-whatsapp-btn"
          >
            <MessageSquare size={18} aria-hidden="true" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>
      </div>

      {/* Backdrop overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </header>
  );
}
