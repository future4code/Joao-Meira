import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { markTask } from '../actions/todos';
import { deleteTask } from '../actions/todos';

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
  text-decoration: ${({complete}) => (complete ? 'line-through' : 'none')};
`

class TaskList extends React.Component {

  onClickDeleteTask = (id) => {
    this.props.deleteTask(id)

  }

  onClickMarkTask = (id) => {
    this.props.markTask(id)
  }

    
  render(){
      console.log(this.props.toDosList)
        return (
      <Container>
          {this.props.toDosList.map(task => {
            if(task.text && task.complete){
              return(
                <Item
                key={task.id}
                >
                <P
                complete={task.complete}
                onClick={() => this.onClickMarkTask(task.id)}
                >
                {task.text}
                </P>
                <span
                onClick={() => this.onClickDeleteTask(task.id)}
                >X</span>
                </Item>
              )} else if (task.text) {
                return(
                <Item
                key={task.id}
                >
                <P
                complete={task.complete}
                onClick={() => this.onClickMarkTask(task.id)}
                >
                {task.text}
                </P>
                <span
                onClick={() => this.onClickDeleteTask(task.id)}
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
      markTask: id => dispatch(markTask(id)),
      deleteTask: id => dispatch(deleteTask(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (TaskList)