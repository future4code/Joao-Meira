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

const Span = styled.span`
  text-decoration: ${({completa}) => 
                    (completa ? 'line-through' : 'none')};
`

export default class Task extends React.Component {

    
  render(){

        return (    
            
            <Container>
                <Item>
                <Span
                completa={this.props.tarefa.completa}
                onClick={() => this.props.selecionarTarefa(tarefa.id)}
                >{tarefa.texto}
                </Span>
                <span
                onClick={() => this.props.apagarTarefa(tarefa.id)}
                >X</span>
                </Item>
            </Container>
        );
  }
}