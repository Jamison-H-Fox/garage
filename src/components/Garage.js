import React from "react";
import styled from "styled-components";
import { CarCard } from "./";
import Carousel, { CarouselItem } from './Carousel';


const StyledSection = styled.section`
    // & * {
    //     border: red 1px solid;
    // }

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    & .container {
        margin-top: 12.5vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        padding: 2.5%;
        border-radius: 15px;
        background-color: #5a5a5a;
        opacity: .95;
    }
`

function Garage(props) { // eslint-disable-line

    return (
        <StyledSection>
            <div className="container">
                <Carousel>
                    <CarouselItem>Item 1</CarouselItem>
                    <CarouselItem>Item 2</CarouselItem>
                    <CarouselItem>Item 3</CarouselItem>
                </Carousel>
            </div>
        </StyledSection>
    )
}

export default Garage;