import React from "react";
import Preloader from "../../UI/Preloader/Preloader";
import s from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <img
        className={s.head_image}
        src="https://elementy.ru/images/kartinka_dnya/plateau_putorana_1_3000.jpg"
        alt="imag"></img>
      <div>
        <img src={props.profile.photos.large} />
      </div>
    </div>
  );
};

export default ProfileInfo;
