import React, { useEffect, useState } from "react";
import css from "./projects.module.css";

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

    const element = document.getElementById("projects");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const projects = [
    {
      title: "FeedFusion - A Productive News App to fight content distraction",
      description: "Developed a distraction‑free mobile news app in a one‑day hackathon using React Native (Expo), Node.js, and MongoDB. It aggregates RSS feeds from trusted sources and offers filtered views (all, preferred, bookmarked), bookmarking, source tags, secure authentication, and a clean UI. Implemented real‑time RSS processing and designed a cross‑platform front end for focused, purposeful reading",
      technologies: [
        "React Native",
        "Expo",
        "Node.js",
        "MongoDB",
        "RSS",
        "JavaScript",
        "iOS",
      ],
      githubLink: "https://github.com/gillgurvijay01/feedfusion",
      liveLink: "https://feedfusion.netlify.app/",
    },
    {
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with React.js and CSS modules. Features smooth animations, responsive design, and a clean user interface.",
      technologies: [
        "React.js",
        "CSS Modules",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Git",
        "GitHub",
      ],
      githubLink: "https://github.com/gillgurvijay01/portfolioV2",
      liveLink: "https://gsgill.me/",
    },
    {
      title: "Ticket Management System",
      description:
        "A full-stack ticket management system for 3D printing lab. Built with MERN stack, featuring user authentication, ticket creation, and status tracking.",
      technologies: [
        "MERN Stack",
        "MongoDB",
        "Express.js",
        "React.js",
        "Node.js",
        "Git",
        "GitHub",
        "Docker",
        "Nginx",
      ],
      githubLink: "hhttps://github.com/freindst/makerspace-react",
      liveLink: "No live Link",
    },
    {
      title: "CGC Book Project - E-Commerce Website",
      description: `A full-stack e-commerce website for selling books, built with LAMP stack technology.
📚 Implemented user authentication, account management, and session handling.
👨‍💻 Built admin portal for managing users, products, and orders.
🎨 Styled responsive frontend using Bootstrap framework.
🤝 Collaborated with Tejbir Singh on development.`,
      technologies: [
        "PHP",
        "MySQL",
        "HTML5",
        "CSS3", 
        "Bootstrap",
        "Apache",
        "phpMyAdmin"
      ],
      githubLink: "https://github.com/gillgurvijay01/CGC-Book-Project",
      liveLink: "No live Link"
    }
  ];

  return (
    <div
      id="projects"
      className={`${css.projectsSection} ${isVisible ? css.visible : ""}`}
    >
      <h2 className={css.heading}>Projects</h2>
      <div className={css.projectsGrid}>
        {projects.map((project, index) => (
          <div key={index} className={css.projectCard}>
            <h3 className={css.projectTitle}>{project.title}</h3>
            <p className={css.projectDescription}>{project.description}</p>
            <div className={css.technologies}>
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={css.techTag}>
                  {tech}
                </span>
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
