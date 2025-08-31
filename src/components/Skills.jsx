import { motion } from 'framer-motion';
import { 
  FaPython,
  FaDatabase,
  FaChartLine,
  FaBrain,
  FaGitAlt,
  FaAws,
  FaGoogle,
  FaMicrosoft,
  FaCode,
  FaChartBar
} from 'react-icons/fa';

const DataScienceSkills = () => {
  const skillCategories = [
    {
      title: "Programming & Core",
      skills: [
        { id: 1, name: "Python", icon: <FaPython size={32} />, level: 90, color: "text-blue-500", bg: "bg-blue-500" },
        { id: 2, name: "Pandas", icon: <FaChartBar size={32} />, level: 85, color: "text-red-400", bg: "bg-red-400" },
        { id: 3, name: "NumPy", icon: <FaChartBar size={32} />, level: 80, color: "text-blue-400", bg: "bg-blue-400" },
        { id: 4, name: "SQL", icon: <FaDatabase size={32} />, level: 85, color: "text-orange-400", bg: "bg-orange-400" },
      ]
    },
    {
      title: "Machine Learning",
      skills: [
        { id: 5, name: "Scikit-learn", icon: <FaChartBar size={32} />, level: 80, color: "text-orange-500", bg: "bg-orange-500" },
        { id: 6, name: "TensorFlow", icon: <FaChartBar size={32} />, level: 70, color: "text-orange-600", bg: "bg-orange-600" },
        { id: 7, name: "ML Algorithms", icon: <FaBrain size={32} />, level: 75, color: "text-purple-400", bg: "bg-purple-400" },
      ]
    },
    {
      title: "Data Visualization",
      skills: [
        { id: 8, name: "Power BI", icon: <FaChartBar size={32} />, level: 85, color: "text-yellow-400", bg: "bg-yellow-400" },
        { id: 9, name: "Jupyter", icon: <FaCode size={32} />, level: 90, color: "text-orange-500", bg: "bg-orange-500" },
      ]
    },
    {
      title: "Data Management",
      skills: [
        { id: 10, name: "PostgreSQL", icon: <FaDatabase size={32} />, level: 80, color: "text-blue-400", bg: "bg-blue-400" },
        { id: 11, name: "MySQL", icon: <FaDatabase size={32} />, level: 75, color: "text-blue-500", bg: "bg-blue-500" },
        { id: 12, name: "Git", icon: <FaGitAlt size={32} />, level: 85, color: "text-orange-500", bg: "bg-orange-500" },
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({ width: `${level}%`, transition: { duration: 1.5, ease: "easeOut" } })
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <div name="skills" className="bg-gradient-to-b from-gray-900 to-black w-full min-h-screen py-16" id="skills">
      <div className="max-w-6xl mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="text-center mb-16"
        >
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 p-2">Data Science & Analytics Skills</p>
          <p className="py-6 text-xl text-gray-300">Technologies and tools I use to transform data into insights</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Skill Categories */}
          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border-l-4 border-cyan-500 shadow-lg"
                variants={categoryVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.2 }}
              >
                <h3 className="text-xl font-bold mb-4 text-cyan-400">{category.title}</h3>
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.id}
                      className="flex items-center gap-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className={skill.color}>{skill.icon}</div>
                      <span className="text-sm font-medium">{skill.name}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column - Progress Bars */}
          <motion.div className="space-y-8" variants={containerVariants} initial="hidden" animate="visible">
            {skillCategories.flatMap(cat => cat.skills).map((skill) => (
              <motion.div key={skill.id} className="mb-5" variants={itemVariants}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center gap-2">
                    <span className={skill.color}>{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                  <span className="text-sm text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full ${skill.bg}`}
                    variants={progressVariants}
                    custom={skill.level}
                    initial="hidden"
                    animate="visible"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DataScienceSkills;
