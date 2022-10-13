import { ActionsUnion, createAction } from '../../utils/helpers/redux-helpers';
import * as actionTypes from './actionTypes/login';

export const signupRequest = (payload: any) => createAction(actionTypes.SIGNUP_REQUEST, payload);
export const signupResponse = (data: any) => createAction(actionTypes.SIGNUP_RESPONSE, data);
export const signupFailure = (error: null | string) => createAction(actionTypes.SIGNUP_FAILURE, error);

export const loginRequest = (payload: { Mobileno: string } | { sso_token: string }) => createAction(actionTypes.LOGIN_REQUEST, payload);
export const loginResponse = (data: any) => createAction(actionTypes.LOGIN_RESPONSE, data);
export const loginFailure = (error: null | string) => createAction(actionTypes.LOGIN_FAILURE, error);

const LOGIN_ACTIONS = {
    signupRequest,
    signupResponse,
    signupFailure,
    loginRequest,
    loginResponse,
    loginFailure
};

export type LoginAction = ActionsUnion<typeof LOGIN_ACTIONS>;
