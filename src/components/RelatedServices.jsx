import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SmartImage from './SmartImage';
import { getRelatedServices } from '../data/services';

export default function RelatedServices({ currentSlug }) {
  const related = getRelatedServices(currentSlug);
  if (!related || related.length === 0) return null;

  return (
    <section className="related-services-section" aria-labelledby="related-heading">
      <div className="container">
        <div className="section-header-centered">
          <span className="eyebrow-badge dark">EXPLORE COMPLEMENTARY CATEGORIES</span>
          <h2 id="related-heading" className="heading-section">
            RELATED PRODUCT DIVISIONS
          </h2>
          <p className="section-subheading">
            Commercial vehicle operators often require matching lubricants and replacement components together.
          </p>
        </div>

        <div className="related-services-grid">
          {related.map((service) => (
            <div key={service.slug} className="related-card">
              <div className="related-card-image-wrap">
                <SmartImage
                  src={service.heroImage}
                  fallback={service.heroImageFallback}
                  alt={service.imageAlt}
                  width={400}
                  height={250}
                  aspectRatio="16/10"
                  className="related-img"
                />
              </div>

              <div className="related-card-body">
                <span className="related-category-pill">
                  {service.categoryType === 'parts' ? 'Commercial Spares' : 'Automotive Lubricants'}
                </span>
                <h3 className="heading-card related-title">{service.title}</h3>
                <p className="related-desc">{service.shortDescription}</p>

                <Link to={`/services/${service.slug}`} className="related-link">
                  <span>Explore Category</span>
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
