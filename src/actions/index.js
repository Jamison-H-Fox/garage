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
    // if (newIndex < 0) {
    //     newIndex = 0;
    // } else if (newIndex >= React.Children.count(children)) {
    //     newIndex = React.Children.count(children) - 1;
    // }

    // handle logic in the component
    // just push the newIndex to the action
}