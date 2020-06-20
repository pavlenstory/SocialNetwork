import {createSelector} from "reselect";

const getIsAuthSelector = (state) => {
    return state.auth.isAuth
}
const getLoginSelector = (state) => {
    return state.auth.login
}


export const getIsAuthSel = createSelector(getIsAuthSelector, (e) => {
    return e
})
export const getLoginSel = createSelector(getLoginSelector, (e) => {
    return e
})

