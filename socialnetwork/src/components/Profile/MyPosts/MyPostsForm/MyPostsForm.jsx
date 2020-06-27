import React from "react";
import {reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validatos"
import {createField, Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
                {createField("Post message", Textarea, "postArea", [required, maxLength10],
                    {type: "text"})}
            <button>Add post</button>
        </form>
    )
}

export const MyPostsReduxForm = reduxForm({form: "myPosts"})(MyPostsForm);
