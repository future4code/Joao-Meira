import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid black 1px;
`

const Button1 = styled.div`
    width: 15vw;
    padding: 0vw;
    cursor: pointer;
    text-align: center;

    &&:hover{
        text-decoration: underline;
    }
`

const Button2 = styled.div`
    border: solid grey 1px;
    padding: 5px;
    cursor: pointer;
`

const Button3 = styled.div`
    padding: 5px;
    border: solid transparent 1px;
    cursor: pointer;
    &&:hover{
        border: solid grey 1px;
    }
`

const Button4 = styled.div`
    padding: 5px;
    border: solid transparent 1px;
    cursor: pointer;
    &&:hover{
        border: solid grey 1px;
    }
`

const Button5 = styled.div`
    width: 15vw;
    padding: 5px;
    cursor: pointer;
    text-align: center;
    &&:hover{
        text-decoration: underline;
    }
`

export default class Buttons extends React.Component {


  onChageTarefaInput = (e) => {
    this.setState({tarefaInput: e.target.value})
  }

  criarTarefa = () => {
    let novaTarefa = {
      id: Date.now(),
      texto: this.state.tarefaInput,
      completa: false,
    }
    this.props.tarefaParaAdicionar(novaTarefa)
    this.setState({tarefaInput: ""})
  }


  render(){
    return (

      <Container>
          <Button1>Marcar todas como completas</Button1>
          <Button2>Todas</Button2>
          <Button3>Pendentes</Button3>
          <Button4>Completas</Button4>
          <Button5>Remover Completas</Button5>
      </Container>
    );
  }
}
