import { useEffect, useRef } from 'react';

/**
 * useScrollReveal Hook
 * Lightweight 60fps GPU-accelerated scroll reveal observer.
 * Automatically adds 'reveal-is-visible' class when elements scroll into view.
 * Unobserves after entering to prevent any memory or CPU overhead.
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // If user prefers reduced motion, immediately show elements
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('.reveal-fade-up, .reveal-fade-in, .reveal-scale-up');
        elements.forEach((el) => el.classList.add('reveal-is-visible'));
      }
      return;
    }

    if (!('IntersectionObserver' in window)) {
      if (containerRef.current) {
        const elements = containerRef.current.querySelectorAll('.reveal-fade-up, .reveal-fade-in, .reveal-scale-up');
        elements.forEach((el) => el.classList.add('reveal-is-visible'));
      }
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
        threshold: options.threshold || 0.12,
      }
    );

    const container = containerRef.current;
    if (container) {
      // If container itself has a reveal class, observe it
      if (
        container.classList.contains('reveal-fade-up') ||
        container.classList.contains('reveal-fade-in') ||
        container.classList.contains('reveal-scale-up')
      ) {
        observer.observe(container);
      }

      // Observe all child reveal elements
      const targets = container.querySelectorAll('.reveal-fade-up, .reveal-fade-in, .reveal-scale-up');
      targets.forEach((target) => observer.observe(target));
    }

    return () => {
      observer.disconnect();
    };
  }, [options.rootMargin, options.threshold]);

  return containerRef;
}

export default useScrollReveal;
