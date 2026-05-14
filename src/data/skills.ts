import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    title: 'Languages',
    items: ['TypeScript', 'JavaScript (ES2024)', 'C# (.NET)', 'Node.js', 'HTML5', 'CSS3'],
  },
  {
    title: 'Frontend',
    items: ['React', 'Redux', 'Tailwind CSS', 'Vite', 'Design Systems', 'Accessibility (WCAG)', 'Figma → React'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'REST APIs', 'WebSockets', 'PostgreSQL', 'SQLite', 'Schema Design', 'Auth & Sessions'],
  },
  {
    title: 'Desktop & Real-time',
    items: ['Electron', 'IPC / Preload', 'Auto-updater', 'Native subprocess', 'Real-time sync'],
  },
  {
    title: 'Architecture & Practice',
    items: ['System Design', 'Scalable Architecture', 'Code Review', 'Mentoring', 'Agile / Scrum'],
  },
  {
    title: 'AI & Tooling',
    items: ['Claude API', 'MCP (Model Context Protocol)', 'Multi-agent pipelines', 'LLM streaming', 'Prompt engineering', 'AI-assisted development'],
  },
  {
    title: 'Testing & DevOps',
    items: ['Playwright', 'Vitest / Jest', 'CI/CD pipelines', 'Visual regression', 'Performance profiling', 'Git'],
  },
];
