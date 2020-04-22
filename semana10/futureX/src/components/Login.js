import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";


const LoginWrapper = styled.form`
  width: 100%;
  height: 50%;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;


export class Login extends Component {

  render() {
    
    return (

        <LoginWrapper>
        <TextField
        onChange={this.props.handleFieldChange}
        name="email"
        type="email"
        label="E-mail"
        value={this.props.valueEmail}
        />
        <TextField
        onChange={this.props.handleFieldChange}
        name="password"
        type="password"
        label="Password"
        value={this.props.valuePassword}
        />
        <Button>Login</Button>
        </LoginWrapper>    
);
  }
}
