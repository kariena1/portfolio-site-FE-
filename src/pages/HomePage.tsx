import { Link } from "react-router-dom";

// components
import ProjectSample from "../components/main/project-sample";

function HomePage() {
  return (
    <section className="grid gap-8 md:grid-cols-2 md:items-center">
      <div>
        <p className="text-sm font-semibold text-indigo-600">Frontend Developer</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-slate-900">
          포트폴리오 사이트 기본 레이아웃
        </h1>
        <p className="mt-4 text-slate-600">
          프로젝트/소개/연락처를 중심으로 구성된 SPA 초안입니다. 콘텐츠는
          섹션별로 순차적으로 채워나가면 됩니다.
        </p>
        <div className="mt-6 flex gap-3">
          <Link
            to="/projects"
            className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
          >
            프로젝트 보기
          </Link>
          <Link
            to="/contact"
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
          >
            연락하기
          </Link>
        </div>
      </div>

      <ProjectSample />
    </section>
  );
}

export default HomePage;
