import React from "react";
import s from "./Profile.module.css";
import Friends from "./Friends/Friends";
import PostContainer from "./Post/PostContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div className={s.main_content}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
      <div className={s.main_content}>
        <Friends />
        <PostContainer />{" "}
      </div>
    </div>
  );
};

export default Profile;
