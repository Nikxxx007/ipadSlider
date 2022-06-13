import React, {useEffect} from 'react';
import '../Styles/FirstBox.css';


import BackgroundBaks from "./BackgroundBaks";
import Button from "./Button";

function FirstBox({click}) {

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
                        <div className="content__img">
                            <Button text={'Что дальше?'} click={click} print={'arrow'}/>
                        </div>
                    </div>
                </div>
                <BackgroundBaks />
            </div>
        </>
    );
}

export default FirstBox;