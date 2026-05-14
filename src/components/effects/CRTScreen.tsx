import { useReducedMotion } from '../../lib/reducedMotion';

/**
 * The single visual treatment that simulates looking at a real CRT.
 * Five fixed full-viewport overlays, layered:
 *   1. Phosphor wash      — soft warm tint that pretends to be a glowing tube
 *   2. RGB subpixel grid  — vertical R/G/B triads, very low opacity
 *   3. Scanlines          — bold horizontal lines that read as actual CRT
 *   4. Vignette + bezel   — corners darken, edges fall off
 *   5. Grain (motion-safe)— faint animated noise that breathes the image
 *
 * Each is pointer-events:none and aria-hidden. They sit over content via
 * ascending z-index but never above the boot overlay (z-100+).
 */
export function CRTScreen() {
  const reduced = useReducedMotion();

  return (
    <>
      {/* 1. Phosphor wash — two-tone tint, cyan from the top, magenta from below.
              Stronger than before so the screen looks lit, not just dark. */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[1]"
        style={{
          background: [
            'radial-gradient(ellipse 90% 65% at 50% 25%, rgba(94, 233, 212, 0.10), transparent 60%)',
            'radial-gradient(ellipse 70% 55% at 50% 95%, rgba(255, 108, 216, 0.08), transparent 65%)',
            'radial-gradient(ellipse 50% 60% at 15% 75%, rgba(91, 140, 255, 0.06), transparent 70%)',
          ].join(', '),
          mixBlendMode: 'screen',
        }}
      />

      {/* 2. RGB subpixel grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[2]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(90deg, rgba(255,0,0,1) 0 1px, rgba(0,255,0,1) 1px 2px, rgba(0,80,255,1) 2px 3px)',
          backgroundSize: '3px 100%',
          opacity: 'var(--rgb-opacity)',
          mixBlendMode: 'screen',
        }}
      />

      {/* 3. Scanlines — bold, visible, the heart of the effect */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[3]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,0,0,1) 0 2px, transparent 2px 4px)',
          opacity: 'var(--scanline-opacity)',
        }}
      />

      {/* 4. Bezel + vignette — strong corner darkening, screen-edge falloff */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[4]"
        style={{
          background: [
            'radial-gradient(ellipse 78% 62% at 50% 50%, transparent 30%, rgba(0,0,0,0.65) 82%, rgba(0,0,0,1) 100%)',
            'linear-gradient(to right, rgba(0,0,0,0.55), transparent 7%, transparent 93%, rgba(0,0,0,0.55))',
            'linear-gradient(to bottom, rgba(0,0,0,0.45), transparent 5%, transparent 95%, rgba(0,0,0,0.45))',
          ].join(', '),
          opacity: 'var(--vignette-opacity)',
        }}
      />

      {/* Inner phosphor edge glow — coloured halo bleeding in from the bezel */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-[4]"
        style={{
          boxShadow: [
            'inset 0 0 220px rgba(94, 233, 212, 0.10)',
            'inset 0 0 80px  rgba(255, 108, 216, 0.06)',
            'inset 0 0 30px  rgba(255, 230, 168, 0.05)',
          ].join(', '),
        }}
      />

      {/* 5. Grain — animated noise, breathes the static image */}
      {!reduced && (
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[5] animate-grain"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.55 0'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
            backgroundSize: '180px 180px',
            opacity: 'var(--grain-opacity)',
            mixBlendMode: 'overlay',
          }}
        />
      )}
    </>
  );
}
