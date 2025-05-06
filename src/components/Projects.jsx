import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png"; 
import project3 from "../assets/project3.png"; 
import project4 from "../assets/project4.png"; 
import project5 from "../assets/project5.png"; 
import project6 from "../assets/project6.png";
import project7 from "../assets/project7.png";
import project8 from "../assets/project8.png";

const projects = [
    {
      title: "Mail Management System",
      description: "A mail tracking system for universities using React, Spring Boot, and barcode integration for real-time mail monitoring.",
      image: project1,
      link: "https://github.com/malinda-sampath/Barcode-Based-Mail-Tracking-System_Frontend.git"  // Update with your real repo link
    },
    {
      title: "Job Board Platform (Frontend)",
      description: "Frontend for a job board platform built with React and Tailwind CSS. Allows job seekers to browse listings and apply.",
      image: project2,
      link: "https://github.com/shashikalaayeshani86/JobPortal.git"  // Update with your real repo link
    },
    {
      title: "Wildlife Habitat Management System",
      description: "A desktop app to manage environmental data, track wildlife activities, and generate conservation reports using Java and MySQL.",
      image: project3,
      link: "https://github.com/your-username/wildlife-habitat-system"  // Update with your real repo link
    },
    {
      title: "Personal Portfolio Website",
      description: "A modern personal portfolio built with React and Tailwind CSS showcasing skills, projects, and contact information.",
      image: project4,
      link: "https://github.com/shashikalaayeshani86/Portfolio.git"  // Update with your real repo link
    },
    {
      title: "Quiz App",
      description: "An interactive quiz application built using React to test knowledge in various categories with score tracking.",
      image: project5,
      link: "https://github.com/shashikalaayeshani86/QuizApp.git"  // Update with your real repo link
    },
    {
      title: "To-Do List App",
      description: "A simple and clean to-do list application built with React to manage daily tasks effectively.",
      image: project6,
      link: "https://github.com/shashikalaayeshani86/TodoList.git"  // Update with your real repo link
    },
    {
      title: "Digital Clock",
      description: "A live digital clock web app displaying the current time with sleek UI built using React and Tailwind.",
      image: project7,
      link: "https://github.com/shashikalaayeshani86/DigitalClock.git"  // Update with your real repo link
    },
    {
      title: "News Site",
      description: "A responsive news website that fetches and displays latest headlines using NewsAPI with React frontend.",
      image: project8,
      link: "https://github.com/shashikalaayeshani86/News-Mag_PracticeProject.git"  // Update with your real repo link
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
