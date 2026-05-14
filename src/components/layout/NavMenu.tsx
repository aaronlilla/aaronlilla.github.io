import { useEffect, useState } from 'react';
import { navItems } from '../../data/nav';
import { cn } from '../../lib/cn';
import { ACCENT_BLOOM, ACCENT_BG } from '../../lib/accents';
import logoUrl from '../../assets/mainlogo-sm.webp';
import { GlowingMark } from '../effects/GlowingMark';

export function NavMenu() {
  const [active, setActive] = useState<string>(navItems[0].href);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.querySelector<HTMLElement>(n.href))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-30 border-b border-crt-edge bg-crt-bg/80 backdrop-blur-md"
    >
      {/* Top edge phosphor sweep — narrow cyan/magenta highlight that
          drifts horizontally across the very top pixel of the nav. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px animate-nav-sweep"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, var(--cyan) 45%, var(--magenta) 55%, transparent 100%)',
          backgroundSize: '40% 100%',
          backgroundRepeat: 'no-repeat',
          opacity: 0.7,
        }}
      />

      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">
        <div className="flex items-center justify-between gap-3 py-3.5">
          {/* Brand lockup */}
          <a
            href="#hero"
            className="group inline-flex items-center gap-2.5 text-crt-text/90 hover:text-crt-text"
            aria-label="Aaron Lilla — home"
          >
            <span className="inline-block transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-110">
              <GlowingMark src={logoUrl} intensity="sm" className="h-7 w-auto" />
            </span>
            <span className="hidden sm:inline font-mono text-[0.78rem] uppercase tracking-[0.22em] crt-bloom transition-[letter-spacing] duration-300 group-hover:tracking-[0.28em]">
              Aaron Lilla
            </span>
          </a>

          {/* Section nav */}
          <ul className="flex items-center gap-0.5 sm:gap-1">
            {navItems.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isActive ? 'true' : undefined}
                    className={cn(
                      'group relative inline-flex flex-col items-center px-2.5 sm:px-3.5 py-3 min-h-[44px]',
                      'text-[0.78rem] sm:text-sm tracking-wide font-mono',
                      'transition-colors duration-300',
                      isActive
                        ? ACCENT_BLOOM[item.accent]
                        : 'text-crt-muted hover:text-crt-text',
                    )}
                  >
                    <span
                      className={cn(
                        'transition-transform duration-300',
                        'group-hover:-translate-y-px',
                      )}
                    >
                      {item.label}
                    </span>
                    {/* Accent bar — grows from center on active/hover */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'absolute left-1/2 -translate-x-1/2 bottom-1.5 h-[2px] rounded-full',
                        ACCENT_BG[item.accent],
                        'transition-[width,opacity,box-shadow] duration-500 ease-out',
                        isActive
                          ? 'w-[60%] opacity-100 shadow-[0_0_8px_currentColor]'
                          : 'w-0 opacity-0 group-hover:w-[40%] group-hover:opacity-70',
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
