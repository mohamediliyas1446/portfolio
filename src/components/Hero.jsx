import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  const photoVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 200
      }
    }
  };

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      y: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Function to handle smooth scrolling
  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 overflow-hidden">
      <motion.div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Content */}
        <motion.div
          className="flex flex-col justify-center h-full md:w-1/2 space-y-6"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white leading-snug"
            variants={itemVariants}
          >
            Data Science Enthusiast | Python & Analytics Learner
          </motion.h2>

          <motion.p
            className="text-gray-400 text-sm sm:text-base md:text-base lg:text-lg max-w-md"
            variants={itemVariants}
          >
            I’m Mohamed Ashfag A, passionate about Data Science and Analytics with hands-on experience in Python, SQL, and Data Visualization. I enjoy exploring datasets, building dashboards, and turning raw data into meaningful insights while continuously learning new technologies.
          </motion.p>




          <motion.div className="flex gap-4" variants={itemVariants}>
            <motion.button
              onClick={() => handleScrollTo('projects')}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              whileHover={{
                scale: 1.05,
                background: "linear-gradient(to right, #06b6d4, #3b82f6)",
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              View Work
              <motion.span
                className="ml-2 group-hover:rotate-90 transition-transform"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
              >
                →
              </motion.span>
            </motion.button>
            <motion.button
              onClick={() => handleScrollTo('contact')}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              whileHover={{
                scale: 1.05,
                background: "linear-gradient(to right, #06b6d4, #3b82f6)",
                transition: { type: "spring", stiffness: 300 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
              <motion.span
                className="ml-2 group-hover:rotate-90 transition-transform"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 90 }}
              >
                →
              </motion.span>
            </motion.button>
          </motion.div>

          <motion.div
            className="flex gap-6 mt-8"
            variants={itemVariants}
          >
            {[
              { icon: FaGithub, href: "https://share.google/8iinAHfEPNk26z2mG", label: "GitHub" },
              { icon: FaLinkedin, href: "https://www.linkedin.com/in/mohamed-ashfag-a-54715521b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },

            ].map(({ icon: Icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.3,
                  y: -5,
                  color: "#06b6d4",
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.1 + 1 }
                }}
              >
                <Icon size={30} className="text-white" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Side - Square Profile Photo */}
        <motion.div
          className="flex w-full justify-center items-center"
          variants={photoVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
        >
          <div className="relative">
            {/* Background Glow */}
            <motion.div
              className="absolute -inset-6 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-70 blur-xl rounded-lg"
              animate={floatingAnimation}
            />

            {/* Profile Image */}
            <motion.div
              className="relative w-56 sm:w-64 md:w-72 lg:w-80 h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden border-4 border-gray-800 shadow-2xl bg-gray-900 rounded-lg"
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <motion.img
                src="/image.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </motion.div>

            {/* Badge */}
            <motion.div
              className="absolute bottom-3 right-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs sm:text-sm font-semibold px-2 py-1 rounded-md"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: "spring" }}
            >
              Available for work
            </motion.div>

            {/* Decorative Corners */}
            <motion.div
              className="absolute -bottom-2 -left-2 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-t-4 border-l-4 border-cyan-500 opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.5 }}
            />
            <motion.div
              className="absolute -top-2 -right-2 w-16 sm:w-20 md:w-24 h-16 sm:h-20 md:h-24 border-b-4 border-r-4 border-blue-500 opacity-70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1.5 }}
            />
          </div>
        </motion.div>


      </motion.div>

      {/* Background Animated Elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 rounded-full bg-cyan-500 opacity-10"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-40 right-40 w-16 h-16 rounded-full bg-blue-500 opacity-10"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.1, 0.3, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </section>
  );
};

export default Hero;