import React from 'react';

const About = () => {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          About Me
        </h1>
        <p className="mt-4 text-gray-300">
          A passionate web developer crafting digital experiences
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Personal Info */}
        <div className="space-y-6">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Who I Am</h2>
            <p className="text-gray-300 leading-relaxed">
              I'm a full-stack developer based in kolkata, specializing in building exceptional digital experiences.
              With a focus on creating innovative and user-friendly applications, I strive to bring ideas to life through code.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Education</h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <h3 className="font-medium">Bachelor's in Electronics and Communication</h3>
                <p className="text-gray-400">Gargi Memorial Institute of Technology • 2022-2026</p>
              </li>
              {/* Add more education items as needed */}
            </ul>
          </div>
        </div>

        {/* Right Column - Experience & Interests */}
        <div className="space-y-6">
          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Experience</h2>
            <ul className="space-y-4 text-gray-300">
              <li>
                <h3 className="font-medium">Freshers</h3>
                {/* <p className="text-gray-400">Company Name • 2023-Present</p>
                <p className="mt-2">
                  Building and maintaining modern web applications using React, Node.js, and other cutting-edge technologies.
                </p> */}
              </li>
              {/* Add more experience items as needed */}
            </ul>
          </div>

          <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
            <h2 className="text-2xl font-semibold text-blue-400 mb-4">Interests</h2>
            <div className="flex flex-wrap gap-2">
              {['Web Development', 'Open Source', 'Tech Innovation'].map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm border border-blue-500/20"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Call to Action */}
      <div className="text-center mt-12">
        <p className="text-gray-300 mb-4">
          Interested in working together? Let's connect!
        </p>
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-200 shadow-lg shadow-blue-500/20"
        >
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default About;