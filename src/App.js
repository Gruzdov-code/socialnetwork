import React from "react";
import "./App.css";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div className="app_wrapper">
      <Header />
      <div className="container">
        <Nav />

        <Content />
      </div>
    </div>
  );
}

export default App;
