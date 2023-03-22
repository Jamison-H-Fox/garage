import axios from "axios";

export const LOGIN = 'LOGIN';
export const REGISTER_USER = 'REGISTER_USER';
export const LOGOUT = 'LOGOUT';
export const LOAD_GARAGE = 'LOAD_GARAGE';
export const UPDATE_INDEX = 'UPDATE_INDEX';

export const updateIndexAction = (newIndex) => dispatch => {
    dispatch({ type: UPDATE_INDEX, payload: newIndex });
}

export const loginAction = (/* need user info */) => {
    return {
        type: LOGIN
    }
}

export const logoutAction = (/* need user info */) => {
    return {
        type: LOGOUT
    }
}

export const registerAction = (/* need user info */) => dispatch => {
    // axios call to post new user
    console.log('hello from register action');
    dispatch(loginAction(/* need user info */));
}

export const loadGarageAction = () => dispatch => {
    axios.get('https://garage-backend.herokuapp.com/api/cars')
    .then(res => {
        const garage = res.data;
        dispatch({ type: LOAD_GARAGE, payload: garage })        
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

export const deleteCarAction = (activeIndex) => dispatch => {
    // axios call to delete car w/ car_id = activeIndex + 1 from db
    console.log('hello from delete car action');
    dispatch(loadGarageAction());
}

export const addCarAction = (details) => dispatch => {
    // axios call to add car w/ provided details
    console.log('hello from add car action');
    dispatch(loadGarageAction());
}