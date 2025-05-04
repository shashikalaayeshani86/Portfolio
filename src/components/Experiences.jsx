import { FaBriefcase, FaUniversity } from 'react-icons/fa'; // For icons

const experiences = [
  {
    title: "Trainee ",
    company: "People's Bank",
    period: "March 2022 - August 2022",
    description:
      "Worked as a trainee, assisting with daily reports, online banking, and team working. Gained hands-on experience with enterprise-level banking systems.",
    techUsed: [ "Banking Systems"],
    icon: <FaBriefcase />
  },
  {
    title: "Final Year University Project",
    company: "University of Ruhuna",
    period: "October 2024 - Present",
    description:
      "Led the development of a Mail Tracking System for internal university communication. Utilized modern full-stack technologies with barcode scanning and role-based access.",
    techUsed: ["React", "Spring Boot", "MySQL", "JWT", "Docker"],
    icon: <FaUniversity />
  }
];

export default function Experiences() {
  return (
    <section id="experiences" className="px-6 py-20 text-white bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-blue-400">My Experiences</h2>
        <div className="grid gap-10 sm:grid-cols-2">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 border shadow-md rounded-xl bg-white/10 backdrop-blur-lg border-blue-400/20"
            >
              <div className="flex items-center mb-4 space-x-3">
                {exp.icon}
                <h3 className="text-xl font-semibold">{exp.title}</h3>
              </div>
              <p className="text-sm text-gray-300">{exp.company} - {exp.period}</p>
              <p className="mt-3 text-gray-200">{exp.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.techUsed.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm text-white bg-blue-400 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
