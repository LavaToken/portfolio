"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import React from 'react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Climate Aware',
      description: 'A full-featured e-commerce platform built with Next.js, TypeScript, and Tailwind CSS. Features include product listings, cart functionality, user authentication, and payment processing.',
      tags: ['React', 'TypeScript', 'Firebase', 'Google Earth Engine'],
      imageUrl: '/images/ClimateAwareImg.png',
      githubUrl: 'https://github.com/yourusername/project1',
      liveUrl: 'https://hackdavis-2025.web.app/'
    },
    {
      title: 'Formula Racing FE12 Dashboard Games',
      description: 'Developed a dashboard for the Formula Racing FE12 team to display real-time data and control the car during competitions. The dashboard featured games to engage the team and improve their performance such as Tetris and a 2D racing simulator.',
      tags: ['C', 'STM32', 'STM32IDE'],
      imageUrl: '/project2.jpg',
      githubUrl: 'https://github.com/yourusername/project2',
      liveUrl: 'https://project2.example.com'
    },
    {
      title: 'Breathing Monitor',
      description: 'Developed a breathing monitor to help users regulate proper the 4-7-8 breathing technique to help improve mental health, sleep quality, and prevent respiratory diseases',
      tags: ['C++', 'Arduino UNO', 'ArduinoIDE'],
      imageUrl: '/images/BreathingMonitorImg.png',
      githubUrl: 'https://github.com/yourusername/project3',
      liveUrl: 'https://project3.example.com'
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem or learn a new technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-full h-56 relative">
                <Image
                  src={project.imageUrl}
                  alt={`${project.title} project screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FaGithub size={18} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 