import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.dialogsPage.users
}
const getMessagesSelector = (state) => {
    return state.dialogsPage.messages
}
const getNewMessageTextSelector = (state) => {
    return state.dialogsPage.newMessageText
}


export const getUsersSel = createSelector(getUsersSelector, (e) => {
    return e
})
export const getMessagesSel = createSelector(getMessagesSelector, (e) => {
    return e
})
export const getNewMessageTextSel = createSelector(getNewMessageTextSelector, (e) => {
    return e
})

