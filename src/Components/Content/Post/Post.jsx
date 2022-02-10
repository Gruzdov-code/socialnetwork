import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";

import PostButton from "../../UI/PostButton";
import s from "./Post.module.css";
import PostItem from "./PostItem/PostItem";


const Post = (props) => {
  // debugger
  let newPostElement = React.createRef();

  let postsElements = props.profilePage.postsData.map((p) => (
    <PostItem message={p.message} likecounts={p.likecounts} />
  ));
  let addPost = () => {
    props.dispatch(addPostActionCreator()); //Функция добавления записи на кнопке
  };
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text)); //Функция добавления СИМВОЛА в текстэрию
  };

  return (
    <div>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.profilePage.newPostText}
          className={s.area}
          name="Написать"
          id=""
          cols="10"
          rows="2"
        />
      </div>
      <button className={s.but_test} onClick={addPost}>
        Добавить
      </button>
      {/* <PostButton /> */}
      {postsElements}
    </div>
  );
};

export default Post;
