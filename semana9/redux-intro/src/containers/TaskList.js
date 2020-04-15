import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { markTask } from '../actions/todos';

const Container = styled.div`
  width: 40%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: 2vw auto;
`

const Item = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`

const P = styled.span`
  text-decoration: ${({complete}) => (complete==="complete" ? 'line-through' : 'none')};
`

class TaskList extends React.Component {

    
  render(){
        return (
      <Container>
          {this.props.toDosList.map(task => {
            if(task.text && task.complete === "complete"){
              return(
                <Item
                >
                <P
                complete={task.complete}
                onClick={() => this.props.markTask(task.id)}
                >
                {task.text}
                </P>
                <span
                onClick={() => this.props.deleteTask(task.id)}
                >X</span>
                </Item>
              )} else if (task.text && task.complete === "incomplete") {
                return(
                <Item
                >
                <P
                complete={task.complete}
                onClick={() => this.props.markTask(task.id)}
                >
                {task.text}
                </P>
                <span
                onClick={() => this.props.deleteTask(task.id)}
                >X</span>
                </Item>
                )} else {return}
          })}
      </Container>
    );
  }
}

const mapStateToProps = state => {
    return {
        toDosList: state.toDosReducer.toDosList
    }
}

const mapDispatchToProps = dispatch => {
    return{
      markTask: id => {
        const action = markTask(id)
        dispatch(action)
      } 
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (TaskList)