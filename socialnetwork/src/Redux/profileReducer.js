import {profileAPI} from "../api/api";

const ADD_POST = "profileReducer/ADD_POST";
const SET_USER_PROFILE = "profileReducer/SET_USER_PROFILE";
const SET_USER_STATUS = "profileReducer/SET_USER_STATUS";
const DELETE_POST = "profileReducer/DELETE_POST";

let initialState = {
    posts: [
        {post: "Hi", id: 1, likesCount: 10},
        {post: "bla 2", id: 2, likesCount: 20},
    ],
    userProfile: null,
    userStatus: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, {
                    post: action.newPostText,
                    id: state.posts[state.posts.length - 1].id + 1,
                    likesCount: 0
                }],
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
        case DELETE_POST: {
            return {
                ...state,
                posts: state.posts.filter(p => p.id !== action.postId),
            }
        }
        default:
            return state
    }
}

export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
const setStatus = (userStatus) => ({type: SET_USER_STATUS, userStatus});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
};

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data));
}

export const updateUserStatus = (userStatus) => async (dispatch) => {
    let response = await profileAPI.updateStatus(userStatus);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(userStatus))
    }
}

export default profileReducer
