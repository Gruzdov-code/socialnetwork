import React from "react";
import s from "./ProfileInfo.module.css";
const ProfileInfo = () => {
  return (
    <div>
      <img
        className={s.head_image}
        src="https://pbs.twimg.com/profile_banners/1153728498688827392/1563908974"
        alt="imag"
      ></img>
    </div>
  );
};

export default ProfileInfo;
