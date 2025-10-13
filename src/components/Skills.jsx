export default function Skills() {
  const skills = [
    { name: "Python / Django", level: 90 },
    { name: "Django REST Framework", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "Celery / Redis", level: 70 },
    { name: "Docker", level: 65 },
    { name: "Git / Linux", level: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-blue-50 px-6">
      <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">Ko‘nikmalar</h2>
      <div className="max-w-4xl mx-auto space-y-5">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium text-gray-700">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div
                className="bg-blue-700 h-3 rounded-full transition-all"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
