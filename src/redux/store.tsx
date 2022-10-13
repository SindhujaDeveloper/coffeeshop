import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import rootSaga from './saga/login'
import rootReducer from "./reducers/rootReducer";

const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware, loggerMiddleware)
)

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;

export default store;