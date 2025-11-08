import React from 'react';
import { projects } from '../constants';

const ProjectCard: React.FC<{ title: string; description: string; tags: string[]; imageUrl: string }> = ({ title, description, tags, imageUrl }) => (
  <div className="bg-[#191923] rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-[#F75023]/20 border border-gray-800">
    <img src={imageUrl} alt={title} className="w-full h-56 object-cover" />
    <div className="p-6">
      <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="bg-gray-800 text-[#F75023] text-sm font-medium px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-[#191923]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">Featured <span className="text-[#F75023]">Projects</span></h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;