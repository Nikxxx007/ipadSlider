import React from 'react';
import '../Styles/HomeButton.css'
import Home from "../Assets/FirstBox/Home.svg";
import Line from "../Assets/FirstBox/Line.svg";

function HomeButton({click}) {
    return (
        <>
            <div className="content__header">
                <img className={'header-item'} onClick={click} src={Home} alt={'home'}/>
                <img className={'stick'} src={Line} alt={'project'}/>
                <div className="header-text">Project</div>
            </div>
        </>
    );
}

export default HomeButton;