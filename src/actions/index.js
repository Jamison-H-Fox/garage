import axios from "axios";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOAD_GARAGE = 'LOAD_GARAGE';
export const UPDATE_INDEX = 'UPDATE_INDEX';
export const SET_SPINNER_ON = 'SET_SPINNER_ON';

const heroku = 'https://garage-backend.herokuapp.com/api/cars';
const localHost = 'http://localhost:9000/api/cars';

export const setSpinnerOnAction = (spinnerToggle) => dispatch => {
    dispatch({ type: SET_SPINNER_ON, payload: spinnerToggle })
}

export const updateIndexAction = (newIndex) => dispatch => {
    dispatch({ type: UPDATE_INDEX, payload: newIndex });
}

export const loginAction = (userCreds) => {
    // axios call to get session info
    console.log('hello from login action')
    console.log('userCreds in login action: ', userCreds)
    return {
        type: LOGIN
    }
}

console.log('test and stuff')

export const logoutAction = (/* need user info */) => {
    // axios call to destroy session
    console.log('hello from logout action')
    return {
        type: LOGOUT
    }
}

export const registerAction = (userCreds) => dispatch => {
    // axios call to post new user
    console.log('hello from register action');
    dispatch(loginAction(userCreds));
}

export const loadGarageAction = (/* user_id */) => dispatch => {
    setSpinnerOnAction(true)
    axios.get(localHost)
    .then(res => {
        const garage = res.data;
        dispatch({ type: LOAD_GARAGE, payload: garage })
        setSpinnerOnAction(false)     
    })
    .catch(err => {
        console.error(err)
    })

    return {
        type: LOAD_GARAGE
    }
}

export const updateCarAction = (updates) => dispatch => {
    // gotta make an axios call here to put changes to the db
    console.log('hello from update car action');
    dispatch(loadGarageAction());
}

export const addCarAction = (details) => dispatch => {
    // axios call to add car w/ provided details
    console.log('hello from add car action');
    dispatch(loadGarageAction());
}

export const deleteCarAction = (activeIndex) => dispatch => {
    // axios call to delete car w/ car_id = activeIndex + 1 from db
    console.log('hello from delete car action');
    dispatch(loadGarageAction());
}