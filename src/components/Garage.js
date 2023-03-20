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

function Garage(props) {
    useEffect(() => {
        props.loadGarageAction();
    }, []) // eslint-disable-line


    return (
        <StyledSection>
            <div className="container">
                <Carousel>
                    {props.garage.map(element => {
                        return <CarouselItem><CarCard car={element} /></CarouselItem>
                    })}
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