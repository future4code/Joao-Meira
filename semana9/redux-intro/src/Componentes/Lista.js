import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`

const ListaDeTarefa = styled.div`
`

const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

export default class Lista extends React.Component {

    
  render(){

        return (
      <Container>
        <ListaDeTarefa>
          <ul>
          {this.props.tarefas.map(tarefa => {
            if(tarefa.texto && tarefa.completa){
              return(
                <Item
                completa={tarefa.completa}
                onClick={() => this.props.selecionarTarefa(tarefa.id)}
                onDoubleClick={() => this.props.apagarTarefa(tarefa.id)}
                >{tarefa.texto}</Item>
              )} else if (tarefa.texto && !tarefa.completa) {
                return(
                <Item
                completa={tarefa.completa}
                onClick={() => this.props.selecionarTarefa(tarefa.id)}
                onDoubleClick={() => this.props.apagarTarefa(tarefa.id)}
                >{tarefa.texto}</Item>
                )} else {return}
          })}
          </ul>
        </ListaDeTarefa>
      </Container>
    );
  }
}
