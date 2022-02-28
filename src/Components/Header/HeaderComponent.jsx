import React from "react";
import Header from "./Header";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials,
      })
      .then((response) => {});
  }

  render() {
    return <Header {...this.props} />;
  }
}
export default HeaderContainer;
