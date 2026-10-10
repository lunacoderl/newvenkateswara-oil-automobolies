import React from 'react';
import { FileSearch, Sparkles, Camera, Phone, Send } from 'lucide-react';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';

export default function ProductGuidanceSection() {
  const steps = [
    {
      step: "01",
      icon: FileSearch,
      title: "Commercial Spare Parts",
      instruction: "Share the manufacturer part number stamped on the component, or provide your vehicle model, variant, and year of manufacture.",
      actionText: "Part Number / Vehicle Model",
    },
    {
      step: "02",
      icon: Sparkles,
      title: "Oils & Lubricants",
      instruction: "Share your equipment model along with the required viscosity grade (SAE) or specification (API, ISO VG) and desired pack volume.",
      actionText: "Viscosity / Specification",
    },
    {
      step: "03",
      icon: Camera,
      title: "Uncertain or Worn Details",
      instruction: "Snap a clear photograph of the worn component, label plate, or existing packaging and send it directly via WhatsApp for our store team to check.",
      actionText: "Send Photo via WhatsApp",
    },
  ];

  const handlePhotoEnquiry = () => {
    const url = buildWhatsAppEnquiryUrl({
      category: 'Product Identification Assistance',
      notes: 'I have attached a photo of the required part/oil container for identification.',
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="guidance-section" aria-labelledby="guidance-heading">
      <div className="container">
        <div className="section-header-centered">
          <span className="eyebrow-badge yellow">STEP-BY-STEP ASSISTANCE</span>
          <h2 id="guidance-heading" className="heading-section">
            NOT SURE WHICH PRODUCT YOU NEED?
          </h2>
          <p className="section-subheading">
            Finding the correct component or lubricant is straightforward when you share key vehicle identifiers with our store counter.
          </p>
        </div>

        <div className="guidance-steps-grid">
          {steps.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.step} className="guidance-step-card">
                <div className="step-card-header">
                  <span className="step-badge">{item.step}</span>
                  <div className="step-icon-wrap">
                    <Icon size={24} aria-hidden="true" />
                  </div>
                </div>

                <h3 className="heading-card step-title">{item.title}</h3>
                <p className="step-instruction">{item.instruction}</p>

                <div className="step-action-tag">
                  <span>Required: {item.actionText}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Direct Help CTA Bar */}
        <div className="guidance-cta-banner">
          <div className="cta-banner-text">
            <h4>Ready to check availability or verify a part?</h4>
            <p>Our store team in Auto Nagar, Nellore is ready to assist you directly.</p>
          </div>
          <div className="cta-banner-buttons">
            <button
              type="button"
              onClick={handlePhotoEnquiry}
              className="btn btn-whatsapp"
            >
              <Send size={16} aria-hidden="true" />
              <span>SEND DETAILS ON WHATSAPP</span>
            </button>

            <a href={BUSINESS.phoneHref} className="btn btn-primary">
              <Phone size={16} aria-hidden="true" />
              <span>CALL {BUSINESS.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
