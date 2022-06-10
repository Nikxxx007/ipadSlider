import React from 'react';

import '../Styles/BackgroundBaks.css'

import Bak1 from '../Assets/FirstBox/Bak1.png';
import Bak2 from '../Assets/FirstBox/Bak2.png';
import Bak3 from '../Assets/FirstBox/Bak3.png';
import Bak4 from '../Assets/FirstBox/Bak4.png';
import Sperm from '../Assets/FirstBox/pink_sperm_1.png';

function BackgroundBaks() {
    return (
        <>
            <img className={'bak bak1'} src={Bak1} alt={'bakti1'}/>
            <img className={'bak bak2'} src={Bak2} alt={'bakti2'}/>
            <img className={'bak bak3'} src={Bak3} alt={'bakti3'}/>
            <img className={'bak bak4'} src={Bak4} alt={'bakti4'}/>
            <img className={'bak sperm'} src={Sperm} alt={'sperm'}/>
        </>
    );
}

export default BackgroundBaks;