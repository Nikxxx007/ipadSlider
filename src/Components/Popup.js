import React, { useState } from 'react';

import '../Styles/Popup.css'

import CloseButton from '../Assets/ThirdBox/btn_close.png';
import Slider from "./Slider";

import { sliderData } from './SliderData'

import LeftButton from '../Assets/ThirdBox/btn_lft.png';
import RightButton from '../Assets/ThirdBox/btn_next.png';

function Popup({ close }) {
    const [page, setPage] = useState(0);

    const handlePage = (pageNumber) => {
        let result = pageNumber + page;
        if (result > 1 || result < 0)
            return;
        setPage(result);
    }

    return (
        <>
            <div className="popup-container">
            </div>
            <div className="popup-window">
                <div className="popup__header">
                    <h2>Преимущества</h2>
                    <img src={CloseButton} onClick={close} alt={'closeButton'}/>
                </div>
                <div className="popup__slider">
                    <Slider data={sliderData[page]}/>
                </div>
                <div className="popup__control">
                    <img onClick={() => handlePage(-1)} src={LeftButton} alt={'leftArrow'}/>
                    <div className={'circle-active'}></div>
                    <div className={ page === 1 ? 'circle-active' : 'popup__circle' }></div>
                    <img onClick={() => handlePage(1)} src={RightButton} alt={'rightArrow'}/>
                </div>
            </div>
        </>
    );
}

export default Popup;