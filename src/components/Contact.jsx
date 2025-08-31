import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { SiMinutemailer } from 'react-icons/si';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    // Show success animation
    setIsSubmitted(true);
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 0 0 2px rgba(6, 182, 212, 0.5)",
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05, 
      boxShadow: "0 5px 15px rgba(6, 182, 212, 0.4)",
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    },
    tap: { scale: 0.98 },
    submitted: {
      scale: [1, 1.2, 1],
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.5 }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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

  const contactInfo = [
    {
      icon: <FaPhone className="text-cyan-400" />,
      text: "+91-9025519125",
      link: "+91-9025519125"
    },
    {
      icon: <FaEnvelope className="text-cyan-400" />,
      text: "mohdashfag01@gmail.com",
      link: "mailto:mohdashfag01@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="text-cyan-400" />,
      text: "Banglore, India",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com",
      color: "hover:text-blue-400"
    },
    {
      icon: <FaGithub />,
      url: "https://github.com",
      color: "hover:text-gray-300"
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <div name="contact" className="w-full min-h-screen bg-gradient-to-b from-gray-900 to-black p-4 text-white" id="contact">
      <div className="flex flex-col p-4 justify-center max-w-6xl mx-auto h-full">
        <motion.div 
          className="pb-8 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring" }}
        >
          <p className="text-4xl font-bold inline border-b-4 border-cyan-500 p-2">
            Get In Touch
          </p>
          <p className="py-6 text-xl text-gray-300">Let's discuss how we can work together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 className="text-2xl font-bold mb-6 text-cyan-400" variants={itemVariants}>
              Contact Information
            </motion.h3>
            
            <motion.p className="text-gray-300 mb-8 leading-relaxed" variants={itemVariants}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out through any of the channels below.
            </motion.p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <span className="text-xl bg-gray-800 p-3 rounded-lg group-hover:bg-cyan-900/20 transition-colors">
                    {info.icon}
                  </span>
                  <span>{info.text}</span>
                </motion.a>
              ))}
            </div>
            
            <motion.div className="flex gap-4" variants={itemVariants}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl text-gray-400 p-3 bg-gray-800 rounded-lg ${social.color} transition-colors`}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-gray-800/30 backdrop-blur-sm p-6 rounded-xl border border-gray-700 shadow-xl"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <motion.div variants={inputVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </motion.div>
                
                <motion.div variants={inputVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </motion.div>
              </div>
              
              <motion.div variants={inputVariants} className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </motion.div>
              
              <motion.div variants={inputVariants} className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                ></textarea>
              </motion.div>
              
              <motion.button
                type="submit"
                className={`w-full py-3 px-6 rounded-md font-medium flex items-center justify-center gap-2 ${
                  isSubmitted 
                    ? "bg-green-500 text-white" 
                    : "bg-gradient-to-r from-cyan-600 to-blue-600 text-white"
                }`}
                variants={buttonVariants}
                initial="initial"
                whileHover={isSubmitted ? "" : "hover"}
                whileTap="tap"
                animate={isSubmitted ? "submitted" : ""}
                disabled={isSubmitted}
              >
                {isSubmitted ? (
                  <>
                    <SiMinutemailer className="text-xl" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-lg" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
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
      </div>
    </div>
  );
};

export default Contact;