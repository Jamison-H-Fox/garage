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

    & .button-container {
        margin-top: 1.25%;
        width: 33%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        & button {
            margin-right: 1.25%;
        }
    }
`

function Garage(props) {
    useEffect(() => {
        props.loadGarageAction();
    }, []) // eslint-disable-line

    const redirectToAdd = () => { props.navigate('/add') };

    const handleClick = () => {
        redirectToAdd();
    }

    return (
        <StyledSection>
            <div className="container">
                <Carousel>
                    {props.garage.map((element, index) => {
                        return <CarouselItem key={1000 - index}><CarCard key={index} car={element} /></CarouselItem>
                    })}
                </Carousel>
                <div className="button-container">
                    <button onClick={ () => handleClick() }>Add New Car</button>
                    <button>Update Car</button>
                </div>
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