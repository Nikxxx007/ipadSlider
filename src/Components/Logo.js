import React from 'react';
import '../Styles/Logo.css'

import Onpoint from '../Assets/FirstBox/Logo.svg';

function Logo() {
    return (
        <>
            <div className="content__logo">
                <img src={Onpoint} alt={'Logo'}/>
            </div>
        </>
    );
}

export default Logo;