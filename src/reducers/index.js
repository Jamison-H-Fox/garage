import { LOGIN, LOGOUT, LOAD_GARAGE, UPDATE_INDEX, SET_SPINNER_ON } from '../actions';

const initialState = {
    loggedIn: false,
    message: '',
    garage: [],
    activeIndex: 0,
    spinnerOn: false,
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
        case LOAD_GARAGE:
            return {
                ...state,
                garage: action.payload,
            }
        case UPDATE_INDEX:
            return {
                ...state,
                activeIndex: action.payload,
            }
        case SET_SPINNER_ON:
            return {
                ...state,
                spinnerOn: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;