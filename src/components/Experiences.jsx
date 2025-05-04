import { FaBriefcase, FaUniversity } from 'react-icons/fa'; // For icons

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "XYZ Technologies",
    period: "June 2024 - August 2024",
    description: "Developed features for the company's main product, assisted in the design and implementation of backend services using Spring Boot, and worked on improving database performance.",
    techUsed: ["Java", "Spring Boot", "MySQL"],
    icon: <FaBriefcase />
  },
  {
    title: "Research Assistant",
    company: "University of Ruhuna",
    period: "March 2023 - Present",
    description: "Assisting in research projects related to wildlife conservation data analysis, with a focus on building data-driven models and reports using Java and Python.",
    techUsed: ["Java", "Python", "Jupyter Notebook"],
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
            <div key={index} className="p-6 border shadow-md rounded-xl bg-white/10 backdrop-blur-lg border-blue-400/20">
              <div className="flex items-center mb-4 space-x-3">
                {exp.icon}
                <h3 className="text-xl font-semibold">{exp.title}</h3>
              </div>
              <p className="text-sm text-gray-300">{exp.company} - {exp.period}</p>
              <p className="mt-3 text-gray-200">{exp.description}</p>
              <div className="flex mt-4 space-x-2">
                {exp.techUsed.map((tech, i) => (
                  <span key={i} className="px-3 py-1 text-sm text-white bg-blue-400 rounded-lg">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
