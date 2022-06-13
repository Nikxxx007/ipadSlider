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
                                <div key={id}>
                                    <h3>{index}</h3>
                                    <p className={'slider-text'}>{data[index]}</p>
                                </div>
                            </>
                        );
                    })
                }
            </div>
        </>
    );
}

export default Slider;