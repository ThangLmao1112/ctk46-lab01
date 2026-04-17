export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  tech: string[];
  repo: string;
}

export const projects: Project[] = [
  {
    id: "horror-game",
    title: "Horror Game",
    shortDescription: "Game kinh dị sinh tồn có bối cảnh tối và nhịp chơi căng thẳng.",
    description:
      "Dự án game kinh dị tập trung vào bầu không khí, di chuyển nhân vật và tương tác với môi trường. Em xây dựng các màn chơi theo hướng khám phá, thu thập vật phẩm và tránh kẻ địch.",
    tech: ["Unity", "C#", "3D"],
    repo: "https://github.com/ThangLmao1112/Horror-Game",
  },
  {
    id: "travel-checkin",
    title: "Travel Check-in",
    shortDescription: "Ứng dụng check-in địa điểm du lịch và lưu lại hành trình.",
    description:
      "Đây là một ứng dụng nhỏ giúp người dùng đánh dấu các địa điểm đã ghé qua, xem lại lịch trình và ghi chú cảm nhận trong chuyến đi.",
    tech: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/ThangLmao1112/travel-checkin.git",
  },
  {
    id: "web-ban-giay",
    title: "Web Bán Giày",
    shortDescription: "Website bán giày có giao diện thương mại điện tử và giỏ hàng.",
    description:
      "Dự án web bán giày gồm danh sách sản phẩm, chi tiết sản phẩm, giỏ hàng và giao diện phù hợp cho trải nghiệm mua sắm trực tuyến.",
    tech: ["Java", "Spring Boot", "MySQL"],
    repo: "https://github.com/ThangLmao1112/Web_BanGiay",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}