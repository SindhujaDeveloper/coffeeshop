import { ActionsUnion, createAction } from '../../../utils/helpers/redux-helpers';
import * as actionTypes from '../actionTypes/login';

export const signupRequest = (payload: any) => createAction(actionTypes.SIGNUP_REQUEST, payload);
export const signupResponse = (data: { user: any; successMessage: string }) => createAction(actionTypes.SIGNUP_RESPONSE, data);
export const signupFailure = (error: null | string) => createAction(actionTypes.SIGNUP_FAILURE, error);

export const loginRequest = (payload: { Mobileno: string } | { sso_token: string }) => createAction(actionTypes.LOGIN_REQUEST, payload);
export const loginResponse = (data: { user: any; successMessage: string }) => createAction(actionTypes.LOGIN_RESPONSE, data);
export const loginFailure = (error: null | string) => createAction(actionTypes.LOGIN_FAILURE, error);

export const profileUpdateRequest = (payload: any) => createAction(actionTypes.PROFILE_UPDATE_REQUEST, payload);
export const profileUpdateResponse = (data: any) => createAction(actionTypes.PROFILE_UPDATE_RESPONSE, data);
export const profileUpdateFailure = (error: null | string) => createAction(actionTypes.PROFILE_UPDATE_FAILURE, error);

export const sendSmsRequest = (payload: any) => createAction(actionTypes.SEND_SMS_REQUEST, payload);
export const sendSmsResponse = (data: any) => createAction(actionTypes.SEND_SMS_RESPONSE, data);
export const sendSmsFailure = (error: null | string) => createAction(actionTypes.SEND_SMS_FAILURE, error);

export const logout = () => createAction(actionTypes.LOGOUT);

const LOGIN_ACTIONS = {
    signupRequest,
    signupResponse,
    signupFailure,
    loginRequest,
    loginResponse,
    loginFailure,
    profileUpdateRequest,
    profileUpdateResponse,
    profileUpdateFailure,
    sendSmsRequest,
    sendSmsResponse,
    sendSmsFailure,
    logout
};

export type LoginAction = ActionsUnion<typeof LOGIN_ACTIONS>;
