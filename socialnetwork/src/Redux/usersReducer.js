import {userAPI} from "../api/api";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_USERS_COUNT = "SET_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })],
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })],
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress:
                    action.isFetching ? [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id !== action.userId)

            };
        default:
            return state
    }
}


export const follow = (userId) => ({type: FOLLOW, userId});
export const unFollow = (userId) => ({type: UN_FOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setTotalUsersCount = (usersCount) => ({type: SET_USERS_COUNT, usersCount});
export const setToggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setToggleFollowingInProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId});

export const requestUsers = (page, pageSize) => (dispatch) => {
    dispatch(setToggleIsFetching(true));
    userAPI.getUsers(page, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setCurrentPage(page));
        dispatch(setToggleIsFetching(false));
    });
}

export const getFollow = (userId) => (dispatch) => {
    dispatch(setToggleFollowingInProgress(true, userId));
    userAPI.follow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(follow(userId));
            }
            dispatch(setToggleFollowingInProgress(false, userId));
        })
}

export const getUnFollow = (userId) => (dispatch) => {
    dispatch(setToggleFollowingInProgress(true, userId));
    userAPI.unFollow(userId)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(unFollow(userId));
            }
            dispatch(setToggleFollowingInProgress(false, userId));
        })
}



export default usersReducer
