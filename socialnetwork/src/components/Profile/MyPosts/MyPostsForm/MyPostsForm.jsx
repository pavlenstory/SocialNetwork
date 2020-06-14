import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../utils/validators/validatos"
import {Textarea} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name={"postArea"} validate={[required, maxLength10]}
                       placeholder={"Post message"}/>
            </div>
            <button>Add post</button>
        </form>
    )
}

export const MyPostsReduxForm = reduxForm({form: "myPosts"})(MyPostsForm);
