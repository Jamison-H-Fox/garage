import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginAction } from "../actions";
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
        margin-top: 25vh;
        font-size: 3rem;
    }

    & form {
        margin-top: 15vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33%;
        padding: 2.5%;
        border-radius: 15px;
        background-color: #5a5a5a;
        opacity: .75;

        & input {
            margin: 1%;
            width: 65%;
            height: 2.5rem;
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
    const [form, setForm] = useState({ username: '', password: '' })

    const redirectToWelcome = () => { props.navigate('/welcome') };

    const handleChange = (evt) => {
        const { name, type, value, checked } = evt.target;
        const updatedInfo = type === 'checkbox' ? checked : value;
        setForm({ ...form, [name]: updatedInfo })
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.loginAction();
        redirectToWelcome();
        setForm({ username: '', password: '' });
    }

    return (
        <StyledSection>
            <h2 className="greeting">Welcome to the Garage!</h2>
            <form id="loginForm" onSubmit={(evt) => onSubmit(evt)}> 
                <input 
                    placeholder="username:"
                    name='username'
                    onChange={(evt) => handleChange(evt)}
                />
                <input
                    placeholder="password:"
                    name='password'
                    type='password'
                    onChange={(evt) => handleChange(evt)}
                />
                <button onClick={(evt) => onSubmit(evt)}>Login</button>
            </form>
            <Message />
        </StyledSection>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, { loginAction, })(Login);