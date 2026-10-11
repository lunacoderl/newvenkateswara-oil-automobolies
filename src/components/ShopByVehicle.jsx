import React, { useState, useEffect } from 'react';
import { Bike, Car, Truck, Tractor, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ShopByVehicle() {
  const [activeVehicle, setActiveVehicle] = useState('trucks');
  const sectionRef = useScrollReveal();

  useEffect(() => {
    const handleHash = () => {
      const h = window.location.hash.toLowerCase();
      if (h.includes('bikes')) setActiveVehicle('bikes');
      else if (h.includes('cars')) setActiveVehicle('cars');
      else if (h.includes('trucks')) setActiveVehicle('trucks');
      else if (h.includes('tractors')) setActiveVehicle('tractors');
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const vehicleCategories = [
    {
      id: 'bikes',
      title: 'Bikes & Scooters',
      subtitle: 'Two-Wheeler Lubricants',
      icon: Bike,
      description: 'Dedicated 4T and 2T motorcycle engine oils, front fork fluids, and chain lubricants engineered for daily commuters and sports bikes.',
      recommendedProducts: [
        '4T Motorcycle Engine Oils (10W-30, 20W-40)',
        'Scooter Automatic Transmission Engine Oils',
        'High-temperature Drive Chain Lubricants',
        'Front Fork & Suspension Oils',
      ],
      brands: ['All Major Oil Brands', 'Castrol', 'Gulf', 'Shell', 'Servo', 'MAK', 'Veedol'],
      whatsappPreset: {
        category: 'Bikes & Scooters Lubricants',
        vehicle: 'Motorcycle / Scooter',
        notes: 'Looking for 4T engine oil / chain lube availability and pack sizes.',
      },
      categoryRoute: '/services/engine-oil',
      categoryLabel: 'Browse Engine Oils',
    },
    {
      id: 'cars',
      title: 'Cars & Light Vehicles',
      subtitle: 'Passenger Cars & MPVs',
      icon: Car,
      description: 'Full synthetic, semi-synthetic and mineral engine oils, manual transmission fluids, brake fluids, and chassis greases for petrol and diesel passenger cars from all major oil companies.',
      recommendedProducts: [
        'Petrol & Diesel Engine Oils (5W-30, 15W-40)',
        'Manual & Automatic Transmission Fluids',
        'Brake & Clutch Hydraulic Fluids',
        'Synthetic & Mineral Lubricating Greases',
      ],
      brands: ['All Major Oil Brands', 'Castrol', 'Shell', 'Mobil', 'Gulf', 'Servo', 'MAK'],
      whatsappPreset: {
        category: 'Passenger Car Lubricants',
        vehicle: 'Passenger Car (Petrol/Diesel)',
        notes: 'Looking for engine oil / transmission oil specifications for my car.',
      },
      categoryRoute: '/services/engine-oil',
      categoryLabel: 'Browse Engine Oils',
    },
    {
      id: 'trucks',
      title: 'Lorries, Trucks & Commercial Fleets',
      subtitle: 'Heavy Commercial Vehicles',
      icon: Truck,
      featured: true,
      description: 'Comprehensive commercial vehicle support: Ashok Leyland LEYPARTS & VALUEPARTS genuine spare parts alongside heavy-duty diesel engine oils, differential gear oils, hydraulic tipper oils, and wheel bearing greases from all major oil companies.',
      recommendedProducts: [
        'Ashok Leyland Genuine LEYPARTS & VALUEPARTS',
        'Heavy-Duty Diesel Engine Oils (15W-40, 20W-50)',
        'Heavy-Duty Axle & Differential Gear Oils (EP-90, 85W-140)',
        'Anti-Wear Hydraulic Oils (AW-46, AW-68) for Tippers',
        'High-Load Wheel Bearing & Chassis Greases',
      ],
      brands: ['Ashok Leyland LEYPARTS', 'VALUEPARTS', 'All Major Oil Brands', 'Castrol', 'Gulf', 'Shell', 'Servo', 'MAK'],
      whatsappPreset: {
        category: 'Commercial Vehicle Spare Parts & Heavy Oils',
        vehicle: 'Commercial Truck / Tipper / Lorry',
        notes: 'Enquiring about commercial vehicle spare parts / heavy diesel engine oil / gear oil.',
      },
      categoryRoute: '/services/commercial-vehicle-spare-parts',
      categoryLabel: 'Browse Commercial Spares',
    },
    {
      id: 'tractors',
      title: 'Tractors & Equipment',
      subtitle: 'Agricultural & Machinery Fluids',
      icon: Tractor,
      description: 'Multi-grade tractor engine oils, Universal Tractor Transmission Oils (UTTO), heavy hydraulic system fluids, and implement greases from all major oil brands.',
      recommendedProducts: [
        'Multi-Grade Tractor Engine Oils (15W-40, 20W-40)',
        'Universal Tractor Transmission Oils (UTTO)',
        'Hydraulic Lift & Implement Fluids (AW-68)',
        'Water-Resistant Chassis & Bearing Greases',
      ],
      brands: ['All Major Oil Brands', 'Veedol', 'Gulf', 'MAK', 'Servo', 'Castrol'],
      whatsappPreset: {
        category: 'Tractor & Agricultural Machinery Oils',
        vehicle: 'Tractor / Agricultural Equipment',
        notes: 'Enquiring about tractor engine oil, UTTO transmission oil, or hydraulic fluid.',
      },
      categoryRoute: '/services/hydraulic-oil',
      categoryLabel: 'Browse Hydraulic Oils',
    },
  ];

  return (
    <section id="shop-by-vehicle" ref={sectionRef} className="vehicle-section" aria-labelledby="vehicle-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block text-center reveal-fade-up">
          <div className="section-pill-tag">VEHICLE APPLICATION SELECTOR</div>
          <h2 id="vehicle-heading" className="heading-section">
            Shop by Vehicle Type
          </h2>
          <p className="section-subtitle">
            Find the right lubricants, fluids or commercial spare parts for your specific vehicle category.
            Serving individual riders, private motorists, and commercial fleet operators across Nellore.
          </p>
        </div>

        {/* Vehicle Segment Tabs */}
        <div className="vehicle-tabs-nav reveal-fade-up delay-100" role="tablist" aria-label="Select vehicle category">
          {vehicleCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeVehicle === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                id={`vehicle-tab-${cat.id}`}
                aria-selected={isActive}
                aria-controls={`vehicle-panel-${cat.id}`}
                className={`vehicle-tab-btn ${isActive ? 'active' : ''} ${cat.featured ? 'has-badge' : ''}`}
                onClick={() => setActiveVehicle(cat.id)}
              >
                <div className="vehicle-tab-icon-wrap">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div className="vehicle-tab-text">
                  <span className="vehicle-tab-title">{cat.title}</span>
                  <span className="vehicle-tab-sub">{cat.subtitle}</span>
                </div>
                {cat.featured && <span className="tab-parts-badge">Spares &amp; Oils</span>}
              </button>
            );
          })}
        </div>

        {/* Active Vehicle Detail Display */}
        {vehicleCategories.map((cat) => {
          if (cat.id !== activeVehicle) return null;
          const Icon = cat.icon;
          const whatsappUrl = buildWhatsAppEnquiryUrl(cat.whatsappPreset);

          return (
            <div
              key={cat.id}
              id={`vehicle-panel-${cat.id}`}
              role="tabpanel"
              aria-labelledby={`vehicle-tab-${cat.id}`}
              className="vehicle-panel-card"
            >
              <div className="vehicle-panel-grid">
                {/* Left Column: Information */}
                <div className="vehicle-panel-info">
                  <div className="panel-badge-row">
                    <span className="panel-category-chip">
                      <Icon size={16} aria-hidden="true" />
                      {cat.title}
                    </span>
                    {cat.id === 'trucks' && (
                      <span className="panel-commercial-chip">
                        Ashok Leyland Spares + Commercial Oils
                      </span>
                    )}
                  </div>

                  <h3 className="vehicle-panel-heading">
                    {cat.id === 'trucks'
                      ? 'Genuine Spares & Heavy Lubricants for Lorries, Trucks and Fleets'
                      : `Recommended Lubricants & Fluids for ${cat.title}`}
                  </h3>

                  <p className="vehicle-panel-desc">{cat.description}</p>

                  <div className="panel-products-block">
                    <h4 className="panel-subhead">Applicable Products &amp; Grades:</h4>
                    <ul className="panel-product-list">
                      {cat.recommendedProducts.map((prod, idx) => (
                        <li key={idx} className="panel-product-item">
                          <span className="bullet-indicator" aria-hidden="true">✓</span>
                          <span>{prod}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="panel-brands-row">
                    <span className="brands-label">Verified In-Store Brands:</span>
                    <div className="brands-pill-group">
                      {cat.brands.map((brand, bIdx) => (
                        <span key={bIdx} className="brand-chip">{brand}</span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="vehicle-panel-actions">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp"
                      aria-label={`Enquire via WhatsApp for ${cat.title}`}
                    >
                      <MessageSquare size={18} aria-hidden="true" />
                      <span>WhatsApp Enquiry for {cat.title}</span>
                    </a>

                    <a
                      href={BUSINESS.phoneHref}
                      className="btn-secondary"
                      aria-label={`Call store directly at ${BUSINESS.phone}`}
                    >
                      <Phone size={18} aria-hidden="true" />
                      <span>Call {BUSINESS.phone}</span>
                    </a>

                    <a
                      href={cat.categoryRoute}
                      className="btn-link-action"
                    >
                      <span>{cat.categoryLabel}</span>
                      <ArrowRight size={16} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Right Column: Visual Summary Card */}
                <div className="vehicle-panel-summary-card">
                  <div className="summary-card-inner">
                    <div className="summary-card-icon-box">
                      <Icon size={44} aria-hidden="true" />
                    </div>
                    <h4 className="summary-card-title">{cat.title}</h4>
                    <p className="summary-card-text">
                      Visit our Auto Nagar counter or send a message for instant stock confirmation and pricing.
                    </p>

                    <div className="summary-specs-list">
                      <div className="summary-spec-item">
                        <span className="spec-label">Division:</span>
                        <span className="spec-val">
                          {cat.id === 'trucks' ? 'Spare Parts + Oils' : 'Automotive Lubricants'}
                        </span>
                      </div>
                      <div className="summary-spec-item">
                        <span className="spec-label">Location:</span>
                        <span className="spec-val">Plot No. 167, Near Ayyappa Temple, Auto Nagar, Nellore</span>
                      </div>
                      <div className="summary-spec-item">
                        <span className="spec-label">Pack Sizes:</span>
                        <span className="spec-val">Retail Cans, Buckets &amp; Commercial Drums</span>
                      </div>
                    </div>

                    <div className="summary-notice-box">
                      <p className="summary-notice-text">
                        <strong>Need fitment guidance?</strong> Bring your old part number or vehicle manual specifications to our store.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
