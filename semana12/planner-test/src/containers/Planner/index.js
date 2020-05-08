import React from "react";
import { connect } from "react-redux";
import AddInput from "../AddInput";
import Board from "../Board";
import styled from "styled-components";
import valley from '../../img/background-valley.jpg'


class Planner extends React.Component {
  render() {
    return (
    <PlannerWrapper img = {valley}>

      <PlannerTitle>MINHA SEMANA</PlannerTitle>

      <AddInput/>

      <Board/>

    </PlannerWrapper>
    )
  }
}

export default connect()(Planner);

const PlannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: flex-start;
    width: 100vw;
    height: 100vh;
    background-image: url(${props => props.img});
    background-size: cover;
    background-repeat: no-repeat;
    color: brown;
`

const PlannerTitle = styled.h2`
    color: #667651;
    width: 20%;
    height: 4%;
    min-height: 22px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 1vw;
    border-radius: 7px;
`