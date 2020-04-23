import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Button from "@material-ui/core/Button";
import MenuItem from '@material-ui/core/MenuItem';
import styled from "styled-components";
import { routes } from "../Router";



const todayDate = () => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth()+1;
  let year = today.getFullYear();
       if(day<10 && month<10){
              day='0'+day
              month='0'+month
              return year+'-'+month+'-'+day;
          } 
      else if(month<10){
          month='0'+month
          return year+'-'+month+'-'+day;
      }
      else if(day<10){
          day='0'+day
          return year+'-'+month+'-'+day;
      }
      else {
        return year+'-'+month+'-'+day;
      }
}


const tripForm = [
  {name: "name", type: "text", label: "Nome da Expedição", required: true, pattern: "[A-Za-z ãé]{5,}", title: "O nome deve conter no mínimo 5 letras"},
  {name: "date", type: "date", label: "", required: true, min: todayDate()},
  {name: "description", type: "text", label: "Descrição da Viagem", required: true, pattern: "[A-Za-z ãé]{30,}", title: "A descrição deve ter no mínimo 30 caracteres"},
  {name: "durationInDays", type: "number", label: "Duração da Viagem", required: true,  min: 50, title: "A expedição deve ser de no mínimo 50 dias"},
]

const planets = [
  {name: ""},
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


  componentDidMount () {
    const token = localStorage.getItem('token')

    if(!token){
        this.props.goToLoginPage()
    }
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

          <FormControl required  inputProps={{pattern: "[A-Za-z ãé]{5,}"}}>
            <Select
              id="planet"
              name="planet"
              type="text"
              value={this.state.form.planet || ""}
              onChange={this.handleFieldChange}
            >
            {planets.map(planet => (
              <MenuItem value={planet.name}>{planet.name}</MenuItem>
            ))}
            </Select>
          </FormControl>

          <Button
          type="submit"
          >Criar Viagem
          </Button>
        </FormWrapper>
        <Button
        onClick={this.props.goToTripsListPage}
          >Explorar Lista de Viagens
        </Button>
      </AdminWrapper>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      goToLoginPage: () => dispatch(push(routes.root)),
      goToTripsListPage: () => dispatch(push(routes.tripsListPage)),
  }
}

export default connect (null, mapDispatchToProps) (AdminPage);


const AdminWrapper = styled.div`
 width: 100%;
  height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const FormWrapper = styled.form`
  width: 17%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`