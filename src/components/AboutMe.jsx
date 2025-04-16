import React from 'react';

const AboutMe = () => {
  return (
    <section className="my-16 px-4 max-w-3xl mx-auto">
      <div className="relative group">
        <h2 className="text-4xl font-bold text-blue-600 mb-8 relative inline-block">
          About Me
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </h2>
      </div>

      <div className="space-y-6">
        <div className="bg-white/90 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg text-gray-800 leading-relaxed">
            <span className="text-blue-500 font-medium">Hey!</span> I'm Axel Dominguez, a junior web developer building some dope stuff online. 
            I know <span className="font-semibold text-gray-900">HTML, CSS,</span> and <span className="font-semibold text-gray-900">JavaScript</span>, 
            and I've been learning <span className="font-semibold text-gray-900">React</span> and <span className="font-semibold text-gray-900">Tailwind</span> too.
          </p>
        </div>

        <div className="bg-white/90 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg text-gray-800 leading-relaxed">
            When I'm not programming, you'll probably catch me listening to 
            <span className="font-medium text-purple-600"> Mili</span> music—their songs are just pure peak. 
            <span className="block mt-2 text-gray-600">Especially the <span className="italic">Key Ingredient</span> album. 🔥</span>
          </p>
        </div>

        <div className="bg-white/90 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg text-gray-800 leading-relaxed">
            I'm still learning and improving every day, so feel free to 
            <span className="text-blue-500 font-medium"> connect</span> or 
            <span className="text-blue-500 font-medium"> check out</span> my projects!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;