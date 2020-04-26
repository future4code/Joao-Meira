import React from "react";
import styled from 'styled-components'
import Phone from '@material-ui/icons/PhoneInTalkOutlined'



export default function Footer() {
  return (
      <FooterWrapper>
        <Contato>
          <DivIcon>
            <Phone/>
          </DivIcon>
          <Texto>
          <h3>Atendimento</h3>
            <p>1001 - 0101</p>
            <h4>De Segunda à Sexta, das 8h às 20h</h4>
            <h4>Sábado, das 8h às 18h</h4>
          </Texto>
        </Contato>
        <RedesSociais>
          <DivIcon2>
            <img src={require('../img/facebook.png')}/>
          </DivIcon2>
          <DivIcon2>
            <img src={require('../img/instagram.png')}/>
          </DivIcon2>
          <DivIcon2>
            <img src={require('../img/whatsapp.png')}/>
          </DivIcon2>
        </RedesSociais>
      </FooterWrapper>
  );
}


const FooterWrapper = styled.div`
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