import React, { Component } from "react";
import styled from "styled-components";




export default class Trip extends Component {
 

  render() {
    return (
      <TripWrapper>
        <TripName>{this.props.tripName}</TripName>
        <TripInfo>
          <p>{this.props.tripDate}</p>
          <p>{this.props.tripDescription}</p>
        </TripInfo>
        <Button
        onClick={this.props.goToTripDetails}
        >
          Detalhes da Viagem
        </Button>
      </TripWrapper>
    );
  }
}

const TripWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #ff9454 0%, #ffdcc7 90%, #ffffff 100%);
  transition: 0.2s ease-out;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);

  &:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.4);
    transform: translateY(-5px);
  }
`;

const TripName = styled.h3`
  text-transform: capitalize;
  color: #707070;
  font-size: 2vw;
  padding: 2px;
  text-align: center;
`;

const TripInfo = styled.div`
  color: #707070;
  font-size: 1.2vw;
  padding: 0 5px;
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Button = styled.button`
  box-sizing: border-box;
  background-color: #939393;
  border: 2px solid #939393;
  color: white;
  padding: 5px;
  width: 100%;
  max-width: 300px;
  height: 45px;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: 0.2s ease-out;

  &:hover {
    background-color: white;
    color: #939393;
  }
`;
