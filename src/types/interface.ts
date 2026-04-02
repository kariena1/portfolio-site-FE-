import { ServicePlatform } from "./define";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectImage {
  id: string;
  image: string;
  link?: ProjectLink;
  name?: string;
  description?: string;
  platform?: ServicePlatform[];
}
  
export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  techStack: string[];
  summary: string;
  links: ProjectLink[];
  itemImage?: ProjectImage | null;
}