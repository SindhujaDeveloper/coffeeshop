import { all, fork } from 'redux-saga/effects';
import { loginRequestSaga } from "./login";

export function* rootSaga() {
    yield all([
        fork(loginRequestSaga)
    ])
}