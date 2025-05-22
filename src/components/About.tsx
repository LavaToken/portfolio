"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="aspect-square relative rounded-xl overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-gray-300 dark:bg-gray-700 flex items-center justify-center">
              {/* Replace with your actual image */}
              <div className="text-gray-500 dark:text-gray-400 text-lg">Your Image Here</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate web developer with a strong focus on creating responsive, 
              user-friendly applications. With expertise in modern web technologies, 
              I bring ideas to life through clean, efficient code and thoughtful design.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              My journey in web development began several years ago, and I've since worked on 
              a variety of projects ranging from simple websites to complex web applications. 
              I'm constantly learning and exploring new technologies to improve my skills.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Education</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>BS in Computer Engineering</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">Interests</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>Software Development & Web Development</li>
                  <li>Firmware Engineering</li>
                  <li>AI & Machine Learning</li>
                </ul>
              </div>
            </div>
            
            <div>
              <a 
                href="/resume.pdf" 
                target="_blank"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 