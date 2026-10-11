import React from 'react';
import { Phone, MessageSquare, MapPin, ShieldCheck } from 'lucide-react';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';

export default function HeroSection() {
  const whatsappUrl = buildWhatsAppEnquiryUrl({
    category: 'General Enquiry',
    notes: 'Hello New Venkateswara Oil & Automobiles, I would like to check availability and prices for parts / lubricants.',
  });

  const handleVehicleSelect = (e, vehicleId) => {
    e.preventDefault();
    window.location.hash = `vehicle-${vehicleId}`;
    const target = document.getElementById('shop-by-vehicle');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-fullscreen-section" aria-label="Hero - Automotive Spare Parts and Lubricants in Nellore">
      {/* Visual Canvas Wrapper: Edge-to-Edge Display Matching User Design Mockup */}
      <div className="hero-banner-wrapper">
        <div className="hero-banner-stage">
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/hero-banner.jpg" />
            <source media="(min-width: 641px)" srcSet="/images/hero-banner-hd.jpg" />
            <img
              src="/images/hero-banner-hd.jpg"
              alt="New Venkateswara Oil & Automobiles storefront with Ashok Leyland Retail Parts Store, transport vehicles, and genuine lubricants in Auto Nagar, Nellore"
              className="hero-banner-image"
              fetchPriority="high"
              decoding="async"
              width="1920"
              height="1080"
            />
          </picture>

          {/* Screen Reader & SEO Grounding Content */}
          <div className="sr-only">
            <h1>Automotive Spare Parts &amp; Lubricants in Nellore</h1>
            <p>For Bikes, Cars, Lorries, Trucks and More</p>
            <p>
              New Venkateswara Oil &amp; Automobiles is located at Plot No. 167, Near Ayyappa Temple, Auto Nagar, Nellore, Andhra Pradesh.
              Authorized Ashok Leyland Retail Parts Store (LEYPARTS &amp; VALUEPARTS) and genuine stock
              from all major petroleum and automotive lubricant companies. Call 9440529777.
            </p>
          </div>

          {/* Top-Right Interactive Hotspots for Vehicle Categories */}
          <nav className="hero-hotspots-vehicles" aria-label="Quick vehicle product selection">
            <a
              href="#vehicle-bikes"
              onClick={(e) => handleVehicleSelect(e, 'bikes')}
              className="hero-hotspot vehicle-hotspot hotspot-bikes"
              aria-label="View lubricants for Bikes &amp; Scooters"
              title="Browse Bikes &amp; Scooters"
            >
              <span className="hotspot-focus-ring" aria-hidden="true" />
            </a>

            <a
              href="#vehicle-cars"
              onClick={(e) => handleVehicleSelect(e, 'cars')}
              className="hero-hotspot vehicle-hotspot hotspot-cars"
              aria-label="View lubricants for Cars"
              title="Browse Cars"
            >
              <span className="hotspot-focus-ring" aria-hidden="true" />
            </a>

            <a
              href="#vehicle-trucks"
              onClick={(e) => handleVehicleSelect(e, 'trucks')}
              className="hero-hotspot vehicle-hotspot hotspot-trucks"
              aria-label="View spare parts and lubricants for Lorries &amp; Trucks"
              title="Browse Lorries &amp; Trucks"
            >
              <span className="hotspot-focus-ring" aria-hidden="true" />
            </a>

            <a
              href="#vehicle-tractors"
              onClick={(e) => handleVehicleSelect(e, 'tractors')}
              className="hero-hotspot vehicle-hotspot hotspot-tractors"
              aria-label="View lubricants for Tractors"
              title="Browse Tractors"
            >
              <span className="hotspot-focus-ring" aria-hidden="true" />
            </a>
          </nav>

          {/* Bottom-Left Interactive Hotspots for Primary Action Buttons */}
          <div className="hero-hotspots-actions">
            {/* Call Now 9440529777 Hotspot */}
            <a
              href={BUSINESS.phoneHref}
              className="hero-hotspot btn-hotspot-call"
              aria-label={`Call New Venkateswara Oil & Automobiles at ${BUSINESS.phone}`}
              title={`Call Now ${BUSINESS.phone}`}
            >
              <span className="hotspot-pulse-effect" aria-hidden="true" />
            </a>

            {/* WhatsApp Enquiry Hotspot */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-hotspot btn-hotspot-wa"
              aria-label="Enquire via WhatsApp"
              title="WhatsApp Enquiry"
            >
              <span className="hotspot-pulse-effect" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile-Enhanced Quick Action Bar (Ensures seamless finger tap targets and high conversion on phones) */}
      <div className="hero-mobile-action-bar">
        <div className="mobile-action-buttons-row">
          <a
            href={BUSINESS.phoneHref}
            className="mobile-hero-btn btn-call"
            aria-label={`Call store directly at ${BUSINESS.phone}`}
          >
            <Phone size={18} aria-hidden="true" />
            <span>Call Now <strong>{BUSINESS.phone}</strong></span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-hero-btn btn-wa"
            aria-label="Send WhatsApp enquiry"
          >
            <MessageSquare size={18} aria-hidden="true" />
            <span>WhatsApp Enquiry</span>
          </a>
        </div>

        {/* Quick Vehicle Select Row */}
        <div className="mobile-vehicle-chips-bar" aria-label="Vehicle quick selector">
          <span className="mobile-chips-title">Select Vehicle:</span>
          <div className="mobile-chips-scroll">
            <button
              type="button"
              onClick={(e) => handleVehicleSelect(e, 'bikes')}
              className="mobile-chip-pill"
            >
              Bikes &amp; Scooters
            </button>
            <button
              type="button"
              onClick={(e) => handleVehicleSelect(e, 'cars')}
              className="mobile-chip-pill"
            >
              Cars
            </button>
            <button
              type="button"
              onClick={(e) => handleVehicleSelect(e, 'trucks')}
              className="mobile-chip-pill active"
            >
              Lorries &amp; Trucks
            </button>
            <button
              type="button"
              onClick={(e) => handleVehicleSelect(e, 'tractors')}
              className="mobile-chip-pill"
            >
              Tractors
            </button>
          </div>
        </div>

        {/* Verified Store Location Bar */}
        <div className="mobile-store-strip">
          <div className="store-strip-item">
            <MapPin size={14} className="strip-icon" aria-hidden="true" />
            <span>Plot No. 167, Near Ayyappa Temple, Auto Nagar, Nellore</span>
          </div>
          <div className="store-strip-item">
            <ShieldCheck size={14} className="strip-icon" aria-hidden="true" />
            <span>Ashok Leyland Retail Parts Store</span>
          </div>
        </div>
      </div>
    </section>
  );
}
