import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Wrench, Fuel, CheckCircle2 } from 'lucide-react';
import SmartImage from './SmartImage';
import { ASSET_MAP } from '../data/assets';

export default function ProductDivisionSection() {
  const scrollToAnchor = (e, id) => {
    e.preventDefault();
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="product-divisions" className="divisions-section" aria-labelledby="divisions-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-centered">
          <span className="eyebrow-badge blue">TWO CORE DIVISIONS</span>
          <h2 id="divisions-heading" className="heading-section">
            BUILT AROUND WHAT KEEPS YOU MOVING.
          </h2>
          <p className="section-subheading">
            New Venkateswara Oil &amp; Automobiles brings together commercial vehicle spare parts and industrial automotive lubricants under one roof in Auto Nagar, Nellore.
          </p>
        </div>

        {/* Two Balanced, Visually Distinct Panels */}
        <div className="divisions-grid">
          {/* Panel 1: Commercial Vehicle Spare Parts */}
          <div className="division-card division-card-parts">
            <div className="division-card-image-wrap">
              <SmartImage
                src={ASSET_MAP.sparePartsInventory.src}
                fallback={ASSET_MAP.sparePartsInventory.fallback}
                alt={ASSET_MAP.sparePartsInventory.alt}
                width={600}
                height={400}
                aspectRatio="16/10"
                className="division-img"
              />
              <div className="division-image-tag parts-tag">
                <Wrench size={14} aria-hidden="true" />
                <span>ASHOK LEYLAND RETAIL PARTS STORE</span>
              </div>
            </div>

            <div className="division-card-body">
              <div className="division-card-header">
                <span className="division-num">01 / DIVISION</span>
                <h3 className="heading-card division-title">
                  COMMERCIAL VEHICLE SPARE PARTS
                </h3>
              </div>

              <p className="division-desc">
                Looking for a specific part? Share the part number, vehicle details or a reference photo to help us understand your requirement.
              </p>

              <div className="division-highlights">
                <div className="highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" aria-hidden="true" />
                  <span>LEYPARTS &amp; VALUEPARTS boxed inventory</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" aria-hidden="true" />
                  <span>Heavy haulage, tippers, and commercial transport</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" aria-hidden="true" />
                  <span>Enquire via part number or component photo</span>
                </div>
              </div>

              <div className="division-card-actions">
                <a
                  href="#spare-parts"
                  onClick={(e) => scrollToAnchor(e, '#spare-parts')}
                  className="btn btn-blue division-cta-btn"
                >
                  <span>ENQUIRE ABOUT PARTS</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>

                <Link
                  to="/services/commercial-vehicle-spare-parts"
                  className="division-details-link"
                >
                  <span>View Details</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Panel 2: Automotive Oils & Lubricants */}
          <div className="division-card division-card-lubricants">
            <div className="division-card-image-wrap">
              <SmartImage
                src={ASSET_MAP.lubricantMak.src}
                fallback={ASSET_MAP.lubricantMak.fallback}
                alt={ASSET_MAP.lubricantMak.alt}
                width={600}
                height={400}
                aspectRatio="16/10"
                className="division-img"
              />
              <div className="division-image-tag lubricants-tag">
                <Fuel size={14} aria-hidden="true" />
                <span>OILS, LUBRICANTS &amp; GREASE</span>
              </div>
            </div>

            <div className="division-card-body">
              <div className="division-card-header">
                <span className="division-num">02 / DIVISION</span>
                <h3 className="heading-card division-title">
                  AUTOMOTIVE OILS &amp; LUBRICANTS
                </h3>
              </div>

              <p className="division-desc">
                Explore lubricant categories and enquire about the product specifications and pack sizes you need.
              </p>

              <div className="division-highlights">
                <div className="highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" aria-hidden="true" />
                  <span>Diesel engine oils, gear oils, hydraulic oils &amp; grease</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" aria-hidden="true" />
                  <span>Gulf, Veedol, MAK &amp; Eni packaging</span>
                </div>
                <div className="highlight-item">
                  <CheckCircle2 size={16} className="highlight-icon" aria-hidden="true" />
                  <span>Various pack sizes for workshops &amp; fleet owners</span>
                </div>
              </div>

              <div className="division-card-actions">
                <a
                  href="#lubricants"
                  onClick={(e) => scrollToAnchor(e, '#lubricants')}
                  className="btn btn-primary division-cta-btn"
                >
                  <span>EXPLORE LUBRICANTS</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </a>

                <Link
                  to="/services/engine-oil"
                  className="division-details-link"
                >
                  <span>View Details</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
