import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'highway-delight',
      description: 'A real time news app built with reactjs and bootstrap and also used news API',
      technologies: ['React', 'Bootstrap', 'news API'],
      image: '/public/images/project1.png',
      liveUrl: 'https://highway-delight-1vp5.vercel.app',
      githubUrl: 'https://github.com/karanmahilang9073/highway-delight',
    },
    {
      title: 'social-media app',
      description: 'a social-media built with ReactJS, NodeJS, ExpressJS and MongoDB, where user can like, comment, create, delete and update their specific post',
      technologies: ['ReactJS', 'TailwindCSS', 'NodeJS','ExpressJS','MongoDB'],
      image: '/project2.jpg',
      liveUrl: 'https://project2.com',
      githubUrl: 'https://github.com/yourusername/project2',
    },
    // Add more projects as needed
  ];

  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="mt-4 text-gray-300">
          A showcase of my recent work and side projects
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Project Details */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">
                {project.title}
              </h3>
              
              <p className="text-gray-300">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div className="flex gap-4 pt-4">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-200 text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-white font-medium transition-all duration-200 border border-gray-600 text-sm"
                >
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;