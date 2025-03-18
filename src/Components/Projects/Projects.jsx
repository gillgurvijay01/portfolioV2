import React, { useEffect, useState } from 'react';
import css from './projects.module.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('projects');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React.js and CSS modules. Features smooth animations, responsive design, and a clean user interface.",
      technologies: ["React.js", "CSS Modules", "JavaScript", "HTML5", "CSS3", "Docker", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "Nginx", ],
      githubLink: "https://github.com/gillgurvijay01/portfolio-v2",
      liveLink: "https://gillgurvijay01.github.io/portfolio-v2"
    },
    {
      title: "Ticket Management System",
      description: "A full-stack ticket management system for 3D printing lab. Built with MERN stack, featuring user authentication, ticket creation, and status tracking.",
      technologies: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
      githubLink: "https://github.com/gillgurvijay01/ticket-management-system",
      liveLink: "https://ticket-management-system.herokuapp.com/"
    }
  ];

  return (
    <div id="projects" className={`${css.projectsSection} ${isVisible ? css.visible : ''}`}>
      <h2 className={css.heading}>Projects</h2>
      <div className={css.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={css.projectCard}>
            <h3 className={css.projectTitle}>{project.title}</h3>
            <p className={css.projectDescription}>{project.description}</p>
            <div className={css.technologies}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={css.techTag}>{tech}</span>
              ))}
            </div>
            <div className={css.projectLinks}>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className={css.projectLink}
              >
                GitHub
              </a>
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className={css.projectLink}
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 