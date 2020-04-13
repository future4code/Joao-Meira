import React from 'react';
import styled from 'styled-components';
import Input from './Componentes/Input';
import Lista from './Componentes/Lista';
import Buttons from './Componentes/Buttons';

const Container = styled.div`
  margin: auto;
  width: 50%;
  height: 50%;
  margin-top: 3vw;
  border: 1px solid black;
`


export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tarefas: [
        {
          id: "",
          texto: "",
          completa: false,
        }
      ],
    };
  }

  adicionarTarefa = (novaTarefa) => {
    let listaDeTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({tarefas: listaDeTarefas})
  }


  selecionarTarefa = (id) => {
    const listaComTarefaCompleta = this.state.tarefas.map(tarefa => {
        
        if (tarefa.id === id){
            tarefa.completa = !tarefa.completa;
            return tarefa;
        }
        else {
            return tarefa;
        }
    })
    this.setState({tarefas: listaComTarefaCompleta})
    };

    apagarTarefa = (idParaApagar) => {
      let tarefaParaApagar

     this.state.tarefas.map(tarefa => {
        if (tarefa.id === idParaApagar){
           tarefaParaApagar = tarefa
          }
      })

      const tarefasCopia = [... this.state.tarefas]
      const indiceParaDeletar = tarefasCopia.indexOf(tarefaParaApagar)
      tarefasCopia.splice(indiceParaDeletar, 1)

      this.setState({
      tarefas: tarefasCopia
      })
  }

  apagarTodasTarefas = () => {      
    this.setState({tarefas:[]})
}

  render(){


    return (

      <Container>
        <Input
        inputTarefa = {this.onChageTarefaInput}
        valueInput = {this.state.tarefaInput}
        tarefaParaAdicionar = {this.adicionarTarefa}
        />
        <Lista
        tarefas={this.state.tarefas}
        selecionarTarefa = {this.selecionarTarefa}
        apagarTarefa = {this.apagarTarefa}
        />
        <Buttons/>
      </Container>
    );
  }
}
