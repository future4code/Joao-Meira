import React from 'react';
import './App.css';
import Input from './containers/Input';
import Buttons from './containers/Buttons';
import styled from 'styled-components'
import TaskList from './containers/TaskList';
import { createStore } from 'redux'
import { Provider } from 'react-redux';
import { rootReducer } from './reducers'





const Container = styled.div`
  margin: auto;
  width: 50%;
  height: 50%;
  margin-top: 3vw;
  border: 1px solid black;
`

const store = createStore(rootReducer)

export default function App() {
  return (
    <Provider store={store}>

      <Container>
        <Input/>
        <TaskList/>
        <Buttons/>
      </Container>

    </Provider>
  );
}