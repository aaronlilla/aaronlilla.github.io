import { useState } from 'react';
import { AppShell } from './components/layout/AppShell';
import { Bumper } from './components/sections/Bumper';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Work } from './components/sections/Work';
import { CaseStudies } from './components/sections/CaseStudies';
import { Stack } from './components/sections/Stack';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';

export default function App() {
  const [intro, setIntro] = useState(true);

  return (
    <>
      {intro && <Bumper onComplete={() => setIntro(false)} />}
      <AppShell>
        <Hero />
        <About />
        <Work />
        <CaseStudies />
        <Stack />
        <Experience />
        <Contact />
      </AppShell>
    </>
  );
}
