import React from 'react';
import { MapPin, Phone, MessageSquare, Wrench, Fuel, CheckCircle2 } from 'lucide-react';
import { BUSINESS, buildWhatsAppEnquiryUrl } from '../data/business';
import SmartImage from './SmartImage';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutSection() {
  const sectionRef = useScrollReveal();
  const whatsappUrl = buildWhatsAppEnquiryUrl({
    category: 'About Store Enquiry',
    notes: 'Hello New Venkateswara Oil & Automobiles, I would like to visit your Auto Nagar store.',
  });

  return (
    <section id="about" ref={sectionRef} className="about-retail-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-retail-grid">
          {/* Left Column: Real Imagery Composite */}
          <div className="about-visual-column reveal-fade-up">
            <div className="about-image-card-main hover-lift">
              <SmartImage
                src="/images/hero-bg.png"
                alt="New Venkateswara Oil & Automobiles storefront and facility at Auto Nagar, Nellore"
                width={640}
                height={400}
                aspectRatio="16/10"
                className="about-img-main"
              />
              <div className="about-img-tag">
                <MapPin size={16} aria-hidden="true" />
                <span>Plot No. 167, Near Ayyappa Temple, Auto Nagar, Nellore</span>
              </div>
            </div>

            {/* Inset Fleet Photo Card */}
            <div className="about-image-card-fleet hover-lift">
              <SmartImage
                src="/images/transports.jpg"
                alt="Commercial transport lorries and fleet trucks operating in Auto Nagar, Nellore"
                width={340}
                height={220}
                aspectRatio="16/10"
                className="about-img-fleet"
              />
              <div className="fleet-caption">
                <strong>Commercial Transport Fleet Support</strong>
                <span>Serving heavy trucks &amp; haulage operators in Nellore</span>
              </div>
            </div>
          </div>

          {/* Right Column: Factual Business Profile */}
          <div className="about-text-column reveal-fade-up delay-100">
            <div className="section-pill-tag">ABOUT OUR RETAIL STORE</div>
            
            <h2 id="about-heading" className="heading-section">
              One Store. Two Core Divisions.
            </h2>

            <p className="about-lead-paragraph">
              Operating from <strong>Plot No. 167, Near Ayyappa Temple, Auto Nagar, Nellore</strong>, 
              <strong> New Venkateswara Oil &amp; Automobiles</strong> was built to serve 
              commercial vehicle operators, transport contractors, automotive mechanics, and individual motorists 
              with authentic parts and certified lubricants under one roof.
            </p>

            {/* Two Divisions Factual Cards */}
            <div className="about-divisions-box">
              <div className="about-division-card parts-card">
                <div className="division-card-icon">
                  <Wrench size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="division-card-title">Commercial Vehicle Spare Parts</h3>
                  <p className="division-card-desc">
                    Authorized storefront signage for Ashok Leyland Retail Parts Store, supplying genuine LEYPARTS boxed components and VALUEPARTS maintenance range for heavy haulers, tippers and trucks.
                  </p>
                </div>
              </div>

              <div className="about-division-card oils-card">
                <div className="division-card-icon">
                  <Fuel size={20} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="division-card-title">Automotive Oils, Lubricants &amp; Greases</h3>
                  <p className="division-card-desc">
                    Comprehensive selection of multi-grade engine oils, extreme pressure gear oils, hydraulic tipper fluids, and chassis greases from all major oil companies (Castrol, Gulf, Shell, Mobil, Servo, MAK, Veedol, HP, Motul, and more).
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Principles */}
            <div className="about-principles-list">
              <h4 className="principles-title">Why Customers Trust Our Counter:</h4>
              <div className="principles-grid">
                <div className="principle-item">
                  <CheckCircle2 size={16} className="principle-icon" aria-hidden="true" />
                  <span>Physical walk-in counter in Auto Nagar industrial area.</span>
                </div>
                <div className="principle-item">
                  <CheckCircle2 size={16} className="principle-icon" aria-hidden="true" />
                  <span>Genuine manufacturer packaging with sealed caps &amp; batch codes.</span>
                </div>
                <div className="principle-item">
                  <CheckCircle2 size={16} className="principle-icon" aria-hidden="true" />
                  <span>Direct phone and WhatsApp assistance for fast part matching.</span>
                </div>
                <div className="principle-item">
                  <CheckCircle2 size={16} className="principle-icon" aria-hidden="true" />
                  <span>Bulk retail packaging for garages, fleet owners &amp; workshop operators.</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="about-actions-row">
              <a href={BUSINESS.phoneHref} className="btn-primary">
                <Phone size={18} aria-hidden="true" />
                <span>Call Store: {BUSINESS.phone}</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp"
              >
                <MessageSquare size={18} aria-hidden="true" />
                <span>Message on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
