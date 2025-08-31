import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'skills' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' },
  ];

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div 
      className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring" }}
    >
      <div>
        <motion.h1 
          className="text-5xl font-signature ml-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Portfolio
        </motion.h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <motion.li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:text-white duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href={`#${link}`} className="relative group">
              {link}
              <motion.span 
                className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />
            </a>
          </motion.li>
        ))}
      </ul>

      <motion.div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </motion.div>

      <AnimatePresence>
        {nav && (
          <motion.ul
            className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                variants={mobileItemVariants}
              >
                <a
                  onClick={() => setNav(!nav)}
                  href={`#${link}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {link}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;