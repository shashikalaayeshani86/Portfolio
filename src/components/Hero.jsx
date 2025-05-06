import { motion } from "framer-motion";
import background from "../assets/background.png";

export default function Hero() {
  return (
    <section
      className="relative flex items-center justify-center h-screen overflow-hidden text-center text-white"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 z-10 bg-black/60 backdrop-blur-sm" />

      <motion.div
        className="z-20 max-w-2xl px-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          Hi, I'm <span className="text-blue-400">Shashikala Ayeshani</span>
        </h1>
        <p className="mb-8 text-lg text-gray-300 md:text-xl">
          A passionate developer who loves building interactive websites.
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-6 py-3 mx-5 font-semibold text-white transition bg-blue-500 rounded-full hover:bg-blue-600"
        >
          Contact Me
        </motion.a>

        <motion.a
          href="/ShashikalaAyeshani_SoftwareEngineerIntern.pdf"
          download
          whileHover={{ scale: 1.05 }}
          className="inline-block px-6 py-3 font-semibold text-white transition bg-green-500 rounded-full hover:bg-green-600"
        >
          Download CV
        </motion.a>

      </motion.div>
    </section>
  );
}
