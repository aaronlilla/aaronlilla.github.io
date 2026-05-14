import { Section } from '../ui/Section';
import { projects } from '../../data/projects';
import { YouTubeFacade } from '../effects/YouTubeFacade';

export function Work() {
  return (
    <Section id="work" label="Work" accent="red" title="Selected projects.">
      <ul className="divide-y divide-crt-edge">
        {projects.map((p) => {
          const allLinks = [
            ...(p.links ?? []),
            ...(p.link ? [p.link] : []),
          ];
          return (
            <li
              key={p.name}
              className="group grid gap-4 py-8 md:grid-cols-[1fr_2fr] md:gap-12"
            >
              <div>
                <h3 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-crt-text crt-bloom">
                  {p.name}
                </h3>
                <p className="mt-2 crt-label">{p.year}</p>
                <p className="mt-2 text-sm text-crt-text/70">{p.type}</p>
              </div>

              <div className="space-y-4">
                <p className="text-base sm:text-[1.05rem] leading-relaxed text-crt-text/85 text-pretty">
                  {p.description}
                </p>
                {p.outcomes && p.outcomes.length > 0 && (
                  <ul className="space-y-1.5 text-base text-crt-text/85 list-none">
                    {p.outcomes.map((o) => (
                      <li key={o} className="flex gap-3">
                        <span aria-hidden className="crt-bloom-amber select-none">›</span>
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {p.videos && p.videos.length > 0 && (
                  <div className="pt-2">
                    <p className="crt-label mb-3">Walkthroughs</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {p.videos.map((v) => (
                        <YouTubeFacade key={v.id} id={v.id} label={v.label} />
                      ))}
                    </div>
                  </div>
                )}
                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-crt-muted">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {allLinks.length > 0 && (
                  <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                    {allLinks.map((l) => (
                      <li key={l.href}>
                        <a
                          href={l.href}
                          target={l.href.startsWith('http') ? '_blank' : undefined}
                          rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="link-underline crt-bloom"
                        >
                          {l.label} →
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
