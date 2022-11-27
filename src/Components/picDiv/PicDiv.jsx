import React from 'react'
// import { Typewriter } from 'react-simple-typewriter'
import myPic from './img/pic.png'
import style from './picDiv.module.css'
import Fade from 'react-reveal/Fade';

const PicDiv = () => {
    // var sentence = ['git pull origin gurvijay']

    return (
        <div className={`${style.picdiv} p-sm-4 p-xl-0`}>
            <div className={`${style.centered_div} row p-sm-2 p-md-5 `}>
                <div className="image col-sm-12 col-lg-6">
                    <Fade right>
                    <img src={myPic} alt="" className={style.profilepic} />
                    </Fade>
                </div>        <Fade left>

                    <div className={`${style.topContent} align-items-sm-center col-sm-12 col-lg-6`}>
                        <h1>Hi my name is Gurvijay</h1>
                        {/* <div className={`${style.typewriter}`}>
                        <h5 >
                           &gt; <Typewriter words={sentence} loop={Infinity} typeSpeed={200} />
                        
                        </h5>

                    </div> */}
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default PicDiv;