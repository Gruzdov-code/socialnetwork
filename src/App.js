import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Architecture from "./Components/Architecture/Architecture";
import Content from "./Components/Content/Content";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
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
              <Route path="/" element={<Content />} />
              <Route path="/profile" element={<Content />} />
              <Route path="/messages" element={<DialogsContainer />} />
              <Route path="/architecture" element={<Architecture />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
