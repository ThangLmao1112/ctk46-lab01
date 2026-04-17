const projects = [	
  {	
    title: "Website Portfolio",	
    description: "Website cá nhân xây dựng bằng Next.JS và Tailwind CSS",	
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],	
    status: "Đang phát triển",	
  },	
  {	
    title: "Ứng dụng Quản lý Công việc",	
    description: "Ứng dụng Todo App với React và Local Storage",tech: ["React", "CSS Modules", "JavaScript"],	
    status: "Hoàn thành",	
  },	
  {	
    title: "API RESTful",	
    description: "API quản lý sản phẩm với Node.js và Express",	
    tech: ["Node.js", "Express", "MongoDB"],	
    status: "Hoàn thành",	
  },	
  {	
    title: "Chat Realtime",	
    description: "Ứng dụng chat realtime với Socket.IO",	
    tech: ["React", "Socket.IO", "Node.js"],	
    status: "Đang phát triển",	
  },	
];	
	
export default function ProjectsPage() {	
  return (	
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Dự án</h1>
	
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, index) => (	
          <div	
            key={index}	
            className="flex flex-col rounded-lg border p-6 transition-shadow hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
          >	
            <div className="mb-2 flex items-center justify-between">
              <h2 className="text-xl font-semibold">{project.title}</h2>	
              <span	
                className={`text-xs px-2 py-1 rounded-full ${	
                  project.status === "Hoàn thành"	
                    ? "bg-green-100 text-green-700"	
                    : "bg-yellow-100 text-yellow-700"	
                }`}	
              >	
                {project.status}	
              </span>	
            </div>	
	
            <p className="mb-4 flex-1 text-gray-600 dark:text-gray-300">{project.description}</p>
	
            <div className="flex flex-wrap gap-2">	
              {project.tech.map((t) => (	
                <span	
                  key={t}	
                  className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                >	
                  {t}	
                </span>	
              ))}	
            </div>	
          </div>	
        ))}	
      </div>	
    </div>
  );	
}	