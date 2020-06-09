const ADD_MESSAGE = "ADD_MESSAGE";

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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {
                    message: action.newMessageText,
                    id: state.messages[state.messages.length - 1].id + 1
                }],
            };
        default:
            return state
    }
}

export const addMessage = (newMessageText) => ({type: ADD_MESSAGE, newMessageText});

export default dialogsReducer;