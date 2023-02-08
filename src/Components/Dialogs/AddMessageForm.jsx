import React from 'react';
import s from "./Dialogs.module.css";
import {Field, reduxForm} from 'redux-form';

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
        <Field component={"textarea"} name={"newMessageBody"}
          className={s.area}
          value={props.newMessageBody}
          onChange={props.onNewMessageChange}
          placeholder="Enter the message"></Field>
        <button className={s.but_test}>
          Отправить
        </button>
      </form>
    );
};

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default AddMessageFormRedux;