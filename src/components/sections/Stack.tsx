import { Section } from '../ui/Section';
import { skillGroups } from '../../data/skills';

export function Stack() {
  return (
    <Section id="stack" label="Stack" accent="green" title="Tools I reach for.">
      <div className="grid gap-10 sm:gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="crt-label">{group.title}</h3>
            <ul className="mt-4 space-y-2 text-base sm:text-[1.05rem] text-crt-text/85">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
