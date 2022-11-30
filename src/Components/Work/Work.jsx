import React from "react";
import { Fade } from "react-reveal";
import css from "./work.module.css";
const Work = () => {
  return (
    <div className={`${css.workDiv}`} id="work">
      <Fade top>
        <p className={` ${css.heading} text-center mt-3 mb-5`}>Work Expirience</p>
      </Fade>
      <div className={`${css.work}`}>
        <div className={`${css.workExp} row`}>
        <Fade left cascade>
          <div className="col-xs-12 col-lg-4">
            <p className={`${css.headingWork}`}>Scramble Apps Pvt. Ltd.</p>
            <p className={`${css.posWork}`}>Software Engineer</p>
            <p className={`${css.timeWork}`}>September 2022 - Present</p>
          </div>
          </Fade>
          <div className="col-xs-12 col-lg-8 ">
            <p className={`${css.detailsWork} mx-md-auto`}>
            <Fade right cascade>
          
              <ul className={`${css.points}`}>
                <li>Working as React Front End Developer</li>
                <li>Worked in projects with multiple technologies.</li>
              </ul>
            
              </Fade>
            </p>
          </div>
        </div>
        <div className={`${css.workExp} row`}>
        <Fade left cascade>
          
          <div className="col-xs-12 col-lg-4">
            <p className={`${css.headingWork}`}>Wisdom Infosoft Pvt. Ltd.</p>
            <p className={`${css.posWork}`}>Software Developement Trainee</p>
            <p className={`${css.timeWork}`}>February 2022 - June 2022</p>
          </div>
          </Fade>
          <div className="col-xs-12 col-lg-8 mx-md-auto">
            <p className={`${css.detailsWork}`}>
            <Fade right cascade>
          
              <ul className={`${css.points}`}>
                <li>Trained in MERN Full stack technology</li>
                <li>Learned technologies like ReactJs , MongoDb database , NodeJS, and Express Js</li>
                
              </ul>
              </Fade>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
