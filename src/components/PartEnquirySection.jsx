import React, { useState } from 'react';
import { Camera, Search, HelpCircle, Users, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function PartEnquirySection() {
  const [activeTab, setActiveTab] = useState('part-number');
  const sectionRef = useScrollReveal();

  // Form states for Journey 1: Part Number
  const [partNumber, setPartNumber] = useState('');
  const [partVehicle, setPartVehicle] = useState('');
  const [partNotes, setPartNotes] = useState('');

  // Form states for Journey 3: Lubricant Advice
  const [lubeVehicleType, setLubeVehicleType] = useState('Commercial Truck / Tipper');
  const [lubeCategory, setLubeCategory] = useState('Heavy Engine Oil');
  const [lubeQuantity, setLubeQuantity] = useState('1 Litre / Can');

  // Form states for Journey 4: Fleet / Workshop
  const [fleetType, setFleetType] = useState('');
  const [fleetRequirement, setFleetRequirement] = useState('');

  // Handlers for WhatsApp URLs
  const getPartNumberWhatsAppUrl = () => {
    return buildWhatsAppEnquiryUrl({
      category: 'Commercial Vehicle Spare Parts Enquiry',
      item: partNumber || 'Part Number (to be specified)',
      vehicle: partVehicle || 'Commercial Vehicle',
      notes: partNotes || 'Checking price and availability at Auto Nagar counter.',
    });
  };

  const getPhotoWhatsAppUrl = () => {
    return buildWhatsAppEnquiryUrl({
      category: 'Part Photo / Sample Identification',
      notes: 'Hello New Venkateswara Oil & Automobiles, I am sending a photograph of the required spare part / lubricant label for identification and stock check.',
    });
  };

  const getLubeWhatsAppUrl = () => {
    return buildWhatsAppEnquiryUrl({
      category: 'Lubricant Selection Advice',
      vehicle: lubeVehicleType,
      specification: lubeCategory,
      notes: `Requirement: ${lubeQuantity}. Please confirm recommended grade and available pack sizes.`,
    });
  };

  const getFleetWhatsAppUrl = () => {
    return buildWhatsAppEnquiryUrl({
      category: 'Fleet / Workshop Bulk Requirement',
      vehicle: fleetType || 'Commercial Transport Fleet / Garage',
      notes: fleetRequirement || 'Looking for regular parts / lubricant supply details.',
    });
  };

  return (
    <section id="part-enquiry" ref={sectionRef} className="enquiry-retail-section" aria-labelledby="enquiry-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header-block text-center reveal-fade-up">
          <div className="section-pill-tag">ASSISTED COUNTER ENQUIRY</div>
          <h2 id="enquiry-heading" className="heading-section">
            Part Identification &amp; WhatsApp Enquiry
          </h2>
          <p className="section-subtitle">
            Need to confirm whether we have a specific part or lubricant in stock? 
            Select your scenario below for direct guidance and instant WhatsApp connection with our counter in Auto Nagar, Nellore.
          </p>
        </div>

        {/* 4 Customer Journey Tabs */}
        <div className="enquiry-tabs-bar reveal-fade-up delay-100" role="tablist" aria-label="Customer enquiry scenarios">
          <button
            role="tab"
            id="tab-part-number"
            aria-selected={activeTab === 'part-number'}
            aria-controls="panel-part-number"
            className={`enquiry-tab-btn ${activeTab === 'part-number' ? 'active' : ''}`}
            onClick={() => setActiveTab('part-number')}
          >
            <Search size={18} aria-hidden="true" />
            <span>1. I Have a Part Number</span>
          </button>

          <button
            role="tab"
            id="tab-photo"
            aria-selected={activeTab === 'photo'}
            aria-controls="panel-photo"
            className={`enquiry-tab-btn ${activeTab === 'photo' ? 'active' : ''}`}
            onClick={() => setActiveTab('photo')}
          >
            <Camera size={18} aria-hidden="true" />
            <span>2. I Have a Photo / Sample</span>
          </button>

          <button
            role="tab"
            id="tab-lubricant"
            aria-selected={activeTab === 'lubricant'}
            aria-controls="panel-lubricant"
            className={`enquiry-tab-btn ${activeTab === 'lubricant' ? 'active' : ''}`}
            onClick={() => setActiveTab('lubricant')}
          >
            <HelpCircle size={18} aria-hidden="true" />
            <span>3. Need Lubricant Advice</span>
          </button>

          <button
            role="tab"
            id="tab-fleet"
            aria-selected={activeTab === 'fleet'}
            aria-controls="panel-fleet"
            className={`enquiry-tab-btn ${activeTab === 'fleet' ? 'active' : ''}`}
            onClick={() => setActiveTab('fleet')}
          >
            <Users size={18} aria-hidden="true" />
            <span>4. Fleet &amp; Workshop Enquiries</span>
          </button>
        </div>

        {/* Tab Panels */}
        <div className="enquiry-panel-card">
          {/* Journey 1: Part Number */}
          {activeTab === 'part-number' && (
            <div
              id="panel-part-number"
              role="tabpanel"
              aria-labelledby="tab-part-number"
              className="journey-grid"
            >
              <div className="journey-form-col">
                <h3 className="journey-title">Enquire by Part Number</h3>
                <p className="journey-desc">
                  If you have a manufacturer part number (e.g. Ashok Leyland LEYPARTS number, filter code, or casting stamp), enter it below to generate a pre-filled WhatsApp enquiry message.
                </p>

                <div className="form-group">
                  <label htmlFor="enquiry-part-number" className="form-label">
                    Part Number or Component Code *
                  </label>
                  <input
                    id="enquiry-part-number"
                    type="text"
                    value={partNumber}
                    onChange={(e) => setPartNumber(e.target.value)}
                    placeholder="e.g. F0021345, F1234, Brake Pad Set"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enquiry-part-vehicle" className="form-label">
                    Vehicle Model / Chassis Type (Optional)
                  </label>
                  <input
                    id="enquiry-part-vehicle"
                    type="text"
                    value={partVehicle}
                    onChange={(e) => setPartVehicle(e.target.value)}
                    placeholder="e.g. Ashok Leyland 1616, Ecomet, Boss, Dost"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="enquiry-part-notes" className="form-label">
                    Additional Requirement Details
                  </label>
                  <input
                    id="enquiry-part-notes"
                    type="text"
                    value={partNotes}
                    onChange={(e) => setPartNotes(e.target.value)}
                    placeholder="e.g. Need 2 sets, checking price and immediate availability"
                    className="form-input"
                  />
                </div>

                <div className="journey-actions">
                  <a
                    href={getPartNumberWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageSquare size={18} aria-hidden="true" />
                    <span>Send Part Number via WhatsApp</span>
                  </a>

                  <a href={BUSINESS.phoneHref} className="btn-secondary">
                    <Phone size={18} aria-hidden="true" />
                    <span>Call Counter ({BUSINESS.phone})</span>
                  </a>
                </div>
              </div>

              <div className="journey-helper-col">
                <div className="helper-card">
                  <h4 className="helper-title">Where to find your part number?</h4>
                  <ul className="helper-steps">
                    <li>
                      <span className="step-num">1</span>
                      <span>Stamped on the metallic body or housing of the existing part.</span>
                    </li>
                    <li>
                      <span className="step-num">2</span>
                      <span>Printed on the original LEYPARTS / VALUEPARTS product packaging.</span>
                    </li>
                    <li>
                      <span className="step-num">3</span>
                      <span>Listed in your vehicle service invoice or owner parts catalog.</span>
                    </li>
                  </ul>
                  <div className="helper-tip">
                    <strong>Tip:</strong> If the number is faded, select the "I Have a Photo / Sample" tab to send a photo of the part!
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Journey 2: Photo or Sample */}
          {activeTab === 'photo' && (
            <div
              id="panel-photo"
              role="tabpanel"
              aria-labelledby="tab-photo"
              className="journey-grid"
            >
              <div className="journey-form-col">
                <h3 className="journey-title">Identify by Photograph or Sample</h3>
                <p className="journey-desc">
                  Don't have a part number? You can take photos of your worn component or lubricant label and send them directly to our counter on WhatsApp.
                </p>

                <div className="photo-instruction-box">
                  <h4 className="instruction-heading">Recommended Photo Angles for Quick Identification:</h4>
                  <div className="instruction-grid">
                    <div className="instruction-item">
                      <span className="instruction-icon">📷</span>
                      <div>
                        <strong>Overall Component View</strong>
                        <p>Shows overall shape, mounting holes, and size comparison.</p>
                      </div>
                    </div>
                    <div className="instruction-item">
                      <span className="instruction-icon">🔍</span>
                      <div>
                        <strong>Casting / Stamp Numbers</strong>
                        <p>Any embossed numbers, letters or brand markings visible on the metal.</p>
                      </div>
                    </div>
                    <div className="instruction-item">
                      <span className="instruction-icon">🏷️</span>
                      <div>
                        <strong>Packaging or Old Label</strong>
                        <p>If you have the old box or oil container, snap the specification label.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="journey-actions">
                  <a
                    href={getPhotoWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageSquare size={18} aria-hidden="true" />
                    <span>Open WhatsApp to Share Photo ({BUSINESS.phone})</span>
                  </a>

                  <a href={BUSINESS.phoneHref} className="btn-secondary">
                    <Phone size={18} aria-hidden="true" />
                    <span>Call Us First ({BUSINESS.phone})</span>
                  </a>
                </div>
              </div>

              <div className="journey-helper-col">
                <div className="helper-card">
                  <h4 className="helper-title">Physical Counter Inspection</h4>
                  <p className="helper-text">
                    You can also bring the physical sample directly to our Auto Nagar counter. 
                    Our experienced counter staff will visually match it against in-stock commercial vehicle assemblies.
                  </p>
                  <div className="counter-address-box">
                    <strong>New Venkateswara Oil &amp; Automobiles</strong>
                    <span>Plot No. 167, Near Ayyappa Temple, Auto Nagar, Nellore</span>
                    <span>Landmark: Near Ayyappa Temple</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Journey 3: Lubricant Advice */}
          {activeTab === 'lubricant' && (
            <div
              id="panel-lubricant"
              role="tabpanel"
              aria-labelledby="tab-lubricant"
              className="journey-grid"
            >
              <div className="journey-form-col">
                <h3 className="journey-title">Lubricant &amp; Oil Selection Advice</h3>
                <p className="journey-desc">
                  Select your vehicle type and fluid requirement to check recommended viscosity, approved brand packs, and in-stock quantities.
                </p>

                <div className="form-group">
                  <label htmlFor="lube-vehicle-type" className="form-label">Vehicle Category</label>
                  <select
                    id="lube-vehicle-type"
                    value={lubeVehicleType}
                    onChange={(e) => setLubeVehicleType(e.target.value)}
                    className="form-input form-select"
                  >
                    <option value="Commercial Truck / Tipper / Lorry">Commercial Truck / Tipper / Lorry</option>
                    <option value="Motorcycle / Scooter (Two-Wheeler)">Motorcycle / Scooter (Two-Wheeler)</option>
                    <option value="Passenger Car (Petrol / Diesel)">Passenger Car (Petrol / Diesel)</option>
                    <option value="Tractor / Agricultural Equipment">Tractor / Agricultural Equipment</option>
                    <option value="Industrial / Hydraulic Equipment">Industrial / Hydraulic Equipment</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="lube-category-type" className="form-label">Required Fluid / Lubricant Type</label>
                  <select
                    id="lube-category-type"
                    value={lubeCategory}
                    onChange={(e) => setLubeCategory(e.target.value)}
                    className="form-input form-select"
                  >
                    <option value="Engine Oil (15W-40 / 20W-50 / 4T / Synthetic)">Engine Oil (15W-40 / 20W-50 / 4T / Synthetic)</option>
                    <option value="Gear & Differential Oil (EP-90 / EP-140 / 80W-90)">Gear &amp; Differential Oil (EP-90 / EP-140 / 80W-90)</option>
                    <option value="Hydraulic Oil (AW-46 / AW-68 for Tippers)">Hydraulic Oil (AW-46 / AW-68 for Tippers)</option>
                    <option value="Automotive Grease (Lithium EP-2 / Wheel Bearing)">Automotive Grease (Lithium EP-2 / Wheel Bearing)</option>
                    <option value="Brake / Clutch Fluid & Coolant">Brake / Clutch Fluid &amp; Coolant</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="lube-quantity-type" className="form-label">Required Volume / Pack Size</label>
                  <select
                    id="lube-quantity-type"
                    value={lubeQuantity}
                    onChange={(e) => setLubeQuantity(e.target.value)}
                    className="form-input form-select"
                  >
                    <option value="Retail Can (1L / 3L / 5L)">Retail Can (1L / 3L / 5L)</option>
                    <option value="Commercial Bucket / Pail (10L / 20L / 26L)">Commercial Bucket / Pail (10L / 20L / 26L)</option>
                    <option value="Fleet Drum (50L / 210L)">Fleet Drum (50L / 210L)</option>
                    <option value="Grease Tub (500g / 1kg / 5kg / 18kg)">Grease Tub (500g / 1kg / 5kg / 18kg)</option>
                  </select>
                </div>

                <div className="journey-actions">
                  <a
                    href={getLubeWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageSquare size={18} aria-hidden="true" />
                    <span>Check Lubricant Stock on WhatsApp</span>
                  </a>

                  <a href={BUSINESS.phoneHref} className="btn-secondary">
                    <Phone size={18} aria-hidden="true" />
                    <span>Call Counter ({BUSINESS.phone})</span>
                  </a>
                </div>
              </div>

              <div className="journey-helper-col">
                <div className="helper-card">
                  <h4 className="helper-title">Official ENI Distributors &amp; All Major Oil Companies:</h4>
                  <div className="helper-brands-tags">
                    <span className="brand-tag brand-tag-highlight">★ ENI (Official Distributors)</span>
                    <span className="brand-tag">All Major Brands</span>
                    <span className="brand-tag">Castrol</span>
                    <span className="brand-tag">Gulf</span>
                    <span className="brand-tag">Shell</span>
                    <span className="brand-tag">Mobil</span>
                    <span className="brand-tag">Servo (IOCL)</span>
                    <span className="brand-tag">MAK (BPCL)</span>
                    <span className="brand-tag">Veedol</span>
                    <span className="brand-tag">HPCL</span>
                    <span className="brand-tag">Motul</span>
                  </div>
                  <div className="helper-notice">
                    Official distributors for ENI lubricants in Nellore alongside genuine products from all major oil companies in factory-sealed containers.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Journey 4: Fleet & Workshop */}
          {activeTab === 'fleet' && (
            <div
              id="panel-fleet"
              role="tabpanel"
              aria-labelledby="tab-fleet"
              className="journey-grid"
            >
              <div className="journey-form-col">
                <h3 className="journey-title">Mechanic, Garage &amp; Fleet Operator Supply</h3>
                <p className="journey-desc">
                  Are you managing a commercial transport fleet or operating an automotive repair workshop in Nellore? 
                  We supply commercial parts and bulk lubricants directly from Auto Nagar.
                </p>

                <div className="form-group">
                  <label htmlFor="fleet-business-name" className="form-label">
                    Workshop / Transport Fleet Name
                  </label>
                  <input
                    id="fleet-business-name"
                    type="text"
                    value={fleetType}
                    onChange={(e) => setFleetType(e.target.value)}
                    placeholder="e.g. Sri Rama Transports / Auto Nagar Garage"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="fleet-req-details" className="form-label">
                    Requirement Summary (List of Parts / Oil Quantities)
                  </label>
                  <textarea
                    id="fleet-req-details"
                    rows="3"
                    value={fleetRequirement}
                    onChange={(e) => setFleetRequirement(e.target.value)}
                    placeholder="e.g. Need 4 drums 15W-40, 2 buckets EP-140, LEYPARTS filter kits for 3 trucks"
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <div className="journey-actions">
                  <a
                    href={getFleetWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageSquare size={18} aria-hidden="true" />
                    <span>Send Requirement List via WhatsApp</span>
                  </a>

                  <a href={BUSINESS.phoneHref} className="btn-secondary">
                    <Phone size={18} aria-hidden="true" />
                    <span>Call Counter Directly ({BUSINESS.phone})</span>
                  </a>
                </div>
              </div>

              <div className="journey-helper-col">
                <div className="helper-card">
                  <h4 className="helper-title">Trade &amp; Fleet Highlights</h4>
                  <ul className="helper-steps">
                    <li>
                      <span className="step-num">✓</span>
                      <span>Dedicated physical counter located in the heart of Auto Nagar, Nellore.</span>
                    </li>
                    <li>
                      <span className="step-num">✓</span>
                      <span>Combined supply for both mechanical spares and lubrication fluids.</span>
                    </li>
                    <li>
                      <span className="step-num">✓</span>
                      <span>Official ENI Lubricants Distributors for Nellore — bulk pails, barrels &amp; fleet discount supply.</span>
                    </li>
                    <li>
                      <span className="step-num">✓</span>
                      <span>Direct phone and WhatsApp coordination for urgent vehicle-down requirements.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Responsible Retail Policy Footer */}
        <div className="enquiry-policy-note">
          <p>
            <strong>Note on Counter Service:</strong> Product enquiries are verified manually by our sales counter staff. 
            We do not operate an online shopping cart or automated checkout. Please call or WhatsApp for stock verification.
          </p>
        </div>
      </div>
    </section>
  );
}
