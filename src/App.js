import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Architecture from "./Components/Architecture/Architecture";
import Content from "./Components/Content/Content";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import UsersContainer from "./Components/Users/UsersContainer";
function App(store) {
  // debugger;
  return (
    <div className="app_wrapper">
      <Header />
      <div className="container">
        <Nav />
        <div className="wrapper-content">
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/profile" element={<Content />} />
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
