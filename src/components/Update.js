import React, { useState } from "react";
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

    & .big-container {
        margin-top: 12.5vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 90%;
        padding: 2.5%;
        border-radius: 15px;
        background-color: #5a5a5a;
        opacity: .95;
        height: 72.4vh;
    }

    & .small-container {
        width: 100%;
        height: 65vh;
        background-color: rgb(222, 216, 207);
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: black;
        
        & h2, input {
            text-align: left;
            font-size: 2rem;
            margin-bottom: 7.5%;
        }

        & p, a {
            margin-bottom: 2.5%;
        }
    }

    & .button-container {
        margin-top: 1.25%;
        width: 33%;
        display: flex;
        flex-direction: row;
        justify-content: center;

        & button {
            margin-right: 1.25%;
        }
    }

    & .car-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 30%;
        margin: 2.5% 0 0 2.5%;

        & input {
            margin-right: 5%;
        }
    }

    & .car-image {
        margin: 6.5% 2.5% 6.5% 0;
        width: 65%;
        background-color: grey;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & input {
            width: 90%;
        }
    }
`

function Update(props) {
    const [form, setForm] = useState(props.garage[props.activeIndex])

    const redirectToGarage = () => { props.navigate('/garage') }

    const updateCar = () => {
        console.log('update car button nub')
    }

    const handleChange = (evt) => {
        const { name, type, value, checked } = evt.target;
        const updatedInfo = type === 'checkbox' ? checked : value;
        setForm({ ...form, [name]: updatedInfo })
    }

    return (
        <StyledSection>
            <div className="big-container">
                <div className="small-container">
                    <form className="car-info">
                        <p>Make:</p>
                        <input
                            type='text'
                            id="make-input"
                            name='make'
                            value={form.make ? form.make : ''}
                            onChange={(evt) => handleChange(evt)}
                        ></input>
                        <p>Model:</p>
                        <input
                            type='text'
                            id="model-input"
                            name='model'
                            value={form.model ? form.model : ''}
                            onChange={(evt) => handleChange(evt)}
                        ></input>
                        <p>Trim:</p>
                        <input
                            type='text'
                            id="trim-input"
                            name='trim'
                            value={form.trim ? form.trim : ''}
                            onChange={(evt) => handleChange(evt)}
                        ></input>
                        <p>Price:</p>
                        <input
                            type='text'
                            id="price-input"
                            name='price'
                            value={form.price ? form.price : ''}
                            onChange={(evt) => handleChange(evt)}
                        ></input>
                        <p>Build Link:</p>
                        <input
                            type='text'
                            id="build_url-input"
                            name='build_url'
                            value={form.build_url ? form.build_url : ''}
                            onChange={(evt) => handleChange(evt)}
                        ></input>
                    </form>
                    <form className="car-image">
                        <p>img_url:</p>
                        <input
                            type='text'
                            id="img_url-input"
                            name='img_url'
                            value={form.img_url ? form.img_url : ''}
                            onChange={(evt) => handleChange(evt)}
                        ></input>
                    </form>
                </div>
                <div className="button-container">
                    <button onClick={ () => updateCar() }>Submit</button>
                    <button onClick={ () => redirectToGarage() }>Cancel</button>
                </div>
            </div>
        </StyledSection>
    )
}

const mapStateToProps = state => {
    return {
        garage: state.garage,
        activeIndex: state.activeIndex,
    }
}

export default connect(mapStateToProps, {  })(Update);