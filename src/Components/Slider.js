import React from 'react';
import '../Styles/Slider.css';

import '../Styles/Slider.css'

function Slider({ data }) {
    return (
        <>
            <div className="slider-container">
                {
                    Object.keys(data).map((index, id) => {
                        return (
                            <>
                                <h3>{index}</h3>
                                <p className={'slider-text'}>{data[index]}</p>
                            </>
                        );
                    })
                }
            </div>
        </>
    );
}

export default Slider;