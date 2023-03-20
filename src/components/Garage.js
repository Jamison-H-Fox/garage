import React, { useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { loadGarageAction } from "../actions";
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
// set up db call on load
// pass res into redux store
// render a bunch of car components w/ res data

function Garage(props) { // eslint-disable-line
    useEffect(() => {
        console.log('useEffect in progress')
        props.loadGarageAction();
    }, [])

    return (
        <StyledSection>
            <div className="container">
                <Carousel>

                    <CarouselItem><CarCard /></CarouselItem>
                    <CarouselItem>Item 2</CarouselItem>
                    <CarouselItem>Item 3</CarouselItem>
                </Carousel>
            </div>
        </StyledSection>
    )
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.loggedIn,
        garage: state.garage,
    }
}

export default connect(mapStateToProps, { loadGarageAction })(Garage);