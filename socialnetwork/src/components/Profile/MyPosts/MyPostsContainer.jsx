import {addPost, updatePost} from "../../../Redux/profileReducer";
import {connect} from "react-redux";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        onPostChange: (newText) => {
            dispatch(updatePostAC(newText))
        },
    }
}*/

const MyPostsContainer = connect(mapStateToProps, {addPost, updatePost})(MyPosts);

export default MyPostsContainer;
