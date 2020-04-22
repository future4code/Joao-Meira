import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import styled from "styled-components";
import { routes } from "../Router";

// let today = new Date()
// let dateToday = d.toLocaleDateString()

const tripForm = [
  {name: "name", type: "text", label: "Nome da Expedição", required: true, pattern: "[A-Za-z ãé]{5,}", title: "O nome deve conter no mínimo 5 letras"},
  {name: "date", type: "date", label: "", required: true},
  {name: "description", type: "text", label: "Descrição da Viagem", required: true, pattern: "[A-Za-z ãé]{30,}", title: "A descrição deve ter no mínimo 30 caracteres"},
  {name: "durationInDays", type: "number", label: "Duração da Viagem", required: true,  min: 50, title: "A expedição deve ser de no mínimo 50 dias"},
]

const planets = [
  {name: "Mercúrio"}, 
  {name: "Vênus"}, 
  {name: "Marte"}, 
  {name: "Júpiter"}, 
  {name: "Saturno"}, 
  {name: "Urano"}, 
  {name: "Netuno"}, 
  {name: "Plutão"}, 
]

class AdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {},
    };
  }


  formSubmit = event => {
    event.preventDefault();
    console.log(this.state.form)

    this.setState({form:{}})
  }

  handleFieldChange = event => {
    event.preventDefault();
    this.setState({
      form:{...this.state.form, [event.target.name]: event.target.value}
    });
  };

  render() {

    return (
      <AdminWrapper>
        <h2>Crie uma Expedição Interplanetária</h2>
        
        <FormWrapper onSubmit={this.formSubmit}>
          {tripForm.map(input => (
            <div key={input.name}>
              <TextField
              id={input.name}
              name={input.name}
              type={input.type}
              label={input.label}
              value={this.state.form[input.name] || ""}
              required={input.required}
              onChange={this.handleFieldChange}
              inputProps={{
                pattern: input.pattern,
                title: input.title,
                min: input.min,
              }}
              />
            </div>
          ))}

          <Select
            id="planets"
            name="planets"
            type="text"
            value={this.state.form.planets || ""}
            required
            onChange={this.handleFieldChange}
          >
          {planets.map(planet => (
            <MenuItem value={planet.name}>{planet.name}</MenuItem>
          ))}
          </Select>

          <Button
          type="submit"
          >Criar Viagem</Button>
      </FormWrapper>
      </AdminWrapper>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      goToLoginPage: () => dispatch(push(routes.root)),
  }
}

export default connect (null, mapDispatchToProps) (AdminPage);


const AdminWrapper = styled.div`
  width: 100%;
  height: 75vh;
  gap: 10px;
  place-content: center center;
  display: grid;
`

const FormWrapper = styled.form`
  width: 100%;
  height: 80%;
  padding-top: 2vw;
  gap: 10px;
  place-content: center center;
  display: grid;
`

