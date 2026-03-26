import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetailPage() {
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);

  if (!project) {
    return (
      <section className="py-10">
        <h2 className="text-2xl font-bold text-slate-900">프로젝트를 찾을 수 없어요.</h2>
        <Link to="/projects" className="mt-4 inline-block text-indigo-600">
          목록으로 돌아가기
        </Link>
      </section>
    );
  }

  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-slate-900">{project.title}</h2>
      <p className="mt-2 text-slate-500">{project.period}</p>
      <p className="mt-4 max-w-3xl text-slate-700">{project.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-slate-100 px-2 py-1 text-sm text-slate-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}

export default ProjectDetailPage;
