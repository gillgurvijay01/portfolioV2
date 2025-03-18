import React, { useState, useEffect } from "react";
import css from "./about.module.css";

const About = () => {
  const [text, setText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "I'm a Software Engineer pursuing my M.S. in Computer Science at Concordia University-Wisconsin. With 2+ years of full-stack development experience, I specialize in the MERN stack and modern web technologies. My programming journey began with QBASIC, evolved through web development and C++, and now focuses on creating innovative solutions using React.js, Node.js, and cloud technologies. I'm passionate about building scalable applications and staying current with emerging tech trends.";

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
    "Redux", "Next.js", "Material-UI", "Bootstrap", "Jest",
    "AWS", "Docker", "CI/CD", "Agile", "JIRA", "Python"
  ];

  const honors = [
    {
      title: "2nd in codestorm event",
      year: "2023",
      institution: "Delhi Public School, NTPC Vidyut Nagar"
    },
    {
      title: "1st in build a code",
      year: "2023",
      institution: "CGC Jhanjeri"
    },
    {
      title: "2nd position in Spring Hackathon",
      year: "2022",
      institution: "Concordia University-Wisconsin"
    },
    {
      title: "3rd Position in summer hackathon",
      year: "2022",
      institution: "Concordia University-Wisconsin"
    },
    {
      title: "2nd position in Fall Mini Hackathon - II",
      year: "2022",
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
      </div>
    </div>
  );
};

export default About;
