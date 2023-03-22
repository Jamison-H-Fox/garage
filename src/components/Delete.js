import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { deleteCarAction } from '../actions';

const StyledSection = styled.section`
    // & * {
    //     border: red 1px solid;
    // }

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    & .greeting {
        margin-top: 25vh;
        font-size: 3rem;
    }

    & .delete-div {
        margin-top: 45vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33%;
        padding: 2.5%;
        border-radius: 15px;
        background-color: #5a5a5a;
        opacity: 0.9;

        & h2 {
            color: white;
            margin-bottom: 5%;
            font-size: 1.5rem;
        }

        & .button-container {
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 100%;
        }
    }
    
    & button {
        font-size: 1rem;
        width: 20%;
        margin: 1%;

    }

`

function Delete(props) {
    const redirectToGarage = () => { props.navigate('/garage')};

    const deleteCar = () => {
        props.deleteCarAction();
        redirectToGarage();
    }

    return (
        <StyledSection>
            <div className="delete-div">
                <h2>Are you sure you want to remove this car from your garage?</h2>
                <div className="button-container">
                    <button onClick={() => deleteCar()}>Delete</button>
                    <button onClick={() => redirectToGarage()}>Cancel</button>
                </div>
            </div>
        </StyledSection>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn,
        activeIndex: state.activeIndex,
    }
}

export default connect(mapStateToProps, { deleteCarAction, })(Delete);