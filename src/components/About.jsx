export default function About() {
    return (
      <section
        id="about"
        className="px-6 py-20 text-white bg-gradient-to-b from-gray-900 via-black to-gray-900"
      >
        <div className="max-w-5xl mx-auto text-center" data-aos="fade-up">
          <h2 className="mb-6 text-4xl font-extrabold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
            About Me
          </h2>
  
          <p className="text-lg leading-relaxed text-gray-300">
            Hello! I'm <span className="font-semibold text-cyan-400">Shashikala Ayeshani</span>, a passionate{' '}
            <span className="text-cyan-400">Full Stack Developer</span> dedicated to building dynamic and
            responsive web applications. I work with modern frontend tools like{' '}
            <span className="text-pink-400">React</span>,{' '}
            <span className="text-pink-400">Tailwind CSS</span>,{' '}
            <span className="text-yellow-300">JavaScript</span>, and{' '}
            <span className="text-blue-300">TypeScript</span>.
          </p>
  
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            On the backend, I use <span className="text-yellow-300">Java</span> with{' '}
            <span className="text-yellow-300">Spring Boot</span> and connect to{' '}
            <span className="text-green-300">MySQL</span> databases. I also work with{' '}
            <span className="text-blue-300">WebSocket</span> for real-time communication and implement{' '}
            <span className="text-orange-300">JWT</span> for secure user authentication.
          </p>
  
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            My development workflow includes version control with{' '}
            <span className="text-red-400">Git</span>, API testing using{' '}
            <span className="text-purple-400">Postman</span>, and clear documentation with{' '}
            <span className="text-purple-300">Swagger</span>. I use{' '}
            <span className="text-blue-400">Docker</span> for containerization and manage deployments through{' '}
            <span className="text-blue-500">CI/CD pipelines</span> powered by{' '}
            <span className="text-gray-300">GitHub Actions</span>.
          </p>
  
          <p className="mt-4 text-lg leading-relaxed text-gray-400">
            I write reliable and testable code using <span className="text-red-300">JUnit</span> and{' '}
            <span className="text-red-300">Mockito</span>. I’m always eager to learn, solve problems, and create efficient digital solutions.
          </p>

          <p className="mt-4 text-lg leading-relaxed text-gray-400">
          I enjoy working in team environments, sharing knowledge, and learning from others. With strong communication and problem-solving skills, I aim to contribute to meaningful projects and grow into a professional software engineer focused on innovation and quality.
        </p>
        
        </div>
      </section>
    );
  }
  