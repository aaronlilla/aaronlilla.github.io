import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript (ES2024)', 'C# (.NET)', 'Node.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Redux', 'Tailwind CSS', 'Vite', 'Next.js', 'Design Systems', 'Accessibility (WCAG)'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'REST APIs', 'WebSockets', 'PostgreSQL', 'SQLite', 'Auth & Sessions'],
  },
  {
    title: 'Desktop & Real-time',
    items: ['Electron', 'IPC / Preload', 'Auto-updater', 'Native subprocess', 'Real-time sync'],
  },
  {
    title: 'AI & Tooling',
    items: ['Claude API', 'MCP (Model Context Protocol)', 'Multi-agent pipelines', 'LLM streaming', 'Prompt engineering'],
  },
  {
    title: 'Testing & DevOps',
    items: ['Playwright', 'Vitest / Jest', 'CI/CD pipelines', 'Visual regression', 'Performance profiling'],
  },
];
