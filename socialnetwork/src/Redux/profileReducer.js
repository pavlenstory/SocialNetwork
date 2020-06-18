import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
const ADD_POST = "profileReducer/ADD_POST";
const SET_USER_PROFILE = "profileReducer/SET_USER_PROFILE";
const SET_USER_STATUS = "profileReducer/SET_USER_STATUS";
const DELETE_POST = "profileReducer/DELETE_POST";
const SAVE_PHOTO_SUCCESS = "profileReducer/SAVE_PHOTO_SUCCESS";


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
        case SAVE_PHOTO_SUCCESS: {
            return {
                ...state,
                userProfile: {...state.userProfile, photos: action.photos}
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
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

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

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const updateProfile = (profileData) => async (dispatch, getState) => {
    const myId = getState().auth.id;
    let response = await profileAPI.updateProfile(profileData);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(myId))
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
        let correctContact = (message.substr(30, message.length - 2).toLowerCase());
        console.log(correctContact);
        dispatch(stopSubmit("editProfile", {contacts: {"facebook": {message} }}));
        //return Promise.reject()
    }
}

export default profileReducer
