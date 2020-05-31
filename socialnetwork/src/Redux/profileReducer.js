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
            let newPost = {
                post: state.newPostText,
                id: 5,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = "";
            return state;
        case updateNewPostText:
            state.newPostText = action.newText;
            return state;
        default:
            return state
    }
}

export const addPostAC = () => ({type: addPost});
export const updatePostAC = (newText) => ({type: updateNewPostText, newText});

export default profileReducer
