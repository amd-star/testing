import React, { useState } from 'react';

const Education = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const educationItems = [
    {
      institution: "University of the Cordilleras",
      degree: "Bachelor of Science in Information Technology - Web Technology Track",
      year: "Expected 2026",
      details: [
        "Relevant coursework: Online Entrepreneurship, Software as a Service",
        "Capstone project: TBD"
      ]
    },
    {
      institution: "SVCSBI.",
      degree: "High School Diploma",
      year: "2021",
      details: [
        "Relevant coursework: STEM Subjects"
      ]
    }
  ];

  return (
    <section className="my-16 px-4 max-w-4xl mx-auto" id="education">
      <div className="relative group mb-10">
        <h2 className="text-4xl font-bold text-blue-600 relative inline-block">
          Education
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
        </h2>
      </div>

      <div className="space-y-4">
        {educationItems.map((item, index) => (
          <div 
            key={index}
            className={`bg-white p-5 rounded-lg shadow-sm border border-gray-200 transition-all duration-300
              ${expandedCard === index ? 'shadow-md border-blue-300' : 'hover:shadow-md hover:border-blue-300'}`}
            onClick={() => setExpandedCard(expandedCard === index ? null : index)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{item.institution}</h3>
                <p className="text-gray-600 mt-1">{item.degree}</p>
              </div>
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                {item.year}
              </span>
            </div>
            
            <div className={`mt-4 overflow-hidden transition-all duration-300
              ${expandedCard === index ? 'max-h-96' : 'max-h-0'}`}>
              <ul className="pl-5 space-y-2 pb-2">
                {item.details.map((detail, i) => (
                  <li key={i} className="text-gray-700 list-disc marker:text-blue-400">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-3 text-sm text-blue-600">
              {expandedCard === index ? 'Show less ▲' : 'Show more ▼'}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;