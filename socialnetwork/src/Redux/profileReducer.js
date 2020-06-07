import {userAPI} from "../api/api";

const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT";
const ADD_POST = "ADD_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    posts: [
        {post: "Hi", id: 1, likesCount: 10},
        {post: "bla 2", id: 2, likesCount: 20},
    ],
    newPostText: 'newPostText',
    userProfile: null,
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
        default:
            return state
    }
}

export const addPost = () => ({type: ADD_POST});
export const updatePost = (newText) => ({type: UPDATE_NEW_POST_TEXT, newText});
export const setUserProfile = (userProfile) => ({type: SET_USER_PROFILE, userProfile});
export const getUserProfile = (userId) => (dispatch) => {
    userAPI.getProfile(userId)
        .then(response => {
           dispatch(setUserProfile(response.data));
        });
}

export default profileReducer
