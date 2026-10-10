import React, { useState } from 'react';

/**
 * SmartImage Component
 * Handles primary client JPG asset loading with graceful vector fallback to avoid broken layout shifts.
 * Follows strict SEO & Core Web Vitals requirements (explicit dimensions, LCP priority handling, lazy loading below fold).
 */
export default function SmartImage({
  src,
  fallback,
  alt = '',
  width,
  height,
  aspectRatio = '16/10',
  className = '',
  objectFit = 'cover',
  priority = false,
  sizes = '(max-width: 768px) 100vw, 50vw',
}) {
  const [hasError, setHasError] = useState(false);
  const currentSrc = hasError && fallback ? fallback : src;

  return (
    <div
      className={`smart-image-wrapper ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: aspectRatio,
        overflow: 'hidden',
        backgroundColor: '#141E28',
      }}
    >
      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        sizes={sizes}
        onError={() => {
          if (!hasError && fallback) {
            setHasError(true);
          }
        }}
        style={{
          width: '100%',
          height: '100%',
          objectFit: objectFit,
          objectPosition: 'center',
          display: 'block',
          transition: 'transform 0.4s ease',
        }}
      />
    </div>
  );
}
