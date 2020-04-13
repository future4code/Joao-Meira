import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
const InputTarefa = styled.input`
`


export default class Input extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tarefaInput:"",
    };
  }

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
        <InputTarefa
        placeholder = "Digite uma tarefa e aperte enter"
        onChange = {this.onChageTarefaInput}
        value = {this.state.tarefaInput}
        />
        <button
        onClick = {this.criarTarefa}
        >Adicionar</button>
      </Container>
    );
  }
}
