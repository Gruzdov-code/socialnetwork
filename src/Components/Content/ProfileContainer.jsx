import React from "react";
import { connect } from "react-redux";
import { useMatch } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    // debugger;
 this.props.getUserProfile(userId)
 this.props.getStatus(userId)
  }

  render() {
    
    
    return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />;
  }
}
// НА 70 НАВЕРНОЕ УДАЛИТЬ
// debugger
let RouterComponent = (props) => {
  const match = useMatch("/profile/:userId/");
  // const match = useMatch("/profile");

  return <ProfileContainer {...props}
   match={match}
    />;
};

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withAuthRedirect
)(RouterComponent);
