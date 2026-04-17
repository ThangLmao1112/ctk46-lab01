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
      <Link href="/projects" className="text-sm text-emerald-600 hover:underline dark:text-emerald-400">
        ← Quay lại danh sách dự án
      </Link>

      <article className="mt-4 rounded-lg border p-6 dark:border-gray-700 dark:bg-gray-800">
        <p className="mb-2 text-sm uppercase tracking-wide text-gray-400">
          Dự án chi tiết
        </p>
        <h1 className="text-3xl font-bold">{project.title}</h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">{project.description}</p>

        <div className="mt-6">
          <h2 className="mb-3 text-lg font-semibold">Công nghệ sử dụng</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
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
            className="font-medium text-emerald-600 hover:underline dark:text-emerald-400"
          >
            Xem source code trên GitHub
          </a>
        </div>
      </article>
    </div>
  );
}
