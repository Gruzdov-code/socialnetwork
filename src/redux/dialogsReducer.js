let UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
let SEND_MESSAGE = "SEND-MESSAGE";
let initialState = {
  dialogsData: [
    {
      id: 1,
      name: "Dmitry",
    },
    {
      id: 2,
      name: "Lana",
    },
    {
      id: 3,
      name: "Masha",
    },
    {
      id: 4,
      name: "Katya",
    },
    {
      id: 5,
      name: "Alex",
    },
    {
      id: 6,
      name: "Sergay",
    },
  ],
  messages: [
    {
      id: 1,
      message: "alalalala",
    },
    {
      id: 2,
      message: "oohohohohohoho",
    },
    {
      id: 3,
      message: "olololol",
    },
    {
      id: 4,
      message: "heeeeeeeeeeey",
    },
    {
      id: 5,
      message: "mymymyymymyymymy",
    },
    {
      id: 6,
      message: "kaaaaaaaaaaaaassssssyyy",
    },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  // debugger;
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body,
      };
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, { id: 9, message: body }],
      };
    default:
      return state;
  }
};
export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
export default dialogsReducer;
