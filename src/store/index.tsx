import createSagaMiddleware from "redux-saga";
import { StateType } from 'typesafe-actions';
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./ducks";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
export type Store = StateType<typeof rootReducer>
sagaMiddleware.run(rootSaga);

export default store;