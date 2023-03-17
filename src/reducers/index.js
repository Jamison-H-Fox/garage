import { LOGIN } from '../actions';

const initialState = {
    loggedIn: false,
    message: '',
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            console.log('hello from LOGIN reducer')
            return {
                ...state,
                loggedIn: true
            }
        default:
            return state;
    }
}

export default reducer;