import { Link } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUniversity, FaProjectDiagram, FaImages, FaPhone, FaRegAddressBook, FaHandsHelping, FaCarBattery } from 'react-icons/fa';
import Skills from './Skills';

export default function Navbar() {
  return (
    <nav className="p-4 text-white shadow-lg bg-gradient-to-r from-blue-500 via-green-700 to-slate-600">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-2xl font-bold">My Portfolio</div>
        <ul className="flex space-x-6">
          <li><Link to="/" className="flex items-center hover:text-yellow-300"><FaHome className="mr-2" />Home</Link></li>
          <li><Link to="/about" className="flex items-center hover:text-yellow-300"><FaInfoCircle className="mr-2" />About</Link></li>
          <li><Link to="/academic-results" className="flex items-center hover:text-yellow-300"><FaUniversity className="mr-2" />Academic Results</Link></li>
          <li><Link to="/projects" className="flex items-center hover:text-yellow-300"><FaProjectDiagram className="mr-2" />Projects</Link></li>
          <li><Link to="/skills" className="flex items-center hover:text-yellow-300"><FaCarBattery className="mr-2" />Skills</Link></li>
          <li><Link to="/image-gallery" className="flex items-center hover:text-yellow-300"><FaImages className="mr-2" />Gallery</Link></li>
          <li><Link to="/contact" className="flex items-center hover:text-yellow-300"><FaPhone className="mr-2" />Contact</Link></li>
          <li><Link to="/experiences" className="flex items-center hover:text-yellow-300"><FaRegAddressBook className="mr-2" />Experiences</Link></li>
          <li><Link to="/volunteering" className="flex items-center hover:text-yellow-300"><FaHandsHelping className="mr-2" />Volunteering</Link></li>
        </ul>
      </div>
    </nav>
  );
}
