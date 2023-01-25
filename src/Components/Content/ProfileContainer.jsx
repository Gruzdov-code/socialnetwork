import React from "react";
import { connect } from "react-redux";
import { useMatch } from "react-router-dom";
import { getUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    debugger;
    console.log(this.props);
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    // debugger;
 this.props.getUserProfile(userId)
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
});
// НА 70 НАВЕРНОЕ УДАЛИТЬ
// debugger
let RouterComponent = (props) => {
  const match = useMatch("/profile/:userId/");
  return <ProfileContainer {...props} match={match} />;
};

export default connect(mapStateToProps, { getUserProfile })(RouterComponent);
