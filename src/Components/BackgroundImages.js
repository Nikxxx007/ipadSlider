import React from 'react';

import '../Styles/BackgroundImages.css'

import Bottle from '../Assets/ThirdBox/bottle.png'
import Bubble1 from '../Assets/ThirdBox/bubble1.png'
import Bubble2 from '../Assets/ThirdBox/bubble2.png'
import Bubble3 from '../Assets/ThirdBox/bubble3.png'
import Bubble4 from '../Assets/ThirdBox/bubble4.png'

function BackgroundImages() {
    return (
        <>
            {/*TODO finish here*/}
            <div className="plate-background"></div>
            <div className="calendar-background"></div>
            <img src={Bubble1} alt="bubble1" className="bubble1"/>
            <img src={Bubble2} alt="bubble2" className="bubble2"/>
            <img src={Bubble3} alt="bubble3" className="bubble3"/>
            <img src={Bubble4} alt="bubble4" className="bubble4"/>
            <img src={Bottle} alt="bottle" className="bottle-img"/>
        </>
    );
}

export default BackgroundImages;