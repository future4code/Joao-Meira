import React, { Component } from "react";
import styled from "styled-components";
import { connect } from 'react-redux'
import { getTripDetails, approveCandidate } from "../../actions/actions";
import { routes } from "../Router";
import { push } from "connected-react-router";




class TripDetailsPage extends Component {
 
  componentDidMount () {
    const token = localStorage.getItem('token')

    if(!token){
        this.props.goToLoginPage()
    } else {
      this.props.goToTripDetails()
    }

    const tripId = localStorage.getItem('tripId')
    if(tripId){
      this.props.getTripDetails(tripId)
    } else {
      this.props.goToTripsListPage()
    }
  }


  render() {
    const {tripDetails, approveCandidate} = this.props

    return (
      <TripDetailsWrapper 
      img={require('../../img/rickandmorty.jpg')}
      >
        <TripName>{tripDetails.name}</TripName>
        <DetailWrapper>
          <TripInfo>
            <h4>Data de Decolagem: {tripDetails.date}</h4>
            <p>{tripDetails.description}</p>
          </TripInfo>
          <ListWrapper>
            <CandidatesList>
              <h4><u>Lista de Candidatos</u></h4>
              {tripDetails.candidates ? tripDetails.candidates.map(candidate => (
                <Candidate>
                <p>Name: {candidate.name}</p>
                <p>Idade: {candidate.age}</p>
                <p>País: {candidate.country}</p>
                <p>Texto de Aplicação: {candidate.applicationText}</p>
                <Button
                onClick={() => approveCandidate(tripDetails.id, candidate.id)}
                >
                Aprovar Candidato
                </Button>
                </Candidate>
              )) : <p>Carregando...</p>}
            </CandidatesList>
            <ApprovedList>
              <h4><u>Lista de Viajantes Aprovados</u></h4>
              {tripDetails.approved ? tripDetails.approved.map(candidate => (
                <Candidate>
                <p>Name: {candidate.name}</p>
                <p>Idade: {candidate.age}</p>
                <p>País: {candidate.country}</p>
                <p>Texto de Aplicação: {candidate.applicationText}</p>
                </Candidate>
              )) : <p>Carregando...</p>}
            </ApprovedList>
          </ListWrapper>
        </DetailWrapper>

      </TripDetailsWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  tripDetails: state.trips.tripDetails
})

const mapDispatchToProps = (dispatch) => {
  return {
      goToTripsListPage: () => dispatch(push(routes.tripsListPage)),
      goToTripDetails: () => dispatch(push(routes.tripDetailsPage)),
      goToLoginPage: () => dispatch(push(routes.root)),

      getTripDetails: (tripId) => dispatch (getTripDetails(tripId)),
      approveCandidate: (tripId, candidateId) => dispatch (approveCandidate(tripId, candidateId)),
  }
}


export default connect (mapStateToProps, mapDispatchToProps) (TripDetailsPage);


const TripDetailsWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 2vw 0;
  width: 100%;
  height: 100vh;
  z-index: 1;

  &:before {
  content: " ";
  border-radius: 1vw;
  position: absolute;
  width: 95%; 
  height: 100%;  
  opacity: .4; 
  z-index: -3;
  background: url(${props => props.img});
  opacity: 0.4;
}
`;

const TripName = styled.h3`
  text-transform: capitalize;
  opacity: 2;
  color: black;
  font-size: 2vw;
  padding: 2px;
  text-align: center;
`;

const DetailWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  height: 70vh;
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
`

const TripInfo = styled.div`
  color: black;
  width: 40vw;
  font-size: 1.2vw;
  padding: 0 5px;
  text-align: justify;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(50, 78, 50, 0.3);
  border-radius: 10px;
`;

const CandidatesList = styled.div`
  padding: 1vw;
  height: 30vh;
  width: 30vw;
  overflow: auto;
  background-color: rgba(235, 200, 198, 0.5);
  border-radius: 10px;
`

const ApprovedList = styled.div`
  padding: 1vw;
  height: 30vh;
  width: 30vw;
  overflow: auto;
  background-color: rgba(235, 200, 198, 0.5);
  border-radius: 10px;
`

const Candidate = styled.div`
border-bottom: 1px black dashed;
padding: 1vw;
`


const Button = styled.button`
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
