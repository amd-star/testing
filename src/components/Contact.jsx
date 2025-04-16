import React from 'react';

const Contact = () => {
  const contacts = [
    { type: "Email", text: "amd@uc.com", url: "mailto:your.email@example.com" },
    { type: "GitHub", text: "github.com/amd-star", url: "https://github.com/amd-star" },
    { type: "LinkedIn", text: "linkedin.com/noneyet", url: "https://linkedin.com/in/yourprofile" },
    { type: "Twitter", text: "@amdstar", url: "https://twitter.com/amdstar" }
  ];

  return (
    <section className="my-16 px-4 max-w-4xl mx-auto" id="contact">
      <div className="relative group mb-10">
        <h2 className="text-4xl font-bold text-blue-600 relative inline-block">
          Contact
          <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {contacts.map((contact, index) => (
          <a 
            key={index}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:border-blue-300 transition-all duration-300"
          >
            <h3 className="font-medium text-gray-900">{contact.type}</h3>
            <p className="text-blue-600 mt-1 hover:text-blue-800 transition-colors">
              {contact.text}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;