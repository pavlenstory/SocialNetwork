import {createSelector} from "reselect";

const getUsersSelector = (state) => {
    return state.usersPage.users
}
const getPageSizeSelector = (state) => {
    return state.usersPage.pageSize
}
const getTotalUsersCountSelector = (state) => {
    return state.usersPage.totalUsersCount
}
const getCurrentPageSelector = (state) => {
    return state.usersPage.currentPage
}
const getFollowingInProgressSelector = (state) => {
    return state.usersPage.followingInProgress
}
const getIsFetchingSelector = (state) => {
    return state.usersPage.isFetching
}
const getPortionSizeSelector = (state) => {
    return state.usersPage.portionSize
}


export const getUsers = createSelector(getUsersSelector, (users) => {
    return users.filter(u => true)
})
export const getPageSize = createSelector(getPageSizeSelector, (e) => {
    return e
})
export const getTotalUsersCount = createSelector(getTotalUsersCountSelector, (e) => {
    return e
})
export const getCurrentPage = createSelector(getCurrentPageSelector, (e) => {
    return e
})
export const getFollowingInProgress = createSelector(getFollowingInProgressSelector, (e) => {
    return e
})
export const getIsFetching = createSelector(getIsFetchingSelector, (e) => {
    return e
})
export const getPortionSize = createSelector(getPortionSizeSelector, (e) => {
    return e
})
