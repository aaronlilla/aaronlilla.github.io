import type { ReactNode } from 'react';
import type { Accent } from '../../types';
import { cn } from '../../lib/cn';
import { ACCENT_BLOOM } from '../../lib/accents';
import { useInView } from '../../lib/useInView';

type Props = {
  id: string;
  label: string;
  title: string;
  accent?: Accent;
  children: ReactNode;
  className?: string;
};

export function Section({ id, label, title, accent, children, className }: Props) {
  const headingId = `${id}-heading`;
  const accentClass = accent ? ACCENT_BLOOM[accent] : 'crt-bloom';
  const [ref, seen] = useInView<HTMLDivElement>('0px 0px -15% 0px');

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn('relative scroll-mt-24 py-24 sm:py-32', className)}
    >
      <div
        ref={ref}
        className={cn(
          'mx-auto w-full max-w-5xl px-6 sm:px-10',
          'transition-all duration-[900ms] ease-out will-change-[opacity,transform]',
          seen
            ? 'opacity-100 translate-y-0 [filter:blur(0)]'
            : 'opacity-0 translate-y-6 [filter:blur(6px)]',
        )}
      >
        <p className="crt-label mb-4">{label}</p>
        <h2
          id={headingId}
          className={cn(
            'font-display text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-balance',
            accentClass,
          )}
        >
          {title}
        </h2>
        <div className="mt-12 sm:mt-16">{children}</div>
      </div>
    </section>
  );
}
