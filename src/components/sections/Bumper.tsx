import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../lib/reducedMotion';
import { cn } from '../../lib/cn';
import logoUrl from '../../assets/mainlogo.png';
import { GlowingMark } from '../effects/GlowingMark';

type Props = { onComplete: () => void };

const HOLD_MS = 1400;
const FADE_MS = 600;

export function Bumper({ onComplete }: Props) {
  const reduced = useReducedMotion();
  const [mounted, setMounted] = useState(true);
  const [fading, setFading]   = useState(false);
  const finishedRef = useRef(false);

  const finish = () => {
    if (finishedRef.current) return;
    finishedRef.current = true;
    setFading(true);
    window.setTimeout(() => {
      setMounted(false);
      onComplete();
    }, FADE_MS);
  };

  useEffect(() => {
    if (reduced) {
      finishedRef.current = true;
      setMounted(false);
      onComplete();
      return;
    }
    const t = window.setTimeout(finish, HOLD_MS);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!mounted) return;
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        finish();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Aaron Lilla"
      className={cn(
        'fixed inset-0 z-[100] bg-black',
        'flex items-center justify-center',
        'transition-opacity ease-out',
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100',
      )}
      style={{ transitionDuration: `${FADE_MS}ms` }}
      onClick={finish}
    >
      <button
        type="button"
        onClick={(e) => { e.stopPropagation(); finish(); }}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-xs uppercase tracking-[0.2em] text-crt-muted hover:text-crt-text transition-colors"
        aria-label="Skip intro"
      >
        Skip
      </button>

      <div
        className={cn(
          'select-none px-6',
          'animate-lock-in',
          'animate-flicker',
        )}
      >
        <GlowingMark
          src={logoUrl}
          alt="Aaron Lilla"
          intensity="xl"
          className="h-[55vh] sm:h-[60vh] md:h-[65vh] w-auto select-none"
        />
      </div>
    </div>
  );
}
