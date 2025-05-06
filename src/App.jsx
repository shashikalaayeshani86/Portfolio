import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Projects from './components/Projects';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './components/About';
import AcademicResults from './components/AcademicResults';
import Experiences from './components/Experiences';
import ImageGallery from './components/ImageGallery';
import Volunteering from './components/Volunteering';
import Skills from './components/Skills';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 }); // 1000ms animation duration
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} /> {/* Home page (Hero section) */}
        <Route path="/about" element={<About />} />
        <Route path="/academic-results" element={<AcademicResults />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/volunteering" element={<Volunteering />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/skills" element={<Skills/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
