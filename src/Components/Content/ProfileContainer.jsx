import React from "react";
import { connect } from "react-redux";
import { useMatch } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
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
});

export default compose(
  connect(mapStateToProps, { getUserProfile }),
  withAuthRedirect
)(RouterComponent);
