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
            return {
                ...state,
                message: state.newMessageText,
                messages: [...state.messages, {
                    id: state.messages[state.messages.length - 1].id + 1,
                    message: state.newMessageText
                }],
                newMessageText: "",
            };
        case updateNewMessageText:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state
    }
}

export const addMessageAC = () => ({type: addMessage});
export const updateNewMessageTextAC = (newText) => ({type: updateNewMessageText, newText});

export default dialogsReducer;