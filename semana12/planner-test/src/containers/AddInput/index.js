import React, { Component } from "react";
import { connect } from "react-redux";
import {Select, MenuItem, Button, TextField} from '@material-ui/core/';
// import IconButton from '@material-ui/core/IconButton';
// import InputBase from '@material-ui/core/InputBase';
// import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { toCreateCommitment } from "../../actions/commitments";
import { green, blueGrey } from "@material-ui/core/colors";

export const daysOfTheWeek = 
[
    {name:"Segunda-Feira"},
    {name:"Terça-Feira"},
    {name:"Quarta-Feira"},
    {name:"Quinta-Feira"},
    {name:"Sexta-Feira"},
    {name:"Sábado"},
    {name:"Domingo"},
]

export class AddInput extends Component {
    constructor(props){
        super(props);
        this.state = {
          commitmentInput: '',
          commitmentDay: '',
        };
      }


      handleFieldChange = (event) => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };    

      handleCreateCommitment = (event) => {
        event.preventDefault()
        this.props.toCreateCommitment(this.state.commitmentDay, 
          this.state.commitmentInput)
        this.setState({
          commitmentDay: '',
          commitmentInput:'',
        })
      }

  render() {
      const {commitmentInput, commitmentDay} = this.state

      const theme = createMuiTheme({
        palette: {
          primary: blueGrey,
        }
      });
      
    return (
      <AddInputWrapper>
        <Wrapper>
          <MuiThemeProvider theme={theme}>
          <TextField
            onChange={this.handleFieldChange}
            name="commitmentInput"
            type="text"
            label="Insira um compromisso"
            value={commitmentInput}
          />
          <Select
          onChange={this.handleFieldChange}
          value={commitmentDay}
          name='commitmentDay'
          >
          <MenuItem value="">
            <em></em>
          </MenuItem>
          {daysOfTheWeek.map(day => (
            <MenuItem key={day.name} value={day.name}>{day.name}</MenuItem>
          ))}
          </Select>
        <Button 
          color="primary" 
          size="medium" 
          onClick={this.handleCreateCommitment}
        >Adicionar ao Planner
        </Button>
        </MuiThemeProvider>
      </Wrapper>
      </AddInputWrapper>
    )
  }
}


const mapDispatchToProps = dispatch => ({
    toCreateCommitment: (day, text) => dispatch(toCreateCommitment(day, text))
  });  

export default connect(null, mapDispatchToProps)(AddInput);

export const AddInputWrapper = styled.div`
    padding: 0 3vw;
    width: 95vw;
    height: 10%;
    background-color: #d0cba6;
    margin: 1vw 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 3px;
`
export const Wrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: space-evenly;
  align-items: end;
`