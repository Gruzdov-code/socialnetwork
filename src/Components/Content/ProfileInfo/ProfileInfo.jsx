import React from "react";
import s from "./ProfileInfo.module.css";
// import Inst from "../../../assets/instagram.svg";
import usersPhoto from "../../../assets/defaultPhoto.png";
import Preloader from "../../UI/Preloader/Preloader";
// import usersPhoto from "../../../assets/defaultPhoto.png";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>;
  }

  return (
    <div>
      <img
        className={s.headImage}
        src="https://elementy.ru/images/kartinka_dnya/plateau_putorana_1_3000.jpg"
        alt="imag"></img>
      <div>
        <p className={s.description}>{props.profile.fullName}</p>
        <img
          className={s.profilePhotoLarge}
          alt="profile_photo"
          src={
            props.profile.photos.large ? props.profile.photos.large : usersPhoto
          }
        />
        <p className={s.description}>Обо мне: {props.profile.aboutMe}</p>
        <p className={s.description}>
          {props.profile.lookingForAJob ? "Ищу работу" : "Не ищу работу"}
        </p>
        <p className={s.description}>
          {props.profile.lookingForAJobDescription
            ? props.profile.lookingForAJobDescription
            : null}
        </p>
      </div>
      <div className={s.socialNetwork}>
        {" "}
        {props.profile.contacts.github ? (
          <a href={"https://" + props.profile.contacts.github}>github</a>
        ) : null}{" "}
        {props.profile.contacts.website ? (
          <a href={"https://" + props.profile.contacts.website}>website</a>
        ) : null}
        {props.profile.contacts.facebook ? (
          <a href={"https://" + props.profile.contacts.facebook}>facebook</a>
        ) : null}
        {props.profile.contacts.twitter ? (
          <a href={"https://" + props.profile.contacts.twitter}>twitter</a>
        ) : null}
        {props.profile.contacts.instagram ? (
          <a href={"https://" + props.profile.contacts.instagram}>instagram</a>
        ) : null}
        {props.profile.contacts.vk ? (
          <a href={"https://" + props.profile.contacts.vk}>VK</a>
        ) : null}
        {props.profile.contacts.youtube ? (
          <a href={"https://" + props.profile.contacts.youtube}>youtube</a>
        ) : null}
        {props.profile.contacts.mainLink ? (
          <a href={"https://" + props.profile.contacts.mainLink}>mainLink</a>
        ) : null}
        {/* <img src="../../../assets/instagram.svg" alt="" /> */}
      </div>
    </div>
  );
};

export default ProfileInfo;
