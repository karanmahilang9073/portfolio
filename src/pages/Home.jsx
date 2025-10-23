import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-5rem)] flex flex-col justify-center items-center">
      {/* Hero Section */}
      <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-6xl font-bold">
          Hi, I'm{' '}
          <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Karan Mahilang
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300">
          Full Stack Developer...
        </p>
        
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          I craft modern web experiences with cutting-edge technologies.
          Passionate about creating innovative solutions and beautiful interfaces. and love to create interesting 3d models using blender
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            to="/projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-200 shadow-lg shadow-blue-500/20"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-6 py-3 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-white font-medium transition-all duration-200 border border-gray-600"
          >
            Contact Me
          </Link>
        </div>

        {/* Tech Stack */}
        <div className="mt-16">
          <h2 className="text-gray-400 text-sm uppercase tracking-wider mb-6">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['React', 'Node.js', 'MongoDB','java', 'Tailwind CSS'].map((tech) => (
              <div
                key={tech}
                className="px-4 py-2 bg-gray-800/50 rounded-lg text-gray-300 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-200"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
};

export default Home;