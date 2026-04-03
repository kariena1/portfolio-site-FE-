import { Link } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectsPage() {
  
  return (
    <section className="py-10">
      <h2 className="text-3xl font-bold text-slate-900">Projects</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
            <p className="mt-1 text-sm text-slate-500">{project.period}</p>
            <p className="mt-3 text-sm text-slate-600">{project.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link
              to={`/projects/${project.id}`}
              className="mt-4 inline-block text-sm font-semibold text-indigo-600"
            >
              상세 보기
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
