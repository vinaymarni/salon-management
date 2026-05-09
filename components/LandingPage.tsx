import React, { useEffect, useState } from 'react';
import Style from "../styles/landing.module.css";
const LandingPage = () => {
    const [show, setShow] = useState({img: false, text:false});

    useEffect(()=>{
        setTimeout(()=>{
            setShow({img: true, text:false});
        },1000);

        setTimeout(()=>{
            setShow({img: true, text:true});
        },2000);
    },[]);

    return (
        <div className={Style.landingPageMainCon}>
            <div className={Style.landingPageImgCon}>
                <img 
                    src="/benvily.png"  
                    className={Style.landingPageImg} 
                    alt="side Imgs" 
                    style={{ visibility: show.img ? "visible" : "hidden" }}
                />
            </div>
            <p 
                className={Style.landingPageText}
                // style={{ visibility: show.text ? "visible" : "hidden" }}
            >Premium Booking Experience</p>
        </div>
    )
};

export default LandingPage;