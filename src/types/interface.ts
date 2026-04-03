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

  // 프로젝트 정보
  title: string;

  // 프로젝트 기간
  period: string;

  // 프로젝트 사용 기술
  techStack: string[];

  // 프로젝트 한 줄 설명
  summary?: string;

  // 프로젝트 외부 링크
  links?: ProjectLink[];

  // 프로젝트 썸네일 이미지
  itemImage?: ProjectImage | null;
}