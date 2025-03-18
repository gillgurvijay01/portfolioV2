import React, { useEffect, useState } from "react";
import css from "./work.module.css";

const Work = () => {
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

    const element = document.getElementById('work');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const workExperience = [
    {
      title: "Student Worker / Web Developer",
      company: "Concordia University-Wisconsin",
      location: "Mequon, Wisconsin, United States",
      duration: "May 2024 - Present",
      description: "Developed and deployed a ticket management system for the Makerspace 3D printing lab. Collaborated effectively within a dynamic team environment, working under professor guidance. Functioned as a Full Stack Developer, contributing to both front-end and back-end development using the MERN stack.",
      technologies: ["React.js", "Express.js", "MongoDB", "Node.js", "MERN Stack", "REST APIs"]
    },
    {
      title: "Software Engineer",
      company: "Scramble Apps Pvt. Ltd.",
      location: "Sahibzada Ajit Singh Nagar, Punjab, India",
      duration: "September 2022 - May 2023",
      description: "Contributed as a React Developer, designing and implementing intuitive user interfaces. Developed interactive front-end features, worked closely with clients, and participated in agile development processes. Created user flows and wireframes using Adobe XD.",
      technologies: ["React.js", "HTML", "CSS", "JavaScript", "Adobe XD", "Agile"]
    },
    {
      title: "Software Development Trainee",
      company: "Wisdom InfoSoft",
      location: "Sahibzada Ajit Singh Nagar, Punjab, India",
      duration: "February 2022 - June 2022",
      description: "Trained in MERN Full stack technology, gaining hands-on experience with MongoDB, Express, React, and Node.js. Developed and deployed full-stack web applications, worked with REST APIs, and demonstrated proficiency in SQL and NoSQL database design.",
      technologies: ["MERN Stack", "REST APIs", "MongoDB", "Express.js", "React.js", "Node.js"]
    }
  ];

  return (
    <div id="work" className={`${css.workSection} ${isVisible ? css.visible : ''}`}>
      <h2 className={css.heading}>Work Experience</h2>
      <div className={css.workGrid}>
        {workExperience.map((work, index) => (
          <div key={index} className={css.workCard}>
            <div className={css.workHeader}>
              <h3 className={css.title}>{work.title}</h3>
              <span className={css.duration}>{work.duration}</span>
            </div>
            <h4 className={css.company}>{work.company}</h4>
            <p className={css.location}>{work.location}</p>
            <p className={css.description}>{work.description}</p>
            <div className={css.technologies}>
              {work.technologies.map((tech, techIndex) => (
                <span key={techIndex} className={css.techTag}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
