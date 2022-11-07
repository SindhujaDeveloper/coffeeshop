// import { applyMiddleware, createStore } from "redux";
// import createSagaMiddleware from 'redux-saga';
// import { createLogger } from 'redux-logger';
// import rootSaga from './saga/login'
// import rootReducer from "./reducers/rootReducer";

// const sagaMiddleware = createSagaMiddleware();

// const loggerMiddleware = createLogger();

// const store = createStore(
//     rootReducer,
//     applyMiddleware(sagaMiddleware, loggerMiddleware)
// )

// sagaMiddleware.run(rootSaga)

// export type RootState = ReturnType<typeof store.getState>;

// export default store;


//Persist config with reducer
import createSagaMiddleware, { SagaMiddleware } from 'redux-saga';
import { createLogger } from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import { createBlacklistFilter } from 'redux-persist-transform-filter';
import localForage from 'localforage';
import { createStore, applyMiddleware, Middleware } from 'redux';

import { rootSaga } from './saga'
import rootReducer from "./reducers/rootReducer";

const persistConfig = {
    key: 'reduxPersistState',
    timeout: 0,
    storage: localForage,
    whitelist: [
        'login',
    ],
    transforms: [
        createBlacklistFilter('login', ['loading', 'errorMessage']),
    ]
};

const sagaMiddleWare: SagaMiddleware<{}> = createSagaMiddleware();
const middleWare: Middleware[] = [sagaMiddleWare];

const pReducer = persistReducer(persistConfig, rootReducer);

const logger: Middleware = createLogger();
middleWare.push(logger);

const store = createStore(
    pReducer,
    applyMiddleware(...middleWare)
)

const persistor = persistStore(store);

sagaMiddleWare.run(rootSaga);

export { store, persistor };