import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux"; 
import {  } from "../actions";

const StyledSection = styled.section`
    // & * {
    //     border: 1px red solid;
    // }

    & .screen {
        z-index: -10;
        width: 100%;
        height: 100vh;
        position: fixed;
        background-color: white;
        opacity: .4;
    }

    & nav {
        position: fixed;
        width: 100%;
        top: 0;
        background-color: rgba(255, 255, 255, 0.8);
        height: 10vh;
        z-index: 999;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    & .logo {
        height: 8vh;
        background-position: left;
        background-size: contain;
        background-repeat: no-repeat;
        width: 50%;
        margin-left: 5%;
        opacity: 75%;
    }

    .links {
        margin-right: 5%;
        width: 33%;
        display: flex;
        justify-content: flex-end;

        & a {
            text-decoration: none;
            letter-spacing: 3px;
            color: #4f4f4f;
            margin: 0 15px;

            &:hover {
                color: #f0d483;
            }
        }
    }
`

function Header(props) { // eslint-disable-line

    return (
        <StyledSection>
            <nav>
                <div className="logo" style={{backgroundImage:`url(https://logosmarcas.net/wp-content/uploads/2021/04/Cadillac-Logo.png)`}}>
                </div>
                <div className='links' >
                    
                    {
                        props.loggedIn ?
                        <>
                            {/* <NavLink id='welcomeScreen' to='/welcome'>Welcome</NavLink> */}
                            <NavLink id='addScreen' to='/welcome'>Welcome</NavLink>
                            <NavLink id='garageScreen' to='/garage'>Garage</NavLink>
                            <NavLink id='logoutScreen' to='/logout'>Logout</NavLink> 
                        </> :
                        <NavLink id='loginScreen' to='/'>Login</NavLink>
                    }
                    
                </div>
            </nav>
            <div className="screen"></div>
        </StyledSection>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, {  })(Header);