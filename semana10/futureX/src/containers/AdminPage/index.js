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
import {toCreateTrip} from "../../actions/actions"
import moment from 'moment'


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
  {name: "description", type: "text", label: "Descrição da Viagem", required: true, pattern: "^.{30,}$", title: "A descrição deve ter no mínimo 30 caracteres"},
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
    this.props.toCreateTrip(this.state.form)
    console.log(moment(this.state.form.date).format('DD/MM/YYYY'))

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
      <AdminWrapper
      img={require('../../img/rickandmorty2.jpeg')}
      >
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
          >Criar Expedição
          </Button>
        </FormWrapper>
        <Button2
        onClick={this.props.goToTripsListPage}
          >Explorar Lista de Viagens
        </Button2>
      </AdminWrapper>

    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      goToLoginPage: () => dispatch(push(routes.root)),
      goToTripsListPage: () => dispatch(push(routes.tripsListPage)),
      toCreateTrip: (trip) => dispatch(toCreateTrip(trip))
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

  &:before {
  content: " ";
  border-radius: 1vw;
  position: absolute;
  width: 50%; 
  height: 70%;  
  opacity: .4; 
  z-index: -3;
  background: url(${props => props.img});
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.4;
  }
`

const FormWrapper = styled.form`
  width: 20%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(250, 250, 250, 0.9);
  border-radius: 5px;
  padding: 2vw;
  margin: 1vw 0;
`

const Button2 = styled.button`
  box-sizing: border-box;
  background-color: #939393;
  border: 2px solid #939393;
  color: white;
  padding: 5px;
  margin-bottom: 1vw;
  width: 100%;
  max-width: 10vw;
  border-radius: 5px;
  font-size: 0.8vw;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background-color: white;
    color: #939393;
  }
`;