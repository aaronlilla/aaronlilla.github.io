import { cn } from '../../lib/cn';

/**
 * Content-aware bloom for image marks. Stacks two blurred copies of the
 * source image behind a sharp copy on top — the blur smears the image's
 * own pixels outward, so the halo color tracks the logo color (yellow
 * areas glow yellow, cyan areas glow cyan, etc.) rather than emitting
 * a single uniform drop-shadow tint.
 *
 * The wrapper is inline-block and sized by the visible img only; the two
 * halo imgs use w-full / h-full to match the visible img exactly.
 */

type Intensity = 'sm' | 'md' | 'lg' | 'xl';

const PRESET: Record<
  Intensity,
  { tight: string; wide: string; tightOp: string; wideOp: string }
> = {
  sm: { tight: 'blur-[6px]',  wide: 'blur-md',     tightOp: 'opacity-65', wideOp: 'opacity-45' },
  md: { tight: 'blur-md',     wide: 'blur-2xl',    tightOp: 'opacity-75', wideOp: 'opacity-60' },
  lg: { tight: 'blur-xl',     wide: 'blur-[60px]', tightOp: 'opacity-80', wideOp: 'opacity-70' },
  xl: { tight: 'blur-2xl',    wide: 'blur-[100px]', tightOp: 'opacity-85', wideOp: 'opacity-75' },
};

type Props = {
  src: string;
  alt?: string;
  className?: string;        // sizing for the visible mark (w-, h-, max-w-, etc.)
  intensity?: Intensity;
};

export function GlowingMark({ src, alt = '', className, intensity = 'md' }: Props) {
  const cfg = PRESET[intensity];
  return (
    <div className="relative inline-block">
      {/* Wide soft halo — far phosphor smear */}
      <img
        src={src}
        aria-hidden="true"
        alt=""
        draggable={false}
        className={cn(
          'absolute inset-0 w-full h-full pointer-events-none select-none',
          cfg.wide,
          cfg.wideOp,
          'saturate-150',
        )}
      />
      {/* Tight bright halo — keeps the silhouette glowing */}
      <img
        src={src}
        aria-hidden="true"
        alt=""
        draggable={false}
        className={cn(
          'absolute inset-0 w-full h-full pointer-events-none select-none',
          cfg.tight,
          cfg.tightOp,
          'saturate-125',
        )}
      />
      {/* The actual logo on top, sharp */}
      <img
        src={src}
        alt={alt}
        draggable={false}
        className={cn('relative block', className)}
      />
    </div>
  );
}
