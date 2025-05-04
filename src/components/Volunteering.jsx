import { FaHandsHelping, FaPeopleArrows } from 'react-icons/fa'; // Volunteering-related icons

const volunteeringExperiences = [
  {
    title: "Wildlife Conservation Volunteer",
    organization: "XYZ Wildlife Organization",
    period: "June 2023 - Present",
    description: "Assisting in data collection for wildlife conservation efforts, monitoring species populations, and helping with awareness campaigns.",
    impact: "Contributed to the successful monitoring of endangered species and helped raise awareness about habitat preservation.",
    icon: <FaHandsHelping />
  },
  {
    title: "Community Development Volunteer",
    organization: "ABC Community Foundation",
    period: "January 2022 - May 2023",
    description: "Working with the local community to organize educational workshops, improve community infrastructure, and provide support for disadvantaged groups.",
    impact: "Organized workshops that benefited over 100 community members and helped build two new community centers.",
    icon: <FaPeopleArrows />
  }
];

export default function Volunteering() {
  return (
    <section id="volunteering" className="px-6 py-20 text-white bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-12 text-3xl font-bold text-center text-blue-400">My Volunteering Experiences</h2>
        <div className="grid gap-10 sm:grid-cols-2">
          {volunteeringExperiences.map((volunteer, index) => (
            <div key={index} className="p-6 border shadow-md rounded-xl bg-white/10 backdrop-blur-lg border-blue-400/20">
              <div className="flex items-center mb-4 space-x-3">
                {volunteer.icon}
                <h3 className="text-xl font-semibold">{volunteer.title}</h3>
              </div>
              <p className="text-sm text-gray-300">{volunteer.organization} - {volunteer.period}</p>
              <p className="mt-3 text-gray-200">{volunteer.description}</p>
              <p className="mt-2 text-sm italic text-gray-400">{volunteer.impact}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
