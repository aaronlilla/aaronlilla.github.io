import logoUrl from '../../assets/mainlogo.png';
import { GlowingMark } from '../effects/GlowingMark';

export function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative min-h-[80vh] sm:min-h-[88vh] flex items-center"
    >
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10 py-16 sm:py-24">
        <h1 id="hero-heading" className="sr-only">
          Aaron Lilla — Full-stack software engineer
        </h1>

        <div className="grid items-center gap-10 sm:gap-14 md:grid-cols-[5fr_6fr] md:gap-16">
          <div className="order-1 md:order-1 flex justify-center md:justify-start">
            <div className="animate-bloom">
              <div className="animate-logo-breathe">
                <GlowingMark
                  src={logoUrl}
                  intensity="lg"
                  className="w-[58vw] max-w-[360px] sm:max-w-[420px] md:max-w-none md:w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="order-2 md:order-2">
            <p className="crt-label mb-5">Aaron Lilla · Full-Stack Engineer</p>

            <p className="text-2xl sm:text-3xl md:text-[2.1rem] leading-[1.25] text-crt-text text-pretty">
              Thirteen years shipping React, TypeScript, Node, and Electron.
              Lead engineer on <em className="not-italic crt-bloom-amber">TableCaptain</em>
              {' '}— deployed in 30+ poker rooms across the U.S. and Asia.
              Shipped <em className="not-italic crt-bloom-amber">Spire of Ash</em> on Steam.
              Currently building <em className="not-italic crt-bloom-amber">Holoscene</em>{' '}
              with an AI-integrated tooling pipeline.
            </p>

            <nav aria-label="Hero" className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-base">
              <a href="#work" className="link-underline crt-bloom">Selected work</a>
              <a href="/resume.html" className="link-underline crt-bloom-amber">Résumé</a>
              <a href="#contact" className="link-underline crt-bloom">Get in touch</a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
