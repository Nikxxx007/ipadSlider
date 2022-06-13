import React from 'react';

import Sperm1 from '../Assets/SecondBox/Sperm1.png';
import Sperm2 from '../Assets/SecondBox/Sperm2.png';
import Sperm3 from '../Assets/SecondBox/Sperm3.png';
import Sperm4 from '../Assets/SecondBox/Sperm4.png';
import Sperm5 from '../Assets/SecondBox/Sperm5.png';

import '../Styles/BackgroundSperm.css';

function BackgroundSperm(props) {
    return (
        <>
            <img className="sperm1 pos" src={Sperm1} alt="Sperm1"/>
            <img className="sperm2 pos" src={Sperm2} alt="Sperm2"/>
            <img className="sperm3 pos" src={Sperm3} alt="Sperm3"/>
            <img className="sperm4 pos" src={Sperm4} alt="Sperm4"/>
            <img className="sperm5 pos" src={Sperm5} alt="Sperm5"/>
        </>
    );
}

export default BackgroundSperm;