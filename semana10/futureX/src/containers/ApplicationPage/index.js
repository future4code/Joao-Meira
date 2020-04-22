import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import styled from "styled-components";
import { routes } from "../Router";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';


const tripForm = [
  {name: "name", type: "text", label: "Nome do Expedicionário", required: true, pattern: "[A-Za-z ãé]{5,}", title: "O nome deve conter no mínimo 5 letras"},
  {name: "age", type: "number", label: "Idade", required: true, min: 18, title: "Você deve ter mais de 18 anos!"},
  {name: "applicationText", type: "text", label: "Conte-nos sobre você", required: true, pattern: "[A-Za-z ãé]{30,}", title: "O texto de aplicação deve ter no mínimo 30 caracteres"},
  {name: "profession", type: "text", label: "Profissão", required: true,  title: "A profissão deve ter no mínimo 10 caracteres"},
  {name: "tripId", type: "text", label: "Viagem", required: true,  title: "A profissão deve ter no mínimo 10 caracteres"},
]


class ApplicationPage extends Component {
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
        <h2>Inscreva-se para uma Expedição Interplanetária</h2>
        
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

          <CountryDropdown/>

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

export default connect (null, mapDispatchToProps) (ApplicationPage);


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

