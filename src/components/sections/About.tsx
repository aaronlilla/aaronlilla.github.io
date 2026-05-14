import { Section } from '../ui/Section';

export function About() {
  return (
    <Section id="about" label="About" accent="blue" title="Full-stack engineer who ships.">
      <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:gap-16">
        <div className="space-y-6 text-lg sm:text-[1.15rem] leading-relaxed text-crt-text/85 text-pretty">
          <p>
            I'm a full-stack software engineer with thirteen years of web
            development experience and eight-plus years deep in modern
            JavaScript. I work end-to-end — React and TypeScript on the
            client, Node on the server, Electron for desktop, and the
            real-time plumbing that holds it all together.
          </p>
          <p>
            For six years I led front-end engineering on{' '}
            <span className="crt-bloom-amber">TableCaptain</span>, a React +
            Electron platform deployed in <strong>30+ poker rooms</strong>{' '}
            across the U.S. and Asia — orchestrating <strong>450+ concurrent
            in-venue displays</strong> over a single WebSocket fabric with
            sub-second latency. Real-time TV displays, dealer rotation,
            waitlist, an Electron auto-updater shipping hotfixes in under ten
            minutes — owned the codebase, the design system, and the release
            pipeline. By 2024 it reached a market-leading adoption position
            for casino-floor management.
          </p>
          <p>
            On the side I ship games under{' '}
            <span className="crt-bloom-amber">Afterimage Studio</span> — my
            indie studio. <span className="crt-bloom-amber">Spire of Ash</span>
            {' '}is live on Steam, and I'm currently building{' '}
            <span className="crt-bloom-amber">Holoscene</span>: a deterministic
            combat engine with a TypeScript reference spec, a Monte Carlo parity
            validator, and an MCP-integrated balance simulator that lets Claude
            prototype and verify changes in a single command. It's the most
            interesting systems work I've done, and a lot of it generalizes
            directly to high-scale product engineering.
          </p>
          <p>
            I care about taste: how a screen feels, how an interaction lands,
            how much complexity a codebase asks of the people maintaining it.
          </p>
        </div>

        <dl className="grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
          <div>
            <dt className="crt-label">Based</dt>
            <dd className="mt-2 text-crt-text/90">Las Vegas, NV</dd>
          </div>
          <div>
            <dt className="crt-label">Open to</dt>
            <dd className="mt-2 text-crt-text/90">Remote, full-stack</dd>
          </div>
          <div>
            <dt className="crt-label">Years</dt>
            <dd className="mt-2 text-crt-text/90">2012 — present</dd>
          </div>
          <div>
            <dt className="crt-label">Focus</dt>
            <dd className="mt-2 text-crt-text/90">React · TS · Node · Electron · AI tooling</dd>
          </div>
          <div className="col-span-2">
            <dt className="crt-label">Résumé</dt>
            <dd className="mt-2 text-crt-text/90">
              <a href="/resume.html" className="link-underline crt-bloom-amber">View / print →</a>
            </dd>
          </div>
        </dl>
      </div>
    </Section>
  );
}
