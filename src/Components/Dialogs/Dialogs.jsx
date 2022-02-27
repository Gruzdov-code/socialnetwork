import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.dialogsPage;
  // debugger
  let dialogsElements = state.dialogsData.map((d) => (
    <DialogsItem name={d.name} key={d.id} id={d.id} />
  ));
  let messagesElements = state.messages.map((m) => (
    <Message message={m.message} key={m.id} id={m.id} />
  ));
  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.sendMessage();
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={`${s.messages} ${s.active}`}>{dialogsElements}</div>
        <div className={s.messages}>{messagesElements}</div>
      </div>
      <div>
        <textarea
          className={s.area}
          value={newMessageBody}
          onChange={onNewMessageChange}
          placeholder="Enter the message"></textarea>
        <button className={s.but_test} onClick={onSendMessageClick}>
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Dialogs;
