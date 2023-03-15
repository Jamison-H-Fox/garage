import React from "react";
import styled from "styled-components";
import axios from "axios";

const StyledSection = styled.section`
`

function CarCard(props) { // eslint-disable-line
    function getCars() {
        axios.get('http://172.29.207.149:9000/api/cars')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
    }

    return (
        <StyledSection>
            <h2>CarCard Component</h2>
            <button onClick={getCars}>get cars</button>
        </StyledSection>
    )
}

export default CarCard;