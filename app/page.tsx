export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Xin chào! 👋
        </h1>

        <p className="text-xl text-gray-600 mb-2">
          Họ và tên: <strong>Nguyễn Hoàng Quốc Thắng</strong>
        </p>

        <p className="text-xl text-gray-600 mb-2">
          MSSV: <strong>2212458</strong>
        </p>

        <p className="text-xl text-gray-600 mb-2">
          Lớp: <strong>CTK46A</strong>
        </p>

        <p className="text-lg text-gray-700 mb-6">
          Tôi là sinh viên yêu thích lập trình web và đang tìm hiểu các công nghệ mới như Next.js 🚀
        </p>

        {/* Nội dung mới */}
        <div className="bg-green-100 rounded-lg p-4 mb-4">
          <h2 className="text-lg font-semibold mb-2 text-green-800">
            🎯 Mục tiêu học tập
          </h2>
          <ul className="text-green-700 list-disc list-inside">
            <li>Nắm vững Next.js và React</li>
            <li>Xây dựng được web fullstack</li>
            <li>Deploy sản phẩm thực tế</li>
          </ul>
        </div>

        <div className="bg-blue-100 rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2 text-blue-800">
            🎮 Sở thích
          </h2>
          <ul className="text-blue-700 list-disc list-inside">
            <li>Lập trình</li>
            <li>Chơi game</li>
            <li>Xem phim</li>
          </ul>
        </div>
      </div>
    </main>
  );
}