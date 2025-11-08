import React from 'react';
import { profile, heroSkills } from '../constants';

const Home: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-[#10101A] pt-24 md:pt-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Hello<span className="text-[#F75023]">.</span>
              <br />
              I'm <span className="text-white">{profile.name}</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-8">
              Software Developer
            </h2>
            <div className="flex justify-center md:justify-start space-x-4 mb-12">
              <a href="#contact" className="bg-[#F75023] text-white font-semibold py-3 px-8 rounded-md hover:bg-opacity-80 transition-all duration-300">
                Hire Me
              </a>
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer" className="border border-gray-500 text-white font-semibold py-3 px-8 rounded-md hover:bg-white hover:text-[#10101A] transition-all duration-300">
                My Resume
              </a>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
              {heroSkills.map(skill => (
                <span key={skill} className="text-gray-400 font-medium text-lg">{skill}</span>
              ))}
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative flex justify-center items-center order-first md:order-last">
             <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-br from-[#F75023]/30 to-[#10101A] blur-xl"></div>
             <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2" style={{ background: 'linear-gradient(135deg, #F75023, #10101A)' }}>
                <img 
                  src={profile.imageUrl} 
                  alt={profile.name} 
                  className="rounded-full w-full h-full object-cover"
                />
             </div>
             {/* Decorative Elements */}
             <div className="absolute top-10 -left-4 md:top-20 md:-left-8 text-4xl text-[#F75023]/20 font-mono">
                &lt; &gt;
             </div>
              <div className="absolute bottom-10 -right-4 md:bottom-20 md:-right-8 text-4xl text-[#F75023]/20 font-mono">
                &lt;/&gt;
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;