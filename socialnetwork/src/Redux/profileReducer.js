const updateNewPostText = "UPDATE-NEW-POST-TEXT";
const addPost = "ADD-POST";

let initialState = {
    posts: [
        {post: "Hi", id: 1, likesCount: 10},
        {post: "bla 2", id: 2, likesCount: 20},
    ],
    newPostText: 'newPostText',
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPost:
            return {
                ...state,
                posts: [...state.posts, {
                    post: state.newPostText,
                    id: state.posts[state.posts.length - 1].id + 1,
                    likesCount: 0
                }],
                newPostText: "",
            }
        case updateNewPostText: {
            return {
                ...state,
                newPostText: action.newText,
            }
        }
        default:
            return state
    }
}

export const addPostAC = () => ({type: addPost});
export const updatePostAC = (newText) => ({type: updateNewPostText, newText});

export default profileReducer
