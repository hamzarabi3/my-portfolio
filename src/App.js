import React, { useState } from 'react';
import { Linkedin } from 'lucide-react';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { name, email, message });
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <header className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">Your Name</h1>
      </header>

      <main className="max-w-7xl mx-auto">
        <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">About Me</h2>
          <p className="text-gray-700">
            Hello! I'm a passionate developer with expertise in web technologies. I love creating user-friendly and efficient applications. My skills include React, Node.js, and various modern frameworks.
          </p>
        </section>

        <section className="bg-white shadow-lg rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Career Details</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Software Engineer at TechCorp (2020-Present)</li>
            <li>Junior Developer at StartupXYZ (2018-2020)</li>
            <li>Computer Science Degree from University ABC (2014-2018)</li>
          </ul>
          <div className="mt-4">
            <a 
              href="https://www.linkedin.com/in/yourprofile" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <Linkedin className="mr-2" size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[1, 2, 3].map((project) => (
            <div key={project} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2">
              <img src={`https://picsum.photos/400/300?random=${project}`} alt={`Project ${project}`} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Project {project}</h3>
                <p className="text-gray-700 mb-4">Description of Project {project}. This project showcases my skills in web development and design.</p>
                <p className="text-gray-600 mb-4"><strong>Technologies:</strong> React, Node.js, CSS</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800">GitHub Repo</a>
                  <a href="#" className="text-blue-600 hover:text-blue-800">Live Demo</a>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default App;