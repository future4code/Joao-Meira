import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { markAllCompleteTasks } from '../actions/todos'
import { deleteAllComplete, setFilter } from '../actions/todos'

const Container = styled.div`
    width: 100%;
    height: 5vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: solid black 1px;
`

const Button1 = styled.div`
    padding: 2vw;
    cursor: pointer;
    text-align: center;
    width: 33%;
    font-size: 1.1vw;

    &&:hover{
        text-decoration: underline;
    }
`

const Button2 = styled.div`
    text-align: center;
    border: solid grey 1px;
    padding: 5px;
    cursor: pointer;
    width: 11%;
    font-size: 1.1vw;
`

const Button3 = styled.div`
    text-align: center;
    padding: 5px;
    border: solid transparent 1px;
    cursor: pointer;
    width: 11%;
    font-size: 1.1vw;

    &&:hover{
        border: solid grey 1px;
    }
`

const Button4 = styled.div`
    text-align: center;
    padding: 5px;
    border: solid transparent 1px;
    cursor: pointer;
    width: 11%;
    font-size: 1.1vw;

    &&:hover{
        border: solid grey 1px;
    }
`

const Button5 = styled.div`
    padding: 5px;
    cursor: pointer;
    text-align: center;
    width: 33%;
    font-size: 1.1vw;

    &&:hover{
        text-decoration: underline;
    }
`

class Buttons extends React.Component {


  render(){
    return (

      <Container>
          <Button1 
          onClick={this.props.markAllCompleteTasks}
          >Marcar todas como completas
          </Button1>
          <Button2
          onClick={() => this.props.setFilter('todas')}
          >Todas
          </Button2>
          <Button3
          onClick={() => this.props.setFilter('pendentes')}
          >Pendentes
          </Button3>
          <Button4
          onClick={() => this.props.setFilter('completas')}
          >Completas
          </Button4>
          <Button5
          onClick={this.props.deleteAllComplete}
          >Remover Completas
          </Button5>
      </Container>
    );
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
    markAllCompleteTasks: () => dispatch(markAllCompleteTasks()),
    deleteAllComplete: () => dispatch(deleteAllComplete()),
    setFilter: (filter) => dispatch(setFilter(filter))
  }
}

export default connect (null, mapDispatchToProps)(Buttons)