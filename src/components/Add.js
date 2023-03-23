import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addCarAction } from "../actions";
import * as yup from 'yup';

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

    & .bottom-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        & .button-container {
            margin: 5%;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
    
            & button {
                margin: 1% 5% 1% 5%;
            }
        }

        & h2 {
            font-size: 1.5rem;
            color: white;
            margin-top: 5%;
        }

        & .error-message {
            border-radius: 15px;
            border: 2px red solid;
            background-color: rgb(255, 207, 207);
            padding: 1.25%;
            
            & h2 {
                font-weight: bold;
                color: red;
                font-size: 100%;
                margin: 0;
            }
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

const schema = yup.object().shape({
    make: yup.string().required('make is required'),
    model: yup.string().required('model is required'),
    trim: yup.string().required('trim is required'),
    img_url: yup.string().required('image url is required'),
    price: yup.number(),
    build_url: yup.string(),
})

function Add(props) {
    // tooltip hover-over helpers //
    const [mouseLocation, setMouseLocation] = useState(0);
    const [visible, setVisible] = useState(false);

    const handleHover = (evt) => {
        setMouseLocation({
            x: evt.pageX,
            y: evt.pageY,
        });
        setVisible(true);
    };
    
    const handleNoHover = () => {
        setVisible(false);
    };
    ////////////////////////////////

    const [form, setForm] = useState({
        car_id: null,
        user_id: null,
        make: '',
        model: '',
        trim: '',
        img_url: '',
        price: null,
        build_url: '',
    });
    const [errors, setErrors] = useState({
        make: '',
        model: '',
        trim: '',
        img_url: '',
        price: '',
        build_url: '',
    });
    const [disabled, setDisabled] = useState(true);

    const handleChange = (evt) => {
        const { name, type, value, checked } = evt.target;
        const updatedInfo = type === 'checkbox' ? checked : value;
        setForm({ ...form, [name]: updatedInfo });
        setFormErrors(name, updatedInfo);
    }

    const setFormErrors = (name, value) => {
        yup.reach(schema, name).validate(value)
            .then(() => setErrors({ ...errors, [name]: '' }))
            .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }

    const errorChecker = () => {
        const reference = {
            make: '',
            model: '',
            trim: '',
            img_url: '',
            price: '',
            build_url: '',
        };
        if(JSON.stringify(errors) !== JSON.stringify(reference)) {
            return true;
        } else {
            return false;
        }
    }

    const redirectToGarage = () => { props.navigate('/garage') }

    const addCar = () => {
        props.addCarAction();
        redirectToGarage();
    }

    useEffect (() => {
        schema.isValid(form).then(valid => setDisabled(!valid))
    }, [form, disabled]);

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
                <div className="bottom-container">
                    <h2>Add New Car</h2>
                    <div 
                        className="button-container"
                        onMouseEnter={(evt) => handleHover(evt)}
                        onMouseLeave={handleNoHover}
                    >
                        {
                            errorChecker() ?
                            <div 
                                className="error-message"
                                style={{
                                    display: visible ? 'block' : 'none',
                                    position: 'fixed',
                                    top: mouseLocation.y,
                                    left: mouseLocation.x,
                                }}
                            >
                                <h2>{errors.make}</h2>
                                <h2>{errors.model}</h2>
                                <h2>{errors.trim}</h2>
                                <h2>{errors.img_url}</h2>
                                <h2>{errors.price}</h2>
                            </div> :
                            <></>
                        }
                        <button disabled={disabled} onClick={ () => addCar() }>Submit</button>
                        <button onClick={ () => redirectToGarage() }>Cancel</button>
                    </div>
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

export default connect(mapStateToProps, { addCarAction, })(Add);