import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 60%;
  height: auto;
  display: flex;
  margin: 2vw auto;
`

const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
`

const P = styled.span`
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

export default class Lista extends React.Component {

    
  render(){

        return (
      <Container>
          {this.props.tarefas.map(tarefa => {
            if(tarefa.texto && tarefa.completa){
              return(
                <Item
                key={tarefa.id}
                >
                <P
                completa={tarefa.completa}
                onClick={() => this.props.selecionarTarefa(tarefa.id)}
                >{tarefa.texto}
                </P>
                <span
                onClick={() => this.props.apagarTarefa(tarefa.id)}
                >X</span>
                </Item>
              )} else if (tarefa.texto && !tarefa.completa) {
                return(
                <Item
                key={tarefa.id}
                >
                <P
                completa={tarefa.completa}
                onClick={() => this.props.selecionarTarefa(tarefa.id)}
                >{tarefa.texto}
                </P>
                <span
                onClick={() => this.props.apagarTarefa(tarefa.id)}
                >X</span>
                </Item>
                )} else {return}
          })}
      </Container>
    );
  }
}
