import React from "react";
import styled from "styled-components";

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

    & .car-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30%;
        margin: 2.5% 0 0 2.5%;

        & p, a {
            margin-bottom: 2.5%;
        }

        & h2 {
            text-align: left;
            font-size: 2rem;
            margin-bottom: 7.5%;
        }
    }

    & .car-image {
        margin-right: 2.5%;
        width: 65%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
`

function Update(props) { // eslint-disable-line

    return (
        <StyledSection>
            <div className="container">
                <div className="car-info">
                    <p>Make:</p>
                    <h2>lol</h2>
                    <p>Model:</p>
                    <h2>lol</h2>
                    <p>Trim:</p>
                    <h2>lol</h2>
                    <p>Price:</p>
                    <h2>lol</h2>
                    <p>Build Link:</p>
                    <a><h2>Link</h2></a>
                </div>
                <div className="image-container">
                </div>
            </div>
        </StyledSection>
    )
}

export default Update;