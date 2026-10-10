import React from 'react';
import { Link } from 'react-router-dom';
import { Cog, Droplets, Gauge, ShieldAlert, Disc, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';

export default function ShopByProduct() {
  const categories = [
    {
      slug: 'commercial-vehicle-spare-parts',
      division: 'Commercial Vehicle Spare Parts',
      title: 'Commercial Vehicle Spare Parts',
      shortTitle: 'Commercial Spares',
      icon: Cog,
      badge: 'Ashok Leyland Retail Parts Store',
      image: '/images/inventory-leyparts-shelving.jpg',
      imageAlt: 'Ashok Leyland LEYPARTS genuine spare parts inventory shelving with boxed components',
      description: 'Genuine commercial vehicle replacement components, official LEYPARTS boxes and VALUEPARTS maintenance assemblies for trucks, tippers, and haulers.',
      keyItems: ['Engine & Filter Assemblies', 'Clutch & Brake Components', 'Suspension & Steering Parts', 'Electrical & Maintenance Spares'],
      brands: ['Ashok Leyland', 'LEYPARTS', 'VALUEPARTS'],
      isSpareParts: true,
    },
    {
      slug: 'engine-oil',
      division: 'Automotive Oils & Lubricants',
      title: 'Automotive & Heavy-Duty Engine Oils',
      shortTitle: 'Engine Oils',
      icon: Droplets,
      badge: 'Multi-Grade & Synthetic',
      image: '/images/lubricant-gulf-supremefleet.jpg',
      imageAlt: 'Gulf Supreme Duty LE and Superfleet Dura Max diesel engine oil pails approved by Ashok Leyland',
      description: 'High-performance engine oils for two-wheelers, passenger cars, and heavy commercial diesel transport fleets. Engineered for soot control and engine durability.',
      keyItems: ['Commercial Diesel 15W-40 & 20W-50', 'Bike 4T & 2T Motorcycle Oils', 'Passenger Car Synthetic & Mineral', 'Heavy Haulage Engine Fluids'],
      brands: ['Gulf', 'MAK', 'Veedol', 'Eni'],
      isSpareParts: false,
    },
    {
      slug: 'gear-oil',
      division: 'Automotive Oils & Lubricants',
      title: 'Gear & Axle Transmission Oils',
      shortTitle: 'Gear & Axle Oils',
      icon: Gauge,
      badge: 'Extreme Pressure EP',
      image: '/images/lubricant-eni-isint-synthetic.jpg',
      imageAlt: 'Eni 85W-140 GL-5 transmission and differential gear oil cartons and synthetic lubricant packaging',
      description: 'Extreme pressure (EP) gear lubricants protecting manual gearboxes, transaxles, and rear hypoid differentials under heavy load and thermal stress.',
      keyItems: ['EP-90 Extreme Pressure Gear Oil', 'EP-140 & 85W-140 Heavy Differential Oil', '80W-90 Multi-Purpose Gear Fluid', 'Manual Gearbox Lubricants'],
      brands: ['Gulf', 'MAK', 'Veedol', 'Eni'],
      isSpareParts: false,
    },
    {
      slug: 'hydraulic-oil',
      division: 'Automotive Oils & Lubricants',
      title: 'Anti-Wear Hydraulic Oils',
      shortTitle: 'Hydraulic Oils',
      icon: Disc,
      badge: 'Anti-Wear AW-46 & AW-68',
      image: '/images/lubricant-mak-hydrol-aw68.jpg',
      imageAlt: 'MAK Hydrol AW 68 Anti-Wear Hydraulic Oil commercial pail for tippers and machinery',
      description: 'Specialized hydraulic fluids formulated for hydraulic tippers, lifting mechanisms, agricultural tractors, and industrial fluid systems.',
      keyItems: ['AW-46 Anti-Wear Hydraulic Fluid', 'AW-68 Heavy Tipper Hydraulic Oil', 'Tractor Hydraulic & Lift Fluids', 'Industrial Equipment Hydraulics'],
      brands: ['Gulf', 'MAK', 'Veedol'],
      isSpareParts: false,
    },
    {
      slug: 'lubricating-grease',
      division: 'Automotive Oils & Lubricants',
      title: 'Automotive Lubricating Grease',
      shortTitle: 'Lubricating Grease',
      icon: ShieldAlert,
      badge: 'High-Temp Lithium EP',
      image: '/images/lubricant-grease-hro-ap3.jpg',
      imageAlt: 'HRO AP-3 Red Gel Longlife wheel bearing and chassis lubricating grease commercial buckets',
      description: 'High melting point lithium base and EP greases for automotive wheel bearings, chassis lubrication, universal joints, and industrial bushings.',
      keyItems: ['Wheel Bearing Lithium EP-2 / EP-3', 'Chassis & Suspension Grease', 'High-Temperature Commercial Grease', 'Water-Resistant Multi-Purpose Grease'],
      brands: ['Gulf', 'MAK', 'Veedol', 'Eni'],
      isSpareParts: false,
    },
  ];

  return (
    <section id="shop-by-product" className="product-section" aria-labelledby="product-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block text-center">
          <div className="section-pill-tag">VERIFIED PRODUCT CATEGORIES</div>
          <h2 id="product-heading" className="heading-section">
            Shop by Product Category
          </h2>
          <p className="section-subtitle">
            Two distinct divisions under one roof in Auto Nagar, Nellore: commercial vehicle spare parts 
            and premium automotive lubricants. Select a category below to explore details or enquire directly.
          </p>
        </div>

        {/* Divisions Highlight Banner */}
        <div className="divisions-balance-bar">
          <div className="division-col spare-parts-col">
            <span className="division-indicator-dot spare-parts-dot"></span>
            <strong>Division 1: Commercial Vehicle Spare Parts</strong>
            <span className="division-subtext">— Ashok Leyland Retail Parts Store / LEYPARTS / VALUEPARTS</span>
          </div>
          <div className="division-divider-vertical" aria-hidden="true"></div>
          <div className="division-col lubricants-col">
            <span className="division-indicator-dot lubricants-dot"></span>
            <strong>Division 2: Automotive Oils &amp; Lubricants</strong>
            <span className="division-subtext">— Gulf, Veedol, MAK, Eni Engine Oils, Gear Oils &amp; Greases</span>
          </div>
        </div>

        {/* Category Cards Grid */}
        <div className="categories-grid">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const whatsappUrl = buildWhatsAppEnquiryUrl({
              category: cat.title,
              item: cat.shortTitle,
              notes: `Enquiring about ${cat.title} stock and pack sizes at your Auto Nagar store.`,
            });

            return (
              <article
                key={cat.slug}
                className={`category-retail-card ${cat.isSpareParts ? 'spare-parts-featured-card' : ''}`}
              >
                {/* Visual Header with Real Image */}
                <div className="card-media-wrapper">
                  <img
                    src={cat.image}
                    alt={cat.imageAlt}
                    className="card-media-img"
                    loading="lazy"
                    width="400"
                    height="240"
                  />
                  <div className="card-badge-overlay">
                    <span className="card-badge">{cat.badge}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-body">
                  <div className="card-division-tag">
                    <Icon size={16} aria-hidden="true" />
                    <span>{cat.division}</span>
                  </div>

                  <h3 className="card-title">
                    <Link to={`/services/${cat.slug}`} className="card-title-link">
                      {cat.title}
                    </Link>
                  </h3>

                  <p className="card-description">{cat.description}</p>

                  {/* Key items list */}
                  <div className="card-items-block">
                    <span className="card-items-label">Confirmed Items:</span>
                    <ul className="card-items-list">
                      {cat.keyItems.map((item, idx) => (
                        <li key={idx} className="card-item-entry">
                          <span className="check-bullet" aria-hidden="true">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Brand chips */}
                  <div className="card-brands-row">
                    <span className="brands-title">Brands:</span>
                    <div className="card-brands-chips">
                      {cat.brands.map((b, bIdx) => (
                        <span key={bIdx} className="brand-chip-sm">{b}</span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="card-actions-footer">
                    <Link
                      to={`/services/${cat.slug}`}
                      className="btn-card-details"
                      aria-label={`View full details for ${cat.title}`}
                    >
                      <span>Category Details</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </Link>

                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-card-whatsapp"
                      aria-label={`Enquire via WhatsApp for ${cat.title}`}
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare size={16} aria-hidden="true" />
                      <span>Enquire</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="category-bottom-cta-banner">
          <div className="bottom-cta-content">
            <h4 className="bottom-cta-title">Looking for a specific part number or lubricant grade?</h4>
            <p className="bottom-cta-desc">
              Contact our sales desk at Auto Nagar, Nellore directly for immediate stock availability and packaging confirmation.
            </p>
          </div>
          <div className="bottom-cta-actions">
            <a href={BUSINESS.phoneHref} className="btn-primary">
              <Phone size={18} aria-hidden="true" />
              <span>Call Counter: {BUSINESS.phone}</span>
            </a>
            <a
              href={buildWhatsAppEnquiryUrl({ category: 'General Product Stock Enquiry' })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageSquare size={18} aria-hidden="true" />
              <span>WhatsApp Sales Desk</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
