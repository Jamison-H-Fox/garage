import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledSection = styled.section`
// & * {
    //     border: red 1px solid;
    // }

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    & .big-container {
        margin-top: 12.5vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        padding: 2.5%;
        border-radius: 15px;
        background-color: #5a5a5a;
        opacity: .95;
        height: 72.4vh;
    }

    & .small-container {
        width: 100%;
        height: 65vh;
        background-color: rgb(222, 216, 207);
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: black;
        
        & h2, input {
            text-align: left;
            font-size: 2rem;
            margin-bottom: 7.5%;
        }

        & p, a {
            margin-bottom: 2.5%;
        }
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

    & .car-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30%;
        margin: 2.5% 0 0 2.5%;

        & input {
            margin-right: 5%;
        }
    }

    & .car-image {
        margin: 6.5% 2.5% 6.5% 0;
        width: 65%;
        background-color: grey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & input {
            width: 90%;
        }
    }
`

function Update(props) {
    const redirectToGarage = () => { props.navigate('/garage') }

    const updateCar = () => {
        console.log('update car button nub')
    }

    return (
        <StyledSection>
            <div className="big-container">
                <div className="small-container">
                    <form className="car-info">
                        <p>Test:</p>
                        <input></input>
                        <p>Make:</p>
                        <input></input>
                        <p>Model:</p>
                        <input></input>
                        <p>Trim:</p>
                        <input></input>
                        <p>Price:</p>
                        <input></input>
                        <p>Build Link:</p>
                        <input></input>
                    </form>
                    <form className="car-image">
                        <p>img_url:</p>
                        <input></input>
                    </form>
                </div>
                <div className="button-container">
                    <button onClick={ () => updateCar() }>Submit</button>
                    <button onClick={ () => redirectToGarage() }>Cancel</button>
                </div>
            </div>
        </StyledSection>
    )
}

const mapStateToProps = state => {
    return {
        garage: state.garage,
        activeIndex: state.activeIndex,
    }
}

export default connect(mapStateToProps, {  })(Update);