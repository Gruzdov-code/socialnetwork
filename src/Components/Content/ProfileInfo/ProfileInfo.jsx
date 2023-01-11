import React from "react";
import s from "./ProfileInfo.module.css";
const ProfileInfo = (props) => {
  if (!props.profile) {
    return "Нет пропсов в профайл Инфо";
  }
  // debugger;
  return (
    <div>
      <img
        className={s.head_image}
        src="https://elementy.ru/images/kartinka_dnya/plateau_putorana_1_3000.jpg"
        alt="imag"
      ></img>
      <div>
        <img
          className={s.head_image}
          alt="profile_photo"
          src={props.profile.photos.large}
        />
        <span className="descrition">{props.profile.aboutMe}</span>
      </div>
      <div className="social-network">
        <span className="social-network__item"><img src="/src/assets/instagram-svgrepo-com.svg" alt="instagram" className="social-network__icon" />props.profile.contacts.instagram</span>
        {/* <span className="social-network__item"><img src="/src/assets/internet-media-social-2-svgrepo-com.svg" alt="vk" className="social-network__icon" />props.profile.contacts.t</span> */}
        <span className="social-network__item"><img src="/src/assets/social-facebook-svgrepo-com.svg" alt="vk" className="social-network__icon" />props.profile.contacts.facebook</span>
        <span className="social-network__item"><img src="/src/assets/social-github-svgrepo-com.svg" alt="github" className="social-network__icon" />props.profile.contacts.github</span>
        <span className="social-network__item"><img src="/src/assets/twitter-svgrepo-com.svg" alt="twitter" className="social-network__icon" />props.profile.contacts.twitter</span>
        <span className="social-network__item"><img src="/src/assets/vk-svgrepo-com.svg" alt="vk" className="social-network__icon" />props.profile.contacts.vk</span>
        <span className="social-network__item"><img src="/src/assets/youtube-you-tube-video-svgrepo-com.svg" alt="youtube" className="social-network__icon" />props.profile.contacts.youtube</span>
        {/* <span className="social-network__item"><img src="/src/assets/" alt="vk" className="social-network__icon" />props.profile.contacts.facebook</span> */}
      </div>
    </div>
  );
};

export default ProfileInfo;
