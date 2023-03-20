import { LOGIN, LOGOUT, LOADGARAGE } from '../actions';

const initialState = {
    loggedIn: false,
    message: '',
    garage: [],
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return {
                ...state,
                loggedIn: true
            }
        case LOGOUT:
            return {
                ...state,
                loggedIn: false
            }
        case LOADGARAGE:
            return {
                ...state,
                garage: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;