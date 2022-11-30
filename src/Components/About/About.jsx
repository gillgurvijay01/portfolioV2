import React from 'react'
import css from './about.module.css'
import { Typewriter } from 'react-simple-typewriter'
import Fade from 'react-reveal/Fade';
const About = () => {
    const sentence = ["My name is Gurvijay Singh Gill. I come from Amritsar, Punjab, India. Since childhood, I got  extreme interest in gaming and Programming. I started coding QBASIC language which i learned in my school in third grade, Later learnt Web Development in High School and C++ in 11th and 12th grade. Currently, I am working as a React  JS developer in an Organization in Mohali, Punjab, India. My near goals are to be proficient in Full Stack Web Development and develope sharp skills in React and NodeJs."]

    return (

        <div id='about' className={`${css.aboutDiv}`}><Fade top><p className={` ${css.heading} text-center`}>About</p>
        </Fade>
            <p className={`${css.paragraphAbout}`}>
                <Fade left > 
                <Typewriter words={sentence} typeSpeed={20} />
                </Fade>
            </p>
            
            
            <p className={`${css.linksHeading}`}>
                <Fade bottom cascade delay={16000} >Connect Here</Fade></p>
                <p className={`${css.links}`}>
                <a href = "https://github.com/gillgurvijay01" target="_blank"  rel='noreferrer'><Fade bottom cascade delay={17000} >Github</Fade></a>
                <a href = "https://www.linkedin.com/in/Gillgurvijay01" target="_blank" rel='noreferrer'>
                <Fade bottom cascade delay={18000} >Likedin</Fade></a>
                <a href = "https://twitter.com/GillGurvijay01" target="_blank" rel='noreferrer' ><Fade bottom cascade delay={19000} >Twitter</Fade></a>
                <a href = "https://dev.to/gillgurvijay01" target="_blank" rel='noreferrer'><Fade bottom cascade delay={20000} >Dev.to</Fade></a>
                </p>
            
            </div>
    )
}

export default About