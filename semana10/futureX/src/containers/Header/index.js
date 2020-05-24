import React from "react";
import styled from 'styled-components'
import logo from '../../img/logo.png'
import { push, goBack } from 'connected-react-router'
import { connect } from 'react-redux'
import { routes } from '../Router'
import Fab from '@material-ui/core/Fab';





class Header extends React.Component {

  toLogout = () => {
      localStorage.clear()
      this.props.goToLoginPage()
      window.location.reload(true)
      }

    render () {
      const isLogged = localStorage.getItem("token") !== null

        return (
              <HeaderWrapper>
                <ImgContainer>
                  <Img src={logo}
                  onClick={this.props.goToLoginPage}
                  />
                </ImgContainer>
                <ButtonWrapper>
                <JoinTrip
                onClick={this.props.goToApplicationPage}
                >Join a Trip!
                </JoinTrip>
                {isLogged ?                 
                <Fab variant = "extended" size="small" color="primary" aria-label="add"
                onClick={this.toLogout}
                >
                Logout
                </Fab> : <span/>}

                </ButtonWrapper>

              </HeaderWrapper>
          );
        }
    }
  

const mapDispatchToProps = (dispatch) => {
    return {
        goToLoginPage: () => dispatch(push(routes.root)),
        goToApplicationPage: () => dispatch(push(routes.applicationPage))
    }
}

export default connect (null, mapDispatchToProps) (Header);



const HeaderWrapper = styled.div`
width:100%;
height: 4vw;
min-height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: 0 0.2vw 2vw;
background: rgb(251,251,255);
background: linear-gradient(
90deg,
#ffffff 40%,
#ff5f00 50%,
#ffffff 60%
);
`

const ImgContainer = styled.div`
padding-left: 20vw;
`

const Img = styled.img`
  width: 3vw;
  cursor: pointer;
`
const JoinTrip = styled.div`
  text-align: center;
  font-size: 1.5vw;
  color: #ff595c;
  font-weight: 700;
  height: 70%;
  cursor: pointer;
  margin-right: 2vw;
  `

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5vw;
  color: #ff595c;
  font-weight: 700;
  height: 70%;
  padding-right: 12vw;
  cursor: pointer;
  `

