import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        crt: {
          bg:      'var(--bg)',
          'bg-soft': 'var(--bg-soft)',
          panel:   'var(--panel)',
          edge:    'var(--panel-edge)',
          text:    'var(--text)',
          muted:   'var(--muted)',
          blue:    'var(--blue)',
          red:     'var(--red)',
          yellow:  'var(--yellow)',
          green:   'var(--green)',
          cyan:    'var(--cyan)',
          magenta: 'var(--magenta)',
          amber:   'var(--amber)',
          purple:  'var(--purple)',
          orange:  'var(--orange)',
        },
      },
      fontFamily: {
        sans:    ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'Menlo', 'Consolas', 'monospace'],
        display: ['Orbitron', 'Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: '1' },
          '4%':       { opacity: '0.72' },
          '5%':       { opacity: '1' },
          '32%':      { opacity: '1' },
          '33%':      { opacity: '0.86' },
          '34%':      { opacity: '1' },
          '71%':      { opacity: '1' },
          '72%':      { opacity: '0.78' },
          '73%':      { opacity: '1' },
        },
        bloom: {
          '0%, 100%': { opacity: '0.82', filter: 'saturate(1) brightness(1)' },
          '50%':      { opacity: '1',    filter: 'saturate(1.18) brightness(1.10)' },
        },
        'logo-breathe': {
          '0%, 100%': { transform: 'scale(1)     rotate(0deg)' },
          '50%':      { transform: 'scale(1.025) rotate(0.5deg)' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'lock-in': {
          '0%':   { opacity: '0',   filter: 'blur(14px)', transform: 'scale(0.96)' },
          '40%':  { opacity: '0.6', filter: 'blur(4px)',  transform: 'scale(1.01)' },
          '100%': { opacity: '1',   filter: 'blur(0)',    transform: 'scale(1)' },
        },
        grain: {
          '0%':   { transform: 'translate(0, 0)' },
          '20%':  { transform: 'translate(-3%, 2%)' },
          '40%':  { transform: 'translate(2%, -4%)' },
          '60%':  { transform: 'translate(-1%, 3%)' },
          '80%':  { transform: 'translate(3%, -1%)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        'nav-sweep': {
          '0%':   { backgroundPosition: '-50% 0', opacity: '0' },
          '10%':  { opacity: '1' },
          '90%':  { opacity: '1' },
          '100%': { backgroundPosition: '150% 0', opacity: '0' },
        },
      },
      animation: {
        'flicker':      'flicker 5s linear infinite',
        'bloom':        'bloom 4.5s ease-in-out infinite',
        'logo-breathe': 'logo-breathe 7s ease-in-out infinite',
        'fade-up':      'fade-up 0.6s ease-out both',
        'lock-in':      'lock-in 900ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'grain':        'grain 1.6s steps(4) infinite',
        'nav-sweep':    'nav-sweep 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
