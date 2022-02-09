import React from "react";
import ReactDOM from "react-dom";
import "../index.css";
import App from "../App";
import { addPost, updateNewPostText } from "./state";

export let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        updateNewPostText={updateNewPostText}
        newPostText={state.profilePage.newPostText}
        addPost={addPost}
        postsData={state.profilePage.postsData}
        dialogsData={state.dialogsPage.dialogsData}
        messages={state.dialogsPage.messages}
      />
    </React.StrictMode>,
    document.getElementById("root")
  );
};
