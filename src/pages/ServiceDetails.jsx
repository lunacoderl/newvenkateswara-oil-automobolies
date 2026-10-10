import React from 'react';
import { useParams } from 'react-router-dom';
import { getServiceBySlug } from '../data/services';
import SEO from '../components/SEO';
import ServiceHero from '../components/ServiceHero';
import ServiceOverview from '../components/ServiceOverview';
import SelectionGuidance from '../components/SelectionGuidance';
import ProductList from '../components/ProductList';
import RelatedServices from '../components/RelatedServices';
import FAQSection from '../components/FAQSection';
import ServiceCTA from '../components/ServiceCTA';
import NotFound from './NotFound';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  // If slug is not recognized or not published, render NotFound component
  if (!service) {
    return <NotFound />;
  }

  const handleEnquireScroll = () => {
    const elem = document.getElementById('selection-guidance');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Build BreadcrumbList JSON-LD Schema
  const origin = typeof window !== 'undefined' ? window.location.origin : '';
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${origin}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: service.categoryType === 'parts' ? 'Commercial Spare Parts' : 'Automotive Lubricants',
        item: `${origin}/#shop-by-product`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: service.title,
        item: `${origin}/services/${service.slug}`,
      },
    ],
  };

  return (
    <div className="service-details-page">
      <SEO
        title={service.seoTitle}
        description={service.seoDescription}
        canonicalPath={`/services/${service.slug}`}
        schemaData={breadcrumbSchema}
      />

      <main id="main-content" tabIndex="-1">
        {/* Section B: Hero with Breadcrumbs */}
        <ServiceHero service={service} onEnquireClick={handleEnquireScroll} />

        {/* Section C: Overview */}
        <ServiceOverview service={service} />

        {/* Section D: Category-Specific Selection Guidance & WhatsApp Form */}
        <SelectionGuidance service={service} />

        {/* Section E: Products & Brands */}
        <ProductList service={service} />

        {/* Section F: Related Categories */}
        <RelatedServices currentSlug={service.slug} />

        {/* Section G: FAQs */}
        <FAQSection faqs={service.faqs} title={service.title} />

        {/* Section H: Conversion Panel */}
        <ServiceCTA title={service.shortTitle || service.title} />
      </main>
    </div>
  );
}
