import axios from "axios";


export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const LOADGARAGE = 'LOADGARAGE';

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
    console.log('loadGarageAction in process')
    
    axios.get('http://172.29.207.149:9000/api/cars')
    .then(res => {
        const garage = res.data;
        dispatch({ type: LOADGARAGE, payload: garage })        
    })
    .catch(err => {
        console.error(err)
    })

    return {
        type: LOADGARAGE
    }
}