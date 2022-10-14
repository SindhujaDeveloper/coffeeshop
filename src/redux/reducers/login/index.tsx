import { LoginAction } from '../../actions/login';
import * as actionTypes from '../../actions/actionTypes/login';

const initialState = {
    successMessage: '',
    errorMessage: '',
    userDetails: {},
    loading: false,
    isLogin: false
};

export const loginReducer = (state: { successMessage: string, errorMessage: string, loading: boolean, isLogin: boolean } = initialState, action: LoginAction) => {
    switch (action.type) {
        case actionTypes.SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.SIGNUP_RESPONSE:
            return {
                ...state,
                loading: false,
                userDetails: action.payload,
                isLogin: true,
                successMessage: 'user created successfully',
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
                isLogin: true,
                loading: false
            };
        case actionTypes.LOGIN_FAILURE:
            return {
                loading: false,
                errorMessage: action.payload,
                isLogin: false,
            };
        case actionTypes.PROFILE_UPDATE_REQUEST:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PROFILE_UPDATE_RESPONSE:
            return {
                ...state,
                loading: false,
                userDetails: action.payload,
                successMessage: action.payload
            };
        case actionTypes.PROFILE_UPDATE_FAILURE:
            return {
                loading: false,
                errorMessage: action.payload
            };
        default:
            return state;
    }
}