import { put, takeLatest } from 'redux-saga/effects';
import { apiCall } from '../../../utils/helpers/api-call';
import { API_ROUTES } from '../../../utils/helpers/api-routes';
import { loginFailure, loginResponse, profileUpdateFailure, profileUpdateResponse, sendSmsFailure, sendSmsResponse, signupFailure, signupResponse } from '../../actions/login';
import * as actionTypes from '../../actions/actionTypes/login';

function* signupRequest(action: any): Generator<any> {
  try {
    if (action.payload) {
      console.log(action.payload.values)
      const response: any = yield apiCall({
        apiPath: action.payload.isLogin ? API_ROUTES.update.apiPath : API_ROUTES.signIn.apiPath,
        method: API_ROUTES.signIn.method,
        // apiPath: action.payload.isLogin ? (action.payload.userDetail ? API_ROUTES.userDetail.apiPath.replace(':Mobileno', `${action.payload?.values.Mobileno}`) : API_ROUTES.update.apiPath) : API_ROUTES.signIn.apiPath,
        // method: action.payload.userDetail ? API_ROUTES.userDetail.method : API_ROUTES.signIn.method,
        data: action.payload?.values,
        type: "public",
      });
      if (response.status === 401) {
        yield put(signupFailure('Could not create user'));
      } else {
        yield put(signupResponse({ user: response.data.data.user[0], successMessage: response.data.message }));
      }
    }
  } catch (error: any) {
    yield put(signupFailure('Error Occured'));
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
        yield put(loginResponse({ user: response.data.data.users[0], successMessage: response.data.message }));
      } else {
        yield put(loginFailure('Invalid credentials.'));
      }
    }
  } catch (error: any) {
    yield put(loginFailure('error occured'));
  }
}

function* profileUpdateRequest(action: any): Generator<any> {
  try {
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
        yield put(profileUpdateResponse(response.data.data.user));
      }
    }
  } catch (error: any) {
    yield put(profileUpdateFailure('error occured'));
  }
}

function* sendSmsRequest(action: any): Generator<any> {
  try {
    if (action.payload) {
      const response: any = yield apiCall({
        apiPath: API_ROUTES.sendSms.apiPath,
        method: API_ROUTES.sendSms.method,
        data: action.payload,
        type: "public",
        params: {
          'apikey': action.payload.apikey,
          'sender': action.payload.sender,
          'to': action.payload.to,
          'message': action.payload.message,
          'format': action.payload.format
        }
      });
      if (response.status === 401) {
        yield put(sendSmsFailure('failure to send the sms'));
      } else {
        yield put(sendSmsResponse(response.message));
      }
    }
  } catch (error: any) {
    yield put(sendSmsFailure('error occured'));
  }
}

export function* loginRequestSaga() {
  yield takeLatest(actionTypes.SIGNUP_REQUEST, signupRequest)
  yield takeLatest(actionTypes.LOGIN_REQUEST, loginRequest)
  yield takeLatest(actionTypes.PROFILE_UPDATE_REQUEST, profileUpdateRequest)
  yield takeLatest(actionTypes.SEND_SMS_REQUEST, sendSmsRequest)
}

