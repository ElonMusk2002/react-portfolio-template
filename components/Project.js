import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { projectData}  from '@/data/config';

const ProjectSection = () => {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center">
          {projectData.map((project) => (
            <div key={project.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href={project.githubLink}>
                <img className="rounded-t-lg" src={project.imageUrl} alt={project.title} />
              </a>
              <div className="p-5">
                <a href={project.githubLink}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight bg-gradient-to-t from-[#c7d2fe] to-[#8678f9] bg-clip-text text-transparent">{project.title}</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description}</p>
                <a
                  href={project.githubLink}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Read more
                  <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default ProjectSection;
