import React from 'react';
import { services, stats } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#191923]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left Services */}
          <div>
            {services.map((service, index) => (
              <div key={index} className="flex items-start gap-4 mb-8">
                <div className="text-[#F75023] text-2xl mt-1">
                  <i className={service.icon}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right About Me & Stats */}
          <div>
            <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              I am a dedicated and results-oriented Software Developer currently contributing to innovative projects at TatvaSoft. With a strong foundation in full-stack development, I specialize in building dynamic and efficient web applications using MEAN stack, .NET, PostgreSQL, and NestJS. I thrive on solving complex problems and am passionate about writing clean, maintainable, and scalable code.
            </p>
            <div className="flex flex-wrap gap-8">
              {stats.map((stat, index) => (
                <div key={index}>
                  <p className="text-4xl font-bold text-[#F75023]">{stat.value}</p>
                  <p className="text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;