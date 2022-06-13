import React, { useEffect } from 'react';

import '../Styles/SecondBox.css';
import Text from './Text';


function SecondBox(props) {

    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    return (
        <>
            <div className="second-box">
                <div className="second-box-wrapper">
                    <div className="second-box__title">
                        <h2>Текст<br/>сообщения</h2>
                    </div>
                    <div className="second-box__scroll">
                        <div className="second-box__text">
                            <Text/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SecondBox;