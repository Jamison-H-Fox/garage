import React, { useState } from "react";

import styled from "styled-components";

const StyledSection = styled.section`
    width: 100%;
    
    & .carousel {
        overflow: hidden;
        border-radius: 15px;
    }

    & .inner {
        white-space: nowrap;
        transition: transform 0.3s;
    }

    & .carousel-item {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 70vh;
        background-color: green;
        color: #fff;
    }

    & .indicators {
        display: flex;
        justify-content: center;

        & button {
            margin: 5px;
        }

        & button.active {
            background-color: green;
            color: #fff;
        }
    }
`

export const CarouselItem = ({ children, width }) => {
    return (
        <div className="carousel-item" style={{ width: width }}>
            {children}
        </div>
    );
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }

        setActiveIndex(newIndex);
    };


    return (
        <StyledSection>
            <div className="carousel">
                <div 
                    className="inner" 
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {React.Children.map(children, (child, index) => {
                        return React.cloneElement(child, { width: '100%' });
                    })}
                </div>
                <div className="indicators">
                    <button
                        onClick={() => {
                            updateIndex(activeIndex - 1);
                        }}
                    >Prev</button>
                    {React.Children.map(children, (child, index) => {
                        return (
                            <button
                                className={`${index === activeIndex ? 'active' : ''}`}
                                onClick={() => {
                                    updateIndex(index);
                                }}
                            >{index + 1}</button>
                        )
                    })}
                    <button
                        onClick={() => {
                            updateIndex(activeIndex + 1);
                        }}
                    >Next</button>
                </div>
            </div>
        </StyledSection>
    )
}

export default Carousel;