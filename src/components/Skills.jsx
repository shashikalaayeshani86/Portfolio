import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  
} from "react-icons/fa";
import { SiSpringboot, SiMysql, SiMongodb, SiTailwindcss, SiWebtrees, SiJunit5, SiDocker ,SiGithubactions, SiTypescript} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-300" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
  {name: "Web Socket" , icon: <SiWebtrees className="text-indigo-300"/>},
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "JUnit", icon: <SiJunit5 className="text-orange-500" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
  { name: "Github Actions", icon: <SiGithubactions className="text-gray-100" /> },
];

export default function Skills() {
  return (
    <div className="min-h-screen px-6 py-12 bg-black" id="skills">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-10 text-4xl font-bold text-center text-white">My Skills</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 text-white transition duration-300 transform bg-gradient-to-br from-gray-700 to-purple-950 rounded-2xl hover:scale-105 hover:shadow-lg hover:from-gray-700 hover:to-gray-600"
            >
              <div className="mb-3 text-4xl">{skill.icon}</div>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
