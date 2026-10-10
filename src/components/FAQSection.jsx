import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQSection({ faqs, title }) {
  const [openIndex, setOpenIndex] = useState(0);

  if (!faqs || faqs.length === 0) return null;

  const toggleIndex = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="faq-section" aria-labelledby="faq-heading">
      <div className="container container-narrow">
        <div className="section-header-centered">
          <span className="eyebrow-badge blue">FREQUENT QUESTIONS</span>
          <h2 id="faq-heading" className="heading-section">
            COMMON ENQUIRIES FOR {title}
          </h2>
          <p className="section-subheading">
            Practical answers to help you identify parts, viscosity specifications, and packaging.
          </p>
        </div>

        <div className="faq-accordion" role="region" aria-label="Frequently Asked Questions">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  id={buttonId}
                  className="faq-question-btn"
                  onClick={() => toggleIndex(index)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <div className="faq-question-text">
                    <HelpCircle size={18} className="faq-icon" aria-hidden="true" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`faq-chevron ${isOpen ? 'rotated' : ''}`}
                    aria-hidden="true"
                  />
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={buttonId}
                  className="faq-answer-container"
                  style={{ display: isOpen ? 'block' : 'none' }}
                >
                  <div className="faq-answer-body">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
