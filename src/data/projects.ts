import type { ProjectItem, ProjectImage } from "../types/interface";
import { ServicePlatform } from "../types/define";

export const projects: ProjectItem[] = [
  {
    id: "portfolio-ai",
    title: "AI 기반 포트폴리오 사이트",
    period: "2026",
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    summary: "Cursor와 함께 제작 과정을 기록하는 포트폴리오 SPA",
    links: [{ label: "Demo", href: "#" }],
  },
];


export const projectSamples: ProjectImage[] = [
  {
    id: "tb",
    image: "./tb-1.png",
    name: "Text Battle",
    description: "(로그브릭스) Text Battle",
    platform: [ServicePlatform.GOOGLE_PLAY, ServicePlatform.APPLE_STORE],
  },
  {
    id: "dw",
    image: "./dw-1.png",
    name: "드래곤 워즈",
    description: "(KnetP) 드래곤 워즈",
    platform: [ServicePlatform.GOOGLE_PLAY],
  },
  {
    id: "pigu",
    image: "./pigu-w-1.png",
    name: "피구왕 통키: 불꽃슛의 전설",
    description: "(SnowPip) 피구왕 통키: 불꽃슛의 전설",
    platform: [ServicePlatform.GOOGLE_PLAY],
  },
  {
    id: "sq-p",
    image: "./sq-p-1.png",
    name: "스퀘어 퍼즐",
    description: "(라텔게임즈) 스퀘어 퍼즐",
    platform: [ServicePlatform.GOOGLE_PLAY, ServicePlatform.APPLE_STORE],
  },
  {
    id: "sq-w",
    image: "./sq-w-1.png",
    name: "스퀘어 월드",
    description: "(라텔게임즈) 스퀘어 월드",
    platform: [ServicePlatform.GOOGLE_PLAY],
  },
  {
    id: "sq-h",
    image: "./sq-h-1.png",
    name: "스퀘어 하츠",
    description: "(라텔게임즈) 스퀘어 하츠",
    platform: [ServicePlatform.GOOGLE_PLAY],
  },
  {
    id: "fm",
    image: "./moon-1.png",
    name: "만월의 저택",
    description: "(라텔게임즈) 만월의 저택",
    platform: [ServicePlatform.STEAM],
  },
];