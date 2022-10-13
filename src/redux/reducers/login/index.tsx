import { LoginAction } from '../../actions/actions';
import * as actionTypes from '../../actions/actionTypes/login';

const initialState = {
    successMessage: '',
    errorMessage: '',
    userDetails: {},
    loading: false,
};

export const loginReducer = (state: { successMessage: string, errorMessage: string, loading: boolean } = initialState, action: LoginAction) => {
    switch (action.type) {
        case actionTypes.SIGNUP_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.SIGNUP_RESPONSE:
            return {
                ...state,
                loading: false,
                userDetails: action.payload,
                successMessage: action.payload
            };
        case actionTypes.SIGNUP_FAILURE:
            return {
                loading: false,
                errorMessage: action.payload
            };
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.LOGIN_RESPONSE:
            return {
                ...state,
                userDetails: action.payload,
                successMessage: action.payload,
                loading: false
            };
        case actionTypes.LOGIN_FAILURE:
            return {
                loading: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}