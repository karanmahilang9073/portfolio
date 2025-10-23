import React from 'react';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-fadeIn">
      {/* Header Section with enhanced styling */}
      <div className="text-center space-y-4 relative">
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full"></div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent relative">
          Get In Touch
        </h1>
        <p className="mt-4 text-gray-300 text-lg relative">
          Let's collaborate on your next project
        </p>
      </div>

      {/* Contact Form with enhanced styling */}
      <div className="transform hover:scale-[1.01] transition-all duration-300">
        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50 shadow-2xl relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute inset-0 bg-grid-white/[0.02] -z-1"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent -z-1"></div>

          <form onSubmit={handleSubmit} className="space-y-8 relative">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="group">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-blue-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block w-full rounded-lg bg-gray-700/50 border border-gray-600 text-gray-300 px-4 py-3 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    hover:border-blue-400/50 transition-all duration-300"
                  required
                />
              </div>
              <div className="group">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-blue-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="block w-full rounded-lg bg-gray-700/50 border border-gray-600 text-gray-300 px-4 py-3 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    hover:border-blue-400/50 transition-all duration-300"
                  required
                />
              </div>
            </div>
            <div className="group">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-blue-400">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block w-full rounded-lg bg-gray-700/50 border border-gray-600 text-gray-300 px-4 py-3 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  hover:border-blue-400/50 transition-all duration-300"
                required
              />
            </div>
            <div className="group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 transition-colors group-hover:text-blue-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="block w-full rounded-lg bg-gray-700/50 border border-gray-600 text-gray-300 px-4 py-3 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                  hover:border-blue-400/50 transition-all duration-300 resize-none"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 
                  rounded-lg text-white font-medium transition-all duration-300 transform hover:-translate-y-0.5
                  shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Social Links with enhanced styling */}
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-semibold bg-gradient-to-r from-gray-100 to-gray-300 bg-clip-text text-transparent">
          Connect With Me
        </h2>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group transform hover:scale-110 transition-all duration-300"
            >
              <div className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 
                hover:border-blue-500/50 hover:bg-gray-700/50 transition-all duration-300
                shadow-lg hover:shadow-blue-500/20">
                <div className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
                  {link.icon}
                </div>
              </div>
              <span className="sr-only">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;