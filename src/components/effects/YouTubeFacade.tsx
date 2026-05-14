import { useState } from 'react';

type Props = {
  id: string;
  label: string;
  className?: string;
};

/**
 * Click-to-play YouTube thumbnail. Avoids loading the heavy YT iframe
 * until the user opts in — important when stacking multiple embeds in
 * one section. Falls back to lazy-loaded iframe once activated.
 */
export function YouTubeFacade({ id, label, className }: Props) {
  const [activated, setActivated] = useState(false);

  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
  const embedSrc =
    `https://www.youtube-nocookie.com/embed/${id}` +
    `?autoplay=1&rel=0&modestbranding=1`;

  if (activated) {
    return (
      <div
        className={`relative aspect-video overflow-hidden rounded-md border border-crt-edge ${className ?? ''}`}
      >
        <iframe
          src={embedSrc}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      aria-label={`Play video: ${label}`}
      className={`group relative aspect-video overflow-hidden rounded-md border border-crt-edge bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-crt-bg focus-visible:ring-[color:var(--cyan)] ${className ?? ''}`}
    >
      <img
        src={thumb}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
      />
      {/* Scanline overlay tint */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.45) 100%)',
        }}
      />
      {/* Play indicator */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center"
      >
        <span className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-black/55 border border-white/40 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 sm:h-8 sm:w-8 translate-x-[1px] fill-current text-white drop-shadow"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </div>
      {/* Label */}
      <span className="absolute bottom-2 left-2 right-2 text-left text-[0.78rem] sm:text-sm font-mono uppercase tracking-[0.14em] text-white/90 drop-shadow">
        {label}
      </span>
    </button>
  );
}
