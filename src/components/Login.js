import React from "react";
import styled from "styled-components";
import Message from "./Message";

const StyledSection = styled.section`
    // & * {
    //     border: red 1px solid;
    // }

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;

    & .greeting {
        margin-top: 15vh;
        font-size: 2rem;
    }

    & form {
        margin-top: 15vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33%;
        padding: 2.5%;
        border-radius: 15px;
        background-color: lemonchiffon;

        & input {
            margin: 1%;
            width: 65%;
            height: 2.5rem;
            opacity: .66;
            border: none;
        }

        & button {
            font-size: 1rem;
            // width: 25%;
            margin-top: 1%;

        }
    }
`

function Login(props) {
    const onSubmit = (evt) => {
        evt.preventDefault();
        props.login();
    }

    return (
        <StyledSection>
            <h2 className="greeting">Welcome to the Garage!</h2>
            <form id="loginForm" onSubmit={(evt) => onSubmit(evt)}> 
                <input 
                    placeholder="Username:"
                    id="username"
                />
                <input
                    placeholder="password:"
                    type='password'
                    id='password'
                />
                <button onClick={(evt) => onSubmit(evt)}>Login</button>
            </form>
            <Message />
        </StyledSection>
    )
}

export default Login;