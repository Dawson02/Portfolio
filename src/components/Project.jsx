import React from 'react';

const projectsData = [
  {
    title: 'Project 1',
    description: 'Description of Project 1...',
    image: 'project1-image.jpg',
    link: '',
    technologies: ['React', 'Node.js'],
  },
  {
    title: 'Project 2',
    description: 'Description of Project 2...',
    image: 'project2-image.jpg',
    link: '',
    technologies: ['React', 'Node.js'],
  },
  {
    title: 'Project 3',
    description: 'Description of Project 3...',
    image: 'project3-image.jpg',
    link: '',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Project 4',
    description: 'Description of Project 4...',
    image: 'project4-image.jpg',
    link: '',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <div className="project-card" key={index}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <img src={project.image} alt={project.title} />
          <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
