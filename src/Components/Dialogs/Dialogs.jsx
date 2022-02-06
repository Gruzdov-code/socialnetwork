import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={`${s.dialog} ${s.active}`}>Elena</div>
        <div className={s.dialog}>Alex</div>
        <div className={s.dialog}>Molly</div>
        <div className={s.dialog}>Viktor</div>
        <div className={s.dialog}>Roy</div>
        <div className={s.dialog}>Nana</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>hfffffffffffffffffffi</div>
        <div className={s.message}>
          ohgggggggggggggggggggggggggggggggggggggggggggg
        </div>
        <div className={s.message}>jo</div>
        <div className={s.message}>pk</div>
      </div>
    </div>
  );
};

export default Dialogs;
