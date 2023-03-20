import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const StyledSection = styled.section`
    // & * {
    //     border: red 1px solid;
    // }

    width: 100%;
    height: 65vh;
    background-color: rgb(222, 216, 207);
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: black;

    & .car-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30%;
        margin: 2.5% 0 0 2.5%;

        & p, a {
            margin-bottom: 2.5%;
        }

        & h2 {
            text-align: left;
            font-size: 2rem;
            margin-bottom: 7.5%;
        }
    }

    & .car-image {
        margin-right: 2.5%;
        width: 65%;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
    }
    
`

function CarCard(props) {

    return (
        <StyledSection>
            <div className="car-info">
                <p>Make:</p>
                <h2>{props.car.make}</h2>
                <p>Model:</p>
                <h2>{props.car.model}</h2>
                <p>Trim:</p>
                <h2>{props.car.trim}</h2>
                <p>Price:</p>
                <h2>${props.car.price}</h2>
                <p>Build Link:</p>
                <a
                    href={props.car.build_url ? props.car.build_url : 'www.bing.com'}
                    target='blank'
                >{props.car.build_url ? <h2>Link</h2> : '???'}</a>
            </div>
            <div 
                className="car-image"
                style={{backgroundImage:`url(${props.car.img_url})`}}
            >
            </div>
        </StyledSection>
    )
}

const mapStateToProps = state => {
    return {
        garage: state.garage,
    }
}

export default connect(mapStateToProps, {  })(CarCard);