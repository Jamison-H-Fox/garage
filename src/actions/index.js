import axios from "axios"; // eslint-disable-line


export const LOGIN = 'LOGIN';

export const loginAction = () => {
    console.log('hello from login action')
    return {
        type: LOGIN
    }
}