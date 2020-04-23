import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import styled, { css } from "styled-components";
import { routes } from "../Router";
import Trip from "../../components/Trip";
import { goToAdminPage, getTripsList } from "../../actions/actions";



const ListWrapper = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  flex: 1;
`


const TripsList = styled.div`
  padding: 5vw;
  width: 90%;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  column-gap: 20px;
  row-gap: 20px;
`;


class ListPage extends Component {


  componentDidMount () {
      const token = localStorage.getItem('token')

      if(!token){
          this.props.goToLoginPage()
      } else {
        this.props.getTripsList()
      }
  }

  render() {
    const {tripsList} = this.props


    return (
      <ListWrapper>
        <TripsList>
          {tripsList ? tripsList.map(trip => (
            <Trip
              tripName={trip.name}
              tripDate={trip.date}
              tripDescription={trip.description}
              key={trip.id}
            /> )) : <span>Carregando...</span>}
        </TripsList>
      </ListWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
    tripsList: state.trips.tripsList
})

const mapDispatchToProps = (dispatch) => {
  return {
      goToAdminPage: () => dispatch(push(routes.adminPage)),
      goToLoginPage: () => dispatch(push(routes.root)),
      getTripsList: () => dispatch(getTripsList())
  }
}

export default connect (mapStateToProps, mapDispatchToProps) (ListPage);