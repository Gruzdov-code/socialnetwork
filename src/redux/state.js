import { rerenderEntireTree } from "./render";

let state = {
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
};

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likecounts: 0,
  };
  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;
