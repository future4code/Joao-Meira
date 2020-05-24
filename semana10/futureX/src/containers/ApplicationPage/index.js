import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import { routes } from "../Router";
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { getTripsList, toSendApplication } from "../../actions/actions";
import countryList from 'react-select-country-list'




const tripForm = [
  {name: "name", type: "text", label: "Nome do Expedicionário", required: true, pattern: "[A-Za-z ãé]{3,}", title: "O nome deve conter no mínimo 5 letras"},
  {name: "age", type: "number", label: "Idade", required: true, min: 18, title: "Você deve ter mais de 18 anos!"},
  {name: "applicationText", type: "text", label: "Conte-nos sobre você", required: true, pattern: "^.{30,}$", title: "O texto de aplicação deve ter no mínimo 30 caracteres"},
  {name: "profession", type: "text", label: "Profissão", required: true, pattern: "[A-Za-z ãéÁáêõÕÊíÍçÇÚúüÜ]{10,}", title: "A profissão deve ter no mínimo 10 caracteres"},
]


class ApplicationPage extends Component {
  constructor(props) {
    super(props);
    this.options = countryList().getData()
    this.state = {
      countries: this.options,
      form: {},
    };
  }


  componentDidMount () {
      this.props.getTripsList()
}


  formSubmit = event => {
    event.preventDefault();
    this.props.toSendApplication(this.state.form)
    console.log(
      this.state.form
    )
    this.setState({form:{}})
  }

  handleFieldChange = event => {
    event.preventDefault();
    this.setState({
      form:{...this.state.form, [event.target.name]: event.target.value}
    });
  };

  render() {
    const {tripsList} = this.props


    return (
      <AdminWrapper
      img={require('../../img/rickandmorty3.jpg')}
      >
        <h2>Inscreva-se para uma Expedição Interplanetária</h2>
        
        <FormWrapper onSubmit={this.formSubmit}>

          {tripForm.map(input => (
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
          ))}

          <FormControl required >
           <InputLabel id="demo-mutiple-name-label">País de Origem</InputLabel>
            <Select
              id="country"
              name="country"
              type="text"
              value={this.state.form.country || ""}
              onChange={this.handleFieldChange}
            >
          {this.state.countries.map(country => (
              <MenuItem value={country.label}>
                {country.label}
              </MenuItem>
            ))}
            </Select>
          </FormControl>

          <FormControl required >
           <InputLabel id="demo-mutiple-name-label">Escolha uma Expedição</InputLabel>
            <Select
              id="tripId"
              name="tripId"
              type="text"
              value={this.state.form.tripId || ""}
              onChange={this.handleFieldChange}
            >
          {tripsList ? tripsList.map(trip => (
              <MenuItem value={trip.id}>
                {trip.name} - {trip.planet}
              </MenuItem>
            )) : <span>Carregando...</span>}
            </Select>
          </FormControl>

          <Button
          type="submit"
          >Inscrever-se
          </Button>
        </FormWrapper>
      </AdminWrapper>

    );
  }
}

const mapStateToProps = (state) => ({
  tripsList: state.trips.tripsList
})

const mapDispatchToProps = (dispatch) => {
  return {
      goToLoginPage: () => dispatch(push(routes.root)),
      getTripsList: () => dispatch(getTripsList()),
      toSendApplication: (application) => 
        dispatch(toSendApplication(application )),

  }
}

export default connect (mapStateToProps, mapDispatchToProps) (ApplicationPage);


const AdminWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;

  &:before {
  content: " ";
  border-radius: 1vw;
  position: absolute;
  width: 80%; 
  height: 90%;  
  opacity: .4; 
  z-index: -3;
  background: url(${props => props.img});
  background-size: 100% auto;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
}
`

const FormWrapper = styled.form`
  width: 20%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(250, 250, 250, 0.7);
  border-radius: 5px;
  padding: 2vw;
`

