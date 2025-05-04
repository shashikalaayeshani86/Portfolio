export default function About() {
    return (
      <section
        id="about"
        className="px-6 py-20 text-white bg-gradient-to-b from-gray-900 via-black to-gray-900"
      >
        <div
          className="max-w-5xl mx-auto text-center"
          data-aos="fade-up"
        >
          <h2 className="mb-6 text-4xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
            About Me
          </h2>
  
          <p className="text-lg leading-relaxed text-gray-300">
            Hello! I'm <span className="font-semibold text-cyan-400">[Your Name]</span>, a passionate{' '}
            <span className="text-cyan-400">Frontend Developer</span> focused on building interactive
            and visually appealing websites using modern tools like{' '}
            <span className="text-pink-400">React</span>,{' '}
            <span className="text-pink-400">Tailwind CSS</span>, and{' '}
            <span className="text-pink-400">JavaScript</span>.
          </p>
  
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            I love turning creative ideas into responsive, animated, and performance-optimized web
            experiences. I’m always excited to learn new technologies and improve my design and coding
            skills!
          </p>
        </div>
      </section>
    );
  }
  