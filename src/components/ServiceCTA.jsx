import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowLeft, MapPin } from 'lucide-react';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';

export default function ServiceCTA({ title }) {
  const handleWhatsApp = () => {
    const url = buildWhatsAppEnquiryUrl({
      category: title,
      notes: `Enquiring about ${title} availability at your Auto Nagar, Nellore store.`,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="service-conversion-section" aria-labelledby="cta-heading">
      <div className="container">
        <div className="conversion-panel">
          <div className="conversion-content">
            <span className="eyebrow-badge yellow">DIRECT STORE COUNTER</span>
            <h2 id="cta-heading" className="heading-section text-white">
              NEED HELP FINDING THE RIGHT {title.toUpperCase()}?
            </h2>
            <p className="conversion-text">
              Speak with our counter staff at New Venkateswara Oil &amp; Automobiles, Auto Nagar, Nellore. We verify part numbers, specifications, and current container sizes.
            </p>

            <div className="conversion-location-pill">
              <MapPin size={16} aria-hidden="true" />
              <span>Plot No. 167, Auto Nagar, Nellore, Andhra Pradesh</span>
            </div>

            <div className="conversion-actions-row">
              <a href={BUSINESS.phoneHref} className="btn btn-primary conversion-btn">
                <Phone size={18} aria-hidden="true" />
                <span>CALL {BUSINESS.phone}</span>
              </a>

              <button
                type="button"
                onClick={handleWhatsApp}
                className="btn btn-whatsapp conversion-btn"
              >
                <MessageSquare size={18} aria-hidden="true" />
                <span>WHATSAPP STORE</span>
              </button>

              <Link to="/" className="btn btn-secondary conversion-btn">
                <ArrowLeft size={16} aria-hidden="true" />
                <span>BACK TO HOMEPAGE</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
