import React from 'react';

/**
 * Skeleton Component
 * High-performance shimmering skeleton loader for smooth content loading states
 * Prevents Layout Shift (CLS) and provides immediate visual feedback.
 */
export default function Skeleton({
  variant = 'rect',
  width,
  height,
  aspectRatio,
  borderRadius,
  className = '',
  theme = 'dark', // 'dark' | 'light'
  style = {},
  ...props
}) {
  const isLight = theme === 'light';
  const shimmerClass = isLight ? 'skeleton-shimmer-light' : '';

  const getVariantStyles = () => {
    switch (variant) {
      case 'circle':
        return {
          borderRadius: '50%',
          width: width || '44px',
          height: height || width || '44px',
        };
      case 'badge':
        return {
          borderRadius: '9999px',
          height: height || '26px',
          width: width || '110px',
        };
      case 'text':
        return {
          borderRadius: '4px',
          height: height || '16px',
          width: width || '100%',
        };
      case 'card':
        return {
          borderRadius: borderRadius || '12px',
          width: width || '100%',
          height: height || '220px',
        };
      case 'rect':
      default:
        return {
          borderRadius: borderRadius || '8px',
          width: width || '100%',
          height: height || '100%',
          aspectRatio: aspectRatio,
        };
    }
  };

  return (
    <div
      role="status"
      aria-label="Loading content"
      className={`skeleton-shimmer-wrapper ${shimmerClass} ${className}`}
      style={{
        ...getVariantStyles(),
        ...style,
      }}
      {...props}
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
