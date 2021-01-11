import { useState } from "react";

const styles = {
    container: {
        position: 'relative',
        overflowX: 'hidden',
    },
    contentWrapper: {
        position: 'relative',
        display: 'flex',
        transitionProperty: 'left right',
        transitionDuration: '0.7s',
        transitionTimingFunction: 'ease-in-out',
    },
    controlButton: {
        position: 'absolute',
        top: '50%',
        width: '2rem',
        height: '2.5rem',
        padding: 0,
        zIndex: 1,
        fontSize: '1.5rem',
        fontWeight: 'bold',
        cursor: 'pointer',
    },
    controlButtonPrev: {
        left: 0,
    },
    controlButtonNext: {
        right: 0,
    },
}

export default function Slider({ items, displaySlides = 1 }) {

    const [slideIndex, setSlideIndex] = useState(0);

    function canSlidePrevious() {
        return slideIndex > 0;
    }

    function canSlideNext() {
        return slideIndex < items.length - 1 - (displaySlides - 1);
    }

    function handlePrevious(e) {
        e.preventDefault();
        if (canSlidePrevious()) {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(items.length - 1 - (displaySlides - 1));
        }
    }

    function handleNext(e) {
        e.preventDefault();
        if (canSlideNext()) {
            setSlideIndex(slideIndex + 1);
        } else {
            setSlideIndex(0);
        }
    }

    return (
        <div className={"slide-panel " + ` slides-${displaySlides}`} style={styles.container}>
            {items.length > 0 &&
                <div className="slide-panel-content" style={{
                    ...styles.contentWrapper, ...{
                        minWidth: `${(items.length * 100) / displaySlides}%`,
                        left: `${-slideIndex * (100 / displaySlides)}%`,
                        right: `${slideIndex * (100 / displaySlides)}%`,
                    }
                }}>
                    {items.map((post, index) => {
                        return (
                            <div key={index} style={{ width: `${100 / displaySlides}%` }}>
                                <p key={index}>{index}</p>
                            </div>
                        );
                    })}
                </div>
            }
            {
                items.length > displaySlides &&
                <>
                    <button className="slide-btn previous" style={{ ...styles.controlButton, ...styles.controlButtonPrev }} onClick={handlePrevious}>&#10094;</button>
                    <button className="slide-btn next" style={{ ...styles.controlButton, ...styles.controlButtonNext }} onClick={handleNext}>&#10095;</button>
                </>
            }
        </div >
    );
}

