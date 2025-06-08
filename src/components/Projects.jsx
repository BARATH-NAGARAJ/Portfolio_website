import { MdArrowOutward } from 'react-icons/md';
import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section className="pt-20" id="projects">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-center text-3xl lg:text-4xl"
      >
        Projects
      </motion.h2>
      
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            key={project.id} 
            className="group relative overflow-hidden rounded-3xl aspect-square"
          >
            <img
              src={project.image} 
              alt={project.name} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100 md:group-hover:opacity-100 group-active:opacity-100 active:opacity-100">
              <h3 className="mb-2 text-xl font-semibold">
                {project.name}
              </h3>
              
              <p className="mb-8 p-4 text-center text-sm md:text-base">
                {project.description}
              </p>
              
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-full bg-white px-4 py-2 text-black hover:bg-gray-300 transition-colors duration-200 transform hover:scale-105"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-1">
                  <span>View on Github</span>
                  <MdArrowOutward />
                </div>
              </a>
            </div>

            <div className="md:hidden absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 backdrop-blur-lg transition-opacity duration-300 active:opacity-100 touch-manipulation">
              <h3 className="mb-2 text-lg font-semibold">
                {project.name}
              </h3>
              
              <p className="mb-6 p-3 text-center text-sm">
                {project.description}
              </p>
              
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="rounded-full bg-white px-3 py-2 text-black text-sm"
              >
                <div className="flex items-center gap-1">
                  <span>View on Github</span>
                  <MdArrowOutward />
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;