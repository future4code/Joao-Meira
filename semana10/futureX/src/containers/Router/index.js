import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import styled from 'styled-components'
import FacebookIcon from '../../img/facebook.png'
import InstagramIcon from '../../img/instagram.png'
import WhatsappIcon from '../../img/whatsapp.png'
import Phone from '@material-ui/icons/PhoneInTalkOutlined'
import Header from "../Header";
import AdminPage from "../AdminPage";
import ApplicationPage from "../ApplicationPage";




export const routes = {
  root: "/",
  adminPage: "/adminpage",
  applicationPage: "/application",
  listPage: "/listpage",
  tripDetail: "/tripdetail",
};





function Router(props) {
  return (
    <div>
      <Header/>
      <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.adminPage} component={AdminPage}/>
        <Route exact path={routes.applicationPage} component={ApplicationPage}/>
        <Route exact path={routes.listPage} component={LoginPage}/>
        <Route exact path={routes.tripDetail} component={LoginPage}/>
      </Switch>
      </ConnectedRouter>
      <Footer>
        <Contato>
          <DivIcon>
            <Phone/>
          </DivIcon>
          <Texto>
          <h3>Atendimento</h3>
            <p>1001 -0101</p>
            <h4>De Segunda à Sexta, das 8h às 20h</h4>
            <h4>Sábado, das 8h às 18h</h4>
          </Texto>
        </Contato>
        <RedesSociais>
          <DivIcon2>
            <img src={FacebookIcon}/>
          </DivIcon2>
          <DivIcon2>
            <img src={InstagramIcon}/>
          </DivIcon2>
          <DivIcon2>
            <img src={WhatsappIcon}/>
          </DivIcon2>
        </RedesSociais>
      </Footer>
    </div>
  );
}


const Footer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
height: 18vh;
background: #853407;
box-shadow: 0 -0.2vw 2vw;
`

const Contato = styled.div`
display: flex;
justify-content: flex-end;
align-items: center;
height: 50%;
width: 50%;
`

const RedesSociais = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 1%;
height: 40%;
width: 50%;
border-left: 1px dashed white;
`
const DivIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed rgba(11,79,96,1);
  background-color: white;
  border-radius: 50%;
  height: 2vw;
  width: 2vw;
  margin: 0 1vw;
`

const DivIcon2 = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px dashed rgba(11,79,96,1);
  background-color: white;
  border-radius: 5px;
  height: 2vw;
  width: 2vw;
  margin-right: 1vw;
`
const Texto = styled.div`
  color: white;
  text-align: center;
  font-size: 0.6vw;
  margin: 0 1vw;
`

export default Router;
