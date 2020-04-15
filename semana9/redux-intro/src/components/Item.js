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
  text-decoration: ${({complete}) => 
                    (complete ? 'line-through' : 'none')};
`

export default class Task extends React.Component {

    
  render(){

        return (    
            
            <Container>
                <Item>
                <Span
                key= {toDo.id}
                complete={toDo.complete}
                onClick={() => markToDo(toDo.id)}
                >{toDo.text}
                </Span>
                <span
                onClick={() => deleteToDo(toDo.id)}
                >X</span>
                </Item>
            </Container>
        );
  }
}

const mapStateToProps = state => {
    return {
        text: state.toDosReducer.toDosList.text
    }
}