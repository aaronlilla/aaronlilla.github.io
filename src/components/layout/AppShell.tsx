import type { ReactNode } from 'react';
import { CRTScreen } from '../effects/CRTScreen';
import { NavMenu } from './NavMenu';
import { useSmoothAnchors } from '../../lib/useSmoothAnchors';

type Props = { children: ReactNode };

export function AppShell({ children }: Props) {
  useSmoothAnchors();

  return (
    <div className="relative isolate min-h-screen text-crt-text">
      <a href="#main" className="skip-link">Skip to content</a>

      <CRTScreen />

      <NavMenu />

      <main id="main" className="relative z-10">
        {children}
      </main>

      <footer className="relative z-10 border-t border-crt-edge mt-16">
        <div className="mx-auto w-full max-w-5xl px-6 sm:px-10 py-10 text-sm text-crt-muted">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <span>© {new Date().getFullYear()} Aaron Lilla.</span>
            <a href="mailto:aaronjlilla@gmail.com" className="link-underline">
              aaronjlilla@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
