import React from "react";
import s from "./Post.module.css";
import PostItem from "./PostItem/PostItem";
// debugger
const Post = (props) => {
  // debugger
  let newPostElement = React.createRef();

  let postsElements = props.postsData.map((p) => (
    <PostItem message={p.message} likecounts={p.likecounts} key={p.id} id={p.id} />
  ));
  let onAddPost = () => {

    props.addPost() //Функция добавления записи на кнопке
  };
  let onPostChange = () => {

    let text = newPostElement.current.value;
    props.updateNewPostText(text); //Функция добавления СИМВОЛА в текстэрию
  };

  return (
    <div>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
          className={s.area}
          name="Написать"
          id=""
          cols="10"
          rows="2"
        />
      </div>
      <button className={s.but_test} onClick={onAddPost}>
        Добавить
      </button>
      {/* <PostButton /> */}
      {postsElements}
    </div>
  );
};

export default Post;
