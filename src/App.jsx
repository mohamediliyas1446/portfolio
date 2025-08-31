// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function App() {
  return (
    <div className="App">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;