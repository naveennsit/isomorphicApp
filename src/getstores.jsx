import { createStore, combineReducers,applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger';
import  reducers from './reducers/question'
import createSagaMiddleware from 'redux-saga';
import fetchQuestionSaga from './saga/fetch.question'

export default function (defaultState={}) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewareChain = [ sagaMiddleware];
    if(process.env.NODE_ENV === 'development') {
        const logger = createLogger();
        middlewareChain.push(logger);
    }
    const store = createStore(combineReducers({
        re:reducers,
    }), defaultState,applyMiddleware(...middlewareChain));
    sagaMiddleware.run(fetchQuestionSaga);
    return store;

}
