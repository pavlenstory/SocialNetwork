import MyPosts from "./MyPosts"
import React from "react";
import {addPostAC, updatePostAC} from "../../../Redux/profileReducer";



const MyPostsContainer = (props) => {
    let addPost = () => {
        props.store.dispatch(addPostAC())
    }

    let onPostChange = (newText) => {
        props.store.dispatch(updatePostAC(newText))
    }

    return <MyPosts state={props.state} addPost={addPost} onPostChange={onPostChange}/>
}

export default MyPostsContainer;
