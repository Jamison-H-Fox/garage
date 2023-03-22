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

    & .logout-div {
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

function Logout(props) {
    const redirectToLogin = () => { props.navigate('/') };
    const redirectToGarage = () => { props.navigate('/garage')};

    const logout = () => {
        props.logoutAction();
        redirectToLogin();
    }

    return (
        <StyledSection>
            <div className="logout-div">
                <h2>Are you sure you want to log out?</h2>
                <div className="button-container">
                    <button onClick={() => logout()}>Log Out</button>
                    <button onClick={() => redirectToGarage()}>Cancel</button>
                </div>
            </div>
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