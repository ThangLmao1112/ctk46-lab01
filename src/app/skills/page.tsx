const skills = [
  "C/C++",
  "Java",
  "C#",
  "JavaScript",
  "TypeScript",
  "HTML/CSS",
  "React",
  "Next.js",
  "Node.js",
  "Spring Boot",
  "MySQL",
  "Git/GitHub",
];

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="mb-3 text-3xl font-bold">Ky nang lap trinh</h1>
      <p className="mb-8 text-gray-600">
        Cac cong nghe va cong cu em da hoc va su dung trong qua trinh lam du an.
      </p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {skills.map((skill) => (
          <div
            key={skill}
            className="rounded-lg border bg-white px-4 py-3 text-center font-medium text-gray-700"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}