// store -OOPi
let store = {
  _state: {
    profilePage: {
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
    },
    dialogsPage: {
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
    },
  },

  getState() {
    return this._state;
  },
  _rerenderEntireTree() {
    console.log("State is changed");
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likecounts: 0,
    };
    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = "";
    this._rerenderEntireTree(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },
  subscribe(observer) {
    this._rerenderEntireTree = observer;
    // Наблюдатель обсервер aka слушатель
  },
};

export default store;
window.store = store;
