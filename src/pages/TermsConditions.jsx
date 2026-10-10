import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS } from '../data/business';

export default function TermsConditions() {
  const lastUpdated = 'October 10, 2026';

  return (
    <div className="legal-page">
      <SEO
        title="Terms and Conditions | New Venkateswara Oil & Automobiles"
        description="Terms and conditions for New Venkateswara Oil & Automobiles, Auto Nagar, Nellore. Informational use, product enquiries, and terms."
        canonicalPath="/terms-and-conditions"
      />

      <header className="legal-header-banner">
        <div className="container legal-header-content">
          <Link to="/" className="btn btn-secondary" style={{ marginBottom: '1rem', minHeight: '38px', padding: '0.4rem 1rem' }}>
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
          <span className="eyebrow-badge yellow">LEGAL &amp; USAGE TERMS</span>
          <h1 className="heading-hero legal-title">TERMS &amp; CONDITIONS</h1>
          <div className="legal-meta-row">
            <span>Enterprise: {BUSINESS.name}</span>
            <span>·</span>
            <span>Location: Auto Nagar, Nellore</span>
            <span>·</span>
            <span>Last Updated: {lastUpdated}</span>
          </div>
        </div>
      </header>

      <main className="container container-narrow">
        <div className="legal-content-card">
          <section className="legal-section-block">
            <h2 className="legal-section-title">1. Nature and Purpose of the Website</h2>
            <p className="legal-paragraph">
              This website is operated by <strong>{BUSINESS.name}</strong>, situated at Plot No. 167, Auto Nagar, Nellore, Andhra Pradesh, India.
            </p>
            <p className="legal-paragraph">
              The website is an <strong>informational and product enquiry directory</strong> designed to introduce customers to our commercial vehicle spare parts and automotive lubricants inventory.
            </p>
            <div className="legal-callout-box">
              <strong>Important Notice:</strong> This website is NOT an e-commerce platform. It does not provide automated online checkout, online credit/debit card processing, shopping cart order completion, or automated digital contracts. Sending a WhatsApp enquiry or placing a phone call does not create a binding sales contract. All purchases are agreed upon and conducted at the physical store counter or directly with store staff.
            </div>
          </section>

          <section className="legal-section-block">
            <h2 className="legal-section-title">2. Product Information and Availability</h2>
            <p className="legal-paragraph">
              Information on this website regarding product categories, specifications, and packaging is provided for general guidance:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Stock Availability:</strong> Physical inventory changes continuously. We do not represent that every depicted product or part number is immediately in stock. Customers must verify current availability via phone (9440529777) or WhatsApp before traveling.
              </li>
              <li>
                <strong>Technical Specifications:</strong> Vehicle manufacturers establish exact lubricant specifications (viscosity, API standard, OEM certification) and part compatibility. Information provided on this site is not a substitute for manufacturer service manuals. Customers are responsible for verifying OEM requirements for their vehicles.
              </li>
              <li>
                <strong>Pricing:</strong> Prices are not quoted on the website and must be confirmed directly at the store counter based on active manufacturer supply pricing.
              </li>
            </ul>
          </section>

          <section className="legal-section-block">
            <h2 className="legal-section-title">3. Intellectual Property &amp; Trademarks</h2>
            <p className="legal-paragraph">
              Our storefront signage visibly displays retail parts store branding for Ashok Leyland (including LEYPARTS and VALUEPARTS), and our store stocks products from recognized lubricant brands such as Gulf, Veedol, MAK, and Eni.
            </p>
            <p className="legal-paragraph">
              All manufacturer logos, brand names, and trademarks mentioned on this website belong to their respective corporate trademark owners. Reference to these brands indicates visible store packaging and retail inventory, and does not imply exclusive dealership, ownership of the trademark, or manufacturer sponsorship of this website.
            </p>
          </section>

          <section className="legal-section-block">
            <h2 className="legal-section-title">4. Third-Party Platforms and Links</h2>
            <p className="legal-paragraph">
              This website provides external links to WhatsApp (Meta Platforms) and Google Maps (Google LLC) for communication and navigation. We do not operate or control these third-party platforms and accept no liability for their availability, uptime, or data handling policies.
            </p>
          </section>

          <section className="legal-section-block">
            <h2 className="legal-section-title">5. Website Availability and Limitation of Liability</h2>
            <p className="legal-paragraph">
              We strive to keep the website functional and accurate, but we do not guarantee uninterrupted access or that content will always be free of clerical errors. Under no circumstances shall New Venkateswara Oil &amp; Automobiles be liable for indirect or consequential damages arising from reliance on website informational content.
            </p>
          </section>

          <section className="legal-section-block">
            <h2 className="legal-section-title">6. Contact for Terms &amp; Inquiries</h2>
            <p className="legal-paragraph">
              If you have any questions regarding these terms, please contact our store directly:
            </p>

            <div className="legal-contact-box">
              <p><strong>{BUSINESS.name}</strong></p>
              <p>Plot No. 167, Auto Nagar, Nellore, Andhra Pradesh, India</p>
              <p>Direct Phone: <a href={BUSINESS.phoneHref} style={{ color: '#F6B817' }}>{BUSINESS.phoneFormatted}</a></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
