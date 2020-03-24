import React from 'react';
import styled from 'styled-components'
import './App.css';
import Lista from './Componentes/Lista/Lista';

const Container = styled.div`

`


export default class App extends React.Component {
    constructor(props){
      super(props)

      
    }



    render(){
      return (
        <Container>
          <Lista>
          </Lista>
        </Container>
      );
    }

}
