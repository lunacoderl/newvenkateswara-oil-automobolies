import React, { useState } from 'react';
import Skeleton from './Skeleton';

/**
 * SmartImage Component
 * Enhanced with Skeleton Shimmer loading and Progressive Blur-to-Sharp Reveal animation.
 * Follows Core Web Vitals best practices: explicit aspect-ratio (zero CLS), lazy loading below fold.
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
  theme = 'dark',
}) {
  const [isLoaded, setIsLoaded] = useState(false);
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
        backgroundColor: theme === 'dark' ? '#0F1722' : '#E2E8F0',
        borderRadius: 'inherit',
      }}
    >
      {/* Shimmer Skeleton Placeholder: visible until image decodes */}
      {!isLoaded && !hasError && (
        <Skeleton
          theme={theme}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
          }}
        />
      )}

      <img
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
        decoding={priority ? 'sync' : 'async'}
        sizes={sizes}
        onLoad={() => setIsLoaded(true)}
        onError={() => {
          if (!hasError && fallback) {
            setHasError(true);
          } else {
            setIsLoaded(true); // stop skeleton on unrecoverable error
          }
        }}
        className={`smart-image-img ${isLoaded ? 'is-loaded' : ''}`}
        style={{
          width: '100%',
          height: '100%',
          objectFit: objectFit,
          objectPosition: 'center',
          display: 'block',
          position: 'relative',
          zIndex: 2,
        }}
      />
    </div>
  );
}
