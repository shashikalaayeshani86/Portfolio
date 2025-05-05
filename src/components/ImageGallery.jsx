import { motion } from "framer-motion";
import presentationImage from "../assets/presentation.png";
import bcsImage from "../assets/bcs.jpg";
import coderjoImage from "../assets/coderjo.png";
import cricketImage from "../assets/cricket.jpg";
import fieldImage from "../assets/fieldvisit.jpg";

const images = [
  {
    title: "Final Presentation",
    image: presentationImage,
    link: "https://your-link-to-presentation" // Replace with your actual link
  },
  {
    title: "12th BCS Batch",
    image: bcsImage,
    link: "https://your-link-to-bcs-batch" // Replace with your actual link
  },
  {
    title: "Coderjo Session",
    image: coderjoImage,
    link: "https://your-link-to-coderjo-session" // Replace with your actual link
  },
  {
    title: "Faculty Meet",
    image: cricketImage,
    link: "https://your-link-to-faculty-meet" // Replace with your actual link
  },
  {
    title: "Field Visit",
    image: fieldImage,
    link: "https://your-link-to-faculty-meet" // Replace with your actual link
  },
  // Add more images as needed
];

export default function ImageGallery() {
    return (
      <section id="gallery" className="px-6 py-20 bg-gradient-to-br from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-3xl font-bold text-center text-blue-400">My Work Gallery</h2>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="relative p-5 overflow-hidden transition-all border shadow-md cursor-pointer rounded-xl bg-white/10 backdrop-blur-lg border-blue-400/20 hover:border-blue-400"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <img
                  src={image.image}
                  alt={image.title}
                  className="object-cover w-full h-48 mb-4 rounded-lg"
                />
                <h3 className="mb-2 text-xl font-semibold text-white">{image.title}</h3>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
      

    );
  }
  

