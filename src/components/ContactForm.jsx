import { motion } from 'framer-motion';

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

        <form className="grid gap-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 text-white bg-gray-800 rounded-md outline-none peer focus:ring-2 focus:ring-blue-400"
            />
            <label
              htmlFor="name"
              className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-focus:top-[-0.75rem] peer-focus:text-xs peer-focus:text-blue-400 bg-gray-800 px-1"
            >
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 text-white bg-gray-800 rounded-md outline-none peer focus:ring-2 focus:ring-blue-400"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-focus:top-[-0.75rem] peer-focus:text-xs peer-focus:text-blue-400 bg-gray-800 px-1"
            >
              Your Email
            </label>
          </div>

          <div className="relative">
            <textarea
              id="message"
              rows="4"
              required
              className="w-full px-4 py-3 text-white bg-gray-800 rounded-md outline-none resize-none peer focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <label
              htmlFor="message"
              className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-focus:top-[-0.75rem] peer-focus:text-xs peer-focus:text-blue-400 bg-gray-800 px-1"
            >
              Your Message
            </label>
          </div>

          <motion.button
            type="submit"
            className="w-full py-3 font-semibold text-white transition bg-blue-500 rounded-md hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
