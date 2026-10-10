import { useEffect } from 'react';
import { BUSINESS } from '../data/business';

/**
 * SEO Head Component
 * Dynamically updates document title, meta descriptions, Open Graph tags, canonical links,
 * and valid JSON-LD LocalBusiness or Breadcrumb structured data.
 */
export default function SEO({
  title,
  description,
  canonicalPath = '/',
  ogType = 'website',
  schemaData = null,
}) {
  const fullTitle = title
    ? `${title}`
    : `${BUSINESS.name} | Spare Parts & Lubricants in Nellore`;

  const metaDesc =
    description ||
    'Explore commercial vehicle spare parts and automotive oils and lubricants at New Venkateswara Oil & Automobiles, Auto Nagar, Nellore.';

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Update Meta Description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.name = 'description';
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.content = metaDesc;

    // Update OG Tags
    const updateMeta = (prop, content) => {
      let tag = document.querySelector(`meta[property="${prop}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', prop);
        document.head.appendChild(tag);
      }
      tag.content = content;
    };

    updateMeta('og:title', fullTitle);
    updateMeta('og:description', metaDesc);
    updateMeta('og:type', ogType);

    // Update Canonical
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    canonicalTag.href = `${origin}${canonicalPath}`;

    // Update JSON-LD structured data if provided
    let scriptTag = document.getElementById('json-ld-structured-data');
    if (schemaData) {
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'json-ld-structured-data';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.textContent = JSON.stringify(schemaData);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [fullTitle, metaDesc, canonicalPath, ogType, schemaData]);

  return null;
}
