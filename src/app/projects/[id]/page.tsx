import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Link href="/projects" className="text-sm text-blue-600 hover:underline">
        ← Quay lại danh sách dự án
      </Link>

      <article className="mt-4 rounded-lg border p-6">
        <p className="mb-2 text-sm uppercase tracking-wide text-gray-400">
          Dự án chi tiết
        </p>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-4 text-gray-600">{project.description}</p>

        <div className="mt-6">
          <h2 className="mb-3 text-lg font-semibold">Công nghệ sử dụng</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-blue-600 hover:underline"
          >
            Xem source code trên GitHub
          </a>
        </div>
      </article>
    </div>
  );
}
