export interface Post {
  slug: string;
  title: string;
  author: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
}

export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.JS — Framework React phổ biến nhất",
    author: "Nguyễn Hoàng Quốc Thắng",
    excerpt:
      "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: `Next.JS là một React framework mạnh mẽ được phát triển bởi Vercel.
Nó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR),
Static Site Generation (SSG), và App Router.

Một số ưu điểm nổi bật của Next.JS:
- Routing tự động dựa trên cấu trúc thư mục
- Hỗ trợ Server Components và Client Components
- Tối ưu hóa hình ảnh, font, và scripts tự động
- API Routes tích hợp
- Hỗ trợ TypeScript sẵn có`,
    date: "2025-01-15",
    category: "Công nghệ",
  },
  {
    slug: "hoc-tailwind-css",
    title: "Tailwind CSS — Cách tiếp cận mới cho CSS",
    author: "Nguyễn Hoàng Quốc Thắng",
    excerpt:
      "Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết CSS.",
    content: `Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì viết CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện.

Ví dụ, thay vì viết:
.card { padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

Bạn viết trực tiếp trong HTML:
<div class="p-4 rounded-lg shadow-md">...</div>

Ưu điểm:
- Không cần đặt tên class
- Không cần chuyển qua lại giữa file HTML và CSS
- File CSS cuối cùng rất nhỏ (chỉ chứa class đã dùng)`,
    date: "2025-01-20",
    category: "Công nghệ",
  },
  {
    slug: "kinh-nghiem-hoc-lap-trinh",
    title: "Chia sẻ kinh nghiệm tự học lập trình hiệu quả",
    author: "Nguyễn Hoàng Quốc Thắng",
    excerpt:
      "Những bài học rút ra sau 3 năm tự học lập trình ở đại học.",
    content: `Sau 3 năm học tập và thực hành lập trình, tôi rút ra một số kinh nghiệm quan trọng:

1. Thực hành nhiều hơn đọc lý thuyết
Lập trình là kỹ năng thực hành. Đọc sách và xem video chỉ chiếm 30%, 70% còn lại là viết code.

2. Xây dựng dự án thực tế
Không gì tốt hơn việc xây dựng một sản phẩm thực tế để học.
Hãy bắt đầu từ những dự án nhỏ và tăng dần độ phức tạp.

3. Tham gia cộng đồng
Tham gia các cộng đồng lập trình để học hỏi và chia sẻ kinh nghiệm.`,
    date: "2025-02-01",
    category: "Học tập",
  },
  {
    slug: "lam-du-an-thuc-te",
    title: "Vì sao nên làm dự án thực tế càng sớm càng tốt",
    author: "Nguyễn Hoàng Quốc Thắng",
    excerpt:
      "Dự án thực tế giúp biến kiến thức rời rạc thành kỹ năng có thể dùng được.",
    content: `Làm dự án thực tế là cách nhanh nhất để hiểu sâu một công nghệ.

Khi chỉ học lý thuyết, bạn thường biết "cú pháp" nhưng chưa biết "cách dùng". Khi làm dự án, bạn phải đối mặt với nhiều vấn đề thật như:
- Tổ chức cấu trúc thư mục
- Thiết kế UI hợp lý
- Xử lý dữ liệu đầu vào
- Kết nối API và gỡ lỗi

Chính những lỗi và quyết định trong quá trình làm dự án mới giúp bạn tiến bộ nhanh hơn.`,
    date: "2025-02-10",
    category: "Học tập",
  },
  {
    slug: "tu-duy-lam-san-pham",
    title: "Tư duy làm sản phẩm thay vì chỉ làm bài tập",
    author: "Nguyễn Hoàng Quốc Thắng",
    excerpt:
      "Học lập trình sẽ hiệu quả hơn nếu bạn nghĩ như đang xây một sản phẩm thật.",
    content: `Một sản phẩm tốt không chỉ chạy được mà còn dễ dùng, có mục tiêu rõ ràng và có thể mở rộng.

Khi chuyển từ "bài tập" sang "sản phẩm", bạn sẽ tự nhiên quan tâm hơn đến:
- Trải nghiệm người dùng
- Tính nhất quán trong giao diện
- Khả năng bảo trì mã nguồn
- Cách chia nhỏ vấn đề để giải quyết từng bước

Đó là bước chuyển quan trọng để đi từ người học sang người làm.`,
    date: "2025-02-18",
    category: "Tư duy",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}