import React from 'react';
import { experience } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-[#10101A]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Professional <span className="text-[#F75023]">Experience</span></h2>
        <div className="relative border-l-2 border-gray-700 max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <div key={index} className="mb-12 ml-8 pl-4">
              <div className="absolute -left-[11px] mt-2 w-5 h-5 bg-[#F75023] rounded-full border-4 border-[#10101A]"></div>
              <p className="text-[#F75023] font-semibold text-lg">{exp.period}</p>
              <h3 className="text-2xl font-bold mt-1 text-white">{exp.role}</h3>
              <p className="text-xl text-gray-300 mb-4">{exp.company}</p>
              <ul className="list-disc list-inside text-gray-400 space-y-2">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;