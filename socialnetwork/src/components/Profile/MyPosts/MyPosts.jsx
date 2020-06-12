import React, {Component} from "react"
import Post from "./Post/Post"
import {MyPostsReduxForm} from "./MyPostsForm/MyPostsForm";


class MyPosts extends Component {
    render() {
        let postsElements = this.props.posts.map((p) => <Post post={p.post}
                                                              likesCount={p.likesCount}
                                                              key={p.id}/>)
        let onSubmit = (formData) => {
            this.props.addPost(formData.postArea)
        }

        return (

            <div>
                My Posts
                <MyPostsReduxForm onSubmit={onSubmit}/>
                <div>
                    {postsElements}
                </div>
            </div>
        )
    }
}

export default MyPosts;
