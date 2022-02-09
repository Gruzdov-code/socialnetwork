import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
function App(props) {
  // debugger;
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <div className="container">
          <Nav />
          <div className="wrapper-content">
            <Routes>
              <Route
                path="/"
                element={
                  <Content
                    updateNewPostText={props.updateNewPostText}
                    addPost={props.addPost}
                    profilePage={props.state.profilePage}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <Content
                    updateNewPostText={props.updateNewPostText}
                    addPost={props.addPost}
                    profilePage={props.state.profilePage}
                  />
                }
              />
              <Route
                path="/messages"
                element={<Dialogs dialogsPage={props.state.dialogsPage} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
