import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, ArrowUp } from 'lucide-react';
import { BUSINESS } from '../data/business';

export default function FloatingContactActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    'Hello New Venkateswara Oil & Automobiles, I would like to enquire about product availability.'
  );
  const whatsappUrl = `${BUSINESS.whatsappBaseUrl}?text=${whatsappMessage}`;

  return (
    <>
      {/* Desktop Persistent Floating Actions (Right Side Vertical Rail) */}
      <aside
        className="desktop-floating-rail"
        aria-label="Quick contact actions"
      >
        <a
          href={BUSINESS.phoneHref}
          className="floating-btn phone-btn"
          aria-label={`Call New Venkateswara Oil & Automobiles directly at ${BUSINESS.phoneFormatted}`}
          title={`Call ${BUSINESS.phone}`}
        >
          <Phone size={20} aria-hidden="true" />
          <span className="floating-tooltip">Call Now: {BUSINESS.phone}</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="floating-btn whatsapp-btn"
          aria-label="Send product enquiry via WhatsApp"
          title="WhatsApp Enquiry"
        >
          <MessageSquare size={20} aria-hidden="true" />
          <span className="floating-tooltip">WhatsApp Enquiry</span>
        </a>

        {showScrollTop && (
          <button
            type="button"
            className="floating-btn scroll-btn"
            onClick={handleScrollTop}
            aria-label="Scroll to top of page"
            title="Scroll to Top"
          >
            <ArrowUp size={20} aria-hidden="true" />
            <span className="floating-tooltip">Scroll to Top</span>
          </button>
        )}
      </aside>

      {/* Mobile Separate Floating Scroll to Top (Appears above the bottom bar when scrolled) */}
      {showScrollTop && (
        <button
          type="button"
          className="mobile-floating-scroll-top"
          onClick={handleScrollTop}
          aria-label="Scroll back to top"
        >
          <ArrowUp size={20} aria-hidden="true" />
        </button>
      )}

      {/* Mobile Fixed Bottom Contact Bar */}
      <nav
        className="mobile-bottom-bar"
        aria-label="Mobile quick contact bar"
      >
        <div className="mobile-bottom-bar-inner">
          <a
            href={BUSINESS.phoneHref}
            className="mobile-bar-action phone-action"
            aria-label={`Call ${BUSINESS.phone}`}
          >
            <Phone size={18} aria-hidden="true" />
            <span>Call Now</span>
          </a>

          <div className="mobile-bar-divider" aria-hidden="true"></div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-bar-action whatsapp-action"
            aria-label="WhatsApp Enquiry"
          >
            <MessageSquare size={18} aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
        </div>
      </nav>
    </>
  );
}
