import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Content

let postsData = [
  { id: 1, message: "olololololkek", likecounts: 1 },
  { id: 2, message: "hellooooooooooooooooo", likecounts: 7 },
  { id: 3, message: "how r u?", likecounts: 55 },
  { id: 4, message: "not bad", likecounts: 777 },
  { id: 5, message: "create-react-app", likecounts: 7111 },
  { id: 6, message: "do u wanna some post?", likecounts: 321124 },
];
// Dialogs
let dialogsData = [
  { id: 1, name: "Dmitry" },
  { id: 2, name: "Lana" },
  { id: 3, name: "Masha" },
  { id: 4, name: "Katya" },
  { id: 5, name: "Alex" },
  { id: 6, name: "Sergay" },
];

let messages = [
  { id: 1, message: "alalalala" },
  { id: 2, message: "oohohohohohoho" },
  { id: 3, message: "olololol" },
  { id: 4, message: "heeeeeeeeeeey" },
  { id: 5, message: "mymymyymymyymymy" },
  { id: 6, message: "kaaaaaaaaaaaaassssssyyy" },
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messages={messages} />
  </React.StrictMode>,
  document.getElementById("root")
);
