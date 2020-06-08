import {profileAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_USER_STATUS = "SET_USER_STATUS";

let initialState = {
    posts: [
        {post: "Hi", id: 1, likesCount: 10},
        {post: "bla 2", id: 2, likesCount: 20},
    ],
    newPostText: 'newPostText',
    userProfile: null,
    userStatus: "",
}


const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    post: state.newPostText,
                    id: state.posts[state.posts.length - 1].id + 1,
                    likesCount: 0
                }],
                newPostText: "",
            }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                userProfile: action.userProfile,
            }
        }
        case SET_USER_STATUS: {
            return {
                ...state,
                userStatus: action.userStatus,
            }
        }
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST});
export const updatePost = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText});

const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const getUserProfile = (userId) => (dispatch) => {
    profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

const setStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus});
export const getUserStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data))
        })
}

export const updateUserStatus = (userStatus) => (dispatch) => {
    profileAPI.updateStatus(userStatus)
        .then(response => {
            if (response.data.response === 0) {
                dispatch(setStatus(userStatus))
            }
        })
}

export default profileReducer
