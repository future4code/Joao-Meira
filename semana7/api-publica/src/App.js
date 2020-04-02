import React from 'react';
import styled from 'styled-components';
import Buscar from './Componentes/Buscar';
import Aleatório from './Componentes/Aleatório';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Menu = styled.div`
  width: 100%;
  display: flex;
  height: 5vh;
  border: 1px solid black;
  align-items: center;
  justify-content: space-between;
`

const Descrição = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 40vw;
  height: 25vw;
`

const Explicando = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 40vw;
  height: 25vw;
`

const HomeSpan = styled.span`
  text-align: center;
  cursor: pointer;
  width: 10%;
`
const BuscarSpan = styled.span`
  text-align: center;
  cursor: pointer;
  width: 10%;
`
const AleatórioSpan = styled.span`
  text-align: center;
  cursor: pointer;
  width: 10%;
`




class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      menu: "home"
    }
  }

  onClickHome = () => {
    this.setState({menu: "home"})
  }
  onClickBuscar = () => {
    this.setState({menu: "buscar"})
  }
  onClickAleatório = () => {
    this.setState({menu: "aletório"})
  }

  render () {


    if(this.state.menu === "home"){
    return (
      <Container>
          <Menu>
            <HomeSpan
            onClick = {this.onClickHome}
            >Home</HomeSpan>
            <BuscarSpan
            onClick = {this.onClickBuscar}
            >Buscar</BuscarSpan>
            <AleatórioSpan
            onClick = {this.onClickAleatório}
            >Aleatório!</AleatórioSpan>
          </Menu>

          <Descrição>
            <p>DESCREVENDO</p>  
          </Descrição>
          <Explicando>
            <p>EXPLICANDO</p>
          </Explicando>
      </Container>
    )} else if (this.state.menu === "buscar"){
      return(
        <Container>
            <Menu>
              <HomeSpan
              onClick = {this.onClickHome}
              >Home</HomeSpan>
              <BuscarSpan
              onClick = {this.onClickBuscar}
              >Buscar</BuscarSpan>
              <AleatórioSpan
              onClick = {this.onClickAleatório}
              >Aleatório!</AleatórioSpan>
            </Menu>
      
            <Buscar/>

         </Container>
      )} else if (this.state.menu === "aleatório"){
        return(
        <Container>
            <Menu>
              <HomeSpan
              onClick = {this.onClickHome}
              >Home</HomeSpan>
              <BuscarSpan
              onClick = {this.onClickBuscar}
              >Buscar</BuscarSpan>
              <AleatórioSpan
              onClick = {this.onClickAleatório}
              >Aleatório!</AleatórioSpan>
            </Menu>
      
            <Aleatório/>
            
         </Container>
        )}
  }
}

export default App;
