import { Section } from '../ui/Section';
import { contactLinks } from '../../data/contact';

export function Contact() {
  return (
    <Section id="contact" label="Contact" accent="cyan" title="Say hello.">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div className="space-y-6 text-lg sm:text-[1.15rem] leading-relaxed text-crt-text/85 text-pretty">
          <p>
            I'm actively looking for a <strong>remote, full-stack
            software engineering</strong> role — React/TypeScript, Node,
            and the systems work behind them. Open to product, dev-tools,
            real-time infra, and AI-integrated tooling teams. Senior IC.
          </p>
          <p>
            <a
              href="mailto:aaronjlilla@gmail.com"
              className="link-underline crt-bloom-cyan font-medium"
            >
              aaronjlilla@gmail.com
            </a>
          </p>
          <p className="text-base text-crt-text/70">
            Fastest reply by email. I respond within a day.
          </p>
        </div>

        <ul className="space-y-3 text-base">
          {contactLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                {...(link.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="link-underline crt-bloom"
              >
                {link.label} →
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
