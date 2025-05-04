import { useState } from 'react'
import Navbar from './components/Navbar'
import './index.css'
import Projects from './components/Projects'
import Hero from './components/Hero'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    AOS.init({ duration: 1000 }); // 1000ms animation duration
  }, []);

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
