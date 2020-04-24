import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import FutureX from '../../img/futurex.png'
import { routes } from "../Router";
import { toLogin } from "../../actions/actions";




class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toLogin = event => {
    event.preventDefault()

    this.props.toLogin(this.state.email, this.state.password)
    console.log(this.state.email, this.state.password)
    this.setState({email: "", password: ""})
  }



  render() {
    const { email, password } = this.state;
    const isLogged = localStorage.getItem("token") !== null

    return (
      <LoginPageWrapper>
        {isLogged ? 
        <LoginWrapper>
          <Img src={FutureX}/>
          <Button 
            onClick={this.props.goToAdminPage}
            >Para Criar Expedição
          </Button>
          <Button
            onClick={this.props.goToTripsListPage}
            >Explorar Lista de Viagens
          </Button>
        </LoginWrapper>
        :
        <LoginWrapper onSubmit={this.toLogin}>
          <Img src={FutureX}/>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
          />
          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
          />
          <Button type="submit">Login</Button>
        </LoginWrapper>
          }
      </LoginPageWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      goToAdminPage: () => dispatch(push(routes.adminPage)),
      toLogin: (email, password) => dispatch(toLogin(email, password)),
      goToTripsListPage: () => dispatch(push(routes.tripsListPage)),
  }
}


const LoginPageWrapper = styled.form`
  width: 100%;
  height: 75vh;
  gap: 10px;
  place-content: start center;
  display: grid;
`
const LoginWrapper = styled.form`
  width: 100%;
  height: 100%;
  gap: 10px;
  place-content: start center;
  display: grid;
`

const Img = styled.img`
  width: 17vw;
  min-width: 250px;
  box-shadow: 5px 5px 1vw;
  border-radius: 2vw;
  margin: 5vw 0 4vw 0;
`

export default connect (null, mapDispatchToProps) (LoginPage);