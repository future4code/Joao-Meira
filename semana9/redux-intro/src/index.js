import React from 'react';
import { render } from "react-dom";
import './index.css';
import App from './App';
import { createStore } from 'red'
import rootReducer from './reducers'
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);