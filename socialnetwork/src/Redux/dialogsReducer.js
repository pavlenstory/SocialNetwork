const addMessage = "ADD-MESSAGE";
const updateNewMessageText = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case addMessage:
            let newMessage = {
                message: state.newMessageText,
                id: 4
            };
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;
        case updateNewMessageText:
            state.newMessageText = action.newText;
            return state;
        default:
            return state
    }
}

export const addMessageAC = () => ({type: addMessage});
export const updateNewMessageTextAC = (newText) => ({type: updateNewMessageText, newText});

export default dialogsReducer;