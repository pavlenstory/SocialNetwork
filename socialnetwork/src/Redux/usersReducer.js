import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/ObjectHelpers";

const FOLLOW = "usersReducer/FOLLOW";
const UN_FOLLOW = "usersReducer/UN_FOLLOW";
const SET_USERS = "usersReducer/SET_USERS";
const SET_CURRENT_PAGE = "usersReducer/SET_CURRENT_PAGE";
const SET_USERS_COUNT = "usersReducer/SET_USERS_COUNT";
const TOGGLE_IS_FETCHING = "usersReducer/TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = "usersReducer/TOGGLE_IS_FOLLOWING_IN_PROGRESS";

let initialState = {
    users: [],
    pageSize: 12,
    portionSize: 10,
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
                users: updateObjectInArray(state.users, action.userId, {followed: true})
            }
        case UN_FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, {followed: false})
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
export const setToggleFollowingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (page, pageSize) => async (dispatch) => {

    dispatch(setToggleIsFetching(true));
    let data = await userAPI.getUsers(page, pageSize);
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setCurrentPage(page));
    dispatch(setToggleIsFetching(false));
}

const followingORUnFollowing = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setToggleFollowingInProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setToggleFollowingInProgress(false, userId));
};

export const getFollow = (userId) => (dispatch) => {
    followingORUnFollowing(dispatch, userId, userAPI.follow.bind(userAPI), follow);
};

export const getUnFollow = (userId) => async (dispatch) => {
    followingORUnFollowing(dispatch, userId, userAPI.unFollow.bind(userAPI), unFollow);
};


export default usersReducer
