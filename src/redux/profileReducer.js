let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let ADD_POST = "ADD-POST";
let initialState = {
  postsData: [
    {
      id: 1,
      message: "olololololkek",
      likecounts: 1,
    },
    {
      id: 2,
      message: "hellooooooooooooooooo",
      likecounts: 7,
    },
    {
      id: 3,
      message: "how r u?",
      likecounts: 55,
    },
    {
      id: 4,
      message: "not bad",
      likecounts: 777,
    },
    {
      id: 5,
      message: "create-react-app",
      likecounts: 7111,
    },
    {
      id: 6,
      message: "do u wanna some post?",
      likecounts: 321124,
    },
  ],
  newPostText: "",
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likecounts: 0,
      };
      state.postsData.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;
