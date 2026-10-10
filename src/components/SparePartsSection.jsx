import React, { useState } from 'react';
import { MessageSquare, Phone, Send, AlertCircle, CheckCircle, Wrench } from 'lucide-react';
import SmartImage from './SmartImage';
import { ASSET_MAP } from '../data/assets';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';

export default function SparePartsSection() {
  const [partInput, setPartInput] = useState('');
  const [vehicleInput, setVehicleInput] = useState('');
  const [notesInput, setNotesInput] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!partInput.trim()) {
      setError('Please provide a part number, component name, or description.');
      return;
    }
    setError('');

    const whatsappUrl = buildWhatsAppEnquiryUrl({
      category: 'Commercial Vehicle Spare Parts',
      item: partInput,
      vehicle: vehicleInput,
      notes: notesInput,
    });

    setSubmitted(true);
    // Open WhatsApp in new tab
    const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
      // Popup blocked fallback indicator
    }
  };

  return (
    <section id="spare-parts" className="spare-parts-section" aria-labelledby="spare-parts-heading">
      <div className="container">
        <div className="asymmetric-layout parts-layout">
          {/* Visual Column: Inventory & Shelving */}
          <div className="layout-media-col">
            <div className="parts-visual-card">
              <SmartImage
                src={ASSET_MAP.partsShelving.src}
                fallback={ASSET_MAP.partsShelving.fallback}
                alt={ASSET_MAP.partsShelving.alt}
                width={700}
                height={500}
                aspectRatio="4/3"
                className="parts-feature-img"
              />
              <div className="parts-visual-overlay">
                <div className="badge-identity">
                  <Wrench size={16} aria-hidden="true" />
                  <span>ASHOK LEYLAND RETAIL STORE</span>
                </div>
                <p className="caption-text">
                  Stocked with genuine LEYPARTS &amp; VALUEPARTS boxed components for commercial fleets.
                </p>
              </div>
            </div>
          </div>

          {/* Content & Interaction Column */}
          <div className="layout-content-col">
            <div className="section-eyebrow-line">
              <span className="eyebrow-badge blue">PARTS DIVISION</span>
              <span className="section-number-tag">SEC · 01</span>
            </div>

            <h2 id="spare-parts-heading" className="heading-section">
              FIND THE PART YOU NEED.
            </h2>

            <p className="section-body-text">
              Have a part number, vehicle model or product photo? Share the details with our store team to enquire about the item you need.
            </p>

            {/* Direct Verification Notes */}
            <div className="technical-notes-box">
              <div className="note-item">
                <strong>Part Identification:</strong> Part number printed on your component or packaging is the quickest way to check availability.
              </div>
              <div className="note-item">
                <strong>Photo Sharing:</strong> You can attach photos of your worn component directly in the WhatsApp conversation.
              </div>
            </div>

            {/* Frontend-Only WhatsApp Enquiry Form */}
            <form onSubmit={handleSubmit} className="enquiry-card" noValidate>
              <h3 className="enquiry-card-title">
                <MessageSquare size={18} aria-hidden="true" />
                <span>Quick Parts Availability Enquiry</span>
              </h3>

              {error && (
                <div className="form-alert error" role="alert">
                  <AlertCircle size={16} aria-hidden="true" />
                  <span>{error}</span>
                </div>
              )}

              {submitted && (
                <div className="form-alert success" role="status">
                  <CheckCircle size={16} aria-hidden="true" />
                  <div>
                    <p><strong>WhatsApp window opened!</strong></p>
                    <p className="alert-sub">If it didn't open automatically, use the direct button below or call our store.</p>
                  </div>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="part-input" className="form-label">
                  Part Number or Component Name <span className="req-star">*</span>
                </label>
                <input
                  id="part-input"
                  type="text"
                  className="form-input"
                  placeholder="e.g. F00213 / Clutch Plate / Oil Filter"
                  value={partInput}
                  onChange={(e) => {
                    setPartInput(e.target.value);
                    if (error) setError('');
                  }}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="vehicle-input" className="form-label">
                  Vehicle Make / Model (Optional)
                </label>
                <input
                  id="vehicle-input"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Ashok Leyland 2820 / 1618 Tipper"
                  value={vehicleInput}
                  onChange={(e) => setVehicleInput(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label htmlFor="notes-input" className="form-label">
                  Additional Details or Requirement (Optional)
                </label>
                <textarea
                  id="notes-input"
                  rows="2"
                  className="form-textarea"
                  placeholder="e.g. Need 2 units, can share photo on WhatsApp"
                  value={notesInput}
                  onChange={(e) => setNotesInput(e.target.value)}
                ></textarea>
              </div>

              <div className="form-actions-group">
                <button type="submit" className="btn btn-whatsapp form-submit-btn">
                  <Send size={16} aria-hidden="true" />
                  <span>ENQUIRE ON WHATSAPP</span>
                </button>

                <a href={BUSINESS.phoneHref} className="btn btn-dark form-call-btn">
                  <Phone size={16} aria-hidden="true" />
                  <span>CALL {BUSINESS.phone}</span>
                </a>
              </div>

              <p className="form-disclaimer">
                * Frontend enquiry only. Opens WhatsApp with your pre-filled details to chat directly with our store team in Auto Nagar, Nellore.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
