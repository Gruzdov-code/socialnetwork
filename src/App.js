import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./Components/Content/Content";
import Dialogs from "./Components/Dialogs/Dialogs";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";

function App(props) {
  return (
    <BrowserRouter>
      <div className="app_wrapper">
        <Header />
        <div className="container">
          <Nav />
          <div className="wrapper-content">
            <Routes>
              <Route path="/" element={<Content />} />
              <Route
                path="/profile"
                element={<Content postsData={props.postsData} />}
              />
              <Route
                path="/messages"
                element={
                  <Dialogs
                    dialogsData={props.dialogsData}
                    messages={props.messages}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
