import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="px-6 py-20 bg-gradient-to-t from-black via-gray-900 to-gray-800"
    >
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="mb-6 text-3xl font-bold text-blue-400">Get in Touch</h3>
        <p className="mb-12 text-gray-300">Let’s build something amazing together.</p>

        <div className="space-y-6 text-lg text-gray-200">
          <p>
            📧 Email: <a href="mailto:shashikalaayeshani86@gmail.com" className="text-blue-400 underline">shashikalaayeshani86@gmail.com</a>
          </p>
          <p>
            📞 Phone: <a href="tel:+1234567890" className="text-blue-400 underline">+94 777 412 588</a>
          </p>
          <p>
            📍 Location: Kurunegala, Sri Lanka
          </p>
          <p className="flex justify-center gap-6 mt-8 text-2xl">
            <a
              href="https://github.com/shashikalaayeshani86"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:text-blue-400"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/shashikala-ayeshani"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition hover:text-blue-400"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
