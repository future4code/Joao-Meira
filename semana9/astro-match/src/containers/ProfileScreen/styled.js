import styled from "styled-components";

export const ProfileWrapper = styled.div`
height: 100%;
display: flex;
flex-direction: column;
margin: 5px, 5px;
`

export const ProfilePicture = styled.img`
width: auto;
max-width: 100%;
height: auto;
max-height: 80%;
display: block;
align-self: center;
`

export const InfoWrapper = styled.div`
	height: 30%;
	position: absolute;
    bottom: 0;
	width: 100%;
	background-image: linear-gradient(to top, rgba(0,0,0,0.5), transparent);
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 15px;
	z-index: 0;
	overflow: auto;
`

export const TitleWrapper = styled.div`
  display: flex;
  align-items: baseline;
`

export const UserName = styled.div`
	font-weight: bold;
	font-size: 24px;
`

export const UserAge = styled.div`
  margin-left: 10px;
	font-size: 20px;
`

export const UserBios = styled.div`
  margin-left: 10px;
	font-size: 20px;
`