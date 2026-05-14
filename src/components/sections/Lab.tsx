import { Section } from '../ui/Section';
import { experiments } from '../../data/lab';

export function Lab() {
  return (
    <Section id="lab" label="Lab" accent="magenta" title="Side things and experiments.">
      <ul className="grid gap-10 sm:gap-12 sm:grid-cols-2">
        {experiments.map((e) => (
          <li key={e.name}>
            <h3 className="font-display text-xl font-medium text-crt-text crt-bloom">
              {e.name}
            </h3>
            <p className="mt-3 text-base leading-relaxed text-crt-text/85 text-pretty">
              {e.blurb}
            </p>
            {e.href && (
              <p className="mt-3">
                <a href={e.href} className="link-underline text-sm crt-bloom">
                  Open →
                </a>
              </p>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
