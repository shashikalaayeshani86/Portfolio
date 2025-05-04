import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png"; // Add your own images

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio using React and Tailwind CSS.",
    image: project1,
    link: "#"
  },
  {
    title: "E-commerce App",
    description: "Full-stack e-commerce app with shopping cart and login.",
    image: project2,
    link: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-20 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-blue-400">My Projects</h2>
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative p-5 overflow-hidden transition-all border shadow-md cursor-pointer rounded-xl bg-white/10 backdrop-blur-lg border-blue-400/20 hover:border-blue-400"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div
                className="h-48 mb-4 bg-center bg-cover rounded-lg"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <h3 className="mb-2 text-xl font-semibold text-white">{project.title}</h3>
              <p className="mb-4 text-sm text-gray-300">{project.description}</p>
              <a
                href={project.link}
                className="text-sm text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
