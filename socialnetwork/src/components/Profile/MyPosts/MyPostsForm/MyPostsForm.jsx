import React from "react";
import {Field, reduxForm} from "redux-form";

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name={"postArea"}/>
            </div>
            <button>Add post</button>
        </form>
    )
}

export const MyPostsReduxForm = reduxForm({form: "myPosts"})(MyPostsForm);
