import React from 'react';

import '../Styles/Button.css';

import BtnArrow from '../Assets/FirstBox/btn-circle.png';
import BtnPlus from '../Assets/ThirdBox/btn-plus.png'

function Button({ text, print , click}) {

    return (
        <>
            <div className="button-container" onClick={()=>click()}>
                {print === 'plus' && <img className={'btn-img'} src={BtnPlus} alt={'btn'}/>}
                {print === 'arrow' && <img className={'btn-img'} src={BtnArrow} alt={'btn'}/>}
                <p>{text}</p>
            </div>
        </>
    );
}

export default Button;