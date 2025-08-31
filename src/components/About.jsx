import React from 'react';
import { motion } from 'framer-motion';
import { FaPython, FaDatabase, FaChartLine, FaBrain } from 'react-icons/fa';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 1.2
      }
    },
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (width) => ({
      width: `${width}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 1.5
      }
    })
  };

  return (
    <div name="about" className="w-full min-h-screen bg-gradient-to-b from-gray-800 to-black text-white py-16" id="about">
      <motion.div 
        className="max-w-6xl p-4 mx-auto flex flex-col justify-center w-full h-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="pb-8" variants={itemVariants}>
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
            About
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.p className="text-xl leading-relaxed" variants={itemVariants}>
              I'm <span className="text-cyan-400 font-semibold">Mohamed Ashfag A</span>, an aspiring Data Science and Analytics professional with a strong interest in solving problems through data-driven insights. I enjoy exploring datasets, uncovering patterns, and presenting findings through interactive dashboards and visualizations.
            </motion.p>

            <motion.p className="text-xl leading-relaxed" variants={itemVariants}>
              I have worked on projects like <span className="text-cyan-400">Blinkit Sales & Performance Dashboard</span> and <span className="text-cyan-400">Exploratory Data Analysis of Netflix Shows</span>, where I applied Python, Pandas, NumPy, and visualization tools like Power BI to analyze data and create meaningful insights.
            </motion.p>

            <motion.p className="text-xl leading-relaxed" variants={itemVariants}>
              I believe in continuous learning and keep upgrading my skills in Python, SQL, Machine Learning, and Data Visualization to align with real-world industry needs. My goal is to contribute to impactful projects that combine technology and data to make smarter decisions.
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 className="text-2xl font-bold text-cyan-400 mb-6" variants={itemVariants}>
              Technical Skills
            </motion.h3>
            
            {[
              { skill: "Python", level: 85, icon: <FaPython className="text-yellow-400" /> },
              { skill: "SQL", level: 80, icon: <FaDatabase className="text-blue-400" /> },
              { skill: "Data Visualization", level: 75, icon: <FaChartLine className="text-green-400" /> },
              { skill: "Machine Learning", level: 70, icon: <FaBrain className="text-purple-400" /> }
            ].map(({ skill, level, icon }, index) => (
              <motion.div key={skill} className="space-y-2" variants={itemVariants}>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <motion.div variants={skillVariants} whileHover="hover">
                      {icon}
                    </motion.div>
                    <span className="font-medium">{skill}</span>
                  </div>
                  <span className="text-sm text-gray-400">{level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                    variants={progressVariants}
                    custom={level}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating elements for visual interest */}
        <motion.div
          className="absolute top-1/4 left-10 w-6 h-6 rounded-full bg-cyan-500 opacity-20"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-16 w-8 h-8 rounded-full bg-blue-500 opacity-20"
          animate={{
            y: [0, 20, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
      </motion.div>
    </div>
  );
};

export default About;