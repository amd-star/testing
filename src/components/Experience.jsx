import React from 'react';

const Experience = () => {
  return (
    <section className="my-16 px-4 max-w-4xl mx-auto" id="experience">
      <div className="relative group mb-10">
        <h2 className="text-4xl font-bold text-blue-600 relative inline-block">
          Experience
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
        </h2>
      </div>

      <div className="bg-white/90 p-8 rounded-xl shadow-lg border border-gray-100 text-center">
        <h3 className="text-2xl font-medium text-gray-800 mb-2">Fresh Perspective</h3>
        <p className="text-gray-600 mb-6">
          While I don't have formal work experience yet, I bring:
        </p>
        
        <ul className="max-w-md mx-auto space-y-4 text-left">
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">1</span>
            <span className="text-gray-700">Enthusiasm for learning new technologies</span>
          </li>
          <li className="flex items-start">
            <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">2</span>
            <span className="text-gray-700">Personal projects demonstrating my skills</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;