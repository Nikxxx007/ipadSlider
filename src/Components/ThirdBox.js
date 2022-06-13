import React, {useState} from 'react';

import '../Styles/ThirdBox.css';

import Button from "./Button";
import BackgroundImages from "./BackgroundImages";
import Popup from "./Popup";

import PlateIcon from '../Assets/ThirdBox/plate-icon.png';
import CalendarIcon from '../Assets/ThirdBox/calendar-icon.png';

function ThirdBox() {
    const [popup, setPopup] = useState(false);

    return (
        <>
            <div className="third-box">
                <div className="third-box-wrapper">
                    <BackgroundImages />
                    <div className="third-box__title">
                        <h2>Ключевое сообщение</h2>
                        <h1>Brend<b>XY</b></h1>
                    </div>
                    <div className="third-box__content">
                        <div className="third-box__columns">
                            <div className="third-box__plate-colum">
                                <img className={'plate'} src={PlateIcon} alt={'plateIcon'}/>
                                <p>Ehicula ipsum a arcu
                                    cursus vitae. Eu non
                                    diam phasellus
                                    vestibulum lorem sed
                                    risus ultricies
                                </p>
                            </div>
                            <div className="third-box__calendar-colum">
                                <div className="third-box__calendar-box">
                                    <img className={'calender'} src={CalendarIcon} alt={'calendaerIcon'}/>
                                    <p>A arcu<br/>cursus vitae</p>
                                </div>
                                <div className="calendar-btn">
                                    <Button click={()=>setPopup(true)} text={'Подробнее'} print={'plus'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {popup && <Popup close={()=>setPopup(false)}/>}
            </div>
        </>
    );
}

export default ThirdBox;