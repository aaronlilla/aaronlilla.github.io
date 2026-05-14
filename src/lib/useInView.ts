import { useEffect, useRef, useState } from 'react';

/**
 * Returns a ref to attach to an element and a boolean that flips to true
 * the first time the element intersects the viewport. After firing once
 * the observer disconnects — used for scroll-reveal animations that
 * shouldn't replay on scroll back up.
 */
export function useInView<T extends Element = Element>(rootMargin = '0px 0px -10% 0px') {
  const ref = useRef<T | null>(null);
  const [seen, setSeen] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || seen) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setSeen(true);
            obs.disconnect();
            break;
          }
        }
      },
      { rootMargin, threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [rootMargin, seen]);

  return [ref, seen] as const;
}
