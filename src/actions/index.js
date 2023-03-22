import axios from "axios";

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOAD_GARAGE = 'LOAD_GARAGE';
export const UPDATE_INDEX = 'UPDATE_INDEX';

export const loginAction = () => {
    return {
        type: LOGIN
    }
}

export const logoutAction = () => {
    return {
        type: LOGOUT
    }
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

export const updateIndexAction = (newIndex) => dispatch => {
    console.log('hello from updateIndexAction');
    dispatch({ type: UPDATE_INDEX, payload: newIndex })
}