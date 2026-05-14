export type ProjectLink = {
  label: string;
  href: string;
};

export type ProjectVideo = {
  /** YouTube video ID, e.g. "wgbSgOx5LfE" from a /watch?v= or /embed/ URL. */
  id: string;
  label: string;
};

export type Project = {
  name: string;
  type: string;
  stack: string[];
  year: string;
  description: string;
  outcomes?: string[];
  links?: ProjectLink[];
  videos?: ProjectVideo[];
  /** Back-compat — single link, deprecated in favor of `links`. */
  link?: ProjectLink;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Role = {
  period: string;
  title: string;
  org: string;
  summary: string;
  bullets?: string[];
  stack?: string[];
};

export type Experiment = {
  name: string;
  blurb: string;
  href?: string;
};

export type ContactLink = {
  label: string;
  href: string;
};

export type Accent =
  | 'blue' | 'red' | 'yellow' | 'green' | 'cyan' | 'magenta' | 'amber' | 'purple';

export type NavItem = {
  label: string;
  href: string;
  accent: Accent;
};
