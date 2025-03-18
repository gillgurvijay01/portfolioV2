import React, { useEffect, useState } from 'react';
import css from './education.module.css';

const Education = () => {
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

    const element = document.getElementById('education');
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const education = [
    {
      degree: "Master of Science - MS, Computer Science",
      school: "Concordia University-Wisconsin",
      location: "Mequon, Wisconsin, United States",
      duration: "June 2023 - May 2025",
      description: "Currently pursuing Master's degree in Computer Science with focus on advanced software development and research."
    },
    {
      degree: "Bachelor of Technology - BTech, Computer Software Engineering",
      school: "CGC Jhanjeri",
      location: "Punjab, India",
      duration: "August 2018 - June 2022",
      description: "Graduated with a strong foundation in computer science and software engineering."
    }
  ];

  return (
    <div id="education" className={`${css.educationSection} ${isVisible ? css.visible : ''}`}>
      <h2 className={css.heading}>Education</h2>
      <div className={css.educationGrid}>
        {education.map((edu, index) => (
          <div key={index} className={css.educationCard}>
            <div className={css.educationHeader}>
              <h3 className={css.degree}>{edu.degree}</h3>
              <span className={css.duration}>{edu.duration}</span>
            </div>
            <h4 className={css.school}>{edu.school}</h4>
            <p className={css.location}>{edu.location}</p>
            <p className={css.description}>{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education; 