import React from 'react';
import { skills } from '../constants';

const SkillCard: React.FC<{ icon: string; name: string }> = ({ icon, name }) => (
    <div className="bg-[#191923] rounded-lg p-6 flex flex-col items-center justify-center transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-[#F75023]/20 shadow-lg border border-gray-800">
      <i className={`${icon} text-5xl text-[#F75023] mb-4`}></i>
      <h3 className="text-xl font-semibold text-white">{name}</h3>
    </div>
  );


const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-[#10101A]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Tech <span className="text-[#F75023]">Stack</span></h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <SkillCard key={skill.name} icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;