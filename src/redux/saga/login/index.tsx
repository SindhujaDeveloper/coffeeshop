import { put, all, fork, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../../../utils/helpers/api-call';
import { API_ROUTES } from '../../../utils/helpers/api-routes';
import { loginFailure, loginResponse, profileUpdateFailure, profileUpdateResponse, signupFailure, signupResponse } from '../../actions/login';
import * as actionTypes from '../../actions/actionTypes/login';

function* signupRequest(action: any): Generator<any> {
  try {
    // const reqPayload = {
    //   Mobileno: action.payload?.Mobileno,
    //   Firstname: action.payload?.Firstname,
    //   Lastname: action.payload?.Lastname,
    //   City: action.payload?.City,
    //   Gender: action.payload?.Gender,
    //   Birthdate: action.payload?.Birthdate,
    // };
    if (action.payload) {
      const response: any = yield apiCall({
        apiPath: action.payload.isLogin ? API_ROUTES.update.apiPath : API_ROUTES.signIn.apiPath,
        method: API_ROUTES.signIn.method,
        data: action.payload?.values,
        type: "public"
      });
      if (response.status === 401) {
        yield put(signupFailure('Co uld not create user'));
      } else {
        // const res: any = {
        //   Birthdate: response.data.user.Birthdate,
        //   City: response.data.user.City,
        //   Firstname: response.data.user.Firstname,
        //   Gender: response.data.user.Gender,
        //   Lastname: response.data.user.Lastname,
        //   Mobileno: response.data.user.Mobileno
        // };
        yield put(signupResponse(response.data.data.user));
      }
    }
  } catch (error: any) {
    yield put(signupFailure(error));
  }
}

function* loginRequest(action: any): Generator<any> {
  try {
    const reqPayload = action.payload?.token ? { sso_token: action.payload?.token } : { Mobileno: action.payload?.Mobileno };
    if (action.payload) {
      const response: any = yield apiCall({
        apiPath: API_ROUTES.login.apiPath,
        method: API_ROUTES.login.method,
        data: reqPayload,
        type: "public"
      });
      if (response.status === 200) {
        yield put(loginResponse(response.data[0]));
      } else {
        // const res: any = {
        //   Birthdate: response.data[0].Birthdate,
        //   City: response.data[0].City,
        //   Firstname: response.data[0].Firstname,
        //   Gender: response.data[0].Gender,
        //   Lastname: response.data[0].Lastname,
        //   Mobileno: response.data[0].Mobileno
        // };
        yield put(loginFailure('Invalid credentials.'));
      }
    }
  } catch (error: any) {
    yield put(loginFailure(error));
  }
}

function* profileUpdateRequest(action: any): Generator<any> {
  try {
    // const reqPayload = {
    //   Mobileno: action.payload?.Mobileno,
    //   Firstname: action.payload?.Firstname,
    //   Lastname: action.payload?.Lastname,
    //   City: action.payload?.City,
    //   Gender: action.payload?.Gender,
    //   Birthdate: action.payload?.Birthdate,
    // };
    if (action.payload) {
      const response: any = yield apiCall({
        apiPath: API_ROUTES.update.apiPath,
        method: API_ROUTES.update.method,
        data: action.payload,
        type: "public"
      });
      if (response.status === 401) {
        yield put(profileUpdateFailure('profile update failure'));
      } else {
        // const res: any = {
        //   Birthdate: response.data.user.Birthdate,
        //   City: response.data.user.City,
        //   Firstname: response.data.user.Firstname,
        //   Gender: response.data.user.Gender,
        //   Lastname: response.data.user.Lastname,
        //   Mobileno: response.data.user.Mobileno
        // };
        yield put(profileUpdateResponse(response.data.data.user));
      }
    }
  } catch (error: any) {
    yield put(signupFailure(error));
  }
}

function* loginRequestSaga() {
  yield takeLatest(actionTypes.SIGNUP_REQUEST, signupRequest)
  yield takeLatest(actionTypes.LOGIN_REQUEST, loginRequest)
  yield takeLatest(actionTypes.PROFILE_UPDATE_REQUEST, profileUpdateRequest)
}

export default function* rootSaga() {
  yield all([
    fork(loginRequestSaga)
  ])
}