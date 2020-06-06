const ADD_MESSAGE = "ADD_MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

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
        case ADD_MESSAGE:
            return {
                ...state,
                message: state.newMessageText,
                messages: [...state.messages, {
                    id: state.messages[state.messages.length - 1].id + 1,
                    message: state.newMessageText
                }],
                newMessageText: "",
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newText
            };
        default:
            return state
    }
}

export const addMessage = () => ({type: ADD_MESSAGE});
export const updateNewMessageText = (newText) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText});

export default dialogsReducer;