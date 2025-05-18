import React, { useState, useEffect } from "react";
import css from "./about.module.css";
import Blogs from "../Blogs/Blogs";

const About = () => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const fullText = `I’m a full-stack developer with over two years of hands-on experience and a freshly completed M.S. in Computer Science (May 2025). My coding journey began in QBASIC before I dove into web development and C++, and today I build scalable, user-focused applications using the MERN stack, modern JavaScript, and cloud services. I thrive on translating complex challenges into elegant React.js front-ends and performant Node.js back-ends, and I’m passionate about staying ahead of emerging technologies, optimizing workflows, and collaborating across teams to bring ideas from concept to production.
`;

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(prev => prev + fullText[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, []);

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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const skills = [
    "React.js", "Node.js", "JavaScript", "TypeScript", "MongoDB",
    "Express.js", "HTML5", "CSS3", "Git", "RESTful APIs",
    "Redux", "Material-UI", "Bootstrap", "SQL","Nginx", "Docker", "Agile", "JIRA", "Python"
  ];

  const honors = [
    {
      title: "2nd in codestorm event",
      year: "2017",
      institution: "Delhi Public School, NTPC Vidyut Nagar"
    },
    {
      title: "1st in build a code",
      year: "2018",
      institution: "CGC Jhanjeri"
    },
    {
      title: "2nd position in Spring Hackathon",
      year: "2024",
      institution: "Concordia University-Wisconsin"
    },
    {
      title: "3rd Position in summer hackathon",
      year: "2024",
      institution: "Concordia University-Wisconsin"
    },
    {
      title: "2nd position in Fall Mini Hackathon - II",
      year: "2024",
      institution: "Concordia University-Wisconsin"
    },
    {
      title: "1st position in Spring Hackathon",
      year: "2025",
      institution: "Concordia University-Wisconsin"
    }
  ];

  return (
    <div id="about" className={`${css.aboutDiv} ${isVisible ? css.visible : ''}`}>
      <p className={`${css.heading} text-center`}>About Me</p>
      <p className={`${css.paragraphAbout}`}>{text}</p>

      <div className={css.skillsSection}>
        <h3 className={css.skillsHeading}>Skills</h3>
        <div className={css.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} className={css.skillItem}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      <Blogs />

      <div className={css.honorsSection}>
        <h3 className={css.skillsHeading}>Honors & Awards</h3>
        <div className={css.honorsGrid}>
          {[...honors]
            .sort((a, b) => parseInt(b.year) - parseInt(a.year))
            .map((honor, index) => (
              <div key={index} className={css.honorItem}>
                <h4 className={css.honorTitle}>{honor.title}</h4>
                <p className={css.honorDetails}>
                  <span className={css.honorYear}>{honor.year}</span>
                  <span className={css.honorInstitution}>{honor.institution}</span>
                </p>
              </div>
            ))}
        </div>
      </div>

      <p className={`${css.linksHeading}`}>Connect With Me</p>
      <div className={css.links}>
        <a
          href="https://twitter.com/gillgurvijay01"
          target="_blank"
          rel="noreferrer"
          className={css.link}
        >
          Twitter / X
        </a>
        <a
          href="https://github.com/gillgurvijay01"
          target="_blank"
          rel="noreferrer"
          className={css.link}
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/gillgurvijay01"
          target="_blank"
          rel="noreferrer"
          className={css.link}
        >
          LinkedIn
        </a>
        <a
          href="https://hashnode.com/@gillgurvijay01"
          target="_blank"
          rel="noreferrer"
          className={css.link}
        >
          Hashnode
        </a>
      </div>
    </div>
  );
};

export default About;
