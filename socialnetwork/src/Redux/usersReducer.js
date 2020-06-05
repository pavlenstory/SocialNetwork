const follow = "FOLLOW";
const unFollow = "UN-FOLLOW";
const setUsers = "SET-USERS";
const setCurrentPage = "SET_CURRENT_PAGE";
const setTotalUsersCount = "SET_USERS_COUNT";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case follow:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })],
            }
        case unFollow:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })],
            }
        case setUsers:
            return {
                ...state,
                users: [...action.users]
            }
        case setCurrentPage:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case setTotalUsersCount:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        default:
            return state
    }
}

export const followAC = (userId) => ({type: follow, userId});
export const unFollowAC = (userId) => ({type: unFollow, userId});
export const setUsersAC = (users) => ({type: setUsers, users});
export const setCurrentPageAC = (currentPage) => ({type: setCurrentPage, currentPage});
export const setTotalUsersCountAC = (usersCount) => ({type: setTotalUsersCount, usersCount})

export default usersReducer
