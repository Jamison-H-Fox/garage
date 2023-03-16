import React from "react";
import styled from "styled-components";
import { CarCard } from "./";

const StyledSection = styled.section`
`

function Garage(props) { // eslint-disable-line

    return (
        <StyledSection>
            <h2>Garage Component</h2>
            <h3>A bunch of CarCards here</h3>
            <CarCard />
        </StyledSection>
    )
}

export default Garage;