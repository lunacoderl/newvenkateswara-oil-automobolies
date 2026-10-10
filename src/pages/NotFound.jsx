import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="not-found-page">
      <SEO
        title="Page Not Found | New Venkateswara Oil & Automobiles"
        description="The page you requested could not be found. Return to New Venkateswara Oil & Automobiles in Auto Nagar, Nellore."
        canonicalPath="/404"
      />

      <div className="container">
        <div className="not-found-card">
          <div className="not-found-badge">404</div>

          <h1 className="heading-hero not-found-headline">
            LOOKS LIKE WE TOOK A WRONG TURN.
          </h1>

          <p className="not-found-desc">
            The page you're looking for isn't available. Head back and explore our commercial vehicle spare parts and automotive lubricants.
          </p>

          <div className="not-found-actions">
            <Link to="/" className="btn btn-primary not-found-btn">
              <Home size={18} aria-hidden="true" />
              <span>BACK TO HOME</span>
            </Link>

            <a href="/#product-divisions" className="btn btn-secondary not-found-btn">
              <span>EXPLORE DIVISIONS</span>
            </a>
          </div>

          <div className="not-found-categories-box">
            <span className="categories-box-title">Explore Verified Product Categories</span>
            <div className="quick-category-pills">
              <Link to="/services/commercial-vehicle-spare-parts" className="quick-cat-pill">
                Commercial Spare Parts
              </Link>
              <Link to="/services/engine-oil" className="quick-cat-pill">
                Engine Oil
              </Link>
              <Link to="/services/gear-oil" className="quick-cat-pill">
                Gear Oil
              </Link>
              <Link to="/services/hydraulic-oil" className="quick-cat-pill">
                Hydraulic Oil
              </Link>
              <Link to="/services/lubricating-grease" className="quick-cat-pill">
                Lubricating Grease
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
