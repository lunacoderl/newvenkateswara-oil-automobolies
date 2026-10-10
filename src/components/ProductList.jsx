import React from 'react';
import { Package, MessageSquare, ShieldCheck, Tag } from 'lucide-react';
import { buildWhatsAppEnquiryUrl } from '../data/business';

export default function ProductList({ service }) {
  const { verifiedProducts, relevantBrands, title } = service;

  const handleProductEnquiry = (prodName) => {
    const url = buildWhatsAppEnquiryUrl({
      category: title,
      item: prodName,
      notes: `Enquiring about availability and pack sizes for ${prodName}.`,
    });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="service-products-section" aria-labelledby="products-heading">
      <div className="container">
        <div className="section-header-centered">
          <span className="eyebrow-badge blue">VERIFIED ON-SHELF RANGES</span>
          <h2 id="products-heading" className="heading-section">
            FEATURED ITEMS &amp; RELEVANT BRANDS
          </h2>
          <p className="section-subheading">
            Packaging and component ranges verified against visible inventory in Auto Nagar, Nellore. Contact our store counter for specific pack availability.
          </p>
        </div>

        {/* Relevant Brands Strip */}
        {relevantBrands && relevantBrands.length > 0 && (
          <div className="category-brands-row" aria-label="Brands in this category">
            <span className="brands-label">Associated Brands:</span>
            <div className="brands-pills-wrap">
              {relevantBrands.map((b) => (
                <span key={b} className="brand-pill">
                  {b}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Products Grid */}
        {verifiedProducts && verifiedProducts.length > 0 && (
          <div className="verified-products-grid">
            {verifiedProducts.map((prod, idx) => (
              <div key={idx} className="product-card">
                <div className="product-card-header">
                  <div className="product-icon-box">
                    <Package size={20} aria-hidden="true" />
                  </div>
                  <span className="product-category-tag">{prod.category}</span>
                </div>

                <div className="product-card-body">
                  <h3 className="heading-card product-title">{prod.name}</h3>
                  <p className="product-description">{prod.description}</p>

                  <div className="product-packaging-info">
                    <Tag size={14} aria-hidden="true" />
                    <span>Packaging: {prod.packaging}</span>
                  </div>
                </div>

                <div className="product-card-footer">
                  <button
                    type="button"
                    onClick={() => handleProductEnquiry(prod.name)}
                    className="btn btn-primary product-enquire-btn"
                  >
                    <MessageSquare size={15} aria-hidden="true" />
                    <span>ENQUIRE ITEM</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="product-transparency-note">
          <ShieldCheck size={16} aria-hidden="true" />
          <p>
            * Prices and quantities are confirmed at the store counter based on active manufacturer supply. We do not display speculative online pricing.
          </p>
        </div>
      </div>
    </section>
  );
}
