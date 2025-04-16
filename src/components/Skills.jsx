import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", ]
    },
    {
      name: "Tools",
      skills: ["Git", "VS Code", "Figma", "Chrome DevTools"]
    },
    {
      name: "Learning",
      skills: ["RLua", "MongoDB", "React", "Tailwind CSS"]
    }
  ];

  return (
    <section className="my-16 px-4 max-w-4xl mx-auto" id="skills">
      <div className="relative group mb-10">
        <h2 className="text-4xl font-bold text-blue-600 relative inline-block">
          Skills
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-white/90 p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4 pb-2 border-b border-blue-100">
              {category.name}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, i) => (
                <span 
                  key={i}
                  className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-100 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;