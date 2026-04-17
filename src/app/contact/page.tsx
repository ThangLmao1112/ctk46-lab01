export default function ContactPage() {	
  return (	
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold">Liên hệ</h1>
	
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <div className="space-y-3 rounded-lg bg-gray-50 p-6 dark:bg-gray-800">
          <p>	
            <strong>Email:</strong>{" "}	
            <a	
              href="mailto:nguyenvana@sv.dlu.edu.vn"	
              className="text-emerald-600 hover:underline dark:text-emerald-400"
            >	
              nguyenvana@sv.dlu.edu.vn	
            </a>	
          </p>	
 <p>	
            <strong>GitHub:</strong>{" "}	
            <a	
              href="https://github.com/nguyenvana"	
              target="_blank"	
              rel="noopener noreferrer"	
              className="text-emerald-600 hover:underline dark:text-emerald-400"
            >	
              github.com/nguyenvana	
            </a>	
          </p>	
          <p>	
            <strong>Địa chỉ:</strong> Đại học Đà Lạt, 01 Phù Đổng Thiên	
            Vương, Đà Lạt	
          </p>	
        </div>	
      </div>	
    </div>	
  );	
}	