import React, { useState } from 'react';
import { Send, Phone, MessageSquare, AlertCircle, CheckCircle, Info } from 'lucide-react';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';

export default function SelectionGuidance({ service }) {
  const isParts = service.categoryType === 'parts';

  // State
  const [primaryField, setPrimaryField] = useState('');
  const [vehicleField, setVehicleField] = useState('');
  const [specField, setSpecField] = useState('');
  const [notesField, setNotesField] = useState('');
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!primaryField.trim()) {
      setError(
        isParts
          ? 'Please enter a part number, component name, or description.'
          : 'Please enter the lubricant type, grade, or brand you require.'
      );
      return;
    }
    setError('');

    const url = buildWhatsAppEnquiryUrl({
      category: service.title,
      item: primaryField,
      vehicle: vehicleField,
      specification: specField,
      notes: notesField,
    });

    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="selection-guidance" className="selection-guidance-section" aria-labelledby="enquiry-form-heading">
      <div className="container">
        <div className="guidance-grid">
          {/* Left Column: Practical Steps */}
          <div className="guidance-info-col">
            <span className="eyebrow-badge yellow">STEP-BY-STEP</span>
            <h2 id="enquiry-form-heading" className="heading-section">
              ENQUIRE ABOUT {service.shortTitle || service.title}
            </h2>

            <p className="guidance-subtext">
              Share your requirements with our store team in Auto Nagar, Nellore. We verify stock availability and suitable options directly.
            </p>

            {service.guidance && (
              <div className="guidance-steps-list">
                <div className="step-row">
                  <span className="step-num">1</span>
                  <p>{service.guidance.step1}</p>
                </div>
                <div className="step-row">
                  <span className="step-num">2</span>
                  <p>{service.guidance.step2}</p>
                </div>
                <div className="step-row">
                  <span className="step-num">3</span>
                  <p>{service.guidance.step3}</p>
                </div>
              </div>
            )}

            <div className="whatsapp-attachment-tip">
              <Info size={18} className="tip-icon" aria-hidden="true" />
              <p>
                <strong>Photo Sharing:</strong> You can attach photos of your part or oil container directly inside WhatsApp after opening the chat.
              </p>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Enquiry Form */}
          <div className="guidance-form-col">
            <form onSubmit={handleSubmit} className="service-enquiry-form" noValidate>
              <div className="form-header-badge">
                <MessageSquare size={18} aria-hidden="true" />
                <span>Direct WhatsApp Enquiry</span>
              </div>

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
                    <p className="alert-sub">You can now send your pre-filled message directly to our store.</p>
                  </div>
                </div>
              )}

              {/* Dynamic Primary Field */}
              <div className="form-group">
                <label htmlFor="primary-input" className="form-label">
                  {isParts ? 'Part Number or Component Name' : 'Lubricant Product or Type'}{' '}
                  <span className="req-star">*</span>
                </label>
                <input
                  id="primary-input"
                  type="text"
                  className="form-input"
                  placeholder={
                    isParts
                      ? 'e.g. F00213 / Clutch Disc / Fuel Filter'
                      : 'e.g. 15W-40 Diesel Engine Oil / MAK Titanium'
                  }
                  value={primaryField}
                  onChange={(e) => {
                    setPrimaryField(e.target.value);
                    if (error) setError('');
                  }}
                  required
                />
              </div>

              {/* Dynamic Vehicle / Equipment Field */}
              <div className="form-group">
                <label htmlFor="vehicle-field" className="form-label">
                  {isParts ? 'Vehicle Make & Model (Optional)' : 'Vehicle or Equipment Type (Optional)'}
                </label>
                <input
                  id="vehicle-field"
                  type="text"
                  className="form-input"
                  placeholder={
                    isParts
                      ? 'e.g. Ashok Leyland 2820 / 1618 Tipper'
                      : 'e.g. Haulage Truck / Excavator / Tipper Ram'
                  }
                  value={vehicleField}
                  onChange={(e) => setVehicleField(e.target.value)}
                />
              </div>

              {/* Dynamic Specification / Pack Size Field */}
              <div className="form-group">
                <label htmlFor="spec-field" className="form-label">
                  {isParts ? 'Chassis or Model Year (Optional)' : 'Viscosity / Specification / Pack Size (Optional)'}
                </label>
                <input
                  id="spec-field"
                  type="text"
                  className="form-input"
                  placeholder={
                    isParts
                      ? 'e.g. 2021 Model'
                      : 'e.g. SAE 15W-40 API CI-4 / 20 Litre Bucket'
                  }
                  value={specField}
                  onChange={(e) => setSpecField(e.target.value)}
                />
              </div>

              {/* Additional Notes */}
              <div className="form-group">
                <label htmlFor="notes-field" className="form-label">
                  Additional Details or Quantity (Optional)
                </label>
                <textarea
                  id="notes-field"
                  rows="2"
                  className="form-textarea"
                  placeholder="e.g. Quantity needed, or let me know available brands"
                  value={notesField}
                  onChange={(e) => setNotesField(e.target.value)}
                ></textarea>
              </div>

              {/* Actions */}
              <div className="form-actions-group">
                <button type="submit" className="btn btn-whatsapp form-submit-btn">
                  <Send size={16} aria-hidden="true" />
                  <span>SEND ENQUIRY ON WHATSAPP</span>
                </button>

                <a href={BUSINESS.phoneHref} className="btn btn-dark form-call-btn">
                  <Phone size={16} aria-hidden="true" />
                  <span>CALL {BUSINESS.phone}</span>
                </a>
              </div>

              <p className="form-disclaimer">
                * Note: Submitting this form opens WhatsApp with your pre-filled inquiry. No data is stored on a server.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
