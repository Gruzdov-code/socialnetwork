import React from "react";
import s from "./Dialogs.module.css";
import DialogsItem from "./DialogsItem/DialogsItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

  let dialogsElements = props.dialogsData.map(d => <DialogsItem id={d.id} name={d.name} />)
  let messagesElements = props.messages.map(m => <Message message={m.message} />)

  let newPostElement = React.createRef()
  let addPost = () => {
    let text = newPostElement.current.value
    alert(text)
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
        <textarea className={s.area} ref={newPostElement}></textarea>
        <button className={s.but_test} onClick={addPost}>Отправить</button>
      </div></div >
  );
};

export default Dialogs;
