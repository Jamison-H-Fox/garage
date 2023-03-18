import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { logoutAction } from '../actions';
import Message from './Message';

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
        margin-top: 45vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 33%;
        padding: 2.5%;
        border-radius: 15px;
        background-color: #5a5a5a;
        opacity: 0.75;

        & h2 {
            color: white;
            margin-bottom: 5%;
            font-size: 1.5rem;
        }
    }
    
    & button {
        font-size: 1rem;
        // width: 25%;
        margin-top: 1%;

    }

`

function Logout(props) {
    const redirectToLogin = () => { props.navigate('/') };

    const onSubmit = (evt) => {
        evt.preventDefault();
        props.logoutAction();
        redirectToLogin();
    }

    return (
        <StyledSection>
            <form onSubmit={(evt) => onSubmit(evt)} className="logoutForm">
                <h2>Are you sure you want to log out?</h2>
                <button>Log Out</button>
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

export default connect(mapStateToProps, { logoutAction, })(Logout);