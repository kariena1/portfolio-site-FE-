export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  techStack: string[];
  summary: string;
  links: ProjectLink[];
}
