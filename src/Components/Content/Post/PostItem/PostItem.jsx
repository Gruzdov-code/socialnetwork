import React from "react";
import s from "./PostItem.module.css";
const PostItem = (props) => {
  return (
    <div className={s.post_item}>
      <img
        className={s.icon}
        src="https://e7.pngegg.com/pngimages/768/340/png-clipart-blue-and-white-flower-art-illustration-light-gratis-green-light-effect-round-effect-lights.png"
        alt="icon"
      />
      <p className={s.item}>{props.message}</p>
      <span>
        like
        <div className={s.likecounts}> {props.likecounts}</div>
      </span>
    </div>
  );
};

export default PostItem;
