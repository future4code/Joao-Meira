import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  BlurredBackground,
  InfoWrapper,
  ProfilePicture,
  TitleWrapper,
  UserAge,
  UserCardWrapper,
  UserName,
  UserBios,
} from './styled'

class UserSwipeCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentAnimation: null,
    }
  }


  render() {
    const { changeScreen, userToSwipe, animationDirection: animation } = this.props
    
      return (
          <UserCardWrapper animation={animation}>
          <BlurredBackground photo={userToSwipe.photo}/>
          <ProfilePicture src={userToSwipe.photo} onClick={changeScreen}/>
          <InfoWrapper>
            <TitleWrapper>
              <UserName>{userToSwipe.name},</UserName>
              <UserAge>{userToSwipe.age}</UserAge>
            </TitleWrapper>
            <UserBios>{userToSwipe.bio}</UserBios>
          </InfoWrapper>
        </UserCardWrapper>
          )
  }
}

export default UserSwipeCard

UserSwipeCard.propTypes = {
  userToSwipe: PropTypes.object
}