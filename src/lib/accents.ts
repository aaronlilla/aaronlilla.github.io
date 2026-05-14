import type { Accent } from '../types';

/**
 * Maps an accent name to the matching crt-bloom-* utility class.
 * Centralized so nav, sections, and any future accent surfaces stay in sync.
 */
export const ACCENT_BLOOM: Record<Accent, string> = {
  blue:    'crt-bloom-blue',
  red:     'crt-bloom-red',
  yellow:  'crt-bloom-yellow',
  green:   'crt-bloom-green',
  cyan:    'crt-bloom-cyan',
  magenta: 'crt-bloom-magenta',
  amber:   'crt-bloom-amber',
  purple:  'crt-bloom-purple',
};

/** Background-color utility for the matching accent (used for nav indicator bars). */
export const ACCENT_BG: Record<Accent, string> = {
  blue:    'bg-crt-blue',
  red:     'bg-crt-red',
  yellow:  'bg-crt-yellow',
  green:   'bg-crt-green',
  cyan:    'bg-crt-cyan',
  magenta: 'bg-crt-magenta',
  amber:   'bg-crt-amber',
  purple:  'bg-crt-purple',
};
