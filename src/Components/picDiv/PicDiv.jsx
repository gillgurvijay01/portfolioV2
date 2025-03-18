import React, { useEffect, useState } from 'react'
import myPic from './img/pic.png'
import style from './picDiv.module.css'

const PicDiv = () => {
    const [isVisible, setIsVisible] = useState(false);
    console.log("PicDiv is rendering!");  
  console.log("Particles component is about to render...");
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

        const element = document.getElementById('home');
        if (element) observer.observe(element);

        return () => {
            if (element) observer.unobserve(element);
        };
    }, []);


    return (
        <div className={`${style.picdiv} ${isVisible ? style.visible : ''}`} id='home'>
            <div className={style.particlesContainer}>
            </div>
            <div className={style.contentContainer}>
                <div className={style.centered_div}>
                    <div className={style.imageDiv}>
                        <div className={style.imageWrapper}>
                            <img src={myPic} alt="Gurvijay Singh Gill" className={style.profilepic} />
                        </div>        
                    </div>
                    <div className={style.topContent}>
                        <div className={style.textWrapper}>
                            <h1>Hi, I'm Gurvijay Singh Gill</h1>
                            <p className={style.subtitle}>Software Engineer | React, Node.js, Docker | JavaScript Developer</p>
                            <p className={style.description}>Graduating in May 2025 with an M.S. in Computer Science from Concordia University-Wisconsin, I have over 2 years of experience in full-stack development, specializing in React.js, Node.js, Express.js, and MongoDB.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default PicDiv;