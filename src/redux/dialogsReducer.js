let UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
let ADD_MESSAGE = "ADD-MESSAGE";
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
  newMessageText: "",
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: 5,
        message: state.newMessageText,
      };
      state.messages.push(newMessage);
      state.newMessageText = "";
      return state;
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    default:
      return state;
  }
};
export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});
export default dialogsReducer;
