"use client";

import { motion } from 'framer-motion';
import { FaJava, FaReact, FaGitAlt } from 'react-icons/fa';
import { SiTypescript, SiFirebase, SiPython, SiArduino, SiStmicroelectronics } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import { BiLogoVisualStudio } from 'react-icons/bi';
import React from 'react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const Skills = () => {
  const skills: Skill[] = [
    { name: 'Java', icon: <FaJava size={48} />, color: 'text-orange-500' },
    { name: 'C++', icon: <TbBrandCpp size={48} />, color: 'text-blue-500' },
    { name: 'C', icon: <TbBrandCpp size={48} />, color: 'text-blue-600' },
    { name: 'Python', icon: <SiPython size={48} />, color: 'text-blue-500' },
    { name: 'React', icon: <FaReact size={48} />, color: 'text-blue-400' },
    { name: 'TypeScript', icon: <SiTypescript size={48} />, color: 'text-blue-600' },
    { name: 'Firebase', icon: <SiFirebase size={48} />, color: 'text-orange-500' },
    { name: 'Arduino IDE', icon: <SiArduino size={48} />, color: 'text-green-600' },
    { name: 'STM32 IDE', icon: <SiStmicroelectronics size={48} />, color: 'text-blue-500' },
    { name: 'Git', icon: <FaGitAlt size={48} />, color: 'text-red-500' },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4
      }
    }
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the technologies and tools I work with on a regular basis.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={item}
              className="flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className={`mb-3 ${skill.color}`}>
                {skill.icon}
              </div>
              <h3 className="text-gray-900 dark:text-white font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 