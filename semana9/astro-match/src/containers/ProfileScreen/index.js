import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import {
ProfileWrapper,
ProfilePicture,
TitleWrapper,
UserName,
UserBios,
UserAge,
InfoWrapper,
} from './styled'
import { updateCurrentPage } from '../../actions/route'

class ProfileScreen extends React.Component {
  render() {
    const {profileToSwipe, goToSwipeScreen} = this.props
    return (
      <ProfileWrapper>
          <ProfilePicture src={profileToSwipe.photo} onClick={goToSwipeScreen}/>
          <InfoWrapper>
            <TitleWrapper>
              <UserName>{profileToSwipe.name},</UserName>
              <UserAge>{profileToSwipe.age}</UserAge>
            </TitleWrapper>
            <UserBios>{profileToSwipe.bio}</UserBios>
          </InfoWrapper>
      </ProfileWrapper>
    )
  }
}

ProfileScreen.propTypes = {

}

const mapStateToProps = (state) => ({
  profileToSwipe: state.profiles.unknownProfilesList
})

const mapDispatchToProps = (dispatch) => ({
  goToSwipeScreen: () => dispatch(updateCurrentPage('SwipeScreen')),
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
