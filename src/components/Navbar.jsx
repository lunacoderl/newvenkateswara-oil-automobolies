import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ArrowUpRight, MessageSquare, MapPin, ShieldCheck } from 'lucide-react';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
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
    { label: 'Shop by Vehicle', shortLabel: 'Vehicle', to: isHomePage ? '#shop-by-vehicle' : '/#shop-by-vehicle' },
    { label: 'Products & Spares', shortLabel: 'Products', to: isHomePage ? '#shop-by-product' : '/#shop-by-product' },
    { label: 'Verified Brands', shortLabel: 'Brands', to: isHomePage ? '#brands' : '/#brands' },
    { label: 'Part Enquiry', shortLabel: 'Enquiry', to: isHomePage ? '#part-enquiry' : '/#part-enquiry' },
    { label: 'About Store', shortLabel: 'About', to: isHomePage ? '#about' : '/#about' },
    { label: 'Location & Contact', shortLabel: 'Contact', to: isHomePage ? '#contact' : '/#contact' },
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
    category: 'Navbar Quick Connect',
    notes: 'Hello New Venkateswara Oil & Automobiles, I would like to check availability for parts / lubricants.',
  });

  return (
    <header
      className={`site-header ${isScrolled ? 'scrolled' : ''}`}
      role="banner"
    >
      {/* Top Status & Verification Strip */}
      <div className="header-top-bar" aria-label="Store counter operating status and location">
        <div className="top-bar-container">
          <div className="top-bar-left">
            <span className="live-status-chip">
              <span className="live-pulse-dot" aria-hidden="true" />
              <span>Counter Open · In-Store &amp; Delivery Enquiries</span>
            </span>
            <span className="top-bar-divider" aria-hidden="true">•</span>
            <span className="top-bar-auth">
              <ShieldCheck size={14} className="top-icon" aria-hidden="true" />
              <span>Ashok Leyland Retail Parts Store · LEYPARTS</span>
            </span>
          </div>

          <div className="top-bar-right">
            <span className="top-bar-loc">
              <MapPin size={13} className="top-icon" aria-hidden="true" />
              <span>{BUSINESS.address.display}</span>
            </span>
            <span className="top-bar-divider" aria-hidden="true">•</span>
            <a href={BUSINESS.phoneHref} className="top-bar-link" aria-label={`Call ${BUSINESS.phone}`}>
              <Phone size={13} className="top-icon" aria-hidden="true" />
              <span>{BUSINESS.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Colorful Automotive Navigation Bar */}
      <div className="header-main-bar">
        <div className="header-container">
          {/* Brand Identity with Automotive Emblem */}
          <Link
            to="/"
            className="brand-logo-link"
            aria-label={`${BUSINESS.name} - Home`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="brand-badge-symbol" aria-hidden="true">
              <svg viewBox="0 0 44 44" width="44" height="44" className="brand-emblem-svg">
                <defs>
                  <linearGradient id="badgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#164DAA" />
                    <stop offset="100%" stopColor="#0D2E68" />
                  </linearGradient>
                  <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFDE6A" />
                    <stop offset="100%" stopColor="#F6B817" />
                  </linearGradient>
                </defs>
                <rect x="2" y="2" width="40" height="40" rx="10" fill="url(#badgeGrad)" stroke="url(#goldGrad)" strokeWidth="2.5" />
                <circle cx="22" cy="22" r="14" fill="none" stroke="rgba(246, 184, 23, 0.35)" strokeWidth="1" strokeDasharray="3 3" />
                <text x="22" y="27" textAnchor="middle" fill="#FFFFFF" fontSize="15" fontWeight="900" fontFamily="inherit" letterSpacing="0.5">NV</text>
              </svg>
            </div>
            <div className="brand-text-block">
              <span className="brand-name">NEW VENKATESWARA</span>
              <span className="brand-sub">OIL &amp; AUTOMOBILES</span>
              <span className="brand-loc">AUTO NAGAR · NELLORE</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
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
                      <span className="nav-label-full">{item.label}</span>
                      <span className="nav-label-short" aria-hidden="true">{item.shortLabel}</span>
                    </a>
                  ) : (
                    <Link
                      to={item.to}
                      className="nav-link"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <span className="nav-label-full">{item.label}</span>
                      <span className="nav-label-short" aria-hidden="true">{item.shortLabel}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Header Action Buttons */}
          <div className="header-actions">
            {/* Quick WhatsApp Button */}
            <a
              href={whatsappQuickUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-header-wa"
              aria-label="Enquire via WhatsApp"
              title="Chat on WhatsApp"
            >
              <MessageSquare size={16} aria-hidden="true" />
              <span className="wa-label">WhatsApp</span>
            </a>

            {/* Direct Phone Call Button */}
            <a
              href={BUSINESS.phoneHref}
              className="btn-header-call btn-shine-effect"
              aria-label={`Call New Venkateswara Oil & Automobiles directly at ${BUSINESS.phone}`}
            >
              <Phone size={16} className="call-phone-icon" aria-hidden="true" />
              <div className="call-text">
                <span className="call-sub">Call Store</span>
                <span className="call-num">{BUSINESS.phone}</span>
              </div>
              <span className="call-text-compact">Call {BUSINESS.phone}</span>
            </a>

            {/* Mobile Hamburger Toggle Button */}
            <button
              type="button"
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-drawer"
              aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="toggle-icon-wrap">
                {isMobileMenuOpen ? (
                  <X size={24} aria-hidden="true" />
                ) : (
                  <Menu size={24} aria-hidden="true" />
                )}
              </span>
            </button>
          </div>
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
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        {/* Live Operating Status in Drawer */}
        <div className="drawer-status-bar">
          <span className="live-pulse-dot" aria-hidden="true" />
          <span>Counter Open · In-Store Assistance &amp; Orders</span>
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
                <ArrowUpRight size={16} aria-hidden="true" />
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

        {/* Mobile Drawer Direct Contact Actions */}
        <div className="mobile-drawer-footer">
          <div className="drawer-divisions-note">
            <strong>Authorized Ashok Leyland Store</strong>
            <p>Commercial vehicle spare parts (LEYPARTS) &amp; lubricants from all major companies</p>
          </div>

          <a
            href={BUSINESS.phoneHref}
            className="btn-primary mobile-drawer-call-btn btn-shine-effect"
          >
            <Phone size={18} aria-hidden="true" />
            <span>Call Now: {BUSINESS.phone}</span>
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
