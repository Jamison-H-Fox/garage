import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledSection = styled.section`
    .links {
        & a {
            text-decoration: none;
            letter-spacing: 3px;
            color: #4f4f4f;
            justify-content: space-between;
            margin: 0 15px;
        }
    }
`

function Header(props) { // eslint-disable-line

    return (
        <StyledSection>
            <nav>
                <div className="logo">
                </div>
                <div className='links' >
                    <NavLink id='loginScreen' to='/'>Login</NavLink>
                    <NavLink id='welcomeScreen' to='/welcome'>Welcome</NavLink>
                    <NavLink id='garageScreen' to='/garage'>Garage</NavLink>
                    <NavLink id='addScreen' to='/add'>Add</NavLink>
                    <NavLink id='logoutScreen' to='/logout'>Logout</NavLink>
                </div>
            </nav>
        </StyledSection>
    )
}

export default Header;