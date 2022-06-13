import React, {useState, useEffect} from 'react';

import '../Styles/Carousel.css'
import HomeButton from "./HomeButton";
import FirstBox from "./FirstBox";
import SecondBox from "./SecondBox";
import ThirdBox from "./ThirdBox";

function Carousel() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchPosition, setTouchPosition] = useState(null);

    const length = 3;

    const handleTouchStart = (e) => {
        const touchDown = e.touches[0].clientX
        setTouchPosition(touchDown)
    }

    const home = () => {
      setCurrentIndex(0);
    }

    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    const handleTouchMove = (e) => {
        const touchDown = touchPosition

        if(touchDown === null) {
            return
        }

        const currentTouch = e.touches[0].clientX
        const diff = touchDown - currentTouch

        if (diff > 5) {
            next()
        }

        if (diff < -5) {
            prev()
        }

        setTouchPosition(null)
    }

    return (
        <>
            <HomeButton click={home}/>
            <div className="main-container">
                <div className="window"
                     onTouchStart={handleTouchStart}
                     onTouchMove={handleTouchMove}>
                    <div className="all-items-container" style={{transform: `translateX(-${currentIndex * 100}%)`}}>
                        <FirstBox click={next}/>
                        <SecondBox/>
                        <ThirdBox/>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Carousel;