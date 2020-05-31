import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {post: "Hi", id: 1, likesCount: 10},
                {post: "bla 2", id: 2, likesCount: 20},
            ],
            newPostText: 'newPostText',
        },
        dialogsPage: {
            users: [
                {name: "Pavel", id: 1},
                {name: "Maxim", id: 2},
                {name: "NoName", id: 3},
                {name: "Kate", id: 4},
                {name: "Zhenia", id: 5},
            ],
            messages: [
                {message: "First message", id: 1},
                {message: "Second message", id: 2},
                {message: "Third message", id: 3},
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('hi')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    addPost() {
        let newPost = {
            post: this._state.profilePage.newPostText,
            id: 5,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state)
    }
};

window.store = store;
export default store