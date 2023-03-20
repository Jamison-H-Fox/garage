import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledSection = styled.section`
    & * {
        border: red 1px solid;
    }

    width: 100%;
    height: 70vh;
    background-color: red;
    border-radius: 15px;
`

function CarCard(props) {

    return (
        <StyledSection>
            <p>{props.car.make}</p>
        </StyledSection>
    )
}

const mapStateToProps = state => {
    return {
        garage: state.garage,
    }
}

export default connect(mapStateToProps, {  })(CarCard);