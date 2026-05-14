import { Section } from '../ui/Section';
import { roles } from '../../data/experience';

export function Experience() {
  return (
    <Section id="experience" label="Experience" accent="yellow" title="Where I've been.">
      <ol className="divide-y divide-crt-edge">
        {roles.map((r, i) => (
          <li key={i} className="grid gap-3 py-8 md:grid-cols-[1fr_2.5fr] md:gap-12">
            <p className="crt-label">{r.period}</p>
            <div className="space-y-3">
              <h3 className="font-display text-xl sm:text-2xl font-medium text-crt-text crt-bloom">
                {r.title}
              </h3>
              <p className="text-sm text-crt-muted">{r.org}</p>
              <p className="text-base leading-relaxed text-crt-text/85 text-pretty">
                {r.summary}
              </p>
              {r.bullets && r.bullets.length > 0 && (
                <ul className="space-y-1.5 text-base text-crt-text/85 list-none pt-1">
                  {r.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span aria-hidden className="crt-bloom-amber select-none">›</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
              {r.stack && r.stack.length > 0 && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-crt-muted pt-1">
                  {r.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
