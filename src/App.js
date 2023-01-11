import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Architecture from "./Components/Architecture/Architecture";
import ProfileContainer from "./Components/Content/ProfileContainer";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import HeaderContainer from "./Components/Header/HeaderComponent";
import Nav from "./Components/Nav/Nav";
import UsersContainer from "./Components/Users/UsersContainer";
function App(store) {
  // debugger;
  return (
    <div className="app_wrapper">
      <HeaderContainer />
      <div className="container">
        <Nav />
        <div className="wrapper-content">
          <Routes>
            <Route path="" element={<ProfileContainer />} />

            <Route path="/profile/:userId" element={<ProfileContainer />} />

            <Route path="/messages" element={<DialogsContainer />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
