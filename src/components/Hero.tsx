"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">Kevin</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              Full-Stack & Embedded Systems Engineer
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto md:mx-0"
          >
            <p className="text-lg">
              From web interfaces to embedded firmware — delivering clean, efficient solutions across hardware and software.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col md:flex-row gap-4 justify-center md:justify-start"
          >
            <Link 
              href="#projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
            >
              View My Work
            </Link>
            <Link 
              href="#contact"
              className="px-6 py-3 bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white rounded-md font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <Link href="#about" aria-label="Scroll down">
            <FaArrowDown className="text-gray-600 dark:text-gray-400 text-2xl" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 