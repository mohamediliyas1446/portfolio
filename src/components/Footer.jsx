import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer 
      className="bg-gray-900 text-white text-center py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <motion.p 
          className="flex items-center justify-center gap-2"
          whileHover={{ scale: 1.05 }}
        >
          Made with <motion.span whileHover={{ scale: 1.2 }}><FaHeart className="text-red-500" /></motion.span> using React & Tailwind CSS
        </motion.p>
        <p className="mt-2">© {new Date().getFullYear()} MohamedAshfag. All rights reserved.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;