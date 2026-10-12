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
      badge: 'Official ENI Distributors & All Major Oil Companies',
      brands: [
        {
          name: 'ENI Lubricants',
          role: 'Official Distributors for Nellore',
          status: 'Authorized Distributor Stock',
          description: 'Official distributor for ENI lubricants in Nellore. Supplying genuine Italian-engineered lubricants, i-Sint motor oils, i-Sigma commercial fleet diesel oils, Rotra gear oils, Arnica hydraulic fluids, and specialty greases.',
        },
        {
          name: 'Castrol',
          role: 'Leading Automotive & Commercial Brand',
          status: '100% Genuine Sealed Stock',
          description: 'High-performance engine oils, heavy diesel fleet oils, and transmission fluids for all vehicle classes.',
        },
        {
          name: 'Gulf',
          role: 'Commercial & Automotive Lubricants',
          status: '100% Genuine Sealed Stock',
          description: 'Heavy diesel engine oils, passenger car oils, gear oils, and long-drain commercial fleet formulations.',
        },
        {
          name: 'Shell & Mobil',
          role: 'Global Premium Lubricants',
          status: '100% Genuine Sealed Stock',
          description: 'High-durability diesel engine oils, heavy axle transmission lubricants, and advanced synthetic products.',
        },
        {
          name: 'Servo (IOCL) & MAK (BPCL)',
          role: 'Major National Petroleum Brands',
          status: '100% Genuine Sealed Stock',
          description: 'Heavy commercial diesel lubricants, anti-wear hydraulic tipper fluids, and extreme-pressure chassis greases.',
        },
        {
          name: 'All Leading Companies',
          role: 'Complete Multi-Brand Availability',
          status: 'All Pack Sizes In Stock',
          description: 'As official ENI distributors and multi-brand stockists, we maintain full inventory across all leading oil companies in factory-sealed containers at counter and bulk rates.',
        },
      ],
      image: '/images/lubricant-eni-isint-synthetic.jpg',
      imageAlt: 'ENI lubricants distributor inventory and genuine multi-brand commercial lubricants at Auto Nagar, Nellore',
      imageCaption: 'Official ENI Lubricants distributor stock & all major oil companies at Auto Nagar, Nellore',
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
            We supply genuine, factory-packaged products from established automotive manufacturers and all major oil companies. 
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
              New Venkateswara Oil &amp; Automobiles is an authorized distributor for ENI lubricants in Nellore and operates an Ashok Leyland Retail Parts Store (LEYPARTS &amp; VALUEPARTS) at Plot No. 167, Near Ayyappa Temple, Auto Nagar, Nellore. 
              Our inventory also contains genuine packaged lubricants from all major petroleum and oil companies. 
              All logos, brand names, and trademarks belong to their respective manufacturers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
