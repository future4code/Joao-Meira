import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux'
import { markTask } from '../actions/todos';
import { deleteTask } from '../actions/todos';
import { DeleteForever } from '@material-ui/icons'

const Container = styled.div`
  width: 50%;
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
  padding-bottom: 1vw;
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
          {this.props.toDosList.filter(task =>{
            const filter = this.props.filter
            if(filter === 'pendentes') return task.complete === false
            if(filter === 'completas') return task.complete === true
            return true
          }).map(task => {
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
              <DeleteForever
              onClick={() => this.onClickDeleteTask(task.id)}
              />
                </Item>
              )}
          )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
    return {
        toDosList: state.toDosReducer.toDosList,
        filter: state.toDosReducer.filter,
    }
}

const mapDispatchToProps = dispatch => {
    return{
      markTask: id => dispatch(markTask(id)),
      deleteTask: id => dispatch(deleteTask(id))
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (TaskList)