import React from "react";
import preloader from "../../../assets/loader.png";
import s from "./Preloader.module.css";
const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} className={s.preloader} alt="Загрузка" />
    </div>
  );
};

export default Preloader;
