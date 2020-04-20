import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import { generateReducers } from './reducers'


export const history = createBrowserHistory();

export const store = createStore(
    generateReducers(history),
    applyMiddleware(routerMiddleware(history)),
);