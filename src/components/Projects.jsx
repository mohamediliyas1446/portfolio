import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaPlus, FaTimes, FaPython, FaChartBar, FaChartLine } from 'react-icons/fa';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Weather App – Real-Time Weather Forecast",
      description: "Desktop application built with Python (PyQt5) that fetches real-time weather data using OpenWeather API",
      detailedDescription: "A desktop application built with Python (PyQt5) that fetches real-time weather data using the OpenWeather API. Users can enter any city name to instantly view temperature (in °C/°F), weather conditions, and an appropriate emoji icon for better visualization. The app includes robust error handling for invalid inputs, connection issues, and API errors, ensuring a smooth user experience.",
      demo: "#",
      code: "https://github.com/MOHAMED01ASFAK/WeatherApp/blob/master/Weather.py",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1165&q=80",
      technologies: ["Python", "PyQt5", "OpenWeather API", "GUI Development"],
      category: "Desktop App",
      icon: <FaPython className="text-blue-500" />
    },
    {
      id: 2,
      title: "Pong Game – Classic Arcade with Python",
      description: "Recreation of the classic Pong arcade game using Python's Turtle graphics module",
      detailedDescription: "A recreation of the classic Pong arcade game using Python's Turtle graphics module. The game features two paddles, a bouncing ball, and a scoring system for Player A and Player B. Players can control the paddles using keyboard keys (W/S for Player A, ↑/↓ for Player B). The ball bounces off walls and paddles with realistic mechanics, while the scoreboard updates dynamically.",
      demo: "#",
      code: "https://github.com/MOHAMED01ASFAK/PythonGameProject/blob/main/PongGame.py",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      technologies: ["Python", "Turtle Graphics", "Game Development", "OOP"],
      category: "Game Development",
      icon: <FaPython className="text-blue-500" />
    },
    {
      id: 3,
      title: "Blinkit Sales & Performance Analysis Dashboard",
      description: "Interactive sales and performance dashboard for Blinkit to analyze key business metrics",
      detailedDescription: "Developed an interactive sales and performance dashboard for Blinkit to analyze key business metrics. The dashboard provides insights into total sales, order volumes, customer purchasing patterns, and product performance. It enables real-time tracking of KPIs such as revenue, average order value, and top-selling products, helping businesses make data-driven decisions.",
      demo: "#",
      code: "https://github.com/MOHAMED01ASFAK/Powerbi_project/blob/main/blinkitData_analysis.pbix",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      technologies: ["Power BI", "Data Analysis", "Dashboard", "KPI Tracking", "Data Visualization"],
      category: "Data Analytics",
      icon: <FaChartLine className="text-yellow-500" /> // Replaced SiPowerbi with FaChartLine
    },
    {
      id: 4,
      title: "Netflix Shows EDA using Power BI",
      description: "Exploratory Data Analysis of Netflix Movies and TV Shows to uncover trends and patterns",
      detailedDescription: "Performed Exploratory Data Analysis (EDA) on a dataset of Netflix Movies and TV Shows to uncover trends and patterns. Built an interactive Power BI dashboard showcasing insights such as content distribution by country, genre, release year, and ratings. This project highlights how data visualization can help understand streaming platform strategies and audience preferences.",
      demo: "#",
      code: "https://github.com/MOHAMED01ASFAK/Powerbi_project/blob/main/Netflix_eda.pbix",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80",
      technologies: ["Power BI", "EDA", "Data Visualization", "Content Analysis", "Dashboard"],
      category: "Data Analysis",
      icon: <FaChartLine className="text-yellow-500" /> // Replaced SiPowerbi with FaChartLine
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", damping: 12, stiffness: 100 } }
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", damping: 15, stiffness: 100 } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
  };

  const overlayVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 }, exit: { opacity: 0 } };

  return (
    <div  id="projects" className="bg-gradient-to-b from-gray-900 to-black w-full min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center w-full h-full">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 p-2">Data Science & Analytics Projects</p>
          <p className="py-6 text-xl text-gray-300">A collection of my data analysis, visualization, and programming projects</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8" // Changed lg:grid-cols-3 to md:grid-cols-2 for 2 projects per row
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="relative group cursor-pointer bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700"
              variants={cardVariants}
              whileHover={{ y: -10 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 group-hover:opacity-90 transition-opacity z-10"></div>
              
              <div className="absolute top-4 right-4 z-20">
                <span className={`text-xs px-2 py-1 rounded-full ${
                  project.category === "Data Analytics" || project.category === "Data Analysis" 
                    ? "bg-cyan-500/20 text-cyan-300" 
                    : project.category === "Desktop App" 
                    ? "bg-blue-500/20 text-blue-300"
                    : project.category === "Game Development"
                    ? "bg-green-500/20 text-green-300"
                    : "bg-purple-500/20 text-purple-300"
                }`}>
                  {project.category}
                </span>
              </div>
              
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              
              <div className="p-4 text-white z-20 relative">
                <div className="flex items-start gap-3 mb-2">
                  <div className="text-2xl mt-1">
                    {project.icon || <FaChartBar className="text-cyan-400" />}
                  </div>
                  <h3 className="text-lg font-bold flex-1">{project.title}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">{tech}</span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button
                    className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={(e) => { e.stopPropagation(); setSelectedProject(project); }}
                  >
                    <FaPlus className="text-xs" /> Details
                  </motion.button>
                  
                  <div className="flex gap-4">
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-cyan-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                    <motion.a
                      href={project.code}
                      target="_blank"
                      rel="noreferrer"
                      className="text-white hover:text-cyan-300"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              variants={modalVariants}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <motion.img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
                <motion.button
                  className="absolute top-4 right-4 bg-gray-900/80 text-white p-2 rounded-full hover:bg-red-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setSelectedProject(null)}
                >
                  <FaTimes />
                </motion.button>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                    <p className="text-gray-400 mt-1">{selectedProject.description}</p>
                  </div>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    selectedProject.category === "Data Analytics" || selectedProject.category === "Data Analysis" 
                      ? "bg-cyan-500/20 text-cyan-300" 
                      : selectedProject.category === "Desktop App" 
                      ? "bg-blue-500/20 text-blue-300"
                      : selectedProject.category === "Game Development"
                      ? "bg-green-500/20 text-green-300"
                      : "bg-purple-500/20 text-purple-300"
                  }`}>
                    {selectedProject.category}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">{selectedProject.detailedDescription}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="text-sm bg-gray-800 text-gray-300 px-3 py-1 rounded-full">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <motion.a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </motion.a>
                  <motion.a
                    href={selectedProject.code}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub /> View Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
