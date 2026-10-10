import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS } from '../data/business';

export default function PrivacyPolicy() {
  const lastUpdated = 'October 10, 2026';

  return (
    <div className="legal-page">
      <SEO
        title="Privacy Policy | New Venkateswara Oil & Automobiles"
        description="Privacy policy for New Venkateswara Oil & Automobiles, Auto Nagar, Nellore. Explaining frontend operations, WhatsApp enquiries, and data handling."
        canonicalPath="/privacy-policy"
      />

      <header className="legal-header-banner">
        <div className="container legal-header-content">
          <Link to="/" className="btn btn-secondary" style={{ marginBottom: '1rem', minHeight: '38px', padding: '0.4rem 1rem' }}>
            <ArrowLeft size={16} aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
          <span className="eyebrow-badge yellow">TRANSPARENCY &amp; PRIVACY</span>
          <h1 className="heading-hero legal-title">PRIVACY POLICY</h1>
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
            <h2 className="legal-section-title">1. Overview of This Website</h2>
            <p className="legal-paragraph">
              This website serves as an informational and direct-enquiry portal for <strong>{BUSINESS.name}</strong>, located at Plot No. 167, Auto Nagar, Nellore, Andhra Pradesh. We provide commercial vehicle spare parts and automotive oils, lubricants, and grease.
            </p>
            <p className="legal-paragraph">
              This site is designed as a frontend-only informational resource. We do not operate customer account logins, user registrations, automated payment gateways, or a database collecting personal user profiles.
            </p>
          </section>

          <section className="legal-section-block">
            <h2 className="legal-section-title">2. Information You Voluntarily Provide</h2>
            <p className="legal-paragraph">
              When using the enquiry forms on this website:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Frontend Enquiry Forms:</strong> The enquiry forms (such as parts or lubricant availability queries) operate entirely within your browser client. Clicking "Enquire on WhatsApp" formats your input (e.g. part number, vehicle model, specifications) into a pre-filled text message.
              </li>
              <li>
                <strong>No Web Database Storage:</strong> Your form entries are not sent to or stored in a web server database.
              </li>
              <li>
                <strong>Direct Communication:</strong> Once you choose to initiate communication via WhatsApp or telephone, any information you provide (such as your phone number, name, or vehicle component photos) is shared directly with our store staff for fulfilling your enquiry.
              </li>
            </ul>
          </section>

          <section className="legal-section-block">
            <h2 className="legal-section-title">3. Telephone and WhatsApp Links</h2>
            <p className="legal-paragraph">
              Our website provides direct click-to-call links (<code>tel:{BUSINESS.phone}</code>) and WhatsApp chat links (<code>wa.me/{BUSINESS.whatsappNumber}</code>):
            </p>
            <ul className="legal-list">
              <li>
                <strong>Telephone Calls:</strong> Handled through your device's native telephone dialer and cellular network.
              </li>
              <li>
                <strong>WhatsApp Messaging:</strong> WhatsApp is a third-party communication platform operated by Meta Platforms, Inc. Your interactions within WhatsApp are governed by WhatsApp's own terms and privacy policy (<a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="legal-external-link">WhatsApp Privacy Policy</a>).
              </li>
            </ul>
          </section>

          <section className="legal-section-block">
            <h2 className="legal-section-title">4. Cookies and Web Analytics</h2>
            <p className="legal-paragraph">
              This website does not deploy third-party advertising trackers, cross-site profiling cookies, or behavioral advertising tools. Standard web hosting server logs (such as IP addresses, browser user-agent, and requested file paths) may be collected automatically by the hosting provider (e.g., Vercel) for operational diagnostics, traffic security, and server performance monitoring.
            </p>
          </section>

          <section className="legal-section-block">
            <h2 className="legal-section-title">5. Third-Party Maps and External Services</h2>
            <p className="legal-paragraph">
              To assist customers in locating our shop in Auto Nagar, Nellore:
            </p>
            <ul className="legal-list">
              <li>
                <strong>Directions Links:</strong> Links opening Google Maps navigate away from this website to Google Maps, governed by Google's Privacy Policy.
              </li>
              <li>
                <strong>Map Preview:</strong> We utilize privacy-friendly OpenStreetMap embeds for geographic location context. OpenStreetMap does not place commercial advertising trackers.
              </li>
            </ul>
          </section>

          <section className="legal-section-block">
            <h2 className="legal-section-title">6. Data Retention and Contact for Privacy Enquiries</h2>
            <p className="legal-paragraph">
              Because this website does not maintain an online customer database, we do not retain stored web user records. If you have communicated with us via telephone or WhatsApp and wish to update or delete any messages exchanged with our store counter, please contact us directly:
            </p>

            <div className="legal-contact-box">
              <p><strong>{BUSINESS.name}</strong></p>
              <p>Address: {BUSINESS.address.full}</p>
              <p>Direct Phone: <a href={BUSINESS.phoneHref} style={{ color: '#F6B817' }}>{BUSINESS.phoneFormatted}</a></p>
              <p>Business Location: Auto Nagar, Nellore, Andhra Pradesh, India</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
