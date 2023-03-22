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
            width: 20%;
            margin-top: 2.5%;

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

    const login = (evt) => {
        evt.preventDefault();
        props.loginAction();
        redirectToWelcome();
        setForm({ username: '', password: '' });
    }

    const register = (evt) => {
        evt.preventDefault();
        console.log('register button nub')
    }

    return (
        <StyledSection>
            <h2 className="greeting">Welcome to the Garage!</h2>
            <form id="loginForm" onSubmit={(evt) => login(evt)}> 
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
                <button onClick={(evt) => login(evt)}>Login</button>
                <button onClick={(evt) => register(evt)}>Register</button>
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