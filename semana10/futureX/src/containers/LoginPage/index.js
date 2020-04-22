import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";
import FutureX from '../../img/futurex.png'
import { routes } from "../Router";


const LoginWrapper = styled.form`
  width: 100%;
  height: 75vh;
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

  render() {
    const { email, password } = this.state;

    return (
      <LoginWrapper>
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
        <Button onClick={this.props.goToAdminPage}>Login</Button>
      </LoginWrapper>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      goToAdminPage: () => dispatch(push(routes.adminPage))
  }
}

export default connect (null, mapDispatchToProps) (LoginPage);