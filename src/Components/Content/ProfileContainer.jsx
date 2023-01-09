import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { useMatch } from "react-router-dom";
import { setUserProfile } from "../../redux/profileReducer";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    // debugger;
    let userId = this.props.match ? this.props.match.params.userId : "My ID";
    if (!userId) {
      userId = 2;
    }
    // debugger;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then((response) => {
        this.props.setUserProfile(response.data);
        // debugger;
      });
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

export default connect(mapStateToProps, { setUserProfile })(RouterComponent);
