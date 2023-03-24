import React from "react";
import styled, { keyframes } from "styled-components";
import { connect } from "react-redux";
import PT from 'prop-types'

const rotation = keyframes`
    from { transform: rotate(0deg); }
    to { transform: rotate(359deg); }
`

const opacity = keyframes`
    from { opacity: 0.2; }
    to { opacity: 1; }
`

const StyledSection = styled.section`
    animation: ${opacity} 1s infinite linear;

    h3 {
        transform-origin: center center;
        animation: ${rotation} 1s infinite linear;
    }
`

function Spinner(props) { // eslint-disable-line
    if (!props.spinnerOn) {
        return null
    } else {
        return (
            <StyledSection className="spinner">
                <h3>&nbsp;.</h3>&nbsp;&nbsp;&nbsp;Please wait...
            </StyledSection>
        )
    }
}

Spinner.propTypes = {
    spinnerOn: PT.bool.isRequired,
}

const mapStateToProps = state => {
    return {
        spinnerOn: state.spinnerOn
    }
}

export default connect(mapStateToProps, {  })(Spinner);