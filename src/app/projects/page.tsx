import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Du an</h1>

      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg border p-6 transition-shadow hover:shadow-md"
          >
            <h2 className="mb-2 text-xl font-semibold">{project.title}</h2>
            <p className="mb-4 text-gray-600">{project.shortDescription}</p>
            <div className="mb-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/projects/${project.id}`}
                className="font-medium text-blue-600 hover:underline"
              >
                Xem chi tiet
              </Link>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-blue-600 hover:underline"
              >
                Xem source code
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}