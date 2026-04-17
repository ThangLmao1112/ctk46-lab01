export default function BlogLayout({	
  children,	
}: {	
  children: React.ReactNode;	
}) {	
  return (	
    <div className="mx-auto max-w-5xl px-4 py-12">
      <div className="flex gap-8">	
        {/* Nội dung chính */}	
        <div className="flex-1">{children}</div>	
	
        {/* Sidebar */}	
        <aside className="w-64 shrink-0">	
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h3 className="font-semibold mb-3">Danh mục</h3>	
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li className="cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-400">
                Công nghệ	
              </li>	
              <li className="cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-400">
                Học tập	
              </li>	
              <li className="cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-400">
                Dự án cá nhân	
              </li>	
              <li className="cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-400">
                Cuộc sống	
              </li>	
            </ul>	
          </div>	
        </aside>	
      </div>	
    </div>	
  );	
}	
