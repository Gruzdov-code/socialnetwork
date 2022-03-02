let UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
let ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
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
  profile: null,
};
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 6,
        message: state.newPostText,
        likecounts: 0,
      };
      return {
        ...state,
        postsData: [...state.postsData, newPost],
        newPostText: "",
      };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE, profile
});
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export default profileReducer;
