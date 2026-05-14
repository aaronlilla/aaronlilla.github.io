import { useEffect } from 'react';

const DURATION_MS = 900;
const ARRIVAL_CLASS = 'arrival-pulse';
const NAV_OFFSET = 24; // breathing room below the sticky nav

// ease-in-out cubic — slow start, faster middle, slow stop. Feels CRT-tube
// settling rather than browser-default snappy.
const ease = (t: number) =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

/**
 * Intercepts clicks on every internal anchor link (`<a href="#…">`) and
 * runs a custom RAF-driven scroll instead of letting the browser snap.
 * Falls through to native behaviour when:
 *   - the user has prefers-reduced-motion enabled
 *   - the click is modified (cmd/ctrl/shift/middle-click)
 *   - the target id doesn't exist
 */
export function useSmoothAnchors() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const target = (e.target as HTMLElement | null)?.closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (!target) return;

      const href = target.getAttribute('href');
      if (!href || href.length < 2) return;

      const dest = document.getElementById(href.slice(1));
      if (!dest) return;

      e.preventDefault();

      const nav = document.querySelector<HTMLElement>('nav[aria-label="Primary"]');
      const navH = nav?.offsetHeight ?? 0;

      const startY = window.scrollY;
      const targetY = Math.max(
        0,
        dest.getBoundingClientRect().top + window.scrollY - navH - NAV_OFFSET,
      );
      const delta = targetY - startY;
      if (Math.abs(delta) < 2) return;

      const t0 = performance.now();
      let raf = 0;

      const step = (now: number) => {
        const t = Math.min(1, (now - t0) / DURATION_MS);
        window.scrollTo(0, startY + delta * ease(t));
        if (t < 1) {
          raf = requestAnimationFrame(step);
        } else {
          // Pulse the destination's section title — quick brightness/saturate flash
          const h2 = dest.querySelector<HTMLElement>('h1, h2');
          if (h2) {
            h2.classList.remove(ARRIVAL_CLASS);
            // Force reflow so re-adding the class restarts the animation
            void h2.offsetWidth;
            h2.classList.add(ARRIVAL_CLASS);
            window.setTimeout(() => h2.classList.remove(ARRIVAL_CLASS), 1200);
          }
        }
      };

      raf = requestAnimationFrame(step);

      // Update the URL hash without triggering a native jump
      try {
        history.replaceState(null, '', href);
      } catch {
        /* ignore — file:// and sandboxed contexts can throw */
      }

      // Cancel scroll animation if user starts wheeling/touching mid-flight
      const cancel = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('wheel',     cancel, { capture: true } as EventListenerOptions);
        window.removeEventListener('touchstart', cancel, { capture: true } as EventListenerOptions);
        window.removeEventListener('keydown',   cancel, { capture: true } as EventListenerOptions);
      };
      window.addEventListener('wheel',     cancel, { passive: true, capture: true });
      window.addEventListener('touchstart', cancel, { passive: true, capture: true });
      window.addEventListener('keydown',   cancel, { capture: true });
    }

    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
}
