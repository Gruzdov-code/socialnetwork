import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Architecture from "./Components/Architecture/Architecture";
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
                    dispatch={props.dispatch}
                    profilePage={props.state.profilePage}
                  />
                }
              />
              <Route
                path="/messages"
                element={
                  <Dialogs
                    dispatch={props.dispatch}
                    dialogsPage={props.state.dialogsPage}
                  />
                }
              />
              <Route path="/architecture" element={<Architecture />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
