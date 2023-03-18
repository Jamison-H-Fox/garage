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

    & button {
        margin-top: 2.5%;
        width: 10%;
    }

    & .container {
        margin-top: 20vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 75%;
        padding: 2.5%;
        border-radius: 15px;
        background-color: #5a5a5a;
        opacity: .85;

        & .image-container {
            background-image: url(https://snz04pap001files.storage.live.com/y4mJYlJdXzj8p3zJ-Pue6KP9JVeh4XGym5sKKFyAe2FHFuUYFeNTfmLlxeOvevFB6JEk3GARdns1_S6b5RWlRM0HfNksbgmoXmJfeEr_6q1zmslQIqrxPnDkwJzqnuSRjsRBAoP8J4WOYndq35JXf2z_TR73FjnajKqrSRnmmswHwc5hq_ksBL69u8brhdSLpsJ?width=4032&height=3024&cropmode=none);
        }
    }
`

function Welcome(props) {
    const redirectToGarage = () => { props.navigate('/garage') }

    return (
        <StyledSection>
            <div className="container">
                <div className="containers-container">
                    <div className="text-container">
                        <h2>Welcome to the Garage!</h2>
                        <p>This project is conceived by me (not from a tutorial) and built from scratch to showcase some full stack development skills</p>
                    </div>
                    <div className="image-container">
                    </div>
                </div>
                <button onClick={() => redirectToGarage()}>Continue to the Garage!</button>
            </div>
        </StyledSection>
    )
}

const mapStateToProps = state => {
    return {
        loggedIn: state.loggedIn
    }
}

export default connect(mapStateToProps, {  })(Welcome);