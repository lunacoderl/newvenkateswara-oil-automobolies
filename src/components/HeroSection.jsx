import React from 'react';
import { Phone, MessageSquare, ArrowRight, ShieldCheck, MapPin, CheckCircle2 } from 'lucide-react';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';

export default function HeroSection() {
  const whatsappUrl = buildWhatsAppEnquiryUrl({
    category: 'General Enquiry',
    notes: 'Hello New Venkateswara Oil & Automobiles, I would like to check availability for parts / lubricants.',
  });

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-retail-section" aria-labelledby="hero-main-heading">
      <div className="container hero-container">
        <div className="hero-grid">
          {/* Left Column: Clear Retail Presentation */}
          <div className="hero-content-col">
            {/* Location & Division Verified Badge */}
            <div className="hero-location-badge">
              <MapPin size={16} className="badge-pin-icon" aria-hidden="true" />
              <span>Plot No. 167, Auto Nagar, Nellore</span>
              <span className="badge-dot" aria-hidden="true">•</span>
              <span className="badge-highlight">Retail Store &amp; Counter</span>
            </div>

            {/* Main Headline */}
            <h1 id="hero-main-heading" className="hero-main-title">
              Automotive Spare Parts &amp; Lubricants in Nellore
            </h1>

            {/* Subtitle */}
            <p className="hero-lead-text">
              One trusted retail destination in Auto Nagar with two specialized divisions: 
              authorized <strong>Ashok Leyland commercial vehicle spare parts</strong> and 
              high-performance <strong>automotive oils, greases and fluids</strong>. 
              Supplying bike owners, car drivers, transport lorries, and fleet operators.
            </p>

            {/* Balanced Division Cards */}
            <div className="hero-divisions-card">
              <div className="division-pill-item spare-parts-pill">
                <div className="pill-header">
                  <span className="pill-dot spare-parts-dot" aria-hidden="true"></span>
                  <span className="pill-title">Commercial Spare Parts</span>
                </div>
                <p className="pill-desc">
                  Ashok Leyland Retail Parts Store · LEYPARTS &amp; VALUEPARTS genuine range
                </p>
              </div>

              <div className="division-pill-divider" aria-hidden="true"></div>

              <div className="division-pill-item lubricants-pill">
                <div className="pill-header">
                  <span className="pill-dot lubricants-dot" aria-hidden="true"></span>
                  <span className="pill-title">Automotive Lubricants</span>
                </div>
                <p className="pill-desc">
                  Gulf, Veedol, MAK &amp; Eni engine oils, transmission fluids &amp; greases
                </p>
              </div>
            </div>

            {/* Fast Vehicle Navigation Pills */}
            <div className="hero-vehicle-pills-row">
              <span className="pills-label">Quick Vehicle Selection:</span>
              <div className="pills-list">
                <a
                  href="#shop-by-vehicle"
                  onClick={(e) => handleScrollTo(e, 'shop-by-vehicle')}
                  className="quick-vehicle-pill"
                >
                  Bikes &amp; Scooters
                </a>
                <a
                  href="#shop-by-vehicle"
                  onClick={(e) => handleScrollTo(e, 'shop-by-vehicle')}
                  className="quick-vehicle-pill"
                >
                  Cars
                </a>
                <a
                  href="#shop-by-vehicle"
                  onClick={(e) => handleScrollTo(e, 'shop-by-vehicle')}
                  className="quick-vehicle-pill active"
                >
                  Lorries &amp; Trucks
                </a>
                <a
                  href="#shop-by-vehicle"
                  onClick={(e) => handleScrollTo(e, 'shop-by-vehicle')}
                  className="quick-vehicle-pill"
                >
                  Tractors &amp; Machinery
                </a>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="hero-actions-group">
              <a
                href="#shop-by-product"
                onClick={(e) => handleScrollTo(e, 'shop-by-product')}
                className="btn-primary"
              >
                <span>Browse Products</span>
                <ArrowRight size={18} aria-hidden="true" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
                aria-label="Enquire with store via WhatsApp"
              >
                <MessageSquare size={18} aria-hidden="true" />
                <span>WhatsApp Enquiry</span>
              </a>

              <a
                href={BUSINESS.phoneHref}
                className="btn-secondary"
                aria-label={`Call New Venkateswara Oil & Automobiles directly at ${BUSINESS.phone}`}
              >
                <Phone size={18} aria-hidden="true" />
                <span>Call {BUSINESS.phone}</span>
              </a>
            </div>

            {/* Trust Signals */}
            <div className="hero-trust-row">
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" aria-hidden="true" />
                <span>Physical Store in Auto Nagar</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" aria-hidden="true" />
                <span>Verified Manufacturer Stock</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={16} className="trust-icon" aria-hidden="true" />
                <span>Manual Fitment Assistance</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Storefront & Facility Frame */}
          <div className="hero-visual-col">
            <div className="hero-photo-card">
              <div className="photo-media-container">
                <img
                  src="/images/hero-bg.png"
                  alt="New Venkateswara Oil & Automobiles storefront and commercial transport facility in Auto Nagar, Nellore"
                  className="hero-main-photo"
                  fetchPriority="high"
                  width="800"
                  height="450"
                />
                <div className="photo-caption-bar">
                  <div className="caption-store-title">New Venkateswara Oil &amp; Automobiles</div>
                  <div className="caption-store-addr">Plot No. 167, Auto Nagar, Nellore</div>
                </div>
              </div>

              {/* Verified Signage Details Ribbon */}
              <div className="photo-details-box">
                <div className="photo-badge-chip parts-badge">
                  <ShieldCheck size={16} aria-hidden="true" />
                  <span>Ashok Leyland Retail Parts Store · LEYPARTS</span>
                </div>
                <div className="photo-badge-chip lubricants-badge">
                  <span>Authorized Retail Brands: Gulf · Veedol · MAK · Eni</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
