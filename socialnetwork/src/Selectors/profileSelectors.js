import {createSelector} from "reselect";

const getUserProfileSelector = (state) => {
    return state.profilePage.userProfile
}
const getUserStatusSelector = (state) => {
    return state.profilePage.userStatus
}
const getAuthorizedUserIdSelector = (state) => {
    return state.auth.id
}
const getIsAuthSelector = (state) => {
    return state.auth.isAuth
}
const getProfileInfoEditModeSelector = (state) => {
    return state.profilePage.profileInfoEditMode
}



export const getUserProfileSel = createSelector(getUserProfileSelector, (е) => {
    return е
})
export const getUserStatusSel = createSelector(getUserStatusSelector, (e) => {
    return e
})
export const getAuthorizedUserId = createSelector(getAuthorizedUserIdSelector, (e) => {
    return e
})
export const getIsAuth = createSelector(getIsAuthSelector, (e) => {
    return e
})
export const getProfileInfoEditMode = createSelector(getProfileInfoEditModeSelector, (e) => {
    return e
})
