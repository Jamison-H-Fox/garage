import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { loginAction, registerAction } from "../actions";
import * as yup from 'yup';

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

        & .button-container {
            display: inline-flex;
            flex-direction: row;
            justify-content: center;
            // width: 100%;
            align-items: center;
        }

        & input {
            margin: 1%;
            width: 65%;
            height: 2.5rem;
            border: none;
        }

        & button {
            font-size: 1rem;
            width: fit-content;
            margin: 2.5%;
        }

        & .error-message {
            font-weight: bold;
            border-radius: 15px;
            border: 2px red solid;
            color: red;
            background-color: rgb(255, 207, 207);
            padding: 1.25%;
        }
    }
`

const schema = yup.object().shape({
    username: yup.string().required('username is required').min(3, 'username must be at least 3 characters'),
    password: yup.string().required('password is required').min(4, 'password must be at least 4 characters')
})

function Login(props) {
    // tooltip hover-over helpers //
    const [mouseLocation, setMouseLocation] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleHover = (evt) => {
        setMouseLocation({
            x: evt.pageX,
            y: evt.pageY,
        });
        setVisible(true);
    };
      
    const handleNoHover = () => {
        setVisible(false);
    };
    ////////////////////////////////

    const [form, setForm] = useState({ username: '', password: '' });
    const [errors, setErrors] = useState({ username: '', password: '' });
    const [disabled, setDisabled] = useState(true);

    const redirectToWelcome = () => { props.navigate('/welcome') };

    const handleChange = (evt) => {
        const { name, type, value, checked } = evt.target;
        const updatedInfo = type === 'checkbox' ? checked : value;
        setForm({ ...form, [name]: updatedInfo });
        setFormErrors(name, updatedInfo);
    }

    function setFormErrors(name, value) {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({ ...errors, [name]: '' }))
            .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }

    function errorChecker() {
        const reference = { username: '', password: '' };
        if(JSON.stringify(errors) !== JSON.stringify(reference)) {
            return true;
        } else {
            return false;
        }
    }

    const login = (evt) => {
        evt.preventDefault();

        const userCreds = {
            username: form.username.trim(),
            password: form.password.trim()
        }

        props.loginAction(userCreds);
        redirectToWelcome();
        setForm({ username: '', password: '' });
    }

    const register = (evt) => {
        evt.preventDefault();

        const userCreds = {
            username: form.username.trim(),
            password: form.password.trim()
        }

        props.registerAction(userCreds);
        redirectToWelcome();
        setForm({ username: '', password: '' });
    }

    useEffect (() => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form, disabled])

    return (
        <StyledSection>
            <h2 className="greeting">Welcome to the Garage!</h2>
            <form id="loginForm" onSubmit={(evt) => login(evt)}> 
                <input
                    type='text'
                    id="username-input" 
                    placeholder="username:"
                    name='username'
                    value={form.username}
                    onChange={(evt) => handleChange(evt)}
                />
                <input
                    id="password-input"
                    placeholder="password:"
                    name='password'
                    type='password'
                    value={form.password}
                    onChange={(evt) => handleChange(evt)}
                />
                <div 
                    className="button-container"
                    onMouseEnter={evt => handleHover(evt)}
                    onMouseLeave={handleNoHover}
                >
                    {
                        errorChecker() ?
                        <div
                            className="error-message"
                            style={{
                            display: visible ? "block" : "none",
                            position: 'fixed',
                            top: mouseLocation.y,
                            left: mouseLocation.x,
                            }}
                        >
                            <h2>{errors.username}</h2>
                            <h2>{errors.password}</h2>
                        </div> :
                        <></>
                    }
                    <button disabled={disabled} onClick={(evt) => login(evt)}>Login</button>
                    <button disabled={disabled} onClick={(evt) => register(evt)}>Register</button>
                </div>
            </form>
        </StyledSection>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, { loginAction, registerAction })(Login);