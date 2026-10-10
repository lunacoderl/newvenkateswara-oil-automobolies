import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, MessageSquare, Wrench, Fuel } from 'lucide-react';
import SmartImage from './SmartImage';
import { BUSINESS } from '../data/business';

export default function ServiceHero({ service, onEnquireClick }) {
  const isParts = service.categoryType === 'parts';
  const parentName = isParts ? 'Commercial Spare Parts' : 'Automotive Lubricants';
  const parentAnchor = '/#shop-by-product';

  return (
    <section className="service-hero-section" aria-label="Category Hero">
      <div className="container">
        {/* Section A: Breadcrumbs */}
        <nav className="breadcrumbs-nav" aria-label="Breadcrumbs">
          <ol className="breadcrumbs-list">
            <li className="breadcrumb-item">
              <Link to="/" className="breadcrumb-link">Home</Link>
            </li>
            <li className="breadcrumb-separator" aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li className="breadcrumb-item">
              <a href={parentAnchor} className="breadcrumb-link">{parentName}</a>
            </li>
            <li className="breadcrumb-separator" aria-hidden="true">
              <ChevronRight size={14} />
            </li>
            <li className="breadcrumb-item current" aria-current="page">
              <span>{service.shortTitle || service.title}</span>
            </li>
          </ol>
        </nav>

        {/* Hero Content Grid */}
        <div className="service-hero-grid">
          <div className="service-hero-content">
            <div className="hero-category-badge-row">
              <span className={`eyebrow-badge ${isParts ? 'blue' : 'yellow'}`}>
                {isParts ? <Wrench size={14} aria-hidden="true" /> : <Fuel size={14} aria-hidden="true" />}
                {isParts ? 'COMMERCIAL SPARE PARTS' : 'LUBRICANTS & GREASE'}
              </span>
              <span className="location-pill">AUTO NAGAR · NELLORE</span>
            </div>

            <h1 className="heading-hero service-hero-title">
              {service.title}
            </h1>

            <p className="service-hero-intro">
              {service.introduction}
            </p>

            <div className="service-hero-actions">
              <button
                type="button"
                onClick={onEnquireClick}
                className="btn btn-primary hero-enquire-btn"
              >
                <MessageSquare size={16} aria-hidden="true" />
                <span>ENQUIRE ABOUT THIS PRODUCT</span>
              </button>

              <a
                href={BUSINESS.phoneHref}
                className="btn btn-secondary hero-call-btn"
              >
                <Phone size={16} aria-hidden="true" />
                <span>CALL THE STORE</span>
              </a>
            </div>

            <div className="service-hero-meta-note">
              <span>Direct Store Counter: <strong>Plot No. 167, Auto Nagar</strong> · Call: <strong>{BUSINESS.phone}</strong></span>
            </div>
          </div>

          <div className="service-hero-media">
            <div className="service-image-card">
              <SmartImage
                src={service.heroImage}
                fallback={service.heroImageFallback}
                alt={service.imageAlt}
                width={700}
                height={480}
                aspectRatio="16/11"
                priority={true}
                className="service-hero-img"
              />
              <div className="service-image-caption">
                <span className="caption-tag">ACTUAL PRODUCT DIVISION</span>
                <span className="caption-title">{service.title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
