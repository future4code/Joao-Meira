import React from 'react';
import styled from 'styled-components';
import { addTask } from '../actions/todos';
import { connect } from 'react-redux';

const Container = styled.div`
    width: 100%;
    height: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
`
const InputTarefa = styled.input`
  width: 55%;
  max-width: 400px;
`


export class Input extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      taskInput:"",
    };
  }

  onChageTaskInput = (e) => {
    this.setState({taskInput: e.target.value})
  }

  onClickAddTask = () => {
    this.props.addTask(this.state.taskInput)
    this.setState({taskInput: ""})
  }


  render(){
    return (

      <Container>
        <InputTarefa
        placeholder = "O que deve ser feito?"
        onChange = {this.onChageTaskInput}
        value = {this.state.taskInput}
        />
        <button
        onClick = {this.onClickAddTask}
        type="button"
        >Adicionar</button>
      </Container>
    );
  }
}


const mapDispatchToProps = dispatch => {
  return{
    addTask: text => dispatch(addTask(text)),
  }
}

export default connect (
  null,
  mapDispatchToProps,
) (Input);