import React from 'react'
// import { Typewriter } from 'react-simple-typewriter'
import myPic from './img/pic.png'
import style from './picDiv.module.css'
import Fade from 'react-reveal/Fade';

const PicDiv = () => {
    // var sentence = ['git pull origin gurvijay']

    return (
        <div className={`${style.picdiv} p-sm-4 p-0`} id='home'>
            <div className={`${style.centered_div} row `}>
                <div className={`${style.imageDiv} col-sm-12 col-md-5`}>
                    <Fade right>
                    <img src={myPic} alt="" className={`${style.profilepic}`} />
                    </Fade>
                </div>        

                    <div className={`${style.topContent} align-items-sm-center col-sm-12 col-md-5 mt-sm-5 mt-lg-0`}>
                    <Fade left>
                        <h1>Hi my name is Gurvijay</h1>
                        {/* <div className={`${style.typewriter}`}>
                        <h5 >
                           &gt; <Typewriter words={sentence} loop={Infinity} typeSpeed={200} />
                        
                        </h5>

                    </div> */}
                </Fade>
                    </div>
                
            </div>
        </div>
    )
}

export default PicDiv;