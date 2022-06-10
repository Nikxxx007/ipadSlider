import React, {useEffect} from 'react';
import '../Styles/FirstBox.css';

import Home from '../Assets/FirstBox/Home.svg';
import Line from '../Assets/FirstBox/Line.svg';
import Logo from '../Assets/FirstBox/Logo.svg';
import Btn from '../Assets/FirstBox/btn.png';

import BackgroundBaks from "./BackgroundBaks";

function FirstBox() {

    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <>
            <div className="content">
                <div className="content__container">
                    <div className="content__header">
                        <img className={'header-item'} src={Home} alt={'home'}/>
                        <img className={'stick'} src={Line} alt={'project'}/>
                        <div className="header-text">Project</div>
                    </div>
                    <div className="content__greetings">
                        Привет,
                    </div>
                    <div className="content__main">
                        <h1>Это <b>не</b> коммерческое задание</h1>
                        <img src={Btn} alt={'btn'}/>
                    </div>
                    <div className="content__logo">
                        <img src={Logo} alt={'Logo'}/>
                    </div>
                </div>
                <BackgroundBaks />
            </div>
        </>
    );
}

export default FirstBox;