import React from "react";
import PostButton from "../../UI/PostButton";
import s from "./Post.module.css";
import PostItem from "./PostItem/PostItem";

const Post = (props) => {

  let newPostElement = React.createRef()

  let postsElements = props.postsData.map(p => <PostItem message={p.message} likecounts={p.likecounts} />)
  let addPost = () => {
    props.addPost()
  }
  let onPostChange = () => {
    let text = newPostElement.current.value
    props.updateNewPostText(text)
  }



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
      <button className={s.but_test} onClick={addPost}>Добавить</button>
      {/* <PostButton /> */}
      {postsElements}

    </div >
  );
};

export default Post
