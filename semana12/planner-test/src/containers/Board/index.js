import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { toGetCommitments } from "../../actions/commitments";


export const daysOfTheWeek = 
[
    {name:"Segunda-Feira"},
    {name:"Terça-Feira"},
    {name:"Quarta-Feira"},
    {name:"Quinta-Feira"},
    {name:"Sexta-Feira"},
    {name:"Sábado"},
    {name:"Domingo"},
]


export class Board extends React.Component {

  componentDidMount () {
    this.props.toGetCommitments()
  }

  render() {
    const { commitments } = this.props

    const commitmentsPerDay = {}

    commitments && commitments.forEach( commitment => {
      if(commitmentsPerDay[commitment.day]){
        commitmentsPerDay[commitment.day].push(commitment)
      } else {
        commitmentsPerDay[commitment.day] = [commitment]
      }
    })

    return (

      <BoardWrapper>
            {daysOfTheWeek.map((day) => (
            <CommitmentsList key = {day.name}>
            <p>{day.name}</p>
            <ul>
              {commitmentsPerDay[day.name] ? 
              (
              commitmentsPerDay[day.name].map( commitment => 
                <li key = {Date.now}>{commitment.text}</li>
              )
              ) : (
                <span>Carregando...</span>
              )
            }
            </ul>
            </CommitmentsList>
            ))}
      </BoardWrapper>
    )
  }
}

const mapStateToProps = state => ({
    commitments: state.plannerReducer.commitments,
  });

const mapDispatchToProps = dispatch => ({
    toGetCommitments: () => dispatch(toGetCommitments())
  });  


export default connect(mapStateToProps, mapDispatchToProps)(Board);


export const BoardWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    width: 95%;
    height: 75%;
    background-color: white;
    border-radius: 3px;
    & p {
      font-weight: 700;
      text-decoration: underline;
    }
`

export const CommitmentsList = styled.div`
    text-align: center;
    width: 13%;
    height: 96%;

    & li {
      text-align: start;
      padding-bottom: 1vw;
    }
`