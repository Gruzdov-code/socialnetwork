import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


  let dialogsElements = props.dialogsData.map(d => <DialogsItem id={d.id} name={d.name} />)
  let messagesElements = props.messages.map(m => <Message message={m.message} />)

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={`${s.dialog} ${s.active}`}></div>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};

export default Dialogs;
