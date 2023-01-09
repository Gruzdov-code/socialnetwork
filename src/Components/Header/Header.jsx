import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";
const Header = (props) => {
  return (
    <div>
      <header className={s.header}>
        <img src="https://img2.freepng.ru/20180606/ryo/kisspng-thumb-signal-basingstoke-clip-art-5b185bcbc0df63.10493492152832301979.jpg"></img>
        <div className={s.loginBlock}>
          {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
        </div>
      </header>
    </div>
  );
};

export default Header;
