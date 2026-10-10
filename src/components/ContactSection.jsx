import React from 'react';
import { Phone, MessageSquare, MapPin, Navigation, Clock, ExternalLink, ShieldCheck } from 'lucide-react';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';

export default function ContactSection() {
  const whatsappUrl = buildWhatsAppEnquiryUrl({
    category: 'Store Visit / Location Enquiry',
    notes: 'Hello New Venkateswara Oil & Automobiles, I am visiting your store at Auto Nagar, Nellore.',
  });

  return (
    <section id="contact" className="contact-retail-section" aria-labelledby="contact-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block text-center">
          <div className="section-pill-tag">VISIT OUR STORE</div>
          <h2 id="contact-heading" className="heading-section">
            Store Location &amp; Contact Details
          </h2>
          <p className="section-subtitle">
            Located in Auto Nagar, Nellore. Visit our physical sales counter for immediate parts collection, 
            or get in touch via phone or WhatsApp for stock check and fitment guidance.
          </p>
        </div>

        {/* Real Store Photo & Essential Info Header Grid */}
        <div className="contact-main-grid">
          {/* Left Column: Real Store Photo Card */}
          <div className="contact-storefront-card">
            <div className="storefront-media-box">
              <img
                src="/images/hero-bg.png"
                alt="New Venkateswara Oil & Automobiles storefront and facility at Plot 167, Auto Nagar, Nellore"
                className="storefront-real-img"
                loading="lazy"
                width="600"
                height="380"
              />
              <div className="storefront-photo-overlay">
                <div className="overlay-badge">
                  <ShieldCheck size={16} aria-hidden="true" />
                  <span>Physical Storefront Signage Verified</span>
                </div>
              </div>
            </div>

            <div className="storefront-details-bar">
              <div>
                <strong className="storefront-name">{BUSINESS.name}</strong>
                <p className="storefront-sub">Ashok Leyland Retail Parts Store &amp; Automotive Lubricants Counter</p>
              </div>
              <a
                href={BUSINESS.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-directions-quick"
                aria-label="Get Google Maps Driving Directions to Plot 167 Auto Nagar Nellore"
              >
                <Navigation size={16} aria-hidden="true" />
                <span>Directions</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Details & Direct Action Cards */}
          <div className="contact-details-cards-col">
            {/* Address Card */}
            <div className="contact-card-item">
              <div className="card-icon-circle">
                <MapPin size={22} aria-hidden="true" />
              </div>
              <div className="card-item-content">
                <span className="card-item-label">Store Address</span>
                <address className="card-item-address">
                  <strong>{BUSINESS.address.plot}</strong>, {BUSINESS.address.area}<br />
                  {BUSINESS.address.city}, {BUSINESS.address.state}, India
                </address>
                <a
                  href={BUSINESS.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-item-link"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Direct Phone Card */}
            <div className="contact-card-item">
              <div className="card-icon-circle blue-circle">
                <Phone size={22} aria-hidden="true" />
              </div>
              <div className="card-item-content">
                <span className="card-item-label">Direct Phone Connection</span>
                <a href={BUSINESS.phoneHref} className="card-item-phone">
                  {BUSINESS.phoneFormatted}
                </a>
                <span className="card-item-note">Single verified phone number for all enquiries</span>
              </div>
            </div>

            {/* Direct WhatsApp Card */}
            <div className="contact-card-item">
              <div className="card-icon-circle green-circle">
                <MessageSquare size={22} aria-hidden="true" />
              </div>
              <div className="card-item-content">
                <span className="card-item-label">WhatsApp Sales Desk</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-item-whatsapp-link"
                >
                  +91 {BUSINESS.phone} (Click to Chat)
                </a>
                <span className="card-item-note">Send part numbers, vehicle details or photos</span>
              </div>
            </div>

            {/* Counter Schedule Card */}
            <div className="contact-card-item">
              <div className="card-icon-circle">
                <Clock size={22} aria-hidden="true" />
              </div>
              <div className="card-item-content">
                <span className="card-item-label">Visiting &amp; Counter Schedule</span>
                <p className="card-item-text">
                  Monday to Saturday: Standard Automotive Retail Hours<br />
                  <span className="schedule-sub">Call {BUSINESS.phone} to confirm holiday schedules before traveling.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map Container */}
        <div className="contact-map-wrapper">
          <div className="map-header-bar">
            <div className="map-title-row">
              <Navigation size={18} aria-hidden="true" />
              <strong>Google Maps Location · Auto Nagar, Nellore</strong>
            </div>
            <a
              href={BUSINESS.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="map-open-link"
            >
              <span>Get Driving Directions</span>
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
          <div className="map-frame-box">
            <iframe
              title="Google Maps Location of New Venkateswara Oil & Automobiles in Auto Nagar, Nellore"
              src="https://maps.google.com/maps?q=Auto+Nagar,+Nellore,+Andhra+Pradesh,+India&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="340"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
