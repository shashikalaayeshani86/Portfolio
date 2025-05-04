import { FaHandsHelping, FaPeopleArrows, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const volunteeringExperiences = [
  {
    title: "CoderDojo Volunteer Mentor",
    organization: "STEMUp Educational Foundation",
    period: "August 2023",
    description: "Conducted an interactive coding session for school students during a CoderDojo meetup. Introduced basic programming concepts and helped students build simple projects.",
    impact: "Inspired young learners to start their coding journey and promoted STEM education in rural communities.",
    icon: <FaLaptopCode />
  },
 
  
];

export default function Volunteering() {
  return (
    <section id="volunteering" className="px-6 py-20 text-white bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-blue-400">My Volunteering Experiences</h2>
        <div className="grid gap-10 sm:grid-cols-2">
          {volunteeringExperiences.map((volunteer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: index * 0.2
              }}
              viewport={{ once: true }}
              className="p-6 border shadow-md rounded-xl bg-white/10 backdrop-blur-lg border-blue-400/20"
            >
              <div className="flex items-center mb-4 space-x-3">
                {volunteer.icon}
                <h3 className="text-xl font-semibold">{volunteer.title}</h3>
              </div>
              <p className="text-sm text-gray-300">{volunteer.organization} - {volunteer.period}</p>
              <p className="mt-3 text-gray-200">{volunteer.description}</p>
              <p className="mt-2 text-sm italic text-gray-400">{volunteer.impact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
