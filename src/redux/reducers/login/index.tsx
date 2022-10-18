import { LoginAction } from '../../actions/login';
import * as actionTypes from '../../actions/actionTypes/login';

const initialState = {
    successMessage: '',
    errorMessage: '',
    userDetails: {},
    loading: false,
    isLogin: false
};

export const loginReducer = (state: { successMessage: string, errorMessage: string, loading: boolean, isLogin: boolean, userDetails: any } = initialState, action: LoginAction) => {
    switch (action.type) {
        case actionTypes.SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: ''
            };
        case actionTypes.SIGNUP_RESPONSE:
            return {
                ...state,
                loading: false,
                userDetails: action.payload.user,
                isLogin: true,
                successMessage: action.payload.successMessage,
                errorMessage: ''
            };
        case actionTypes.SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage: action.payload
            };
        case actionTypes.LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                errorMessage: ''
            };
        case actionTypes.LOGIN_RESPONSE:
            return {
                ...state,
                userDetails: action.payload.user,
                successMessage: action.payload.successMessage,
                isLogin: true,
                loading: false,
                errorMessage: ''
            };
        case actionTypes.LOGIN_FAILURE:
            return {
                ...state,
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
                ...state,
                loading: false,
                errorMessage: action.payload
            };
        case actionTypes.LOGOUT:
            return {
                successMessage: '',
                errorMessage: '',
                userDetails: {},
                loading: false,
                isLogin: false
            }
        default:
            return state;
    }
}