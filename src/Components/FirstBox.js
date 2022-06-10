import React, {useEffect} from 'react';
import '../Styles/FirstBox.css';

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
                    <div className="content__greetings">
                        <h2>Привет, </h2>
                    </div>
                    <div className="content__main">
                        <h1>Это <b>не</b> коммерческое задание</h1>
                        <img src={Btn} alt={'btn'}/>
                    </div>
                </div>
                <BackgroundBaks />
            </div>
        </>
    );
}

export default FirstBox;