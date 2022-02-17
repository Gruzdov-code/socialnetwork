import React from "react";
import { addMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogsReducer";

import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogsItem id={d.id} name={d.name} />)
  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)

  let newMessageElement = React.createRef()
  let onMessageChange = () => {
    let text = newMessageElement.current.value
    props.dispatch(updateNewMessageTextActionCreator(text))
  }
  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }



  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={`${s.messages} ${s.active}`}>
          {dialogsElements}
        </div>
        <div className={s.messages}>
          {messagesElements}


        </div>
      </div>
      <div>
        <textarea className={s.area} value={props.dialogsPage.newMessageText} ref={newMessageElement} onChange={onMessageChange}></textarea>
        <button className={s.but_test} onClick={addMessage}>Отправить</button>
      </div></div >
  );
};

export default Dialogs;
