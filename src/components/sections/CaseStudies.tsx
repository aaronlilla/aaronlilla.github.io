import { Section } from '../ui/Section';
import { caseStudies } from '../../data/caseStudies';

export function CaseStudies() {
  return (
    <Section
      id="case-studies"
      label="Case Studies"
      accent="purple"
      title="Three engineering deep-dives."
    >
      <ol className="space-y-14">
        {caseStudies.map((c, idx) => (
          <li
            key={c.slug}
            className="grid gap-6 md:grid-cols-[auto_1fr] md:gap-12"
          >
            <div className="md:pt-1">
              <p className="font-display text-5xl font-medium crt-bloom-purple leading-none">
                0{idx + 1}
              </p>
            </div>
            <article className="space-y-5">
              <header className="space-y-2">
                <h3 className="font-display text-2xl sm:text-3xl font-medium text-crt-text crt-bloom">
                  {c.title}
                </h3>
                <p className="text-sm sm:text-base text-crt-text/70 italic">
                  {c.tagline}
                </p>
              </header>

              <div className="space-y-4 text-base sm:text-[1.05rem] leading-relaxed text-crt-text/85 text-pretty">
                <p>
                  <span className="crt-label mr-2">Context</span>
                  {c.context}
                </p>
                <p>
                  <span className="crt-label mr-2">Problem</span>
                  {c.problem}
                </p>
                <p>
                  <span className="crt-label mr-2">What I built</span>
                  {c.solution}
                </p>
                <p>
                  <span className="crt-label mr-2">Outcome</span>
                  {c.outcome}
                </p>
              </div>

              <ul className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-crt-muted pt-2">
                {c.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}
