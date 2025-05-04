import { FaHome, FaUser, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full px-6 py-5 text-white bg-black shadow-lg">
      <div className="flex items-center justify-between mx-auto max-w-7xl">

        {/* Logo or Brand Name */}
        <h1 className="text-3xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
          MyPortfolio
        </h1>

        {/* Navigation Links */}
        <div className="flex items-center gap-12 ml-auto text-lg">
          <a href="#home" className="flex items-center gap-2 transition duration-200 hover:text-cyan-400">
            <FaHome className="text-xl" />
            <span>Home</span>
          </a>
          <a href="#about" className="flex items-center gap-2 transition duration-200 hover:text-cyan-400">
            <FaUser className="text-xl" />
            <span>About</span>
          </a>
          <a href="#projects" className="flex items-center gap-2 transition duration-200 hover:text-cyan-400">
            <FaProjectDiagram className="text-xl" />
            <span>Projects</span>
          </a>
          <a href="#contact" className="flex items-center gap-2 transition duration-200 hover:text-cyan-400">
            <FaEnvelope className="text-xl" />
            <span>Contact</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
