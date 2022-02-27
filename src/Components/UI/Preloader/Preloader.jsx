import React from "react";
import preloader from "../../../assets/loader.gif";
const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} style={{ width: 40 }} alt="Загрузка" />
    </div>
  );
};

export default Preloader;
