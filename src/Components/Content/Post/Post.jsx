import React from "react";
import PostButton from "../../UI/PostButton";
import s from "./Post.module.css";
import PostItem from "./PostItem/PostItem";

const Post = (props) => {
  //  ТУТ БЫЛИ ПОСТ ДАННЫЕ
  let postsElements = props.postsData.map(p => <PostItem message={p.message} likecounts={p.likecounts} />)


  return (
    <div>
      <div>
        <textarea
          className={s.area}
          name="Написать"
          id=""
          cols="10"
          rows="2"
        ></textarea>
      </div>
      <PostButton />
      {postsElements}

    </div>
  );
};

export default Post;
