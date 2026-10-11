import React from 'react';
import { Info, Package, CheckCircle } from 'lucide-react';
import SmartImage from './SmartImage';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BrandShowcase() {
  const sectionRef = useScrollReveal();
  const brandCategories = [
    {
      division: 'Commercial Vehicle Spare Parts',
      badge: 'Ashok Leyland Retail Parts Store',
      brands: [
        {
          name: 'Ashok Leyland',
          role: 'Retail Parts Store Signage',
          status: 'Signage Identified',
          description: 'Official storefront signage identifies an Ashok Leyland Retail Parts Store in Auto Nagar, Nellore.',
        },
        {
          name: 'LEYPARTS',
          role: 'Genuine Ashok Leyland Spares',
          status: 'Verified In Stock',
          description: 'Original equipment boxed replacement components engineered to factory tolerances.',
        },
        {
          name: 'VALUEPARTS',
          role: 'Commercial Vehicle Value Line',
          status: 'Signage Identified',
          description: 'Reliable, cost-effective maintenance parts for medium and heavy commercial haulers.',
        },
      ],
      image: '/images/inventory-leyparts-shelving.jpg',
      imageAlt: 'Ashok Leyland LEYPARTS genuine spare parts inventory shelving with boxed components and Bullguard coolant',
      imageCaption: 'Real Ashok Leyland LEYPARTS storage shelving and component bins at Auto Nagar, Nellore',
    },
    {
      division: 'Automotive Oils & Lubricants',
      badge: 'Verified Packaging Brands',
      brands: [
        {
          name: 'Gulf',
          role: 'Commercial & Automotive Lubricants',
          status: 'Visible Packaging',
          description: 'Heavy diesel engine oils, passenger car oils, and commercial gear fluids.',
        },
        {
          name: 'Veedol',
          role: 'Engine & Gear Lubricants',
          status: 'Visible Packaging',
          description: 'Proven multi-grade lubricating oils and transmission lubricants.',
        },
        {
          name: 'MAK',
          role: 'Bharat Petroleum Lubricants',
          status: 'Visible Packaging',
          description: 'High-performance diesel engine oils and industrial lubricating greases.',
        },
        {
          name: 'Eni',
          role: 'High-Performance Engine Oils',
          status: 'Visible Packaging',
          description: 'Advanced Italian technology engine oils for two-wheelers and passenger vehicles.',
        },
      ],
      image: '/images/lubricant-gulf-supremefleet.jpg',
      imageAlt: 'Gulf Supreme Duty LE and Superfleet Dura Max commercial diesel engine oil pails approved by Ashok Leyland',
      imageCaption: 'Real commercial diesel engine oil pails with manufacturer approval at Auto Nagar, Nellore',
    },
  ];

  return (
    <section id="brands" ref={sectionRef} className="brands-retail-section" aria-labelledby="brands-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block text-center reveal-fade-up">
          <div className="section-pill-tag">VERIFIED MANUFACTURER BRANDS</div>
          <h2 id="brands-heading" className="heading-section">
            Real Products &amp; Verified Brands
          </h2>
          <p className="section-subtitle">
            We supply genuine, factory-packaged products from established automotive manufacturers. 
            All items are inspected, verified against storefront signage and on-shelf inventory in Auto Nagar, Nellore.
          </p>
        </div>

        {/* Division Showcases with Real Photos */}
        <div className="division-showcases-wrapper">
          {brandCategories.map((group, gIdx) => (
            <div key={gIdx} className={`brand-group-block reveal-fade-up delay-${(gIdx + 1) * 100}`}>
              <div className="brand-group-header">
                <span className="brand-group-tag">{group.badge}</span>
                <h3 className="brand-group-title">{group.division}</h3>
              </div>

              <div className="brand-group-grid">
                {/* Real Inventory Photo Card */}
                <div className="brand-photo-card hover-lift">
                  <div className="photo-media-box">
                    <SmartImage
                      src={group.image}
                      alt={group.imageAlt}
                      width={540}
                      height={360}
                      aspectRatio="16/10"
                      className="brand-real-photo"
                    />
                  </div>
                  <div className="photo-label-banner">
                    <Package size={16} aria-hidden="true" />
                    <span>{group.imageCaption}</span>
                  </div>
                </div>

                {/* Brands Grid */}
                <div className="brands-cards-column">
                  {group.brands.map((brand, bIdx) => (
                    <div key={bIdx} className="brand-retail-card hover-lift">
                      <div className="brand-card-top-row">
                        <span className="brand-role-chip">{brand.role}</span>
                        <span className="brand-status-chip">
                          <CheckCircle size={12} aria-hidden="true" />
                          {brand.status}
                        </span>
                      </div>
                      <h4 className="brand-title">{brand.name}</h4>
                      <p className="brand-description">{brand.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Responsible Trademark Notice */}
        <div className="brand-notice-box">
          <Info size={20} className="notice-icon" aria-hidden="true" />
          <div className="notice-content">
            <strong>Authenticity &amp; Trademark Clarification:</strong>
            <p>
              New Venkateswara Oil &amp; Automobiles is an independent automotive retail enterprise located at Plot No. 167, Auto Nagar, Nellore. 
              Our storefront displays signage for Ashok Leyland Retail Parts Store, LEYPARTS, and VALUEPARTS, and our inventory contains genuine packaged lubricants from Gulf, Veedol, MAK, and Eni. 
              All logos, brand names, and trademarks belong to their respective manufacturers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
