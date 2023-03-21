import React, {  } from "react";

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
        border-radius: 15px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 65vh;
    }

    & .indicators {
        display: flex;
        justify-content: center;

        & button {
            margin-top: 1.25%;
            margin-right: 0.25%;
        }

        & button.active {
            background-color: #282828;
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

const Carousel = ({ children, updateIndex, activeIndex }) => {
    


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