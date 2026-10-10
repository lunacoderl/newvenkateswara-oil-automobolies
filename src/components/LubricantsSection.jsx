import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Fuel, MessageSquare, ArrowRight, ShieldAlert, Check } from 'lucide-react';
import SmartImage from './SmartImage';
import { ASSET_MAP } from '../data/assets';
import { buildWhatsAppEnquiryUrl } from '../data/business';

export default function LubricantsSection() {
  const [selectedCategory, setSelectedCategory] = useState('Engine oils');

  const categories = [
    {
      id: 'engine-oil',
      title: 'Engine Oils',
      gradeExamples: 'Heavy Duty Diesel Engine Oil (15W-40, 20W-50)',
      application: 'Commercial transport trucks, tippers & industrial diesel units',
      brands: 'Gulf · MAK · Veedol · Eni',
      image: ASSET_MAP.lubricantMak,
      route: '/services/engine-oil',
    },
    {
      id: 'gear-oil',
      title: 'Gear & Axle Oils',
      gradeExamples: 'Extreme Pressure EP Gear Oils (80W-90, 85W-140 GL-4 / GL-5)',
      application: 'Commercial vehicle manual gearboxes & hypoid drive differentials',
      brands: 'Gulf · MAK · Veedol · Eni',
      image: ASSET_MAP.lubricantVeedol,
      route: '/services/gear-oil',
    },
    {
      id: 'hydraulic-oil',
      title: 'Hydraulic Oils',
      gradeExamples: 'Anti-Wear Hydraulic Fluids (ISO VG 46, VG 68)',
      application: 'Tipper hydraulic rams, lifts & workshop hydraulic systems',
      brands: 'Gulf · MAK · Veedol · Eni',
      image: ASSET_MAP.lubricantGulf,
      route: '/services/hydraulic-oil',
    },
    {
      id: 'lubricating-grease',
      title: 'Lubricating Grease',
      gradeExamples: 'Lithium Complex Wheel Bearing & Multipurpose Chassis Grease',
      application: 'Truck wheel hubs, chassis kingpins, U-joints & trailer pivots',
      brands: 'Gulf · MAK · Veedol · Eni',
      image: ASSET_MAP.lubricantGrease,
      route: '/services/lubricating-grease',
    },
  ];

  const currentCat = categories.find((c) => c.title === selectedCategory) || categories[0];

  const handleEnquire = () => {
    const url = buildWhatsAppEnquiryUrl({
      category: `Automotive Lubricants - ${currentCat.title}`,
      notes: `Interested in ${currentCat.title} specifications and available pack sizes.`,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="lubricants" className="lubricants-section" aria-labelledby="lubricants-heading">
      <div className="container">
        {/* Contrasting Editorial Header with Electric Yellow Banner Accent */}
        <div className="lubricants-header-block">
          <div className="section-eyebrow-line">
            <span className="eyebrow-badge yellow">LUBRICANTS &amp; GREASE</span>
            <span className="section-number-tag light">SEC · 02</span>
          </div>

          <h2 id="lubricants-heading" className="heading-section text-white">
            THE RIGHT LUBRICANT STARTS WITH THE RIGHT SPECIFICATION.
          </h2>

          <p className="section-body-text text-light">
            Explore lubricant categories and ask us about the product specification and pack size suitable for your requirement.
          </p>

          <div className="technical-disclaimer-card">
            <ShieldAlert size={18} className="disclaimer-icon" aria-hidden="true" />
            <p>
              <strong>Specification Notice:</strong> Lubricant compatibility depends on equipment manufacturer specifications (SAE viscosity, API service ratings, ISO VG grades). Always verify with your vehicle manual or equipment plate.
            </p>
          </div>
        </div>

        {/* Structured Category Selector & Dynamic Preview Panel */}
        <div className="lubricants-showcase-grid">
          {/* Left Column: Category Navigation Tabs */}
          <div className="lubricants-category-nav" role="tablist" aria-label="Lubricant Categories">
            {categories.map((cat) => {
              const isActive = cat.title === selectedCategory;
              return (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={isActive}
                  className={`category-tab-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat.title)}
                >
                  <div className="tab-indicator">
                    <Fuel size={18} aria-hidden="true" />
                  </div>
                  <div className="tab-details">
                    <span className="tab-title">{cat.title}</span>
                    <span className="tab-sub">{cat.brands}</span>
                  </div>
                  {isActive && <Check size={18} className="tab-check-icon" aria-hidden="true" />}
                </button>
              );
            })}
          </div>

          {/* Right Column: Detailed Product Composition Panel */}
          <div className="lubricants-preview-panel">
            <div className="preview-media-box">
              <SmartImage
                src={currentCat.image.src}
                fallback={currentCat.image.fallback}
                alt={currentCat.image.alt}
                width={500}
                height={400}
                aspectRatio="1/1"
                objectFit="contain"
                className="lubricants-product-img"
              />
              <div className="preview-label-tag">
                {currentCat.image.label}
              </div>
            </div>

            <div className="preview-info-box">
              <div className="preview-badge-row">
                <span className="eyebrow-badge dark">SPECIFICATION FOCUS</span>
                <span className="stock-inquiry-pill">Enquire For Pack Sizes</span>
              </div>

              <h3 className="heading-card preview-title">{currentCat.title}</h3>

              <div className="spec-item-group">
                <div className="spec-line">
                  <span className="spec-label">Common Formulations:</span>
                  <span className="spec-value">{currentCat.gradeExamples}</span>
                </div>
                <div className="spec-line">
                  <span className="spec-label">Target Applications:</span>
                  <span className="spec-value">{currentCat.application}</span>
                </div>
                <div className="spec-line">
                  <span className="spec-label">Recognized Packaging:</span>
                  <span className="spec-value">{currentCat.brands}</span>
                </div>
              </div>

              <div className="preview-actions">
                <button
                  type="button"
                  onClick={handleEnquire}
                  className="btn btn-primary preview-cta-btn"
                >
                  <MessageSquare size={16} aria-hidden="true" />
                  <span>ENQUIRE ABOUT LUBRICANTS</span>
                </button>

                <Link
                  to={currentCat.route}
                  className="btn btn-secondary preview-details-btn"
                >
                  <span>Category Details</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
